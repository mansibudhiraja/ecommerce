import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";




function Logout(props) {

  async function logMeOut() {
    try{
        const response = await fetch('/logout', {method: 'POST'})
        if (response.ok){
           props.token()
        }
      }
      catch(err){
        console.log(err)
      }
  }

    return(
      <div>
          <button onClick={logMeOut}> 
              Logout
          </button>
      </div>
    )
}

export default Logout;