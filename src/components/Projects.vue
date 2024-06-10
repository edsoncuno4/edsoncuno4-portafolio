<script setup>
import Card from "./Card.vue";
import data from "./data"
const list = data.projects;
</script>

<template>
    <div class="container">
        <h2>Proyectos</h2>
        <p>
            En mi viaje en el mundo de la informática ha estado marcado por una
            serie de proyectos personales que he desarrollado con pasión y
            dedicación a lo largo de mis estudios. Estos proyectos no solo reflejan
            mi interés en la tecnología, sino también mi compromiso con la búsqueda
            constante de soluciones. Algunos ejemplos destacados de mi trabajo
            incluyen:
        </p>
        <div class="cards">
            <Card class="card" v-for="(item, index) in list" :key="index" :logo="item.logo" :title="item.title"
                :description="item.description" :technologies="item.technologies" :links="item.links" />
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    margin: 25px 0;
    padding: 0 25px;
}

h2 {
    font-size: 32px;
}

p {
    margin: 16px 0;
    font-size: 20px;
}

.cards {
    margin-top: 16px;
}

.card {
    margin-bottom: 16px;
}

.card:last-child {
    margin-bottom: 0;
}
</style>