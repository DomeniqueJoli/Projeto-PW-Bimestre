const input = document.querySelectorAll("[required]");
 input.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{
        console.log(evento.target.value)
        validacampo(evento.target)
    });
});

function validacampo(campo)
{
    const msnErro = campo.parentNode.querySelector("[data-erro]");

    if(campo.name == "inputNome")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputSobrenome")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputEmail")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputCPF")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputEmail")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputEndereco")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputCidade")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputTelefone")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputEstado")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "inputCEP")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }
  }    