import React, { useState } from 'react';
import './index.css'



function Register({ onRegister }) {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [nameError,setNameError] = useState(false)
    const [contactError, setContactError] = useState(false)
  
    const handleRegister = (event) => {
        event.preventDefault();

        if(!name){
            setNameError(true)
        }else if(!contactNumber){
            setContactError(true)
        }else{
            const newUser = {
                name,
                contactNumber
            }
            onRegister(newUser)
        }
    };

    const gettingUserName = (event) =>{
        setName({name:event.target.value})
    }

    const gettingMobileDetails = (event) =>{
        setContactNumber({contactNumber:event.target.value})
    }


  
    return (
       
    <div className="app-container">
        <div className="login-block-container">
            <div className="login-image-block">
                <img src="https://res.cloudinary.com/dywtmmtyj/image/upload/v1691388223/End_of_school-rafiki_eo2ev8.png" alt="login" className="login-image"/>
            </div>
            <div className="login-fields-block">
                <img src="https://res.cloudinary.com/bhanu-prakash/image/upload/v1691396280/hat_y9zrgk.png" alt="Hat" className="grad-hat"/>
                <h2 className="login">Login</h2>
                <form className="form-section" onSubmit={handleRegister}>
                    <input type="text" id="username" className="input-field"  placeholder="Username" onChange={gettingUserName} />
                    {nameError === true ? (<p  className="error-mesg" > Username is required*.</p>):(<p></p>)}
                    <div className="password-block">
                    <input type="number" placeholder="Mobile Number"   className="input-field" onChange={gettingMobileDetails}/>
                    </div>
                    {contactError === true ? (<p  className="error-mesg"> Mobile Number is required*.</p>):(<p></p>)}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Register