import React from "react";

function PizzaForm({currentPizza, handleEditPizza, updatePizza}) {

  function handleToppingChange(e){
    handleEditPizza({
      ...currentPizza,
      topping: e.target.value
    })
  }

  function handleSizeChange(e){
    handleEditPizza({
      ...currentPizza,
      size: e.target.value
    })
  }

  function handleVegChange(e){
    handleEditPizza({
      ...currentPizza,
      vegetarian: e.target.value === "Vegetarian"
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    updatePizza(currentPizza, currentPizza.topping, currentPizza.size, currentPizza.vegetarian)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={currentPizza.topping}
            onChange={handleToppingChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={currentPizza.size} onChange={handleSizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={currentPizza.vegetarian}
              onChange={handleVegChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!currentPizza.vegetarian}
              onChange={handleVegChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
