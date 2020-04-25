import React, {useState, useEffect } from 'react'
import './Home'
import * as Yup from 'yup'
import axios from 'axios'


const Pizza = () => {

  // Setup a static URL for POST requests
  const url = 'https://reqres.in/api/users'


  // Setup Initial States TODO: refactor this for redux
  const [disableButton, setDisableButton] = useState(true)
  const [sendOrder, setSendOrder] = useState([])
  const [formInfo, setformInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    size: "",
    toppings: {
      peperoni: false,
      mushrooms: false,
      extraCheese: false,
    },
    glutenFree: false,
    specialInstructions: "",
    price: ""
  })

  // this state slice will handle our error reporting when validating the form with Yup
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  })

  // Define our Form Validation Schema
  const formSchema = Yup.object().shape({
    name: Yup.string().required().min(3, "Please enter a valid name"),
    email: Yup.string().email().required(),
  })



  // validate any changes made to the form against our Schema
  const validateChanges = e => {
    Yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [e.target.name] : ""
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name] : err.errors
      })
    })
  }

  useEffect(() => {
    formSchema.isValid(formInfo)
      .then(valid =>{
        setDisableButton(!valid)
      })
  }, [formInfo])

  // Once the form is submitted, we want to post the form to our order Database, and then clear the form TODO: Create Express App to store orders (for now, we yse reqers.in)
  const formSubmit = e => {
    e.preventDefault()
    axios
      .post(url, formInfo)
      .then(res => {
        setSendOrder([
          ...sendOrder,
          res.data
        ])

        setformInfo({
          name: "",
          email: "",
          address: "",
          phone: "",
          size: "",
          toppings: {
            peperoni: false,
            mushrooms: false,
            extraCheese: false,
          },
          glutenFree: false,
          specialInstructions: "",
          price: ""
        })
      })
      .catch(err => console.log(err))
  }

  // Now we need to handle the form itself - We want to populate state with the form values, as well as handle our checkboxes

  const onChange = e => {
    e.persist()
    const newFormInfo = {  // we're going to create a temporary object with our state until it passes validation, so we aren't mutating our state object
      ...formInfo,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }
    // Now we need to run our validations
    validateChanges(e)
    // and finally populate our state object
    setformInfo(newFormInfo)
  }


  return (
<div className = "pizzaForm">
    <h2>Order a Pizza!</h2>
    <form onSubmit = {formSubmit}>
      <label htmlFor = "name">
        Name:
        <input
        className = "formName"
        id = "name"
        type = "text"
        name = "name"
        value = {formInfo.name}  // We want to get the value from our state object so that it remains constant
        onChange = {onChange} />
        {errors.name.length > 0 ? (<p className = "error">{errors.name}</p>) : null}
      </label>
    </form>
</div>
)

}

export default Pizza

