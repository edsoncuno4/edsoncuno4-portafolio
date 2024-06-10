<script setup>
import { ref } from 'vue';

const isActive = ref(false)
defineProps(['name', 'url', 'color'])
</script>
<template>
    <article @mouseover="isActive = true" @mouseleave="isActive = false" :style="{
        'box-shadow': `0 0 16px ${isActive ? color : 'transparent'}`
    }">
        <div class=" icon" :style="{ 'background-image': `url(${url})` }">
        </div>
        <div class="name">{{ name }}</div>
    </article>
</template>

<style scoped>
article {
    width: 160px;
    height: 160px;
    border-radius: 30px;
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.icon {
    width: 60%;
    height: 60%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.name {
    width: 100%;
    height: 10%;
    font-weight: bold;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 16px;
}

</style>