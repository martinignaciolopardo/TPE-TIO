document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    document.querySelector("#mostrar-menu").addEventListener("click", function () {
        document.querySelector("#desplegable").classList.toggle("desplegable");
    });

    let baseURL = "https://web-unicen.herokuapp.com/api/groups/";
    let groupID = "057MartinezLopardo";
    let collectionID = "Deportistas";
    let contenedor = document.querySelector("#mensaje");
    let tabla = [];
    document.querySelector("#btn-agregar").addEventListener('click', generarDatos);
    document.querySelector("#btn-agregar3").addEventListener("click", agregar3);
    getData();

    function generarDatos(){

        let deporte = document.querySelector("#inputdeporte").value;
        let deportista = document.querySelector("#inputdeportista").value;
        let club = document.querySelector("#inputclub").value;
        let informacion = document.querySelector("#inputinformacion").value;
        let foto = document.querySelector("#inputfoto").value;

        if( deporte.length === 0 ) {
            contenedor.innerHTML = "Ingrese un deporte";
            return;
        }
        if( deportista.length === 0 ) {
            contenedor.innerHTML = "Ingrese nombre del deportista";
            return;
        }
        if( club.length === 0 ) {
            contenedor.innerHTML = "Ingrese el club";
            return;
        }
        if( informacion.length === 0 ) {
            contenedor.innerHTML = "Ingrese la informacion";
            return;
        }
        if( foto.length === 0 ) {
            contenedor.innerHTML = "Ingrese una foto";
            return;
        }
        if (deportista.length != 0 && informacion.length != 0 && club.length != 0 && foto.length != 0 && deporte.length != 0) {
            contenedor.innerHTML = " ";
        }
        let deportistas = ({
            "id":"",
            "thing":
                {
                    "Deporte": deporte,
                    "Deportista": deportista,
                    "Club": club,
                    "Informacion": informacion,
                    "Foto": foto
                }
        });
        tabla.push(deportistas);
        cargarDatos(deportistas);
        console.log(tabla);
    }

    function agregar3(){
        let automovilismo = ({
            "id":"",
            "thing":
            {
                "Deporte": "Automovilismo",
                "Deportista": "Juan Manuel Fangio",
                "Club": "Alfa Romeo, Maserati, Mercedes y Ferrari.",
                "Informacion": "lorem",
                "Foto": "lorem",
            }
        });
        let boxeo = ({
            "id":"",
            "thing":
            {
                "Deporte": "Boxeo",
                "Deportista": "Carlos Mozon",
                "Club": "Entrenador: Ramon Montenegro",
                "Informacion": "lorem",
                "Foto": "lorem",
            }
        });
        let basquet = ({
            "id":"",
            "thing":
            {
                "Deporte": "Basquet",
                "Deportista": "Manuel Ginobili",
                "Club": "Clubes argentinos, ligas italianas y en la NBA",
                "Informacion": "lorem",
                "Foto": "lorem",
            }
        });
        tabla.push(automovilismo);
        cargarDatos(automovilismo);
        tabla.push(boxeo);
        cargarDatos(boxeo);
        tabla.push(basquet);
        cargarDatos(basquet);
        console.log(tabla);
    }

    function cargarDatos(deportistas){
        fetch(baseURL + groupID + "/" + collectionID, {
            "method": "POST",
            "mode": 'cors',
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(deportistas)
        })
        .then(function(respuesta){
            if(!respuesta.ok){
                contenedor.innerHTML = "Error";
            }
            else {
                getData();
            }
        })
        .catch(function(e){
            contenedor.innerHTML = "Error 404";
        })
    }
    /*   GET   */

    function getData(){
        let tabladeporte = document.querySelector("#tabla");
        let filtro = document.querySelector("#input-filtro").value;
        fetch(baseURL + groupID + "/" + collectionID, {
            method: "GET",
            mode: "cors",
        })
        .then(function(r){
            if(!r.ok){
                console.log("error")
            }
            return r.json()
        })
        .then(function(json) {
            console.log(json);
            tabladeporte.innerHTML = " ";
            for (let i = 0; i<json.Deportistas.length; i++) {

                //creo la fila
                let nuevaFila = document.createElement("tr");

                //creo las celdas
                let celdaDeporte = document.createElement("td");
                let celdaDeportista = document.createElement("td");
                let celdaClub = document.createElement("td");
                let celdaInformacion = document.createElement("td");
                let celdaFoto = document.createElement("td");
                let celdaBorrar = document.createElement("td");
                let celdaEditar = document.createElement("td");
                //creo botones
                let botonDelete = document.createElement("button");
                let botonEdit = document.createElement("button");

                //cargo las celdas
                celdaDeporte.innerHTML = json.Deportistas[i].thing.Deporte;
                celdaDeportista.innerHTML = json.Deportistas[i].thing.Deportista;
                celdaClub.innerHTML = json.Deportistas[i].thing.Club;
                celdaInformacion.innerHTML = json.Deportistas[i].thing.Informacion;
                celdaFoto.innerHTML = json.Deportistas[i].thing.Foto;
                //asigno nombre a botones
                botonDelete.innerHTML = "Borrar fila "+i;
                botonEdit.innerHTML = "Editar fila "+i;
                //agrego los botones a la fila
                celdaBorrar.appendChild(botonDelete);
                celdaEditar.appendChild(botonEdit);
                //agrego las celdas a la fila
                nuevaFila.appendChild(celdaDeporte);
                nuevaFila.appendChild(celdaDeportista);
                nuevaFila.appendChild(celdaClub);
                nuevaFila.appendChild(celdaInformacion);
                nuevaFila.appendChild(celdaFoto);
                nuevaFila.appendChild(celdaBorrar);
                nuevaFila.appendChild(celdaEditar);
                //agrego la info a la tabla
                tabladeporte.appendChild(nuevaFila);

                let id = json.Deportistas[i]._id;
                //agrego estilo a las celdas
                botonDelete.classList.add("btndelete");
                botonEdit.classList.add("btnedit");

                nuevaFila.id = id;
                botonDelete.id = id;
                botonEdit.id = id;
                botonDelete.addEventListener("click", () => borrarFila(id, i));
                botonEdit.addEventListener("click", () => editarFila(id, i));
                document.querySelector("#btn-sacar-filtro").addEventListener("click", () => sacarFiltro(nuevaFila));
                document.querySelector("#btn-filtro").addEventListener("click", () => filtrar(nuevaFila,json,i));
                if (celdaDeporte.innerHTML == "Hockey"){
                    nuevaFila.classList.add("resaltado");
                }
            };
            
        })
        .catch(function(e){
            contenedor.innerHTML = "Error 404";
        })
    }

    //setInterval(()=>getData(), 5000);
    
    /*  DELETE  */

    function borrarFila(id, i){
        tabla.splice(i, 1);
        console.log(tabla);
    fetch(baseURL + groupID + "/" + collectionID+"/"+id, {
            method: "DELETE",
            mode: "cors"
        })
        .then(function (respuesta) {
            if (!respuesta.ok) {
                console.log("ERROR");
            }
            else {
                getData();
            }
        })
    }

    /*   PUT   */

    function editarFila(id, i){
        let deporte = document.querySelector("#inputdeporte").value;
        let deportista = document.querySelector("#inputdeportista").value;
        let club = document.querySelector("#inputclub").value;
        let informacion = document.querySelector("#inputinformacion").value;
        let foto = document.querySelector("#inputfoto").value;
        let valor =  {
            "id":"",
            "thing" :
            {
                "Deporte": deporte,
                "Deportista": deportista,
                "Club": club,
                "Informacion": informacion,
                "Foto": foto
             }
        }
        tabla[i] = valor;
        console.log(tabla);
        fetch(baseURL + groupID + "/" + collectionID+"/"+id, {
            method: "PUT",
            mode: "cors",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(valor)
        })
        .then(function (respuesta) {
            if (!respuesta.ok) {
                console.log("ERROR");
            }
            else {
                getData();
            }
        })
    }

    function filtrar(nuevaFila, json, i){
        let filtro = document.querySelector("#input-filtro").value;
        nuevaFila.classList.add("oculto");
        if (json.Deportistas[i].thing.Deporte == filtro){
            nuevaFila.classList.remove("oculto");
        }
        //document.querySelector("#btn-sacar-filtro").addEventListener("click", () => sacarFiltro(nuevaFila));
    }

    function sacarFiltro(nuevaFila){
        nuevaFila.classList.remove("oculto");
    }

});