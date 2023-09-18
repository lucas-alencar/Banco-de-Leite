<script>
    import EmailIcon from 'svelte-material-icons/Email.svelte';
    import FacebookIcon from 'svelte-material-icons/Facebook.svelte'
    import InstagramIcon from 'svelte-material-icons/Instagram.svelte'
    const SRC_LOGO = "/src/img/logo.png";
</script>

    
        <img src="{SRC_LOGO}" alt="Logo do doama" class="object-cover  h-auto w-40">
    
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
    
        <div class="flex justify-between w-full">
            <a class="width-button"href="/login/cadastro"><button class="btn btn-outline btn-success w-full" >Registrar-se</button></a>
            <button class="btn btn-success text-white width-button">Entrar</button>
        </div>
    
        <div class="w-full">
            <div class="divider">Ou fazer login com</div>
            <div class="flex items-center justify-center space-x-4">
                <EmailIcon class='h-7 w-7'/>
                <FacebookIcon class='h-7 w-7'/>
                <InstagramIcon class='h-7 w-7'/>
            </div>
        </div>
        
    

<style>
    .width-button{
        width:49%;
    }
</style>