
page('/', home);
page('/clients', clients);
page('/sellers', sellers);
page('/orders', orders);
page('/products', products);

//Erro no Pages.js reportado na issues (https://github.com/visionmedia/page.js/issues/522)
page({ dispatch: false });


function home() {
  doFetch("totals", createArrayTotals)
  doFetch("brands", createHTMLBrands)
  doFetch("products", createArrayProducts)
}

function clients() {
  $('#main').html("gráficos clientes")
}

function sellers() {
  $('#main').html("gráficos vendedores")
}

function orders() {
  $('#main').html("gráficos orders")
}

function products() {
  $('#main').html("gráficos produtos")
}
