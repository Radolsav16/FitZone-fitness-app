export  const CalculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => {
      return (total += Number(item.productId.price * item.quantity));
    }, 0);
  };
