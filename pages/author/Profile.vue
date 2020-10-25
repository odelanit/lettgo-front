<template>
    <div class="author-panel">
        <div class="row">
            <div class="col-sm-7">
                <div class="white-block white-block-extra-padding">
                    <div class="white-block-title">
                        <h5>Account Details</h5>
                    </div>
                    <div class="white-block-content">
                        <form class="ajax-form">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="avatar">Select new avatar</label>
                                        <input type="file" name="avatar" id="avatar">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="email">Email *</label>
                                        <input type="text" name="email" id="email" value=""
                                               placeholder="Your registered email">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="first_name">First Name *</label>
                                        <input type="text" name="first_name" id="first_name" value=""
                                               placeholder="Or your company name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" name="last_name" id="last_name" value=""
                                               placeholder="Or your company name">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" name="phone" id="phone" value=""
                                               placeholder="It is revealed on click so it is safe from spam">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="facebook">Facebook</label>
                                        <input type="text" name="facebook" id="facebook" value=""
                                               placeholder="https://www.facebook.com/...">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="twitter">Twitter</label>
                                        <input type="text" name="twitter" id="twitter" value=""
                                               placeholder="https://twitter.com/...">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="youtube">Youtube</label>
                                        <input type="text" name="youtube" id="youtube" value=""
                                               placeholder="https://www.youtube.com/channel/...">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="linkedin">LinkedIn</label>
                                        <input type="text" name="linkedin" id="linkedin" value=""
                                               placeholder="https://linkedin.com/in/...">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="instagram">Instagram</label>
                                        <input type="text" name="instagram" id="instagram" value=""
                                               placeholder="https://www.instagram.com/...">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="website">Website</label>
                                        <input type="text" name="website" id="website" value=""
                                               placeholder="Link to your site">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" name="description" id="description"
                                          placeholder="Write something about yourself"></textarea>
                            </div>

                            <div class="ajax-form-result af-button-align-margin"></div>
                            <div class="text-right">
                                <a href="javascript:void(0);" class="submit-ajax-form af-button">Update Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="white-block white-block-extra-padding">
                    <div class="white-block-title">
                        <h5>Change Password</h5>
                    </div>
                    <div class="white-block-content">
                        <form class="ajax-form">
                            <div class="form-group relative-wrap" :class="{'has-error': error.old_password.length > 0}">
                                <label for="old_password">Old Password *</label>
                                <input type="password" name="old_password" class="reveal-password form-control" id="old_password"
                                       v-model="old_password" placeholder="Your current password">
                                <a href="javascript:;" title="View Password" class="toggle-password"><i
                                    class="aficon-eye"></i></a>
                                <small class="help-block" v-for="error in error.old_password">{{ error }}</small>
                            </div>

                            <div class="form-group relative-wrap" :class="{'has-error': error.password1.length > 0}">
                                <label for="new_password">New Password *</label>
                                <input type="password" name="new_password" id="new_password"
                                       class="reveal-password form-control" v-model="password1"
                                       placeholder="Your desired new password">
                                <a href="javascript:;" title="View Password" class="toggle-password">
                                    <i class="aficon-eye"></i>
                                </a>
                                <small class="help-block" v-for="error in error.password1">{{ error }}</small>
                            </div>

                            <div class="form-group relative-wrap" :class="{'has-error': error.password2.length > 0}">
                                <label for="new_password_repeat">Confirm New Password *</label>
                                <input type="password" name="new_password_repeat" class="reveal-password form-control"
                                       id="new_password_repeat" v-model="password2" placeholder="Your desired new password">
                                <a href="javascript:;" title="View Password" class="toggle-password"><i
                                    class="aficon-eye"></i></a>
                                <small class="help-block" v-for="error in error.password2">{{ error }}</small>
                            </div>

                            <div class="ajax-form-result af-button-align-margin">
                                <div class="alert-success" v-if="password_form_result">
                                    {{ password_form_result }}
                                </div>
                            </div>
                            <div class="text-right">
                                <a href="javascript:void(0);" @click="changePassword" class="submit-ajax-form af-button">
                                    Change Password <i class="aficon-spin aficon-circle-notch" v-if="isLoading"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    middleware: 'authenticated',
    layout: 'author',
    data: function () {
        return {
            old_password: '',
            password1: '',
            password2: '',
            isLoading: false,
            error: {
                old_password: [],
                password1: [],
                password2: []
            },
            password_form_result: ''
        }
    },
    methods: {
        changePassword: function () {
            this.isLoading = true
            this.$axios.put('/author/change_password', {
                old_password: this.old_password,
                password1: this.password1,
                password2: this.password2
            }, {
                headers: {
                    'Authorization': `Token ${this.$store.state.auth.meta.token}`
                }
            })
                .then(res => res.data)
                .then(data => {
                    this.password_form_result = data.message
                    this.isLoading = false
                })
                .catch(error => {
                    console.error(error.response.data);
                    if (error.response) {
                        if (error.response.data.old_password) {
                            this.error.old_password = error.response.data.old_password;
                        } else {
                            this.error.old_password = []
                        }
                        if (error.response.data.password1) {
                            this.error.password1 = error.response.data.password1;
                        } else {
                            this.error.password1 = []
                        }
                        if (error.response.data.password2) {
                            this.error.password2 = error.response.data.password2;
                        } else {
                            this.error.password2 = []
                        }
                    }
                    this.isLoading = false
                })
        }
    }
}
</script>

<style scoped>

</style>
