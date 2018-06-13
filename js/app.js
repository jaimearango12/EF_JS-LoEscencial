var notas = [
    {
        "codigo": "001",
        "nombre": "Jaime Arango",
        "nota": 5
    },{
        "codigo": "002",
        "nombre": "Alan brito",
        "nota": 4.3
    },{
        "codigo": "003",
        "nombre": "Rosa Melano",
        "nota": 4.4
    },{
        "codigo": "004",
        "nombre": "Armando Juguetes",
        "nota": 3.5
    },{
        "codigo": "005",
        "nombre": "Ali Cate",
        "nota": 3
    },{
        "codigo": "006",
        "nombre": "PePito Perez",
        "nota": 2.8
    },{
        "codigo": "007",
        "nombre": "Susana Oria",
        "nota": 1
    },{
        "codigo": "008",
        "nombre": "Benito Camelas",
        "nota": 4
    },{
        "codigo": "009",
        "nombre": "Lucho Portucasa",
        "nota": 3.3
    },{
        "codigo": "010",
        "nombre": "Federico Garcia",
        "nota": 4.8
    }
];
//funcion que muestra el json 
function leerJSON(json) {
    var out = "-----------Calificaciones-----------<br>";
    var i;
    for (i = 0; i < json.length; i++) {
        out += "Codigo:" + json[i].codigo + " - " + "Nombre:" + json[i].nombre + " - " + "Nota:" + json[i].nota + "<br>";
    }

    document.getElementById("calificaciones").innerHTML = out;

}

//funcion que muestra  el promedio
function calcularPromedio(json) {

    var acumulado = 0;
    for (i = 0; i < json.length; i++) {
        acumulado += json[i].nota ; // += es el encargado de sacar el total
    }
    var promedioFin = acumulado / 10;
 

    document.getElementById("promedio").innerHTML = "El promedio del grupo es de : " + promedioFin;

}

//funcion que muestra la nota mas alta 
function notaAlta(json){
    var varNota = "";
    var varCode = "";
    var varNombre = "";
  
    var i;
    varNota = 0;
  
    for (i=0; i<json.length;i++) {
      if (varNota<= json[i].nota){
        varNota = json[i].nota;
        varNombre = json[i].nombre;
      }
    }
    document.getElementById("bnota").innerHTML = "La nota mas alta es de " + varNombre +" y su nota es " + varNota
  }

  //funcion que muestra la nota mas baja
  function notaBaja(json){
    var varNota = "";
    var varCode = "";
    var varNombre = "";
  
    var i;
    varCode = "";
    varNombre = "";
    varNota = 100;
    for (i=0; i<json.length;i++) {
      if (varNota >= json[i].nota){
        varNota = json[i].nota;
        varNombre = json[i].nombre;
      }
    }
    document.getElementById("wnota").innerHTML = "La nota mas baja es de " + varNombre +" y su nota es " + varNota
  }
function mostrarCalificaciones() {
    leerJSON(notas);
}


function promedio() {
    calcularPromedio(notas);
}

function mejorNota () {
    notaAlta(notas);
}

function peorNota(){
    notaBaja(notas);
}