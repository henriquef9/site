<template>
 <div class="header row">
    <div class="col-md-2 logo d-flex justify-content-start">
        <div class="d-flex">
            <div id="img-logo"></div>
            <div class="ms-2 d-flex flex-column align-self-center logo-text">
                <span>Apollo</span>
                <span class="text-purple text-capitalize">tech</span>
            </div>
        </div>
    </div>

    <nav class="d-none d-md-flex col-md-8 navbar justify-content-center">
        <ul class="nav">
            <RouterLink class="nav-item nav-link nav-link-1 text-white" to="/">
                Home
            </RouterLink>
            <RouterLink class="nav-item nav-link nav-link-1 text-white" to="/about">
                Sobre
            </RouterLink>
            <RouterLink class="nav-item nav-link nav-link-1 text-white" :to="{ name: 'service', hash: '#service' }">
                Serviços
            </RouterLink>
            <RouterLink class="nav-item nav-link nav-link-1 text-white" to="/project">
                Projetos
            </RouterLink>
            <RouterLink class="nav-item nav-link nav-link-1 text-white" to="/agency">
                Agência Qi3
            </RouterLink>
        </ul>
        <RouterView />
    </nav>

    <div class="d-none d-sm-flex col-md-2 justify-content-end">
        <button type="button" class="btn bg-purple text-white align-self-center">
            Marca uma reunião
        </button>
    </div>

 </div>
</template>

<style scoped>

    ul {
        list-style: none;
    }

</style>