const input = document.querySelectorAll("[required]");
input.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{
        console.log(evento.target)
        validacampo(evento.target)
    });
});


function validacampo(campo){

    const msnErro = campo.parentNode.querySelector("[data-erro]");

    if(campo.name == "nome")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite um nome";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name === "data")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Escolha a data de nascimento";
        }
        else
        {
            msnErro.textContent = "";
        }
    }


    if(campo.name == "email")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite um email";
        }
        else
        {
            if(campo.value.includes('@')) {
                
                msnErro.textContent="";
            }else {
                msnErro.textContent="Não se esqueça do '@'";
            }
        }
    }

    if(campo.name == "endereco")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite um endereço";
        }
        else
        {
            msnErro.textContent="";
        }
    }


    if(campo.name == "numero")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite um telefone";
        }
        else
        {
            if(!isNaN(campo.value)) {
               
                msnErro.textContent="";
                
            }else{
                msnErro.textContent="Somente números por favor";
            }
        }
    }

    if(campo.name === "nacionalidade")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Escolha a nacionalidade";
        }
        else
        {
            msnErro.textContent = "";
        }
    }
}