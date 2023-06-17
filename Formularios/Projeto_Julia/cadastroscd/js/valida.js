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

    if(campo.name == "input")
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
    if(campo.name === "tipo")
    {
        if(campo.value === "")
        {
            msnErro.textContent = "Informe o tipo da receita";
        }
        else
        {
            msnErro.textContent = "";
        }
    }
  }    