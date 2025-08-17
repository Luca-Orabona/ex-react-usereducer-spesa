import { useState } from "react";

function App() {

  const [addedProducts, setAddedProducts] = useState([]);


  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const addToCart = (product) => {
    const productToAdd = addedProducts.find(p => p.name === product.name);
    if (!productToAdd) {
      setAddedProducts(curr => [...curr, { ...product, quantity: 1 }])
    }
  };
  console.log(addedProducts);


  return (
    <>
      <ul>
        {products.map((p, i) => (
          <li key={i} className="flex gp mb-10">
            <h2>{p.name}: </h2>
            <span>{p.price.toFixed(2)}€</span>
            <button className="ms-15" onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>

      {addedProducts.length > 0 &&
        <ul>
          <li className="text-center"><h1>Carrello</h1></li>
          {addedProducts.map((p, i) => (
            <li key={i} className="bg-green p-10 mb-10">
              <div className="flex gp mb-10">
                <h2>{p.name}: </h2>
                <span>{p.price.toFixed(2)}€</span>
              </div>
              <p>Quantità: {p.quantity}</p>
            </li>
          ))}
        </ul>}
    </>
  )
}

export default App
