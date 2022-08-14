
const fragment = document.createDocumentFragment();
const templateCard = document.getElementById('template-card').content; 
const items = document.getElementById('listar-productos')

class Producto {

    constructor(item){
        this.id = item.id;
        this.titulo = item.titulo
        this.imagen = item.imagen
        this.precio = item.precio
        this.descripcion= item.descripcion
    }

};

const agregarProductos = [
    new Producto ({id: "1", titulo: "Zapatillas Air Force", imagen: "img/air.png" ,precio: 1599, descripcion: "Las Air Max Dawn, fiel a sus orígenes, están confeccionadas con al menos un 20% de material reciclado por peso. La gamuza sintética y los demás materiales combinan el estilo vintage del running con detalles nuevos. La amortiguación Nike Air brinda comodidad para todo el día. "}),
    new Producto ({id: "2", titulo: "Zapatillas Air Force", imagen: "img/air2.png" ,precio: 200, descripcion: "Las Air Max Dawn, fiel a sus orígenes, están confeccionadas con al menos un 20% de material reciclado por peso. La gamuza sintética y los demás materiales combinan el estilo vintage del running con detalles nuevos. La amortiguación Nike Air brinda comodidad para todo el día."}),
    new Producto ({id: "3", titulo: "Zapatillas Nike Force", imagen: "img/blazer.png", precio: 190, descripcion: "La suave espuma Cushlon se combina con una enérgica unidad Air para brindar una sensación de suavidad en la planta del pie. Además, la suela con soporte suaviza el terreno por muy accidentado que sea. La unidad Air-Sole de perfil bajo con una ventana retro en forma de pastilla se combina con unasuave entresuela de espuma para brindar amortiguación." }),
    new Producto ({id: "4", titulo: "Zapatillas jordan", imagen: "img/blazer2.png" , precio: 150, descripcion:"Con elementos de diseñoinspirados en las clásicas Air Jordan 4, las Jordan Max 200 garantizanun nuevo nivel de Air para seguir sosteniendo detalles asociados al legado y la comodidad creados parael futuro."}),
    new Producto ({id: "5", titulo: "Air Jordan high", imagen: "img/jordan.png" , precio: 300, descripcion:"Con elementos de diseño inspirados en las clásicas Air Jordan 4, las Jordan Max 200 garantizan un nuevo nivel de Air paraseguir sosteniendo detalles asociados al legado y la comodidad creados para el futuro."}),
    new Producto ({id: "6", titulo: "Zapatillas crater", imagen: "img/hippie.png" , precio: 1050, descripcion:"Las Zapatillas Nike Crater Impact son ideales por su diseño inspirado en las pistas de atletismo, su construcción en malla y swooosh cosido te da un estilo salvaje tipo cebra, su ojal de red mezcla lo urbano con lo artesanal. La entresuela elevada de espuma cráter con aspecto moteado te brinda la amortiguación y reacción necesaria para tus días agitados."}),
];



agregarProductos.forEach((item) => {
    templateCard.querySelector('h3').textContent = item.titulo
    templateCard.querySelector('span').textContent = item.precio
    templateCard.querySelector('img').setAttribute("src", item.imagen)
    templateCard.querySelector('p').textContent = item.descripcion
    templateCard.querySelector('.agregar-carrito').dataset.id = item.id


    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
})

items.appendChild(fragment)