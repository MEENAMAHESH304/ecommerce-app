import { Link, useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="container section empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>
          You haven't added any products yet.
        </p>

        <Link
          to="/products"
          className="button"
        >
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="container section">

      <h1>Your Shopping Cart</h1>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <h2>{item.name}</h2>

                <p>
                  ₹{item.price.toLocaleString("en-IN")}
                </p>

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <p>
                  Subtotal: ₹
                  {(
                    item.price * item.quantity
                  ).toLocaleString("en-IN")}
                </p>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

        <aside className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">

            <span>Items</span>

            <span>
              {cart.reduce(
                (sum, item) =>
                  sum + item.quantity,
                0
              )}
            </span>

          </div>

          <div className="summary-row total-row">

            <strong>Total</strong>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>

          </div>

          <button
            className="button checkout-button"
            onClick={() =>
              navigate("/checkout")
            }
          >
            Proceed to Checkout
          </button>

        </aside>

      </div>

    </main>
  );
}

export default Cart;