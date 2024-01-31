<template>
        <button @click="handleClick()" class="whatsappBtn d-flex align-items-center justify-content-between btn text-white fixed-btn border-active" type="button">
           <img :src="image" style="width: 35px;"> Entre em contato
        </button>
</template>

<script>
import image from '@/components/icons/whatsapp.png'
export default {
    data(){
        return {
            url: 'https://api.whatsapp.com/send/?phone=5598970065970',
            image,
        }
    },
    methods: {
        handleClick(){
            window.open(this.url, '_blank').focus;
        }
    }
}
</script>

<style scoped>
    
    button.whatsappBtn{
        background-color: var(--cor-whatsapp) !important;
        font-family: var(--font-secondary);
        width: 220px;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 20px;
        color: var(--color-2);
        transition: 1.2s;
        animation: upDown 3s infinite;
        animation-timing-function: ease-in-out;
    }

    button.whatsappBtn:hover {
        background-color: var(--cor-whatsapp) !important;
        border-color: var(--color-2);
        transform: scale(1.1);
    }
    
    body .border-active:active{
        border: 2px solid #25D366;
        outline: none;
    }
    
    .fixed-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
    
    @keyframes upDown{
        0%{ transform: translateY(0);}
        50% {transform: translateY(-5px);}
        100% {transform: translateY(0);}
    }

    
</style>