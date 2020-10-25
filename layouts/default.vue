<template>
    <div>
        <Header/>
        <Nuxt/>
        <a href="javascript:;" class="to_top af-button">
            <i class="aficon-angle-up"></i>
        </a>
        <Footer />
        <div class="modal in lrr" id="login">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ $t('login') }}</h5>
                        <a href="javascript:void(0);" data-dismiss="modal"><i class="aficon-times"></i></a>
                    </div>
                    <div class="modal-body">
                        <div class="ajax-form-result">
                            <div class="alert-error" v-for="non_field_error in non_field_errors">{{non_field_error}}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group has-feedback" :class="{'has-error': error.username.length > 0}">
                                    <label for="log_username" class="bold">{{ $t('username_email') }} *</label>
                                    <input type="text" class="form-control" id="log_username" v-model="username" placeholder="" />
                                    <small class="help-block" v-for="error in error.username">{{ error }}</small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group relative-wrap" :class="{'has-error': error.password.length > 0}">
                                    <label for="log_password" class="bold">{{ $t('password') }}</label>
                                    <input type="password" class="form-control reveal-password" id="log_password" v-model="password" placeholder="" />
                                    <a href="javascript:;" title="View Password" class="toggle-password"><i class="aficon-eye"></i></a>
                                    <small class="help-block" v-for="error in error.password">{{ error }}</small>
                                </div>
                            </div>
                        </div>

                        <a href="javascript:void(0);" @click="login" class="submit-ajax-form af-button">
                            {{ $t('login') }} <i v-if="is_loading" class="aficon-spin aficon-circle-notch"></i>
                        </a>

                        <div class="text-center">
                            <a href="#" class="forgot" data-toggle="modal" data-target="#recover" data-dismiss="modal">{{ $t('forgotten_your_password') }}</a>
                        </div>

                        <div class="or-divider"><h6>OR</h6></div>

                        <div class="text-center">
                            <a href="#" class="register-acc" data-toggle="modal" data-target="#register" data-dismiss="modal">
                                Don't have an account? Create one here.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookie = process.client ? require('js-cookie') : undefined

export default {
    components: {
        Header,
        Footer
    },
    data: function () {
        return {
            username: '',
            password: '',
            error: {
                username: [],
                password: [],
            },
            non_field_errors: [],
            is_loading: false
        }
    },
    methods: {
        login() {
            this.is_loading = true
            this.$axios.post('/auth/login', {
                username: this.username,
                password: this.password,
            })
                .then(res => res.data)
                .then(data => {
                    this.$store.commit('SET_AUTH', data);
                    Cookie.set('auth', data);
                    $('#login').modal('hide');

                    this.is_loading = false
                    this.non_field_errors = []
                    this.error.username = []
                    this.error.password = []

                    window.location.href = '/author'
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.data.non_field_errors) {
                            this.non_field_errors = error.response.data.non_field_errors;
                        } else {
                            this.non_field_errors = []
                        }
                        if (error.response.data.username) {
                            this.error.username = error.response.data.username;
                        } else {
                            this.error.username = []
                        }
                        if (error.response.data.password) {
                            this.error.password = error.response.data.password;
                        } else {
                            this.error.password = []
                        }
                    }
                    this.is_loading = false
                })
        }
    },
}
</script>
