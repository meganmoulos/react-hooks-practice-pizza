import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, handleEditPizza}) {
    
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map(pizza => <Pizza key={pizza.id + pizza.topping} pizza={pizza} handleEditPizza={handleEditPizza}/>)
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
