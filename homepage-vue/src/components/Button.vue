<template>
        <button id="whatsappBtn" @click="handleClick()" class="d-flex align-items-center justify-content-between btn text-white fixed-btn border-active" type="button">
           <img :src="image" alt="Whatsapp" style="width: 35px;"> <p class="m-0 ms-2">Entre em contato</p>
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
    
    body button#whatsappBtn{
        background-color: var(--green-whatsapp);
        font-family: var(--font-secondary);
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 45px;
        color: var(--white);
        transition: transform 0.3s ease; /* Adiciona transição para o scale */
        animation: upDown 3s infinite ease-in-out;
    }

    #whatsappBtn:hover {
        animation: upDown 3s infinite ease-in-out, scaleUp 0.3s forwards;
    }
    
    body button#whatsappBtn:active{
        border: 2px solid var(--black);
        outline: none;
    }
    
    .fixed-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
    
    @keyframes upDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }

    @keyframes scaleUp {
        to {
            transform: scale(1.1);
        }
    }

    /* Estilo para celulares e tablets com largura de tela até 768 pixels */
    @media (max-width: 768px) {
        p{
            display: none;
        }
    }
    
</style>