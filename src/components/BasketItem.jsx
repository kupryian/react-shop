function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    deleteFromBasket,
    decQuantity,
    incQuantity,
  } = props;

  return (
    <li className="collection-item ">
      {name} по цене {price} x{" "}
      <i class="material-icons basket-quantity" onClick={() => decQuantity(id)}>
        remove
      </i>
      {quantity}
      <i class="material-icons basket-quantity" onClick={() => incQuantity(id)}>
        add
      </i>{" "}
      = {price * quantity}
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => deleteFromBasket(id)}
        >
          delete
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
