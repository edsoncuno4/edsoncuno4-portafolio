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
                        <div>Github</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/edson-cuno-tipso" target="_blank">

                        <div>LinkedIn</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photo {
    width: 75%;
    padding-bottom: 75%;
    border-radius: 50%;
    background-image: url("/images/perfil.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid white;
    box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc;
    margin: 2rem 0;
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
</style>