page('/', home);
page('/clients', clients);
page('/sellers', sellers)
page('/orders', orders)
page('/products', products)
page();
function home() {
  $('#main').html("gráficos totais")
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
