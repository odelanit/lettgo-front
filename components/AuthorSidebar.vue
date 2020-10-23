<template>
    <div class="author-sidebar">
        <div>
            <div class="user-details text-center">
                <img src="https://www.lettgo.no/wp-content/uploads/2020/08/109073604_3115446305159372_998685156192795896_o-150x150.jpg">
                <div class="author-details">
                    <h5>Author Name</h5>
                    <a></a>
                </div>
            </div>
            <div class="text-center user-details-list">
                <a href="javascript:void(0);" title="Settings">
                    <i class="aficon-cog"></i>
                    <span class="icon-caption">Settings</span>
                </a>
                <a href="javascript:void(0);" title="Messages">
                    <i class="aficon-messages"></i>
                    <div class="messages-unread-count">
                        <span class="unread-badge">1</span>
                    </div>
                    <span class="icon-caption">Messages</span>
                </a>
                <a href="javascript:void(0);" @click="logout" title="Logout">
                    <i class="aficon-logout"></i>
                    <span class="icon-caption">Logout</span>
                </a>
            </div>
            <ul class="list-unstyled author-sidebar-list">
                <li class="author-sidebar-title">
                    Account Panel
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="author-sidebar-title">
                    Ads
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-clone"></i>
                        <span>Your Ads</span>
                    </a>
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-heart-o"></i>
                        <span>Favorite Ads</span>
                    </a>
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-stopwatch"></i>
                        <span>Auctions</span>
                    </a>
                </li>
                <li class="author-sidebar-title">
                    Reviews
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-star-o"></i>
                        <span>Reviews</span>
                    </a>
                </li>
                <li class="author-sidebar-title">
                    Transactions
                </li>
                <li class="" v-if="false">
                    <a href="">
                        <i class="aficon-plus-circle"></i>
                        <span>Transactions</span>
                    </a>
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-list-alt"></i>
                        <span>Invoices</span>
                    </a>
                </li>
                <li class="author-sidebar-title">
                    My Account
                </li>
                <li>
                    <a href="javascript:;" data-confirm="Are you sure that you want to delete your account and everything associated with it?">
                        <i class="aficon-times-octagon"></i>
                        <span>Delete Account</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    name: "AuthorSidebar",
    methods: {
        logout() {
            Cookie.remove('token');
            this.$store.dispatch('logout');
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>
