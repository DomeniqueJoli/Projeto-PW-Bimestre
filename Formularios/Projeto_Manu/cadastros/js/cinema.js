const input = document.querySelectorAll("[required]");
input.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{
        console.log(evento.target)
        validacampo(evento.target)
    });
});


function validacampo(campo){

    const msnErro = campo.parentNode.querySelector("[data-erro]");

    if(campo.name == "razaosocial")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite uma razão social";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name === "nomefantasia")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Digite um nome fantasia";
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
            msnErro.textContent="";
        }
    }

    if(campo.name == "cnpj")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite um cnpj";
        }
        else
        {
            msnErro.textContent="";
        }
    }


    if(campo.name == "endereço")
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

    if(campo.name === "digite uma cidade")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "digite uma cidade";
        }
        else
        {
            msnErro.textContent = "";
        }
    }
    if(campo.name === "selecione um estado")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "selecione um estado";
        }
        else
        {
            msnErro.textContent = "";
        }
    }
    
}