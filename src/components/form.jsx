import React, {useState} from 'react'
import '../Style/form.css'

function Form() {
    const [name, setName] = useState ("")
    const [number, setNumber] = useState ("")
    const [age, setAge] =useState ("")
    const [email, setEmail] = useState ("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
   
  return (
    <div className='container'>

<h1>Registration Form</h1>

<p>Please fill in this form to create an account</p>

      <form action="" className='form'
      >
        <label htmlFor="">
          Enter Name 
          <input className='input' type="text" placeholder='Enter Name'
          value={name} onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Enter Number 
          <input className='input' type="number" 
          placeholder='Enter Number' required
          value={number} onChange={(e) => setNumber(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Enter Age 
          <input className='input' type="number" 
          placeholder='Enter Age' required
          value={age}onChange={(e) => setAge(e.target.value)}
          />
      </label>

      <label htmlFor="">
        Email 
        <input className='input' type="text"
        placeholder='Enter Email'
        value={email}onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Address
        <input className='input' type="text"
        placeholder='Enter Address'
        value={address}onChange={(e) => setAddress(e.target.value)}
        />

      </label>

      <label>
        Password 
      <input className='input' type="text"
      placeholder='Enter Password'
      value={password}onChange={(e) => setAddress.target.value}
      />
      </label>

      <p>By creating an acount you agree to our <a href="#">Terms & Privacy</a>. </p>

      <button type='submit' className='regbtn'>Register</button>

      <div className='signin'>

    <p>Already have an account? <a href="#">Sign in</a></p>

      </div>
  
      </form>
    </div>
  )
}

export default Form