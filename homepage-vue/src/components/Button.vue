<template>
        <button @click="handleClick()" class="btn text-white fixed-btn" type="button">
            Marca uma reunião
        </button>
</template>

<script>
export default {
    methods: {
        handleClick(){
            console.log('click');
        }
    }
}
</script>

<style scoped>
    
    button{
        background-color: var(--color-purple);
        font-family: var(--font-secondary);
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 20px;
        color: var(--color-2);
        transition: 1.2s;
    }

    button:hover {
        background-color: var(--color-purple);
        border-color: var(--color-2);
        transform: scale(1.1);
    }

    .fixed-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }

</style>