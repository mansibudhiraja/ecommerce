import { useState } from 'react'
import axios from "axios";

function Login(props) {

  const [loginForm, setloginForm] = useState({
    email: "",
    password: ""
  })

  async function logMeIn(event) {

    try{
      const response = await fetch('/token', 
      {
        method: 'POST',  headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: loginForm.email,
          password: loginForm.password}), 
      })
      if (response.ok){
          console.log(response)
          const jsonResponse = await response.json()
         
          props.setToken(jsonResponse.access_token)
      }

    }
    catch(err){
      console.log(err)
    }

    setloginForm(({
      email: "",
      password: ""}))

    event.preventDefault()
  }

  function handleChange(event) { 
    const {value, name} = event.target
    setloginForm(prevNote => ({
        ...prevNote, [name]: value})
    )}

    return (
      <div className="vh-100" style={{backgroundColor: "white"}}>
        <div className="container py-5 h-50">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card" style={{borderRadius: "1rem", backgroundColor: "white"}}>
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>
                    <p className="text-black-50 mb-5">Please enter your login and password!</p>
                    <div className="form-outline mb-4">
                          <input onChange={handleChange} type="email" text={loginForm.email} name="email" placeholder="Email" value={loginForm.email} />
                    </div>
                    <div className="form-outline mb-4">
                          <input onChange={handleChange} type="password" text={loginForm.password}  name="password"   placeholder="Password"  value={loginForm.password} />
                    </div>
                    <div className="pt-3 mb-4">
                      <button className="btn btn-primary btn-md btn-block" type="submit" onClick={logMeIn}>Login</button>
                    </div>
                    <p className="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                    <p className="text-black-50">Don't have an account? <a href="#!" className="link-primary text-50">Register here</a></p>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>
    );
}

export default Login;
