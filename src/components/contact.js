import React, { useState } from 'react';
import {dataBase} from '../firebase';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoader(true);

        dataBase.collection('contacts')
        .add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            setLoader(false);
            alert('Message submitted!');
        })
        .catch(error => {
            setLoader(false);
            alert(error.message);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us.</h1>
            <label>Name</label>
            <input placeholder="name" value={name} 
                onChange={(event) => setName(event.target.value)}/>

            
            <label>Email</label>
            <input placeholder="email" value={email} 
                onChange={(event) => setEmail(event.target.value)}/>

            
            <label>Message</label>
            <textarea placeholder="message" value={message} 
                onChange={(event) => setMessage(event.target.value)}></textarea>

            <button type="submit" 
                style={{ background : loader ? "#ccc" : "#0189E7" }}>
                    Submit</button>
        </form>
    );
};

export default Contact;