//Variables
const inputNombre = document.querySelector("#first-name");
const inputApellido = document.querySelector('#last-name')
const inputMessage = document.querySelector("#message");
const inputEmail = document.querySelector("#email");
const buttonSubmit = document.querySelector('#button-submit')
const checkBox = document.querySelector('#consent') 
const error = document.querySelector("#radioError")
const formulario = document.querySelector('#contact-form')
const checkBoxError = document.querySelector('#checkboxError')

//Eventos
inputNombre.addEventListener('input', validar)
inputApellido.addEventListener('input', validar)
inputMessage.addEventListener('input', validar)
inputEmail.addEventListener('input', validar)

formulario.addEventListener("submit", function (e) {
  if (!isRadioSelected("query-type")) {
    mostrarAlerta("Please select a query type", error);
    e.preventDefault(); 
  } else {
    limpiarAlerta(document.getElementById("radioError"));
  }

  if (!checkBox.checked) {
    e.preventDefault();
    mostrarAlerta(
      "To submit this Form, please consent to beign contacted",
      checkBoxError
    );
  }
});


//Funciones
function validar(e) {
  if (e.target.value.trim() === "") {
    mostrarAlerta("This field is required", e.target.parentElement);
    return;
  }

  if (e.target.id === "email" && !validarEmail(e.target.value)) {
    mostrarAlerta("Please enter a valid email address", e.target.parentElement);
    return;
  }

  limpiarAlerta(e.target.parentElement);
}

function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia)

        const alerta = document.createElement('P')
        alerta.textContent = mensaje
        alerta.classList.add('text-red')

        referencia.appendChild(alerta)
}

function limpiarAlerta(referencia){
    const error = referencia.querySelector('.text-red')

    if(error){
        error.remove()
    }
}

function validarEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    const resultado =regex.test(email)
    return resultado
}

function isRadioSelected(radioName) {
    const radios = document.getElementsByName(radioName);
    let radioSelected = false;

    for (let radio of radios) {
        if (radio.checked) {
            radioSelected = true;
            break;
        }
    }
    return radioSelected;
}

function checkBoxChecked(checkBox){
    if(!checkBox.checked){
        mostrarAlerta(
            "Please select a query type",
            document.getElementById("radioError")
          );
          e.preventDefault(); // Evita que el formulario se envíe
      } else {
        limpiarAlerta(document.getElementById("radioError"));
      }  
}