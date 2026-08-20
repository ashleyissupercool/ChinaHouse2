import { useEffect, useState } from "react";
import { OrderContext } from "./order.js";
const storageKey = "china-house-order";

export function OrderProvider({ children }) {
  const [orderItems, setOrderItems] = useState(() => {
    try {
      const savedOrder = localStorage.getItem(storageKey);
      return savedOrder ? JSON.parse(savedOrder) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(orderItems));
  }, [orderItems]);

  function addToOrder(item, option, quantity = 1, note = "") {
    const cleanedNote = note.trim();
    const baseOrderId = option ? `${item.id}-${option.id}` : item.id;
    const orderId = cleanedNote ? `${baseOrderId}::${cleanedNote.toLowerCase()}` : baseOrderId;
    const price = option ? option.price : item.price;

    setOrderItems((currentOrder) => {
      const existingItem = currentOrder.find((orderItem) => orderItem.id === orderId);

      if (existingItem) {
        return currentOrder.map((orderItem) =>
          orderItem.id === orderId
            ? { ...orderItem, quantity: orderItem.quantity + quantity }
            : orderItem
        );
      }

      return [
        ...currentOrder,
        {
          id: orderId,
          menuItemId: item.id,
          name: item.name,
          optionId: option?.id ?? null,
          selectedOption: option?.label ?? null,
          note: cleanedNote,
          price,
          quantity,
        },
      ];
    });
  }

  function changeQuantity(orderId, change) {
    setOrderItems((currentOrder) =>
      currentOrder
        .map((orderItem) =>
          orderItem.id === orderId
            ? { ...orderItem, quantity: orderItem.quantity + change }
            : orderItem
        )
        .filter((orderItem) => orderItem.quantity > 0)
    );
  }

  function changeOrderOption(orderId, item, option) {
    setOrderItems((currentOrder) => {
      const itemBeingChanged = currentOrder.find((orderItem) => orderItem.id === orderId);
      const noteKey = itemBeingChanged.note?.trim().toLowerCase();
      const baseOrderId = `${item.id}-${option.id}`;
      const newOrderId = noteKey ? `${baseOrderId}::${noteKey}` : baseOrderId;

      if (newOrderId === orderId) return currentOrder;

      const matchingItem = currentOrder.find((orderItem) => orderItem.id === newOrderId);

      if (matchingItem) {
        return currentOrder
          .filter((orderItem) => orderItem.id !== orderId)
          .map((orderItem) =>
            orderItem.id === newOrderId
              ? { ...orderItem, quantity: orderItem.quantity + itemBeingChanged.quantity }
              : orderItem
          );
      }

      return currentOrder.map((orderItem) =>
        orderItem.id === orderId
          ? {
              ...orderItem,
              id: newOrderId,
              menuItemId: item.id,
              optionId: option.id,
              selectedOption: option.label,
              price: option.price,
            }
          : orderItem
      );
    });
  }

  function updateOrderNote(orderId, note) {
    const cleanedNote = note.trim();

    setOrderItems((currentOrder) => {
      const itemBeingUpdated = currentOrder.find((orderItem) => orderItem.id === orderId);
      const baseOrderId = itemBeingUpdated.optionId
        ? `${itemBeingUpdated.menuItemId}-${itemBeingUpdated.optionId}`
        : itemBeingUpdated.menuItemId;
      const newOrderId = cleanedNote ? `${baseOrderId}::${cleanedNote.toLowerCase()}` : baseOrderId;
      const matchingItem = currentOrder.find((orderItem) => orderItem.id === newOrderId);

      if (newOrderId !== orderId && matchingItem) {
        return currentOrder
          .filter((orderItem) => orderItem.id !== orderId)
          .map((orderItem) =>
            orderItem.id === newOrderId
              ? { ...orderItem, quantity: orderItem.quantity + itemBeingUpdated.quantity }
              : orderItem
          );
      }

      return currentOrder.map((orderItem) =>
        orderItem.id === orderId ? { ...orderItem, id: newOrderId, note: cleanedNote } : orderItem
      );
    });
  }

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder, changeQuantity, changeOrderOption, updateOrderNote }}>
      {children}
    </OrderContext.Provider>
  );
}
