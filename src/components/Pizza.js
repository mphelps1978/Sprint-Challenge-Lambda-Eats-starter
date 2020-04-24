import React, { useState } from 'react'


export default function Pizza()  {

  const sizes = ['small', 'medium', 'large']
  const sauce = ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo']
  const availableToppings = ['Peperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onions', 'Green Pepper', 'Diced Tomatos', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese Blend', 'Pineapple', 'Extra Cheese']
  const [toppings, setToppings] = useState([])

  const [pizza, setPizza] = useState({
    quantity: "",
    size: "",
    sauce: "",
    toppings: toppings,
    glutenFree: "",
    instructions: '',
    totalPrice: ""
  })

  const handleToppingChange = e => {
    setToppings(toppings.push(e.target.label))
  }

  const handleInputChange = e => {
    setPizza({ ...pizza, [e.target.name]: e.target.value })
  }

  return (
    <div>

    <h1>PIZZA</h1>
    <form>
      <select id = "size" name = "size">
      {
        sizes.map(size => {
          return (<option key = {size} value = {size} name = {size}>{size}</option>)
        })
      }
      </select>

      <select id = "sauce" name = "sauce">
        {
          sauce.map(sauce => {
            return(<option key = {sauce} value = {sauce} name = {sauce}>{sauce}</option>)
          })
        }
      </select>

      <label>
        Topppings:
        {
          availableToppings.map(topping => {
            return(
              <div className = "checkBoxes" key = {topping}>
                {topping}
                <input
                  label={topping}
                  name = {topping}
                  type = "checkbox"
                  checked = {false}
                  onChange = {handleToppingChange} />
                </div>

              )
          })
        }
      </label>
      <label>
        Would you like a Gluten Free Crust?
        <input
        type = "checkbox"
        name = "glutenFree"
        value = "true"
        onChange = {handleInputChange} />
      </label>


      <label>
        Special Instructions:
        <input
        type = "text"
        id = "instructions"
        name = "instructions"
        value = {pizza.instructions}
        onChange = {handleInputChange} />
      </label>

      <label>
        Quantity:
        <input
          type = "number"
          id = "number"
          name = "quantity"
          min = "1"
          max = "100"
          value = {pizza.quantity}
          onChange = {handleInputChange} />
      </label>
      
      <div className = "total">
        Total Price: {17.95 * pizza.quantity}
      </div>
      </form>
    </div>


 )
}