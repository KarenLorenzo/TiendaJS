
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
    new Producto ({id: "1", titulo: "Zapatillas Air Force", imagen: "img/air.png" ,precio: 1599, descripcion: "¡Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas. Nisi similique ab fugit alias, sint sunt autem adipisci impedit est voluptatibus, ad non, vitae eaque! Culpa tenetur ullam deserunt "}),
    new Producto ({id: "2", titulo: "Zapatillas Air Force", imagen: "img/air2.png" ,precio: 200, descripcion: "¡Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas. Nisi similique ab fugit alias, sint sunt autem adipisci impedit est voluptatibus, ad non, vitae eaque! Culpa tenetur ullam deserunt."}),
    new Producto ({id: "3", titulo: "Zapatillas Nike Force", imagen: "img/blazer.png", precio: 190, descripcion: "¡Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas. Nisi similique ab fugit alias, sint sunt autem adipisci impedit est voluptatibus, ad non, vitae eaque! Culpa tenetur ullam deserunt" }),
    new Producto ({id: "4", titulo: "Zapatillas jordan", imagen: "img/blazer2.png" , precio: 150, descripcion:"¡Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas. Nisi similique ab fugit alias, sint sunt autem adipisci impedit est voluptatibus, ad non, vitae eaque! Culpa tenetur ullam deserunt"}),
    new Producto ({id: "5", titulo: "Air Jordan high", imagen: "img/jordan.png" , precio: 300, descripcion:"¡Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas. Nisi similique ab fugit alias, sint sunt autem adipisci impedit est voluptatibus, ad non, vitae eaque! Culpa tenetur ullam deserunt."}),
    new Producto ({id: "6", titulo: "Zapatillas crater", imagen: "img/hippie.png" , precio: 1050, descripcion:"¡Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptas. Nisi similique ab fugit alias, sint sunt autem adipisci impedit est voluptatibus, ad non, vitae eaque! Culpa tenetur ullam deserunt"}),
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