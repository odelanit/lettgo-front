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
                                        <input type="file" name="avatar" accept="image/*" ref="avatar" id="avatar" class="form-control" @change="handleFileChange">
                                        <small class="help-block" v-for="error in error.avatar">{{ error }}</small>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group" :class="{'has-error': error.email.length > 0}">
                                        <label for="email">Email *</label>
                                        <input type="text" v-model="email" id="email" value="" class="form-control"
                                               placeholder="Your registered email">
                                        <small class="help-block" v-for="error in error.email">{{ error }}</small>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group" :class="{'has-error': error.first_name.length > 0}">
                                        <label for="first_name">First Name *</label>
                                        <input type="text" v-model="first_name" id="first_name" value="" class="form-control"
                                               placeholder="Or your company name">
                                        <small class="help-block" v-for="error in error.first_name">{{ error }}</small>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" v-model="last_name" id="last_name" value=""
                                               placeholder="Or your company name">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" v-model="phone" id="phone" value=""
                                               placeholder="It is revealed on click so it is safe from spam">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="facebook">Facebook</label>
                                        <input type="text" v-model="facebook_id" id="facebook" value=""
                                               placeholder="https://www.facebook.com/...">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="twitter">Twitter</label>
                                        <input type="text" v-model="twitter_id" id="twitter" value=""
                                               placeholder="https://twitter.com/...">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="youtube">Youtube</label>
                                        <input type="text" v-model="youtube_id" id="youtube" value=""
                                               placeholder="https://www.youtube.com/channel/...">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="linkedin">LinkedIn</label>
                                        <input type="text" v-model="linkedin_id" id="linkedin" value=""
                                               placeholder="https://linkedin.com/in/...">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="instagram">Instagram</label>
                                        <input type="text" v-model="instagram_id" id="instagram" value=""
                                               placeholder="https://www.instagram.com/...">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="website">Website</label>
                                        <input type="text" v-model="website" id="website" value=""
                                               placeholder="Link to your site">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" v-model="description" id="description"
                                          placeholder="Write something about yourself"></textarea>
                            </div>

                            <div class="ajax-form-result af-button-align-margin">
                                <div class="alert-success" v-if="profile_form_message">
                                    {{ profile_form_message }}
                                </div>
                            </div>
                            <div class="text-right">
                                <a href="javascript:void(0);" class="submit-ajax-form af-button" @click="updateAccount">
                                    Update Account <i class="aficon-spin aficon-circle-notch" v-if="isLoading1"></i>
                                </a>
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
                                <div class="alert-success" v-if="password_form_message">
                                    {{ password_form_message }}
                                </div>
                            </div>
                            <div class="text-right">
                                <a href="javascript:void(0);" @click="changePassword" class="submit-ajax-form af-button">
                                    Change Password <i class="aficon-spin aficon-circle-notch" v-if="isLoading2"></i>
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
            avatar: null,
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
            facebook_id: '',
            twitter_id: '',
            youtube_id: '',
            linkedin_id: '',
            instagram_id: '',
            website: '',
            description: '',
            isLoading1: false,
            isLoading2: false,
            error: {
                old_password: [],
                password1: [],
                password2: [],
                email: [],
                first_name: [],
                avatar: []
            },
            password_form_message: '',
            profile_form_message: ''
        }
    },
    mounted() {
        this.$axios.get('/author/profile', {
            headers: {
                'Authorization': `Token ${this.$store.state.auth.meta.token}`
            }
        })
            .then(res => res.data)
            .then(data => {
                this.email = data.email;
                this.first_name = data.first_name
                this.last_name = data.last_name
                this.phone = data.phone
                this.facebook_id = data.facebook_id
                this.twitter_id = data.twitter_id
                this.youtube_id = data.youtube_id
                this.linkedin_id = data.linkedin_id
                this.instagram_id = data.instagram_id
                this.website = data.website
                this.description = data.description
            })
            .catch(error => {
                console.error(error.response);
            })
    },
    methods: {
        changePassword: function () {
            this.isLoading2 = true
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
                    this.password_form_message = data.message
                    this.isLoading2 = false
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
                    this.isLoading2 = false
                })
        },
        handleFileChange() {
            this.avatar = this.$refs.avatar.files[0];
        },
        updateAccount: function () {
            this.isLoading1 = true

            let formData = new FormData()
            if (this.avatar) formData.append('avatar', this.avatar);
            formData.append('email', this.email);
            formData.append('first_name', this.first_name);
            formData.append('last_name', this.last_name);
            formData.append('phone', this.phone);
            formData.append('facebook_id', this.facebook_id);
            formData.append('twitter_id', this.twitter_id);
            formData.append('youtube_id', this.youtube_id);
            formData.append('linkedin_id', this.linkedin_id);
            formData.append('instagram_id', this.instagram_id);
            formData.append('website', this.website);
            formData.append('description', this.description);

            this.$axios.put('/author/profile', formData, {
                headers: {
                    'Authorization': `Token ${this.$store.state.auth.meta.token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => res.data)
                .then(data => {
                    this.profile_form_message = data.message
                    this.isLoading1 = false
                    this.error.email = []
                    this.error.first_name = []
                })
                .catch(error => {
                    if (error.response.data.email) {
                        this.error.email = error.response.data.email;
                    } else {
                        this.error.email = []
                    }
                    if (error.response.data.first_name) {
                        this.error.first_name = error.response.data.first_name;
                    } else {
                        this.error.first_name = []
                    }
                    this.isLoading1 = false
                })
        }
    }
}
</script>

<style scoped>

</style>
