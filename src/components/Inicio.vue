<script setup>
import Link from "./Link.vue";
import data from "./data";
</script>

<template>
    <div class="container" id="inicio">
        <div class="photo"></div>
        <div class="greetings">
            <h1 class="text1">
                CONSTRUIR SOFTWARE<span className="cursor"></span>
            </h1>
            <div class="text2">¡Hola! Soy</div>
            <div class="text3">
                <div class="typingText">Edson Cuno</div>
            </div>
            <div class="text4">
                Desarrollador Web
            </div>
            <ul class="socialNetworks">
                <li v-for="(item, index) in data.links" :key="index">
                    <Link class="link" :icon="item.icon" :name="item.name" :href="item.href" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 80px 25px 0px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photo {
    margin: 16px 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url("https://lh3.googleusercontent.com/drive-viewer/AKGpihZi41H09fqri9xJ5OKFSQuwzrDlDZyv8fv87vSHHCgrd1V3Pn-XgUdVgFdjNFQm_1CEOYMrid59h-rkIxmytGlG3wa5MPF8Zjo");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid white;
    box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc;
}

.greetings {
    display: flex;
    flex-direction: column;
}

.text1 {
    color: black;
    font-weight: bold;
    font-size: 2rem;
}

.text1 .cursor {
    position: absolute;
    height: 2rem;
    width: 2px;
    background-color: #000;
    animation: blink-caret 1s step-end infinite;
}

@keyframes blink-caret {

    from,
    to {
        background-color: transparent;
    }

    50% {
        background-color: #000;
    }
}

.text2 {
    font-size: 1.5rem;
}

.text3 {
    width: fit-content;
    font-size: 2rem;
    font-weight: bold;
}

.text3 .typingText {
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid black;
    animation: typing 1.5s steps(20, end), fadeOutBorder 0.5s 1.5s forwards;
}

@keyframes typing {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

@keyframes fadeOutBorder {
    0% {
        border-right-color: black;
    }

    100% {
        border-right-color: transparent;
    }
}

.text4 {
    font-size: 2rem;
    color: #112d4e;
}

.socialNetworks {
    margin-top: 1rem;
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
}

.link {
    margin: 8px;
}

@media (min-width: 320px) {}

@media (min-width: 480px) {}

@media (min-width: 576px) {
    .container {
        justify-content: space-evenly;
        align-items: center;
    }
}

@media (min-width: 768px) {
    .photo {
        width: 300px;
        height: 300px;
    }

    .greetings {
        width: 40%;
    }
}

@media (min-width: 992px) {
    .photo {
        width: 350px;
        height: 350px;
    }
}

@media (min-width: 1200px) {
    .photo {
        width: 450px;
        height: 450px;
    }
}
</style>