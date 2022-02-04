import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";




function Header(props) {

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
      <div style={{backgroundColor: 'black', color: 'white', textAlign: 'center', padding: "15px"}}>FREE SHIPPING ON ORDERS ABOVE $20</div>
            <button onClick={logMeOut}> 
                Logout
            </button>
      </div>
    )
}

export default Header;