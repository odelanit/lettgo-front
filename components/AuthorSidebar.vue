<template>
    <div class="author-sidebar">
        <div>
            <div class="user-details text-center">
                <img :src="$axios.defaults.baseURL + $store.state.auth.data.avatar">
                <div class="author-details">
                    <h5>{{ authorName }}</h5>
                    <a href="" target="_blank">{{ $t('author.view_profile') }}</a>
                </div>
                <div class="text-center user-details-list">
                    <a href="javascript:void(0);" @click="$router.push('/author/profile')" title="Settings">
                        <i class="aficon-cog"></i>
                        <span class="icon-caption">{{ $t('author.settings') }}</span>
                    </a>
                    <a href="javascript:void(0);" title="Messages">
                        <i class="aficon-messages"></i>
                        <div class="messages-unread-count">
                            <span class="unread-badge">1</span>
                        </div>
                        <span class="icon-caption">{{ $t('author.messages') }}</span>
                    </a>
                    <a href="javascript:void(0);" @click="logout" title="Logout">
                        <i class="aficon-logout"></i>
                        <span class="icon-caption">{{ $t('author.logout') }}</span>
                    </a>
                </div>
            </div>
            <ul class="list-unstyled author-sidebar-list">
                <li class="author-sidebar-title">
                    {{ $t('author.account_panel') }}
                </li>
                <nuxt-link tag="li" to="/author">
                    <a>
                        <i class="aficon-tachometer-alt"></i>
                        <span>{{ $t('author.dashboard') }}</span>
                    </a>
                </nuxt-link>
                <li class="author-sidebar-title">
                    {{ $t('author.ads') }}
                </li>
                <nuxt-link tag="li" to="/author/ads">
                    <a>
                        <i class="aficon-clone"></i>
                        <span>{{ $t('author.your_ads') }}</span>
                    </a>
                </nuxt-link>
                <li class="">
                    <a href="">
                        <i class="aficon-heart-o"></i>
                        <span>{{ $t('author.favorite_ads') }}</span>
                    </a>
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-stopwatch"></i>
                        <span>{{ $t('author.auctions') }}</span>
                    </a>
                </li>
                <li class="author-sidebar-title">
                    {{ $t('author.reviews') }}
                </li>
                <li class="">
                    <a href="">
                        <i class="aficon-star-o"></i>
                        <span>{{ $t('author.assessments') }}</span>
                    </a>
                </li>
                <li class="author-sidebar-title">
                    {{ $t('author.transactions') }}
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
                        <span>{{ $t('author.invoices') }}</span>
                    </a>
                </li>
                <li class="author-sidebar-title">
                    {{ $t('author.my_account') }}
                </li>
                <li>
                    <a href="javascript:;" @click="deleteAccount">
                        <i class="aficon-times-octagon"></i>
                        <span>{{ $t('author.delete_account') }}</span>
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
            Cookie.remove('auth');
            this.$store.dispatch('logout');
            this.$router.push('/')
        },
        deleteAccount() {
            let confirm_message = this.$t('confirm_close');
            if (confirm(confirm_message.toString())) {
                let token = this.$store.state.auth.meta.token
                this.$axios.delete('/author/close', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })
                    .then(res => {
                        Cookie.remove('auth');
                        this.$store.dispatch('logout');
                        this.$router.push('/')
                    })
                    .catch(error => {
                        console.error(error.response.data);
                    })
            }
        }
    },
    computed: {
        authorName() {
            return this.$store.state.auth ? this.$store.state.auth.data.username : ''
        }
    }
}
</script>

<style scoped>

</style>
