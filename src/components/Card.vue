<script setup>
import Link from './Link.vue';

defineProps(['title', 'logo', 'description', 'technologies', 'links']);

</script>
<template>
    <article>
        <div class="logo" :style="{ 'background-image': `url(${logo})` }"></div>
        <div class="container">
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
            <ul class="technologies">
                <li class="technology" v-for="(item, index) in technologies" :key="index"
                    :style="{ 'background-image': `url(${item})` }"></li>
            </ul>
            <ul class="links">
                <li v-for="(item, index) in links" :key="index">
                    <Link :icon="item.icon" :name="item.name" :href="item.href" />
                </li>
            </ul>
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

article:hover {
    transform: scale(1.01);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 1);
}

.logo {
    width: 150px;
    height: 100px;
    border-radius: 16px;
    margin: 16px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

.title {
    font-weight: bold;
    font-size: 24px;
}

.description {
    font-size: 20px;
}

ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.technology {
    width: 32px;
    height: 32px;
    margin: 8px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.link {
    margin: 8px;
    border: 3px solid var(--color4);
    margin-right: 4px;
    border-radius: 4px;
    transition: hover 0.3s;
    text-decoration: none;
    color: black;
    display: flex;
}

.link:hover {
    border: 3px solid var(--color3);
    opacity: 0.9;
}

@media (min-width: 480px) {
    .logo {
        width: 16rem;
        height: 10rem;
    }
}

@media (min-width: 992px) {
    .logo {
        width: 40%;
        height: 10rem;
        margin: 16px;
    }

    .container {
        margin: 16px 0;
        width: 50%;
    }
}
</style>