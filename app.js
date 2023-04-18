let btn = document.getElementById('btn');
let mensajeError = document.querySelector('.mensajeError');
let input = document.getElementById("email");
let formulario = document.getElementById("formulario");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let email = input.value;
    validarCorreo(email);  
});
const validarCorreo = (a)=>{
    let expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let verificar = expReg.test(a);
    if(!verificar){
        mensajeError.classList.add("activo");
        input.classList.add("activo");
    } else{
        formulario.reset();
        mensajeError.classList.remove("activo");
        input.classList.remove("activo");
    }
};


