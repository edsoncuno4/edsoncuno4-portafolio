<script setup>
defineProps(['title', 'logo', 'description'])
</script>
<template>
    <article>
        <div class="logo" :style="{ 'background-image': `url(${logo})` }"></div>
        <div class="container">
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
            <ul class="technologies">
            </ul>
            <div class="links">
            </div>
        </div>
    </article>
</template>
<style scoped>
article {
    width: 100%;
    transition: all 0.25s ease;
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
}

.logo {
    width: 150px;
    height: 100px;
    border-radius: 16px;
    margin: 16px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-weight: bold;
}
</style>