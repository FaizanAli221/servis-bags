import { useState } from "react";
import { X, Plus, Minus, Trash2, CheckCircle2 } from "lucide-react";
import { placeOrder } from "../api.js";

export default function CartDrawer({
  open,
  onClose,
  cartItems,
  onIncrement,
  onDecrement,
  onRemove,
  onOrderComplete
}) {
  const [placing, setPlacing] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [error, setError] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 189 : 0;
  const total = subtotal + shipping;

  async function handleCheckout() {
    setError("");
    setPlacing(true);
    try {
      const order = await placeOrder({
        items: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity
        })),
        customer: { name: "Guest Checkout" }
      });
      setConfirmedOrder(order);
      onOrderComplete();
    } catch (err) {
      setError(err.message);
    } finally {
      setPlacing(false);
    }
  }

  function handleClose() {
    setConfirmedOrder(null);
    setError("");
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-sm bg-white h-full shadow-xl flex flex-col transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={handleClose} className="p-1 text-gray-500 hover:text-gray-800">
            <X size={22} />
          </button>
        </div>

        {confirmedOrder ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-3">
            <CheckCircle2 size={48} className="text-green-500" />
            <h3 className="text-lg font-semibold">Order Confirmed!</h3>
            <p className="text-sm text-gray-500">
              Order <span className="font-mono font-medium">{confirmedOrder.id}</span> has
              been placed.
            </p>
            <p className="text-sm text-gray-700 font-semibold">
              Total: Rs.{confirmedOrder.total.toLocaleString()}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2 bg-brand text-white rounded-md font-semibold text-sm hover:bg-brand-dark"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-gray-100">
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-12">
                  Your cart is empty.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 py-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-md object-cover bg-gray-50 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.color}</p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        Rs.{item.discountedPrice.toLocaleString()}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onDecrement(item.id)}
                          className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onIncrement(item.id)}
                          className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="ml-auto text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs.{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>Rs.{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-1">
                  <span>Total</span>
                  <span>Rs.{total.toLocaleString()}</span>
                </div>
                {error && <p className="text-xs text-red-500">{error}</p>}
                <button
                  onClick={handleCheckout}
                  disabled={placing}
                  className="w-full mt-2 py-2.5 bg-brand text-white rounded-md font-semibold text-sm hover:bg-brand-dark disabled:opacity-60"
                >
                  {placing ? "Placing Order..." : "Checkout"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
