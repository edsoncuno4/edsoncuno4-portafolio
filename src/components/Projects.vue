<script setup>
import Card from "./Card.vue";
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
        <Card logo="/icons/emco.svg" title="asd1" description="asd2" />
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 200px;
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
</style>