import {useState} from 'react'

function Register(props){
    const [registerForm, setregisterForm] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password: ""
    })

    async function registerMe(event){
        try{
            const response = await fetch('/register', 
            {
              method: 'POST',  headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName: registerForm.firstName,
                lastName: registerForm.lastName,
                email: registerForm.email,
                password: registerForm.password}), 
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
          setregisterForm(({
            firstName: "",
            lastName: "",
            email:"",
            password: ""}))
      
          event.preventDefault()

    }

    function handleChange(event){
        const{value, name} = event.target
        setregisterForm(prevNote => (
            {...prevNote, [name]: value}
        ))
    }

    return(
        <div className="vh-100">
            <div className="container py-5 h-50">
                <div className="row d-flex justify-content-center align-items-center h-100">
                   <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card" style={{borderRadius: "1rem", backgroundColor: "white"}}>
                        <div className="card-body p-5 text-center">
                            <h3 className="mb-2">Register Account</h3>
                            <p className="text-black-50 mb-4">Please enter your details to register</p>
                            <form>
                                    <div className="form-outline mb-4">
                                        <input type="text" placeholder="First Name" name="firstName" value={registerForm.firstName} onChange={handleChange}/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" placeholder="Last Name" name="lastName" value={registerForm.lastName} onChange={handleChange}/>           
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" placeholder="email" name="email" value={registerForm.email} onChange={handleChange}/>             
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" placeholder="password" name="password" value={registerForm.password} onChange={handleChange}/>
                                    </div>
                                    <div className="pt-1 mb-4">
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={registerMe}>Register</button>
                                    </div>
                            </form>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;