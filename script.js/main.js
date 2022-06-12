import { paises } from "../modules/paises.js"

// ........................................................................

const boton1 = paises.find(pais => pais.id == 1); // find
// console.log( boton1); 


let botones = paises.find(({ id }) => id.includes("bo"));
// console.log( botones);


// .................................................................................


const tarjetasDestinos = paises.filter(pais => pais.id == "boton"); // filter

// const id = tarjetasDestinos[0].id //desestructurado
const cont = tarjetasDestinos.map(item => item.imagen); //desestructurado
// construimos las tarjetas de botones
const botonesPaises = document.querySelector('.botonesPaises')
const template = document.querySelector('#template1').content;
const fragment = document.createDocumentFragment();

cont.forEach(item => {
    template.querySelector('img').setAttribute("src", item);
    let clone = template.cloneNode(true);
    fragment.appendChild(clone);

});
botonesPaises.appendChild(fragment);


// ......................................................................



// ......................................................................
const clickBoton = document.querySelectorAll('img');


clickBoton.forEach(btn => {
    btn.addEventListener('click', mostrarDestinos)
})

function mostrarDestinos(e) {
    const button = e.target.src


    switch (button) {
        case 'http://127.0.0.1:5500/images/AFRICA.png': {
            const tarjetasDestinos = paises.filter(pais => pais.id == 1); //obtengo el objeto por el  id

            const template = document.querySelector('#template2').content;
            const tarjeta = document.querySelector('.seccionTarjetas')
            // const verMas = document.querySelector('.vermas')
            const fragment = document.createDocumentFragment();

            tarjetasDestinos.forEach(tarjetasDestinos => {
                const { imagen, ciudad } = tarjetasDestinos;//desetructuracion

                template.querySelector('img').setAttribute("src", imagen);
                template.querySelector('h2').textContent = (ciudad);
                template.querySelector('.vermas').setAttribute('onclick', ` clicked(this);`)
                template.querySelector('.vermas').setAttribute('id', `${ciudad}`);
                let clone = template.cloneNode(true);
                fragment.appendChild(clone)

            });
            tarjeta.appendChild(fragment);
            break;
        }

        case 'http://127.0.0.1:5500/images/ASIA.png': {

            const tarjetasDestinos = paises.filter(pais => pais.id == 2); //obtengo el objeto por el  id

            const template = document.querySelector('#template2').content;
            const tarjeta = document.querySelector('.seccionTarjetas')
            // const verMas = document.querySelector('.vermas')
            const fragment = document.createDocumentFragment();

            tarjetasDestinos.forEach(tarjetasDestinos => {
                const { imagen, ciudad } = tarjetasDestinos;//desetructuracion

                template.querySelector('img').setAttribute("src", imagen);
                template.querySelector('h2').textContent = (ciudad);
                template.querySelector('.vermas').setAttribute('onclick', ` clicked(this);`)
                template.querySelector('.vermas').setAttribute('id', `${ciudad}`);
                let clone = template.cloneNode(true);
                fragment.appendChild(clone)

            });
            tarjeta.appendChild(fragment);

            break;
        }
        case 'http://127.0.0.1:5500/images/EUROPA.png': {
            const tarjetasDestinos = paises.filter(pais => pais.id == 3); //obtengo el objeto por el  id

            const template = document.querySelector('#template2').content;
            const tarjeta = document.querySelector('.seccionTarjetas')
            // const verMas = document.querySelector('.vermas')
            const fragment = document.createDocumentFragment();

            tarjetasDestinos.forEach(tarjetasDestinos => {
                const { imagen, ciudad } = tarjetasDestinos;//desetructuracion

                template.querySelector('img').setAttribute("src", imagen);
                template.querySelector('h2').textContent = (ciudad);
                template.querySelector('.vermas').setAttribute('onclick', ` clicked(this);`)
                template.querySelector('.vermas').setAttribute('id', `${ciudad}`);
                let clone = template.cloneNode(true);
                fragment.appendChild(clone)

            });
            tarjeta.appendChild(fragment);
        }
            break;

        case 'http://127.0.0.1:5500/images/OCEANIA.png': {
            const tarjetasDestinos = paises.filter(pais => pais.id == 4); //obtengo el objeto por el  id

            const template = document.querySelector('#template2').content;
            const tarjeta = document.querySelector('.seccionTarjetas')
            // const verMas = document.querySelector('.vermas')
            const fragment = document.createDocumentFragment();

            tarjetasDestinos.forEach(tarjetasDestinos => {
                const { imagen, ciudad } = tarjetasDestinos;//desetructuracion

                template.querySelector('img').setAttribute("src", imagen);
                template.querySelector('h2').textContent = (ciudad);
                template.querySelector('.vermas').setAttribute('onclick', ` clicked(this);`)
                template.querySelector('.vermas').setAttribute('id', `${ciudad}`);
                let clone = template.cloneNode(true);
                fragment.appendChild(clone)

            });
            tarjeta.appendChild(fragment);
        }
            break;
        case 'http://127.0.0.1:5500/images/AMERICA.png': {
            const tarjetasDestinos = paises.filter(pais => pais.id == 5); //obtengo el objeto por el  id

            const template = document.querySelector('#template2').content;
            const tarjeta = document.querySelector('.seccionTarjetas')
            // const verMas = document.querySelector('.vermas')
            const fragment = document.createDocumentFragment();

            tarjetasDestinos.forEach(tarjetasDestinos => {
                const { imagen, ciudad } = tarjetasDestinos;//desetructuracion

                template.querySelector('img').setAttribute("src", imagen);
                template.querySelector('h2').textContent = (ciudad);
                template.querySelector('.vermas').setAttribute('onclick', ` clicked(this);`)
                template.querySelector('.vermas').setAttribute('id', `${ciudad}`);
                let clone = template.cloneNode(true);
                fragment.appendChild(clone)

            });
            tarjeta.appendChild(fragment);
        }
            break;
        default:
            alert('el boton no existe ' + button)
    }
}
//........................................................



//.....................................................







// document.getElementById('vermas').onclick = formularioCiudades;


// function formularioCiudades(comp,){
//     let datos = (comp);
//     console.log( datos)

// }


// const clic = document.querySelectorAll('#vermas');

// const formularioCiudades = function(evento){
//     console.log("funciona");
// }
// clic.forEach(boton =>{
//     boton.addEventListener("click", formularioCiudades)
// })





// clic.forEach(btn =>{
//     btn.addEventListener('click', formularioCiudades ) 
// })
// function formularioCiudades(comp,){
//     let datos = (comp.id);
//     console.log( datos)

// }
