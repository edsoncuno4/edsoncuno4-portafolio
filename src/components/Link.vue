<script setup>
defineProps(['icon', 'name', 'href'])
</script>
<template>
    <a :href="href" target="_blank">
        <div class="icon" :style="{ 'background-image': `url(${icon})` }"></div>
        <div class="name">{{ name }}</div>
    </a>
</template>

<style scoped>
a {
    color: #3f72af;
    border: 3px solid #112d4e;
    padding: 8px;
    border-radius: 8px;
    transition: hover 0.3s ease-in-out;
    text-decoration: none;
    color: black;
    display: flex;
}

a:hover {
    border: 3px solid #3f72af;
    opacity: 0.9;
}

.icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>