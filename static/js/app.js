// from data.js
var tableData = data;
// console.log(tableData)

d3.select(window).on("load", llenarDatos(tableData));

function llenarDatos(tableData) {
    let agregarHTML = "";
    let roots = tableData.map((data) => {

        // console.log(num)

        agregarHTML = agregarHTML + "<tr>";
        agregarHTML = agregarHTML + "<td >" + data.datetime + "</td>";
        agregarHTML = agregarHTML + " <td>" + data.city + "</td>"
        agregarHTML = agregarHTML + " <td>" + data.state + "</td>"
        agregarHTML = agregarHTML + " <td>" + data.country + "</td>"
        agregarHTML = agregarHTML + " <td>" + data.shape + "</td>"
        agregarHTML = agregarHTML + "<td>" + data.durationMinutes + "</td>"
        agregarHTML = agregarHTML + "<td>" + data.comments + "</td>"
        // agregarHTML = agregarHTML + "<td>" + "OK" + "</td>"
        agregarHTML = agregarHTML + "</tr>";
        // console.log(num);
    });

    document.getElementById("ufo-data").innerHTML = agregarHTML;
}


d3.select("#filter-btn").on("click", function () {
    let nuevaTabla=[]
    let filtrado=0
    let city=d3.select("#city").property("value")
    let state=d3.select("#state").property("value")
    let country=d3.select("#country").property("value")
    let shape=d3.select("#shape").property("value")
    let date=d3.select("#datetime").property("value")

    console.log(city+" "+state+" "+country+" "+shape+" "+date)

    if(city==""){
        console.log("CITY VACIO")
    } else{
        let datosNuevos = tableData.map((tableData) => {
            if (tableData.city==city){
                nuevaTabla.push(tableData)
            }
    
        });
        filtrado=1
    }

    if(state==""){
        console.log("STATE VACIO")
    } else if(filtrado==0){
        let datosNuevos = tableData.map((tableData) => {
            if (tableData.state==state){
                nuevaTabla.push(tableData)
            }
    
        });
        filtrado=1
    } else {
        nuevaTablaF=nuevaTabla
        nuevaTabla=[]
        let datosNuevos = nuevaTablaF.map((tableData) => {
            if (tableData.state==state){
                nuevaTabla.push(tableData)
            }
    
        });
      
    }

    if(country==""){
        console.log("COUNTRY VACIO")
    } else if(filtrado==0){
        let datosNuevos = tableData.map((tableData) => {
            if (tableData.country==country){
                nuevaTabla.push(tableData)
            }
    
        });
        filtrado=1
        
    } else {
        nuevaTablaF=nuevaTabla
        nuevaTabla=[]
        let datosNuevos = nuevaTablaF.map((tableData) => {
            if (tableData.country==country){
                nuevaTabla.push(tableData)
            }
    
        });

    }

    if(shape==""){
        console.log("SHAPE VACIO")
    } else if(filtrado==0){
        let datosNuevos = tableData.map((tableData) => {
            if (tableData.shape==shape){
                nuevaTabla.push(tableData)
            }
    
        });
        filtrado=1
    } else {
        nuevaTablaF=nuevaTabla
        nuevaTabla=[]
        let datosNuevos = nuevaTablaF.map((tableData) => {
            if (tableData.shape==shape){
                nuevaTabla.push(tableData)
            }
    
        });

    }

    llenarDatos(nuevaTabla)

});


d3.select("#reset").on("click", function () {
    llenarDatos(tableData)

});

// YOUR CODE HERE!
