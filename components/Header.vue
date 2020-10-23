<template>
    <header class="header-1 sticky-header">
        <div class="container">
            <div class="flex-wrap">
                <div class="show-on-414">
                    <a href="javascript:void(0);" class="small-sidebar-open navigation-trigger"
                       data-target=".navigation-wrap">
                        <i class="aficon-align-justify"></i>
                        <span class="small-icon">Menu</span>
                    </a></div>

                <a href="javascript:void(0);" @click="" class="logo">
                    <img src="https://www.lettgo.no/wp-content/uploads/2020/08/050.png" alt="logo" width="50"
                         height="56">
                </a>

                <div class="dark-logo-wrap">
                </div>
                <div class="show-on-414">
                    <a href="#" data-toggle="modal" data-target="#login"
                       class="submit-btn-wrap submit-btn submit-redirect">
                        <i class="aficon-add-ad"></i>
                        <span>Ny annonse</span>
                        <span class="small-icon">Ny annonse</span>
                    </a></div>

                <div class="navigation-wrap">
                    <ul class="navigation list-inline list-unstyled">
                    </ul>
                </div>
                <div class="special-nav flex-wrap">
                    <a href="javascript:void(0);" class="account-btn small-sidebar-open search-trigger show-on-414"
                       data-target=".search-sidebar">
                        <i class="aficon-search"></i>
                        <span class="small-icon">Search</span>
                    </a>
                    <a v-if="!isLoggedIn" href="javascript:void(0);" @click="showLoginModal" class="account-btn header-user-icon"
                       title="Login / Register">
                        <i class="aficon-login"></i>
                        <span class="small-icon">My Account</span>
                    </a>
                    <a v-if="isLoggedIn" href="javascript:void(0);" @click="$router.push('/author')" class="account-btn header-user-icon" title="My account">
                        <i class="aficon-user"></i>
                        <span class="small-icon">My Account</span>
                    </a>
                    <a v-if="isLoggedIn" href="javascript:void(0);" @click="$router.push('/author/messages')" class="account-btn header-user-icon" title="Messages">
                        <i class="aficon-messages"></i>
                        <div class="messages-unread-count">
                            <span class="unread-badge">1</span>
                        </div>
                        <span class="small-icon">Messages</span>
                    </a>

                    <a href="javascript:void(0);" class="account-btn compare-open" title="Sammenlign">
                        <i class="aficon-repeat"></i>
                        <span class="small-icon">Sammenlign</span>
                    </a>
                    <a href="javascript:void(0);" @click="addNewAd()" class="submit-btn-wrap submit-btn submit-redirect">
                        <i class="aficon-add-ad"></i>
                        <span>New Ad</span>
                        <span class="small-icon">New Ad</span>
                    </a>
                    <a href="javascript:void(0);" class="small-sidebar-open navigation-trigger"
                            data-target=".navigation-wrap">
                        <i class="aficon-align-justify"></i>
                        <span class="small-icon">Menu</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        showLoginModal() {
            $('#login').modal()
        },
        addNewAd() {
            if (this.isLoggedIn) {
                this.$router.push('/author/add');
            } else {
                $('#login').modal();
            }
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.token !== null && this.$store.state.token !== undefined && this.$store.state.token !== '';
        }
    }
}
</script>

<style scoped>

</style>
