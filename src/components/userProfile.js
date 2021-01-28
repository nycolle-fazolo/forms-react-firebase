import React, { useState, useMemo, useEffect } from 'react';
import {dataBase} from '../firebase';

const UserProfile = () => {
        
    //const [userid, setUserId] = useState("");
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [loader, setLoader] = useState(null);

    const handleFormSubmit = (event) => {

        event.preventDefault();
        setLoader(true);

        dataBase.collection('user-profile')
        .add({
            fullname: fullname,
            email: email,
            mobile: mobile,
            address: address,
        })
        .then(() => {
            setLoader(false);
            alert(loader == null ? 'Profile Created!' : 'Profile Saved!');
        })
        .catch(error => {
            setLoader(false);
            alert(error.message);
        });
    }


    return ( 
        <div className="wrap-page">
            <form className="page-form" onSubmit={handleFormSubmit}>
                <h1 className="form-title p-b-32">Welcome, finish your profile.</h1> 
                <br></br>                
                <label className="txt">Full Name </label>            
                <input class="input1" placeholder="Full Name" name="fullname" 
                        value={fullname} 
                        onChange={(event) => setFullName(event.target.value)}/> 
                <label className="txt">Email </label>            
                <input class="input1" placeholder="Email" name="email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/> 
                <label className="txt">Phone </label>            
                <input class="input1" placeholder="Mobile" name="mobile" 
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}/> 
                <label className="txt">Address </label>            
                <input class="input1" placeholder="Address" name="address" 
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}/> 
                <br></br> 

                <input class="page-form-btn" type="submit" value={ loader == null ? "Create" : "Save" } 
                        style={{ background : loader ? "#ccc" : "#0189E7" }}/>            

            </form>
        </div> 
    );
};

export default UserProfile;