
function App() {
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  
  return (
    <>
      <ul>
        {products.map((p, i) => (
          <li key={i} className="flex gp mb-10">
            <h2>{p.name}: </h2>
            <span>{p.price.toFixed(2)}€</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
