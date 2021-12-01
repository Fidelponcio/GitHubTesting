//1er ejercicio - select de comunidades y select de provincias dinámico
//3er ejercicio - Barra de progreso con setInterval

let comunidades = [
    {id:1, name:"Islas Canarias"},
    {id:2, name:"Castilla y León"},
    {id:3, name:"Andalucía"},
    {id:4, name:"Comunidad Valenciana"}
]

let provincias = [
    {id: 1, name:"Santa Cruz de Tenerife", idComunidad: 1},
    {id: 2, name:"Las Palmas", idComunidad: 1},
    {id: 3, name:"León", idComunidad: 2},
    {id: 4, name:"Palencia", idComunidad: 2},
    {id: 5, name:"Burgos", idComunidad: 2},
    {id: 6, name:"Soria", idComunidad: 2},
    {id: 7, name:"Segovia", idComunidad: 2},
    {id: 8, name:"Ávila", idComunidad: 2},
    {id: 9, name:"Salamanca", idComunidad: 2},
    {id: 10, name:"Zamora", idComunidad: 2},
    {id: 11, name:"Valladolid", idComunidad: 2},
    {id: 12, name:"Huelva", idComunidad: 3},
    {id: 13, name:"Sevilla", idComunidad: 3},
    {id: 14, name:"Córdoba", idComunidad: 3},
    {id: 15, name:"Jaén", idComunidad: 3},
    {id: 16, name:"Almería", idComunidad: 3},
    {id: 17, name:"Granada", idComunidad: 3},
    {id: 18, name:"Málaga", idComunidad: 3},
    {id: 19, name:"Cádiz", idComunidad: 3},
    {id: 20, name:"Castellón", idComunidad: 4},
    {id: 21, name:"Valencia", idComunidad: 4},
    {id: 22, name:"Alicante", idComunidad: 4},
]

let ccaaSelect = document.getElementById("ccaa");
let provSelect = document.getElementById("prov");

ccaaSelect.addEventListener("change", cargarProv);

comunidades.forEach(function(ca){
    let option = document.createElement("option");
    option.value = ca.id;
    option.text = ca.name;
    ccaaSelect.add(option);
})

function cargarProv(){
    provSelect.options.length = 1;
    provincias.filter(function (provincia){
        return provincia.idComunidad== this;
    }, ccaaSelect.value).
    forEach(function(provincia){
        let option = document.createElement("option");
        option.value = provSelect.id;
        option.text = provincia.name;
        provSelect.add(option);
    })
}

// --------------------------------------------------
//2º ejercicio - Visor de colores, tres controles RGB

let rgb= [document.querySelectorAll("input[type=range]")]