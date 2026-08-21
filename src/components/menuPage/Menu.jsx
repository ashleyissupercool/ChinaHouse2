import { useState } from "react";
import { useOrder } from "../../context/order.js";

function QuantityControl({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="mt-0.5 flex h-[27px] w-fit items-center overflow-hidden rounded-md border border-black/20 bg-white text-xs sm:mt-1 sm:h-[42px] sm:rounded-lg sm:text-base">
      <button type="button" onClick={onDecrease} disabled={quantity === 1} className="h-full w-6 border-r border-black/20 font-bold disabled:text-black/25 sm:w-9">−</button>
      <span className="flex w-6 justify-center sm:w-9">{quantity}</span>
      <button type="button" onClick={onIncrease} className="h-full w-6 border-l border-black/20 font-bold sm:w-9">+</button>
    </div>
  );
}

function Menu({ selectedCategory, items }) {
  const { addToOrder } = useOrder();
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [itemToCustomize, setItemToCustomize] = useState(null);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [customQuantity, setCustomQuantity] = useState(1);
  const [addedItemName, setAddedItemName] = useState(null);

  function handleAdd(item) {
    const quantity = Number(selectedQuantities[item.id] ?? 1);
    addToOrder(item, undefined, quantity);
    setAddedItemName(item.name);
  }

  function openOptions(item) {
    setItemToCustomize(item);
    setSelectedOptionId(item.options[0].id);
    setCustomQuantity(1);
  }

  function addCustomItem() {
    const option = itemToCustomize.options.find((itemOption) => itemOption.id === selectedOptionId);
    addToOrder(itemToCustomize, option, customQuantity);
    setAddedItemName(itemToCustomize.name);
    setItemToCustomize(null);
  }

  return (
    <section className="relative mx-auto mt-3 h-[calc(100dvh-185px)] min-h-[360px] w-full max-w-[1204px] overflow-y-auto rounded-[15px] border border-solid border-[#00000052] bg-[#f8dede] p-2 sm:mt-8 sm:h-auto sm:min-h-[692px] sm:overflow-visible sm:p-[30px]" aria-label={`${selectedCategory} menu items`} aria-live="polite">
      {selectedCategory === "Lunch Special" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Lunch Specials</h2>
          <p className="mt-1 text-sm font-semibold sm:text-base">Monday – Saturday · 11:00 AM – 3:00 PM</p>
          <p className="mt-2 text-xs text-black/70 sm:text-sm">Served with Fried Rice and a drink of choice.</p>
          <p className="text-xs text-black/70 sm:text-sm">Add Shrimp or Beef Fried Rice for $1.50 (add to note).</p>
        </div>
      )}
      {selectedCategory === "Dinner Combo" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Combination</h2>
          <p className="mt-1 text-sm font-semibold sm:text-base">Serving All Day</p>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with Fried Rice and an egg roll.</p>
          <p className="text-xs text-black/70 sm:text-sm">Add Shrimp or Beef Fried Rice for $1.50 (add to note).</p>
        </div>
      )}
      {selectedCategory === "Soups" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Soup</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with crispy noodles.</p>
        </div>
      )}
      {selectedCategory === "Egg Foo Young" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Egg Foo Young</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with white rice.</p>
          <p className="text-xs text-black/70 sm:text-sm">Each order includes three patties.</p>
        </div>
      )}
      {selectedCategory === "Vegetable" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Vegetable</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with white rice.</p>
        </div>
      )}
      {selectedCategory === "Poultry" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Poultry</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with white rice.</p>
        </div>
      )}
      {selectedCategory === "Mei Fun" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Mei Fun</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Thin rice noodles.</p>
        </div>
      )}
      {selectedCategory === "Shrimp" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Shrimp</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with white rice.</p>
        </div>
      )}
      {selectedCategory === "Sweet & Sour" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Sweet &amp; Sour</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with white rice.</p>
        </div>
      )}
      {selectedCategory === "Beef" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Beef</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with white rice.</p>
        </div>
      )}
      {selectedCategory === "Chefs Specialties" && (
        <div className="mb-3 rounded-lg border border-black/15 bg-white/70 p-3 text-center sm:mb-5 sm:rounded-xl sm:p-5">
          <h2 className="text-lg font-bold sm:text-2xl">Chef&apos;s Specialties</h2>
          <p className="mt-1 text-xs text-black/70 sm:text-sm">Served with white rice.</p>
        </div>
      )}
      {items.length === 0 ? (
        <p className="py-12 text-center text-lg text-black/60">No items have been added to this category yet.</p>
      ) : (
        <div className="grid gap-2 sm:gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} className="flex flex-col rounded-lg border border-black/15 bg-white/70 p-2 shadow-sm sm:rounded-xl sm:p-5">
              <h2 className={`flex items-center gap-1 text-sm font-bold sm:gap-2 sm:text-xl ${item.spicy ? "text-red-600" : ""}`}>
                {item.name}
                {item.spicy && <span role="img" aria-label="Spicy">🌶️</span>}
              </h2>
              {item.description && <p className="mt-1 text-xs text-black/65 sm:text-sm">{item.description}</p>}
              {item.options ? (
                <>
                  <p className="mt-2 text-xs text-black/65 sm:mt-4 sm:text-sm">{item.optionPrompt ?? "Choose how you would like your order served."}</p>
                  <div className="mt-auto pt-3 sm:pt-5">
                    <button type="button" onClick={() => openOptions(item)} className="w-full rounded-md bg-[#4a4a4a] px-2 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-black sm:rounded-lg sm:px-4 sm:py-2.5 sm:text-base">Choose Options</button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-2 text-sm font-semibold sm:mt-4 sm:text-lg">${item.price.toFixed(2)}</p>
                  <div className="mt-auto flex gap-3 pt-2 sm:gap-5 sm:pt-5">
                    <div className="w-[66px] text-[11px] font-medium sm:w-24 sm:text-sm">Quantity
                      <QuantityControl
                        quantity={selectedQuantities[item.id] ?? 1}
                        onDecrease={() => setSelectedQuantities((current) => ({ ...current, [item.id]: Math.max(1, (current[item.id] ?? 1) - 1) }))}
                        onIncrease={() => setSelectedQuantities((current) => ({ ...current, [item.id]: (current[item.id] ?? 1) + 1 }))}
                      />
                    </div>
                    <button type="button" onClick={() => handleAdd(item)} className="h-[27px] flex-1 self-end rounded-md bg-[#4a4a4a] px-2 text-xs font-semibold text-white transition-colors hover:bg-black sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-base">Add to Order</button>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      )}

      {itemToCustomize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4" role="dialog" aria-modal="true" aria-labelledby="choose-options-title">
          <div className="max-h-[85dvh] w-full max-w-[480px] overflow-y-auto rounded-2xl bg-white p-5 shadow-xl sm:p-6">
            <h2 id="choose-options-title" className="text-xl font-bold sm:text-2xl">{itemToCustomize.name}</h2>
            <p className="mt-1 text-sm text-black/65">Choose an option</p>
            <div className="mt-4 grid gap-2">
              {itemToCustomize.options.map((option) => (
                <button key={option.id} type="button" onClick={() => setSelectedOptionId(option.id)} className={`flex items-center justify-between rounded-lg border px-3 py-3 text-left text-sm transition-colors sm:text-base ${selectedOptionId === option.id ? "border-[#4a4a4a] bg-[#4a4a4a] text-white" : "border-black/20 hover:bg-black/5"}`}>
                  <span>{option.label}</span><span className="font-semibold">${option.price.toFixed(2)}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex items-end gap-5 sm:gap-6">
              <div className="w-24 text-sm font-medium">Quantity
                <QuantityControl quantity={customQuantity} onDecrease={() => setCustomQuantity((quantity) => Math.max(1, quantity - 1))} onIncrease={() => setCustomQuantity((quantity) => quantity + 1)} />
              </div>
              <button type="button" onClick={addCustomItem} className="flex-1 rounded-lg bg-[#4a4a4a] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-black">Add to Order</button>
            </div>
            <button type="button" onClick={() => setItemToCustomize(null)} className="mt-3 w-full rounded-lg border border-black/25 px-4 py-2 font-semibold transition-colors hover:bg-black/5">Cancel</button>
          </div>
        </div>
      )}

      {addedItemName && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4" role="dialog" aria-modal="true" aria-labelledby="added-to-order-title">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 id="added-to-order-title" className="text-2xl font-bold">Added to your order</h2>
            <p className="mt-2 text-black/70">{addedItemName} has been added.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href="/order-list" className="rounded-lg bg-[#4a4a4a] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-black">View Order List</a>
              <button type="button" onClick={() => setAddedItemName(null)} className="rounded-lg border border-black/25 px-5 py-2.5 font-semibold transition-colors hover:bg-black/5">Keep Browsing</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Menu;
