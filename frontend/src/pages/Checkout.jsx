import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, setCart }) {

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setOrderPlaced(true);

    setCart([]);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <main className="container section empty-cart">

        <h1>Your Cart is Empty</h1>

        <p>
          Please add products to your cart
          before checkout.
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

  if (orderPlaced) {
    return (
      <main className="container section success">

        <h1>
          🎉 Order Placed Successfully!
        </h1>

        <p>
          Thank you for shopping with ShopEase.
        </p>

        <Link
          to="/products"
          className="button"
        >
          Continue Shopping
        </Link>

      </main>
    );
  }

  return (
    <main className="container section">

      <h1>Checkout</h1>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <h2>Delivery Information</h2>

          <label>
            Full Name

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </label>

          <label>
            Email Address

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </label>

          <label>
            Phone Number

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              placeholder="Enter 10-digit phone number"
            />
          </label>

          <label>
            Address

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your delivery address"
            />
          </label>

          <label>
            City

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter your city"
            />
          </label>

          <label>
            Pincode

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              pattern="[0-9]{6}"
              required
              placeholder="Enter 6-digit pincode"
            />
          </label>

          <button
            type="submit"
            className="button"
          >
            Place Order
          </button>

        </form>

        <aside className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div
              className="summary-row"
              key={item.id}
            >

              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹
                {(
                  item.price * item.quantity
                ).toLocaleString("en-IN")}
              </span>

            </div>

          ))}

          <div className="summary-row total-row">

            <strong>Total</strong>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>

          </div>

        </aside>

      </div>

    </main>
  );
}

export default Checkout;