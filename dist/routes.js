page('/', home);
page('/clients', clients);
page('/sellers', sellers);
page('/orders', orders);
page('/products', products);

page({ dispatch: false });


function home() {
  $('#main').html("")
  doFetch("totals", createArrayTotals)
  doFetch("brands", createHTMLBrands)
  doFetch("products", createArrayProducts)
}

function clients() {
  $('#main').html("")
  $('#main').html("<div class='item'> Conteúdo em atualização </div>")
}

function sellers() {
  $('#main').html("")
  doFetch("top_sellers", createGraphSellerRtng)
  doFetch("seller", createAvgGraph)
  doFetch("month", createBestPeriod)
}

function orders() {
  $('#main').html("<div class='item'> Conteúdo em atualização </div>")
}

function products() {
  $('#main').html("<div class='item'> Conteúdo em atualização </div>")
}



Collapse 