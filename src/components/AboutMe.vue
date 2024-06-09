<script setup>
import Badge from "./Badge.vue"

const listOfBadges = [{ name: "Microsoft Word", url: "/icons/microsoft-word.svg", color: "#103f91" },
{ name: "Microsoft Excel", url: "/icons/microsoft-excel.svg", color: "#185c37" },
{ name: "Microsoft Power Point", url: "/icons/microsoft-power-point.svg", color: "#d35230" },
{ name: "Visual Studio Code", url: "/icons/visual-studio-code.svg", color: "#0179cb" },
{ name: "Microsoft Windows", url: "/icons/microsoft-windows.svg", color: "#00adef" },
{ name: "Ubuntu", url: "/icons/ubuntu.svg", color: "#e95420" },
{ name: "Git", url: "/icons/git.svg", color: "#ee513b" },
{ name: "Docker", url: "/icons/docker-blue.svg", color: "#1d63ed" },
{ name: "Apache", url: "/icons/apache.svg", color: "#d12127" },
{ name: "Microsoft IIS", url: "/icons/microsoft-iis.svg", color: "#00adef" },
{ name: "MySQL", url: "/icons/mysql-official.svg", color: "#e48e00" },
{ name: "php", url: "/icons/php.svg", color: "#8892bf" }]
</script>

<template>
    <div class="container">
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
            <Badge v-for="(item, index) in listOfBadges" :key="index" :name="item.name" :url="item.url"
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
}

@media (min-width: 480px) {}

@media (min-width: 576px) {}

@media (min-width: 768px) {}

@media (min-width: 992px) {}

@media (min-width: 1200px) {}
</style>