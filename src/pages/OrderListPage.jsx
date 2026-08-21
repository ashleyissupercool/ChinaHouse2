import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { useState } from "react";
import { useOrder } from "../context/order.js";
import { menuItems } from "../data/menu.js";

function OrderListPage() {
  const { orderItems, changeQuantity, changeOrderOption, updateOrderNote } = useOrder();
  const [showPlaceOrderMessage, setShowPlaceOrderMessage] = useState(false);
  const [noteDrafts, setNoteDrafts] = useState({});

  return(
    <>
    <Header />
    <main className="mx-auto min-h-[500px] w-full max-w-[1204px] px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-black">YOUR ORDER</h1>
      <aside className="mt-4 rounded-xl border-2 border-[#b91c1c] bg-white px-5 py-4 text-center shadow-sm" role="alert" aria-label="Order placement notice">
        <p className="text-lg font-black uppercase tracking-wide text-[#991b1b] sm:text-xl">Important: this order is not placed automatically.</p>
        <p className="mt-1 text-sm font-bold text-black sm:text-base">Please come inside or call us to place and confirm your order.</p>
      </aside>
      <section className="mt-6 rounded-[15px] border border-black/20 bg-[#f8dede] p-5">
        {orderItems.length === 0 ? (
          <div>
            <p className="text-black/60">Your order list is empty.</p>
            <a href="/menu" className="mt-4 inline-flex rounded-lg bg-[#4a4a4a] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-black">
              Add to Order
            </a>
          </div>
        ) : (
          <ul className="space-y-3">
            {orderItems.map((item) => {
              const menuItem = menuItems.find(
                (menuEntry) => menuEntry.id === item.menuItemId || menuEntry.name === item.name
              );
              const selectedOptionId = item.optionId ?? menuItem?.options?.find(
                (option) => option.label === item.selectedOption
              )?.id;

              return (
              <li key={item.id} className="rounded-lg bg-white/70 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold">{item.name}</p>
                  {menuItem?.options ? (
                    <label className="mt-1 block text-sm">
                      <span className="sr-only">Change {item.name} option</span>
                      <select
                        className="rounded-md border border-black/20 bg-white px-2 py-1"
                        value={selectedOptionId}
                        onChange={(event) => {
                          const option = menuItem.options.find((menuOption) => menuOption.id === event.target.value);
                          changeOrderOption(item.id, menuItem, option);
                        }}
                      >
                        {menuItem.options.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.label} — ${option.price.toFixed(2)}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : (
                    item.selectedOption && <p className="text-sm">{item.selectedOption}</p>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <div className="flex items-center overflow-hidden rounded-lg border border-black/20 bg-white">
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, -1)}
                      className="h-9 w-9 border-r border-black/20 text-lg font-bold transition-colors hover:bg-black/5"
                      aria-label={`Remove one ${item.name}`}
                    >
                      −
                    </button>
                    <span className="flex h-9 w-9 items-center justify-center font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, 1)}
                      className="h-9 w-9 border-l border-black/20 text-lg font-bold transition-colors hover:bg-black/5"
                      aria-label={`Add one ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
                </div>
                </div>
                <div className="mt-3 border-t border-black/10 pt-3">
                  <label className="block text-sm font-medium">
                    Order note (optional)
                    <textarea
                      className="mt-1 block w-full resize-none rounded-lg border border-black/20 bg-white px-3 py-2 text-sm"
                      value={noteDrafts[item.id] ?? item.note ?? ""}
                      onChange={(event) => setNoteDrafts((current) => ({ ...current, [item.id]: event.target.value }))}
                      onBlur={() => updateOrderNote(item.id, noteDrafts[item.id] ?? item.note ?? "")}
                      placeholder="Add ons, rice choice, any special instructions :)"
                      rows="2"
                    />
                  </label>
                </div>
              </li>
              );
            })}
          </ul>
        )}

        {orderItems.length > 0 && (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/menu" className="rounded-lg border border-black/25 px-5 py-3 text-center text-lg font-semibold transition-colors hover:bg-black/5">
              ADD MORE TO ORDER
            </a>
            <button
              type="button"
              onClick={() => setShowPlaceOrderMessage(true)}
              className="flex-1 rounded-lg bg-[#4a4a4a] px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-black"
            >
              DONE
            </button>
          </div>
        )}
      </section>

      {showPlaceOrderMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="place-order-title"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 id="place-order-title" className="text-2xl font-bold">Ready to place your order?</h2>
            <p className="mt-3 text-black/70">
              This order list helps you get your order together. To place your order, please show this list to us at the register or read it from your phone when you call.
            </p>
            <p className="mt-4 font-semibold">China House</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=17+Hudson+Plz%2C+Fairburn%2C+GA+30213" target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm underline">
              17 Hudson Plz, Fairburn, GA 30213
            </a>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href="tel:+17709640099" className="rounded-lg bg-[#4a4a4a] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-black">
                Call (770) 964-0099
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=17+Hudson+Plz%2C+Fairburn%2C+GA+30213" target="_blank" rel="noreferrer" className="rounded-lg border border-black/25 px-5 py-2.5 font-semibold transition-colors hover:bg-black/5">
                Get Directions
              </a>
            </div>
            <button type="button" onClick={() => setShowPlaceOrderMessage(false)} className="mt-3 text-sm font-semibold underline">
              Close
            </button>
          </div>
        </div>
      )}
    </main>
    <Footer />
    </>
  );
} 
export default OrderListPage;
