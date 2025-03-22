import { useEffect, useState } from "react";

function Owner() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen px-4">
       <div className="p-6  bg-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Order Details</h2>
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Order for {order.user}
              </h3>
              <p className="text-gray-700 font-medium">
                Total Price: <span className="text-green-600 font-bold">${order.totalPrice.toFixed(2)}</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Order Placed On: {new Date(order.timestamp).toLocaleString()}
              </p>
              <ul className="mt-4 border-t pt-4">
                {order.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between py-2 px-3 rounded-md bg-gray-50 transition-colors duration-300 hover:bg-gray-200"
                  >
                    <span className="text-gray-800">{item.title}</span>
                    <span className="text-gray-600">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg">No orders available.</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default Owner;

