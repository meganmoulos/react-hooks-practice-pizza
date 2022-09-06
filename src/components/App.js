import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [currentPizza, setCurrentPizza] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(data => setPizzas(data))
  }, [])

  function handleEditPizza(pizza){
    setCurrentPizza({...pizza})
  }
  
  function updatePizza(selectedPizza, topping, size, vegetarian){
    fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: topping,
        size: size,
        vegetarian: vegetarian,
      })
      })
      .then(res => res.json())
      .then((updatedData) => {
        const updatedPizzas = [...pizzas, updatedData]
        setPizzas(updatedPizzas)
    })
  }

  return (
    <>
      <Header />
      {currentPizza ? <PizzaForm currentPizza={currentPizza} handleEditPizza={handleEditPizza} updatePizza={updatePizza}/> : null}
      <PizzaList pizzas={pizzas} handleEditPizza={handleEditPizza}/>
    </>
  );
}

export default App;
