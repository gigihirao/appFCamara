page('/', home);
page('/clients', clients);
page('/sellers', sellers);
page('/orders', orders);
page('/products', products);

//Erro no Pages.js reportado na issues (https://github.com/visionmedia/page.js/issues/522)
page({ dispatch: false });


function home() {
  $('#main').html("")
  doFetch("totals", createArrayTotals)
  doFetch("brands", createHTMLBrands)
  doFetch("products", createArrayProducts)
}

function clients() {
  $('#main').html("")
  $('#main').html("clientes")
}

function sellers() {
  $('#main').html("")
  doFetch("top_sellers", createGraphSellerRtng)
  doFetch("seller", createAvgGraph)
  doFetch("month", createBestPeriod)
}

function orders() {
  $('#main').html("gráficos orders")
}

function products() {
  $('#main').html("gráficos produtos")
}



Collapse 