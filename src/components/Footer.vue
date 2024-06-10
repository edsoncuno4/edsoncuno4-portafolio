<script setup>
import { ref, onMounted } from 'vue'

const now = ref()

onMounted(() => {

    now.value = new Date().getFullYear();
})
</script>

<template>
    <footer>
        <div className="copy">Derechos de autor &copy; {{ now }} . Todos los derechos
            reservados.</div>
    </footer>
</template>

<style scoped>
footer {
    background-color: black;
    height: calc(5 * 16px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.copy {
    color: white;
    text-align: center;
    font-size: 20px;
}
</style>