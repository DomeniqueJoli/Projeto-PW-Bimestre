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

    if(campo.name === "sobrenome")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Digite um sobrenome";
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


    if(campo.name == "cidade")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite uma cidade";
        }
        else
        {
            msnErro.textContent="";
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


if(campo.name === "digite um cep")
{
    if(campo.value === "")
    {
        msnErro.textContent = "digite um cep";
    }
    else
    { 
        msnErro.textContent = "";
    }
}
}