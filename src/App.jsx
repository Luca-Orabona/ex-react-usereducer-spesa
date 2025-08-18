import { useState } from "react";

function App() {

  const [addedProducts, setAddedProducts] = useState([]);


  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const updateProductQuantity = (prodottoCarrello, quantity) => {
    if(quantity < 1) {
      return
    }
    setAddedProducts(curr => {
      return curr.map(p =>
        p.name === prodottoCarrello.name
          ? { ...p, quantity}
          : p
      )
    })
  };

  const addToCart = (product) => {
    const productToAdd = addedProducts.find(p => p.name === product.name);
    if (!productToAdd) {
      setAddedProducts(curr => [...curr, { ...product, quantity: 1 }])
    } 
    // else {
    //   updateProductQuantity(productToAdd)
    // }
  };

  const removeFromCart = (prodotto) => {

    setAddedProducts(curr => {
      return curr.filter(p => p.name !== prodotto.name);
    })
  }

  const totalPrice = () => {
    return addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0)
  };



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
            <li key={i} className="flex align-center justify-space-between bg-green p-10 mb-10">
              <div>
                <div className="flex gp mb-10">
                  <h2>{p.name}: </h2>
                  <span>{p.price.toFixed(2)}€</span>
                </div>
                <p>Quantità: <input className="quantity" type="number" value={p.quantity} onChange={e => updateProductQuantity(p, Number(parseInt(e.target.value)))}/></p>
              </div>

              <button onClick={() => removeFromCart(p)}>Rimuovi</button>
            </li>
          ))}
          <li className="flex justify-center gp ">
            <h2>Prezzo totale:</h2>
            <span style={{ fontWeight: 600, fontSize: `1.2rem` }}>{totalPrice().toFixed(2)}€</span>
          </li>
        </ul>}
    </>
  )
}

export default App
