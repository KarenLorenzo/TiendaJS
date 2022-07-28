
const btnEnviar = document.querySelector('#enviar')
const formulario = document.querySelector('#enviar-email')


const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const nombre = document.querySelector('#nombre')
const telefono = document.querySelector('#tel')
const fecha = document.querySelector('#date')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/





eventListeners()
function eventListeners() {
    
    document.addEventListener('DOMContentLoaded', iniciarApp)

   
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    nombre.addEventListener('blur', validarFormulario)
    telefono.addEventListener('blur', validarFormulario)
    fecha.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

    
    formulario.addEventListener('submit', enviarEmail)
}

function iniciarApp() {
    btnEnviar.disabled = true
    btnEnviar.classList.add('desactivado')
}


function validarFormulario(e) {
    if (e.target.value.length > 5) {


        const error = document.querySelector('p.error')
        if(error){
            error.remove()
        }
        e.target.classList.add('bien')
    } else {
        e.target.classList.add('error')
        mostrarError('Todos los campos son obligatorios')
    }

    if (e.target.type === 'email') {

        if (er.test(e.target.value ) ) {
            const error = document.querySelector('p.error')
            if(error){
                error.remove()
            }
            e.target.classList.add('bien')
        } else{
            e.target.classList.add('error')
            mostrarError('Email no valido')
        }
    }   

        if(er.test(email.value)  && asunto.value !== '' && mensaje.value !== '' && nombre.value !== '' && telefono.value !== '' && fecha.value !== ''){
            btnEnviar.disabled = false
            btnEnviar.classList.remove('desactivado')
        }
    }
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('error', 'text-center', 'fallo')

    const errores = document.querySelectorAll('.fallo')
    if (errores.length === 0) {
        formulario.appendChild(mensajeError)

    }
}


function enviarEmail(e){
    e.preventDefault()

    
    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'flex'


    setTimeout(() => {
            spinner.style.display = 'none'

      
            const parrafo = document.createElement('p')
            parrafo.textContent = 'El mensaje se envió correctamente'

          
            formulario.appendChild(parrafo)
            parrafo.classList.add('text-center')
            parrafo.style.color = 'white'

    }, 3000 )
}