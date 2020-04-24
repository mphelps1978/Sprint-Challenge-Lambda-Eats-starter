import React, { useState } from 'react'


export default function Pizza()  {

  const sizes = ['small', 'medium', 'large']
  const sauce = ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo']
  const availableToppings = ['Peperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onions', 'Green Pepper', 'Diced Tomatos', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese Blend', 'Pineapple', 'Extra Cheese']

  const [gfCrust, setgfCrust] = useState (false)
  const [toppings, setToppings] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [pizza, setPizza] = useState({
    quantity: quantity,
    size: sizes,
    sauce: sauce,
    toppings: toppings,
    glutenFree: gfCrust,
    instructions: '',
    totalPrice: 17.99 * quantity
  })

  return (
 <></>


  )
}