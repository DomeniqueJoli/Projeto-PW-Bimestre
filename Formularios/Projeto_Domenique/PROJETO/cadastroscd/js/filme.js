const input = document.querySelectorAll("[required]");
input.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{
        console.log(evento.target)
        validacampo(evento.target)
    });
});


function validacampo(campo){

    const msnErro = campo.parentNode.querySelector("[data-erro]");

    if(campo.name == "titulo")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite o nome do filme";
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
            msnErro.textContent = "Escolha a data de lançamento";
        }
        else
        {
            msnErro.textContent = "";
        }
    }


    if(campo.name === "genero")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Escolha o gênero do filme";
        }
        else
        {
            msnErro.textContent = "";
        }
    }


    if(campo.name === "classificacao")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Escolha a classificação etária";
        }
        else
        {
            msnErro.textContent = "";
        }
    }

    if(campo.name == "duracao")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite o tempo de duração";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "diretor")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite o nome do diretor";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "elenco")
    {
        if(campo.value.length<5)
        {
            msnErro.textContent = "Digite o elenco do filme";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name === "origem")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Escolha a origem do filme";
        }
        else
        {
            msnErro.textContent = "";
        }
    }
}