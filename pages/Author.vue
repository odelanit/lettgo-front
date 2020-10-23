<template>
    <div>
        Profile
    </div>
</template>

<script>
export default {
    name: "Author",
    middleware: 'authenticated',
    layout: 'profile',
}
</script>

<style scoped>

</style>
