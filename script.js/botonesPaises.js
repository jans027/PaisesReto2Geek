const paises = [
    {
        id: 'boton',
        continente: "AFRICA",
        imagen: "./images/AFRICA.png",
    },
    {
        id:'boton',
        continente: "ASIA",
        imagen: "./images/ASIA.png",
    },
    {
        id:"boton",
        continente: "EUROPA",
        imagen: "./images/EUROPA.png",
    },
    {
        id:"boton",
        continente: "OCEANIA",
        imagen: "./images/OCEANIA.png",
    },
    {
        id:"boton",
        continente: "AMERICA",
        imagen: "./images/AMERICA.png",
    },

    {
        id:1,
        continente: "AFRICA",
        ciudad: "Ciudad del Cabo - Sudáfrica",
        imagen: "./images/africa1.jpg",
        miniatura: "./images/AFRICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:1,
        continente: "AFRICA",
        ciudad: "El Cairo - Egipto",
        imagen: "./images/africa2.jpg",
        miniatura: "./images/AFRICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:1,
        continente: "AFRICA",
        ciudad: "Túnez - Túnez",
        imagen: "./images/africa3.jpg",
        miniatura: "./images/AFRICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:1,
        continente: "AFRICA",
        ciudad: "Nairobi - Kenia",
        imagen: "../images/africa4.jpg",
        miniatura: "./images/AFRICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:1,
        continente: "AFRICA",
        ciudad: "El Cairo - Egipto",
        imagen: "./images/africa5.jpg",
        miniatura: "./images/AFRICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:1,
        continente: "AFRICA",
        ciudad: "Luanda - Angola",
        imagen: "./images/AFRICA.png",
        miniatura: "./images/AFRICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:2,
        continente: "ASIA",
        ciudad: "Bali - Indonesia",
        imagen: "./images/asia1filipinas.jpg",
        miniatura: "./images/ASIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:2,
        continente: "ASIA",
        ciudad: "Hoi An - Vietnam",
        imagen: "./images/asia2rusia.jpg",
        miniatura: "./images/ASIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:2,
        continente: "ASIA",
        ciudad: "Phuket - Tailandia",
        imagen: "./images/asia3india.jpg",
        miniatura: "./images/ASIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:2,
        continente: "ASIA",
        ciudad: "Katmandú - Nepal",
        imagen: "./images/asia4singapur.jpg",
        miniatura: "./images/ASIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:2,
        continente: "ASIA",
        ciudad: "Bangkok - Tailandia",
        imagen: "./images/asia5china.jpg",
        miniatura: "./images/ASIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:2,
        continente: "ASIA",
        ciudad: "Tokio - Japón",
        imagen: "./images/ASIA.png",
        miniatura: "./images/ASIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:3,
        continente: "EUROPA",
        ciudad: "Londres - Reino Unido",
        imagen: "./images/europa1roma.jpg",
        miniatura: "./images/EUROPA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:3,
        continente: "EUROPA",
        ciudad: "	Paris - Francia",
        imagen: "./images/europa2suezia.jpg",
        miniatura: "./images/EUROPA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:3,
        continente: "EUROPA",
        ciudad: "Estambul - Turquía",
        imagen: "./images/europa3madrid.jpg",
        miniatura: "./images/EUROPA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:3,
        continente: "EUROPA",
        ciudad: "Roma - Italia",
        imagen: "./images/europa4londres.jpg",
        miniatura: "./images/EUROPA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:3,
        continente: "EUROPA",
        ciudad: "Ámsterdam - Países Bajos",
        imagen: "./images/europa5alemania.jpg",
        miniatura: "./images/EUROPA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:3,
        continente: "EUROPA",
        ciudad: "Viena - Austria",
        imagen: "./images/EUROPA.png",
        miniatura: "./images/EUROPA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:4,
        continente: "OCEANIA",
        ciudad: "Sidney - Australia",
        imagen: "./images/oceaniaaustralia1.jpg",
        miniatura: "./images/OCEANIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:4,
        continente: "OCEANIA",
        ciudad: "Cairns - Australia",
        imagen: "./images/oceaniaaustralia2.jpg",
        miniatura: "./images/OCEANIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:4,
        continente: "OCEANIA",
        ciudad: "Gold Coast - Australia",
        imagen: "./images/oceaniaaustralia3.jpg",
        miniatura: "./images/OCEANIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:4,
        continente: "OCEANIA",
        ciudad: "Sunshine Coast - Australia",
        imagen: "./images/oceanianuevazelanda1.jpg",
        miniatura: "./images/OCEANIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:4,
        continente: "OCEANIA",
        ciudad: "Adelaida - Australia",
        imagen: "./images/oceanianuevazelanda2.jpg",
        miniatura: "./images/OCEANIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:4,
        continente: "OCEANIA",
        ciudad: "Launceston - Australia",
        imagen: "./images/oceaniaaustralia1.jpg",
        miniatura: "./images/OCEANIA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:5,
        continente: "AMERICA",
        ciudad: "Cusco - Peru",
        imagen: "./images/america1peru.jpg",
        miniatura: "./images/AMERICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:5,
        continente: "AMERICA",
        ciudad: "New York - Estados Unidos",
        imagen: "./images/america2newyork.jpg",
        miniatura: "./images/AMERICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:5,
        continente: "AMERICA",
        ciudad: "Buenos Aires - Argentina",
        imagen: "./images/america3argnetina.jpg",
        miniatura: "./images/AMERICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:5,
        continente: "AMERICA",
        ciudad: "Bogota - Colombia",
        imagen: "./images/america4colombi.jpg",
        miniatura: "./images/AMERICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:5,
        continente: "AMERICA",
        ciudad: "Ontario - Canada",
        imagen: "./images/america5canada.jpg",
        miniatura: "./images/AMERICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    },
    {
        id:5,
        continente: "AMERICA",
        ciudad: "Cancun - Mexico",
        imagen: "./images/america1peru.jpg",
        miniatura: "./images/AMERICA.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam malesuada, netus ultricies est quam interdum posuere aliquam pulvinar, nec rutrum nibh consequat etiam lacinia mattis lobortis."
    }
]




const clickCiudades = document.querySelectorAll('.vermas');

clickCiudades.forEach(btn => {
    btn.addEventListener('click', clicked);
})



function clicked(comp,) {
    const button = comp.id;



    let seleccion = paises.find(paises => paises.ciudad === button);
    localStorage.setItem(' seleccion', JSON.stringify(seleccion));//sessionStorage
    const { ciudad, continente, id, imagen, texto, miniatura } = seleccion;



    document.querySelector('.principal').style.display = "none";
    document.querySelector('.secundaria').style.display = "block";

    let img = document.querySelector('.img-principal-Form');
    img.setAttribute('src', imagen);
    let ciudadDestino = document.querySelector('.ciudadForm')
    ciudadDestino.textContent = (`${ciudad}`);
    let text = document.querySelector('p');
    text.textContent = (`${texto}`);
    let img2 = document.querySelector('.img-secundaria-form');
    img2.setAttribute('src', miniatura)


    // .......................................................

    document.getElementById('ciudad').value = ciudad;
    document.getElementById('continente').value = continente;
}



// ...................capturar datos formulario............................

let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let datosObjeto = convertirDatosAObjeto(form)//convertir formData a objeto
    console.log(datosObjeto)
    if (comentarios.value === "" ||  partida.value ==="" ||  llegada.value ==="") {//validacion datos vacios
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios!',
            footer: ''
        })
    } else {
        sessionStorage.setItem("datosFormulario", JSON.stringify(datosObjeto));
    Swal.fire(
        '',
        'Cita Guardada Correctamente!',
        'success'
    );
    form.reset();
    }
    
})




// ..............convertir formData a objeto........................

function convertirDatosAObjeto() {
    let ciudad = document.getElementById('ciudad').value;
    let continente = document.getElementById('continente').value;
    let partida = document.getElementById('partida').value;
    let llegada = document.getElementById('llegada').value;
    let comentarios = document.getElementById('comentarios').value;
    return {
        "ciudad": ciudad,
        "continente": continente,
        "partida": partida,
        "llegada": llegada,
        "comentarios": comentarios,

    }
}
