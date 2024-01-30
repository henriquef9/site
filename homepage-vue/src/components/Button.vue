<template>
        <button @click="handleClick()" class="d-flex align-items-center justify-content-between btn text-white fixed-btn border-active" type="button">
           <img :src="image" style="width: 35px;"> Entre em contato
        </button>
</template>

<script>
import image from '@/components/icons/whatsapp.png'
export default {
    data(){
        return {
            image,
        }
    },
    methods: {
        handleClick(){
            console.log('click');
        }
    }
}
</script>

<style scoped>
    
    button{
        background-color: var(--cor-whatsapp);
        font-family: var(--font-secondary);
        width: 220px;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 20px;
        color: var(--color-2);
        transition: 1.2s;
    }

    button:hover {
        background-color:var(--cor-whatsapp);
        border-color: var(--color-2);
        transform: scale(1.1);
    }
    
    .fixed-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
    
    body .border-active:active{
        border: 2px solid #25D366;
        outline: none;
    }

</style>