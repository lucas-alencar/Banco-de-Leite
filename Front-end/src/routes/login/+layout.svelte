<script>
    const SRC_BACKGROUND = "/src/img/coletaDeLeite.png";
</script>

<div class="relative flex flex-col w-full h-screen lg:flex-row justify-end">

    <div class="grid rounded-none h-full width-card bg-gray-50 place-items-center absolute inset-0 custom-rounded">
        <div class="custom-form w-2/5 flex flex-col items-center justify-center h-full">  
            <slot />
        </div>
    </div>

    <div class=" width-img">
        <img src="{SRC_BACKGROUND}" alt= "Mulher segurando um extrator de leite com um bebê de fundo" class="object-cover h-full">
    </div>

</div>

<style>
    .custom-rounded {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    }
    .width-card{
        width:40%;
    }

    .width-img{
        width:65%;
    }
    .custom-form{
        display: flex;
        flex-direction: column;
        justify-content: center; /* Centraliza verticalmente os itens */
        align-items: center; /* Centraliza horizontalmente os itens */
        gap: 3rem; /* Espaçamento maior entre os itens */
    }
</style>