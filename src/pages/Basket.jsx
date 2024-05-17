import { useEffect, useState } from "react";
import BasketItems from "../components/BasketItems";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Basket({ dispatch, user, products, discount, delivery, v1products, basket }) {
  document.title = 'Basket | Online Store';
  const navigate = useNavigate();
  const [orderMessage, setOrderMessage] = useState(false);

  const total = basket.reduce((acc, item) => {
    const product = item.version === 'v1' ? v1products.find(p => p.id === item.id) : products.find(p => p.id === item.id);
    return acc + item.count * (product ? product.price : 0);
  }, 0).toFixed(2);

  const handleOrders = () => {
    if (!user.length) {
      return navigate('/login');
    }
    dispatch({ type: "SET_ORDER", payload: basket });
    dispatch({ type: "EDIT_BASKET", payload: [] });
    setOrderMessage(true);
  };

  return (
    <>
      <section className="basket_container">
        {!basket.length && (
          <h1 className="notProduct">
            {orderMessage
              ? "The order has been saved. You can view your orders from your profile."
              : "There are no products in the basket!"}
          </h1>
        )}
        {basket.length > 0 && (
          <div className="basket_elements">
            {basket.map((item, index) => (
              <BasketItems key={index} Basket={basket} item={item} />
            ))}
          </div>
        )}
        {basket.length > 0 && (
          <div className="receipt">
            <div className="cortej">
              <h3>Products <strong>({basket.length})</strong>:</h3>
              <h3>${total}</h3>
            </div>
            <div className="cortej">
              <h3>Discount:</h3>
              <h3>${discount.length ? discount[0] : 0}</h3>
            </div>
            <div className="cortej">
              <h3>Delivery:</h3>
              <h3>${delivery}</h3>
            </div>
            <div className="cortej cortejLine"></div>
            <div style={{ alignItems: 'center', marginTop: '50px' }} className="cortej">
              <h3 style={{ color: 'black', fontSize: '25px' }}>Total:</h3>
              <h3 style={{ color: 'green' }}>${(+total + delivery - (discount.length ? discount[0] : 0)).toFixed(2)}</h3>
            </div>
            <div className="orderBtn"><button >Confirm the Order</button></div>
          </div>
        )}
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  basket: state.basket,
  v1products: state.v1products,
  products: state.products,
  delivery: state.deliveryAmount,
  discount: state.discount,
  user: state.user,
});

export default connect(mapStateToProps)(Basket);
