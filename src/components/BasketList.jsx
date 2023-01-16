import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { order = [], handleBasketShow, deleteFromBasket, decQuantity, incQuantity } = props;

  const totalPrice = order.reduce( (sum,el) => {
    return sum + el.price * el.quantity;
  }, 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Корзина{" "}
        <span className="secondary-content basket-close" onClick={handleBasketShow}>
          <i className="material-icons">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} deleteFromBasket={deleteFromBasket} decQuantity={decQuantity} incQuantity={incQuantity}/>)
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}
      <li className="collection-item active">общая стоимость {totalPrice} руб.
      <button className="secondary-content basket-close btn-small">
          Оформить
        </button></li>
    </ul>
  );
}

export { BasketList };
