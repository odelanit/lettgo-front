<template>
    <div>
        <header class="sticky-header author-header">
            <div class="flex-wrap">
                <a href="javascript:void(0);" class="small-sidebar-open" data-target=".author-sidebar">
                    <i class="aficon-align-left"></i>
                    <span class="small-icon">Sidebar</span>
                </a>
                <div class="show-on-414">
                    <a href="javascript:void(0);" class="submit-btn-wrap submit-btn">
                        <i class="aficon-add-ad"></i>
                        <span>Submit Ad</span>
                        <span class="small-icon">Submit Ad</span>
                    </a>
                </div>
                <div class="navigation-wrap">
                    <ul class="navigation list-inline list-unstyled">

                    </ul>
                </div>
                <div class="special-nav flex-wrap">
                    <a href="javascript:void(0);" class="account-btn small-sidebar-open search-trigger show-on-414" data-target=".search-sidebar">
                        <i class="aficon-search"></i>
                        <span class="small-icon">Search</span>
                    </a>
                    <a href="" class="submit-btn-wrap submit-btn">
                        <i class="aficon-add-ad"></i>
                        <span>Submit Ad</span>
                        <span class="small-icon">Submit Ad</span>
                    </a>
                    <a href="javascript:void(0);" class="small-sidebar-open navigation-trigger" data-target=".navigation-wrap">
                        <i class="aficon-align-justify"></i>
                        <span class="small-icon">Menu</span>
                    </a>
                </div>
            </div>
        </header>
        <div class="flex-wrap">
            <AuthorSidebar />
            <main>
                <Nuxt/>
            </main>
        </div>
    </div>
</template>

<script>
import AuthorSidebar from "@/components/AuthorSidebar";

export default {
    name: "profile",
    components: {
        AuthorSidebar
    },
    head() {
        return {
            bodyAttrs: {
                class: 'author'
            }
        }
    }
}
</script>

<style scoped>
</style>
