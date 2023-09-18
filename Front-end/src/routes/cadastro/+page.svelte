<script>
    const SRC_BACKGROUND = "/src/img/coletaDeLeite.png";
    const SRC_LOGO = "/src/img/logo.png";
</script>

<div class="relative flex flex-col w-full h-screen lg:flex-row justify-end">

    <div class="grid rounded-none h-full width-card bg-gray-50 place-items-center absolute inset-0 custom-rounded">
        <div class="custom-form w-2/5">  
            <img src="{SRC_LOGO}" alt="Logo do doama" class="object-cover h-auto w-40">

            <div class="grid w-full">
                <input type="text" placeholder="Usuário" class="input input-bordered w-full "/>  
                <div class="form-control w-full">
                    <input type="password" placeholder="Senha" class="input input-bordered w-full mt-3"/>
                    <label class="label">
                    <span class="label-text-alt">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                              <input type="checkbox" class="checkbox h-5 w-5 mr-1" />
                              <span class="label-text-alt">lembrar-me</span> 
                            </label>
                          </div>
                    </span>
                    <span class="underline label-text-alt">Esqueci minha senha</span>
                    </label>
                </div>
            </div>

            <div>
                <button class="btn btn-outline text-black btn-success">Registrar-se</button>
                <button class="btn btn-success text-">Entrar</button>
            </div>
        

                <div class="divider">Ou fazer login com</div>
                <div class=""></div>
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
    .custom-form{
        display: flex;
        flex-direction: column;
        justify-content: center; /* Centraliza verticalmente os itens */
        align-items: center; /* Centraliza horizontalmente os itens */
        gap: 4rem; /* Espaçamento maior entre os itens */
    }
    .width-img{
        width:62%;
    }
  </style>