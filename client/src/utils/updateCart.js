export  function updateCart(data){
    const auth = JSON.parse(localStorage.getItem('auth'));

    auth.cart.push(data);

    return auth;
}

export  function updateCartOnDelete(productId){
    const auth = JSON.parse(localStorage.getItem('auth'));

    const index = auth.cart.findIndex(o => o.productId == productId);

    auth.cart.splice(index,1);

    return auth;
}