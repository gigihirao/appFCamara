const baseUrl = "https://middleware-guarani-api.herokuapp.com/api/report_order"

const doFetch = (name, functionToUse) => {
   fetch(`${baseUrl}/${name}`)
   .then(response => response.json())
   .then(dataJson => {functionToUse(dataJson.data)})
}

const createArrayTotals = (data) => {
   const dataOrder = data.monthSum.order;
   const dataPaid = data.monthSum.paid;

   newArray = [
       ['Tipo', 'Valor'],
       ['Pedidos', dataOrder],
       ['Pagos',   dataPaid]
     ]

   renderHTMLTotals(data, newArray, "Pedidos e pagamentos mensais")
}

const renderHTMLTotals = (data, newArray, title) => {
   $("main").html(`<div id="first-chart" class="item">
                   <h1> ${title} </h1>
                   <div class="chart-container" style="display:flex">
                   <div class="chart-desc" style="align-self:center">
                       <p><b>Pedidos:</b> ${data.monthSum.order.toLocaleString()}</p>
                       <p><b>Frete:</b> ${data.monthSum.shipping.toLocaleString()}</p>
                       <p><b>Pagamentos:</b> ${data.monthSum.paid.toLocaleString()}</p>
                   </div>
                   <div id="chart-totals"></div>
                   </div>
                   </div>`)

   graphPie(newArray)

}

const createHTMLBrands = (data) => {
  newArray = [
    ['Quantidade', 'Vendido'],
  ]
  $.each(data, function(index, value) {
    newArray.push([value["_id"], value["solded"]]);
  })
 
  $("main").append(`<div id="second-chart" class="item">
  <h1> Marcas mais vendidas </h1>
  </div>`)
 
  graphBarHorizontal(newArray, "#second-chart");
 }

const createArrayProducts = (data) => {
 newArray = [
   ['Quantidade', 'Produto'],
 ]

 $.each(data, function(index, value) {
   newArray.push([value["_id"], value["solded"]]);
 })

 $("main").append(`<div id="fourth-chart" class="item">
 <h1> Produtos mais vendidos </h1>
 </div>`)

 graphBar(newArray,"#fourth-chart");
}

function graphBarHorizontal(array, div){
  google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable(array);

      var options = {
         width: 400,
         height: 300,
         'is3D': true,
         bars: 'horizontal',
         'colors': ['#2b2b2b', '#F07241', '#C04848']
      };

      var newGraph = document.createElement('div');
      document.querySelector(div).appendChild(newGraph);

      var chart = new google.charts.Bar(newGraph);

      chart.draw(data, options);
    }
}

function graphPie(array) {
   google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var data = google.visualization.arrayToDataTable(array);

       var options = {
         pieHole: 0.4,
         width: 600,
         height: 400,
         'colors': ['#2b2b2b', '#F07241', '#C04848']
       };

       var newGraph = document.createElement('div');
       document.querySelector("#chart-totals").appendChild(newGraph);

       var chart = new google.visualization.PieChart(newGraph);
       chart.draw(data, options);
   }
}

function graphBar(array, div){
   google.charts.load('current', {'packages':['bar']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {
       var data = google.visualization.arrayToDataTable(array);

       var options = {
           width: 400,
           height: 300,
           'is3D': true,
           'colors': ['#F07241', '#C04848']
       };

       var newGraph = document.createElement('div');
       document.querySelector(div).appendChild(newGraph);

       var chart = new google.charts.Bar(newGraph);

       chart.draw(data, options);
     }
 }

 function graphLine(array, titleGraph){
   google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {
       var data = google.visualization.arrayToDataTable(array);

       var options = {
           width: 600,
           height: 400,
         chart: {
           title: titleGraph,
         }
       };

       var newGraph = document.createElement('div');
       document.querySelector("main").appendChild(newGraph);

       var chart = new google.charts.LineChart(newGraph);

       chart.draw(data, options);
     }
 }

 function createGraphSellerRtng(data){ 
  newArray = [
    ['Nome', 'Rating'],
  ]
 
  $.each(data, function(index, value) {
    newArray.push([value["seller_name"], value["rating"]]);
  })
 
  $("main").append(`<div id="first-chart" class="item">
  <h1> Sellers Rating </h1>
  </div>`)
 
  graphBar(newArray, "#first-chart");
 }

 function createAvgGraph(data){
  newArray = [
    ['Nome', 'Ticket Médio'],
  ]
 
  $.each(data, function(index, value) {
    newArray.push([value["_id"], value["average_ticket"]]);
  })
 
  $("main").append(`<div id="second-chart" class="item">
  <h1> Ticket Médio </h1>
  </div>`)
 
  graphBar(newArray, "#second-chart");
 }

 function createBestPeriod(){

 }