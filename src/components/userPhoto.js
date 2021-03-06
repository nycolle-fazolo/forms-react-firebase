import React, { useState } from "react";
import '../screens/App.css';

export default function Photo ({edit, onChange}) {
    // state={        profileImg: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png';    }
    const [profileImg, setProfileImg] = useState(edit ? edit : 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png');

    const imageHandler = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            
                if(reader.readyState === 2){
                    //this.setState({profileImg: reader.result})
                    setProfileImg(reader.result)
                    onChange(reader.result)
                    console.log(profileImg)
                }
            
        }
        reader.readAsDataURL(event.target.files[0])        
    }

    //render() {
        //const {profileImg} = this.state

        return (
                <div className="container">
                    <div className="img-holder">
                        <img src={profileImg} alt="" id="img" className="img" ></img>
                    </div>
                    <input type="file" name="image-upload" id="input" accept="image/*"
                        onChange={imageHandler}></input>
                    <div className="label">
                        <label htmlFor="input" className="image-upload">
                            <i className="material-icons">
                                add_photo_alternate
                            </i>
                            Choose your photo
                        </label>
                    </div>
                </div>
        )
    //}
}