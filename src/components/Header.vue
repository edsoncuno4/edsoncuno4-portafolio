<script setup>
import { ref, onMounted } from 'vue';

const isActive = ref(false);
const navigationMobile = ref(null);
const headerHeight = ref();

onMounted(() => {
    headerHeight.value = document.querySelector("header")?.offsetHeight || 0;
})

function showNav() {
    isActive.value = !isActive.value
    if (navigationMobile.value.style.maxHeight) {
        navigationMobile.value.style.maxHeight = null;
    } else {
        navigationMobile.value.style.maxHeight = navigationMobile.value.scrollHeight + "px";
    }
}

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        //const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight.value;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    navigationMobile.value.style.maxHeight = null;
}


</script>

<template>
    <header>
        <div class="container">
            <a class="logo"></a>
            <nav class="navigationPc">
                <ul>
                    <li>
                        <a @click="scrollToSection" href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a @click="scrollToSection" href="#acerca-de-mi">Acerca de mí</a>
                    </li>
                    <li>
                        <a @click="scrollToSection" href="#proyectos">Proyectos</a>
                    </li>
                </ul>
            </nav>
            <div class="bars-container" :class="{ barsContainerActive: isActive }" @click="showNav">
                <div class="bars-image"></div>
            </div>
        </div>
        <nav ref="navigationMobile" class="navigationMobile">
            <ul>
                <li>
                    <a @click="scrollToSection" href="#inicio">Inicio</a>
                </li>
                <li>
                    <a @click="scrollToSection" href="#acerca-de-mi">Acerca de mí</a>
                </li>
                <li>
                    <a @click="scrollToSection" href="#proyectos">Proyectos</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #112d4e;
}

.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    height: 5rem;
}

ul {
    list-style-type: none;
    display: flex;
}

.navigationPc {
    display: none;
}

.navigationMobile {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s;
}

.navigationMobile ul {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

li a {
    font-size: 2rem;
    color: #FFFF;
    text-decoration: none;
    opacity: 0.7;
    transition: 0.35s;
    font-weight: bold;
}

li a:hover {
    opacity: 1;
}

.logo {
    display: block;
    width: 10.5rem;
    height: 3.5rem;
    cursor: pointer;
    background-image: url("/icons/edsoncuno.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.bars-container {
    padding: 0.5rem 1rem;
    border-width: 0.5px;
    border-style: solid;
    border-color: #FFFF;
    border-radius: 10px;
    cursor: pointer;
    transition: border-width 0.35s;
}

.barsContainerActive {
    border-width: 5px;
}

.bars-image {
    width: 2rem;
    height: 2rem;
    background-image: url("/icons/bars-white.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


@media (min-width: 320px) {}

@media (min-width: 480px) {}

@media (min-width: 576px) {}

@media (min-width: 768px) {
    .navigationMobile {
        display: none;
    }

    .bars-container {
        display: none;
    }

    .navigationPc {
        display: block;
    }

    .navigationPc ul {
        flex-direction: row;
    }

    .navigationPc ul li {
        margin-right: 32px;
    }

    .navigationPc ul li:last-child {
        margin-right: 0;
    }
}

@media (min-width: 992px) {}

@media (min-width: 1200px) {}
</style>