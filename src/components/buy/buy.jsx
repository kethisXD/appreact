import React, { useState } from "react";
import styles from "./buy.module.css";


const initialData = [
  { id: 1, name: "Велосипед", price: 1000, count: 0 },
  { id: 2, name: "Самокат", price: 700, count: 0 },
  { id: 3, name: "Ролики", price: 1300, count: 0 },
  { id: 4, name: "Сноуборд", price: 19000, count: 0 }
];

const Buy = () => {
  // Храним товары в состоянии
  const [products, setProducts] = useState(initialData);

  // Функция добавления нового товара



  const handleIncrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          return product.count < 25
            ? { ...product, count: product.count + 1 }
            : product; // если count уже 25, не изменяем
        }
        return product;
      })
    );
  };

  // Уменьшение count (если становится 0 — удаляем товар)
  const handleDecrement = (id) => {
    setProducts((prevProducts) => {
      const updated = prevProducts.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1;
          return newCount < 1 ? null : { ...product, count: newCount };
        }
        return product;
      });
      // Фильтруем null (товар, у которого count стал 0)
      return updated.filter(Boolean);
    });
  };



  return (
    <div>
      <div className={styles.buyContainer}>
        <h1>Прокат</h1>
      </div>

      {/* Отображаем товары */}
      <div className={styles.gridContainer}>
        {products.map((item) => (
          <div
            key={item.id}
            className={styles.gridItem}

            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", textAlign: "center" }}
          >
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Count: {item.count}</p>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <button onClick={() => handleIncrement(item.id)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
