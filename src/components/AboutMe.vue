<script setup>
import Badge from "./Badge.vue"
import data from "./data"

const list = data.tools;
</script>

<template>
    <div class="container" id="acerca-de-mi">
        <h2>Acerca de mí</h2>
        <p>
            Estudiante de Ingeniería Informática con conocimientos de desarrollo web.
        </p>
        <p>
            Actualmente, me dedico a incrementar mis habilidades construyendo sistemas web.
        </p>
        <h3>Herramientas</h3>
        <p>
            El conjunto de herramientas tecnológicas que utilizo para aumentar mi eficacia y creatividad en el mundo de
            la informática son:
        </p>
        <div class="badges">
            <Badge class="badge" v-for="(item, index) in list" :key="index" :name="item.name" :url="item.url"
                :color="item.color" />
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    padding: 0 25px;
}

h2 {
    font-size: 32px;
}

p {
    font-size: 25px;
    margin-top: 0.5rem;
}

h3 {
    font-size: 25px;
    margin-top: 30px;
}

.badges {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px
}

.badge {
    margin-bottom: 16px;
}

@media (min-width: 320px) {
    .badges {
        width: 100%;
        padding: 8px;
        display: grid;
        /*nota: donde dice 8rem es el ancho del item a utilizar*/
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 8px;
    }

    .badge {
        margin: 0;
    }
}

@media (min-width: 480px) {}

@media (min-width: 576px) {}

@media (min-width: 768px) {}

@media (min-width: 992px) {}

@media (min-width: 1200px) {}
</style>