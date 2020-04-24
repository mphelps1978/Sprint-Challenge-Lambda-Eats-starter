import React, { useState } from 'react'
import toppingsList from './toppingsList'


export default function Pizza()  {

  const sizes = ['small', 'medium', 'large']
  const sauce = ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo']
  const availableToppings = toppingsList
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
    e.target.checked = !e.target.checked
    toppings.push(e.target.label)
  }

  const handleInputChange = e => {
    setPizza({ ...pizza, [e.target.name]: e.target.value })
    console.log(pizza);

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
          availableToppings.forEach(topping => {
            return(
              <div className = "checkBoxes" key = {topping.name}>
                {topping.name}
                <input
                  label={topping.name}
                  name = {topping.name}
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