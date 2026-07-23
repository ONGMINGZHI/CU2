import { useState } from "react";

function App() {
    // Test data - Do not modify
    const items = [
        { id: 1, name: "T-shirt", price: 20, onSale: true },
        { id: 2, name: "Jeans", price: 50, onSale: false },
        { id: 3, name: "Socks", price: 5, onSale: true },
        { id: 4, name: "Hat", price: 15, onSale: false },
        { id: 5, name: "Shoes", price: 65, onSale: true },
    ];

    // From here,we know that showSaleItems Only = false
    const [showSaleItemsOnly, setShowSaleItemsOnly] = useState(false);

    const displayedItems = showSaleItemsOnly ? items.filter((item) => item.onSale) : items;

    return (
        <div className="container mt-4">
            <h1>Shopping Cart</h1>
            <button className="btn btn-primary textcenter mt-2 my-2" 
            // From here we know that all items are shown when !showSaleItemsOnly, because this means !false ,which =true, so become setShowSaleItemsOnly(true), which is showSaleItemsOnly =true -->This will just show the sale items only
            onClick={() => setShowSaleItemsOnly(!showSaleItemsOnly)}>
                {showSaleItemsOnly ? "Show All Items" : "Show Sale Items Only"}
            </button>
            <ul className="list-unstyled d-flex flex-column gap-3">
                {displayedItems.map((item) => (
                    <li className="p-2 border rounded d-flex shadow-sm justify-content-between align-item-center" key={item.id}>
                      <div className="d-flex align-items-center gap-2">
                            <span>{item.name}</span>
                            {item.onSale && (
                                <div className="d-inline-block bg-danger px-2 py-1 text-white rounded small fw-bold">
                                    On Sale!
                                </div>
                            )}
                        </div>
                        <strong className="text-right">${item.price}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
