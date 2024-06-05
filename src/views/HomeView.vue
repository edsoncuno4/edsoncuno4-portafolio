<template>
    <div class="container">
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
                <li>
                    <a href="https://github.com/edsoncuno4" target="_blank">
                        <div class="icon"
                            style="background-image: url('/icons/github.svg'); background-position: center; background-size: contain; background-repeat: no-repeat;">
                        </div>
                        <div>Github</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/edson-cuno-tipso" target="_blank">
                        <div class="icon"
                            style="background-image: url('/icons/linkedin.svg'); background-position: center; background-size: contain; background-repeat: no-repeat;">
                        </div>
                        <div>LinkedIn</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="aboutMe">
        <h2>Acerca de mí</h2>
        <p>
            Estudiante de Ingeniería Informática con conocimientos en desarrollo web.
        </p>
        <p>
            Actualmente, me dedico a incrementar mis habilidades al construir sistemas web.
        </p>
        <h3>Herramientas</h3>
        <p>
            El conjunto de herramientas tecnológicas que utilizo para aumentar mi
            eficacia y creatividad en el mundo de la informática, son:
        </p>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photo {
    margin: 2rem 0;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: url("/images/perfil.png");
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

.socialNetworks li a {
    font-size: 1.2rem;
    color: #3f72af;
    border: 3px solid #112d4e;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    transition: hover 0.3s ease-in-out;
    text-decoration: none;
    color: black;
    display: flex;
    margin-bottom: 1rem;
}

.socialNetworks li a:hover {
    border: 3px solid #3f72af;
    opacity: 0.9;
}

.socialNetworks li a .icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
}

/**
 * about me
 */

.aboutMe {
    width: 100%;
}

h2 {
    font-size: 40px;
}

p {
    font-size: 25px;
}

h3 {
    font-size: 30px;
    margin-top: 20px;
}

@media (min-width: 320px) {}

@media (min-width: 480px) {}

@media (min-width: 576px) {
    .photo {
        width: 300px;
        height: 300px;
    }
}

@media (min-width: 768px) {
    .container {
        justify-content: space-evenly;
        align-items: center;
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