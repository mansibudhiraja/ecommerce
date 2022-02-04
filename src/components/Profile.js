import React, {useState} from 'react'

const Profile = (props) =>{
  const [profileData, setProfileData] = useState(null)
   
  const getData = async () => {
    try{
        const response = await fetch('/profile',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + props.token
          }
        })
        if (response.ok){
            const jsonResponse = await response.json()
            jsonResponse.access_token && props.setToken(jsonResponse.access_token)
            setProfileData({profileName: jsonResponse.name,
            aboutMe: jsonResponse.about})
        }

      }
      catch(err){
        console.log(err)
      }
  }
  
return (
    <div className="App">
      <header className="App-header">
          <p>to get your profile details</p>
          <button onClick={getData}>clickme</button>
          {profileData && <div>
              <p>Profile name: {profileData.profileName}</p>
              <p>About me: {profileData.aboutMe}</p>
            </div>
        }
     
      </header>
    </div>
  )
    }

  export default Profile