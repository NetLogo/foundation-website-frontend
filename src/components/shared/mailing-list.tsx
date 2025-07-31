import "./styles/mailing-list.css";
import { Button } from "./button";
import React, { useState } from 'react';
/** force commit */

const MailingList = () => {
    const [email, setEmail] = useState("");

    const handleJoin = () => {
        setEmail(""); // Clear the input field
        //HANDLE ADDING THE EMAIL TO THE LIST 
    }

    return(
        <div className="container w-100 py-5 font-inter" id="mailing-container">
            <div className="row">
                <div className="col-lg-6 ps-5">
                    <h1 className="text-start fw-bold">Join our mailing list!</h1>
                    <p className="fs-6 fw-medium description-text text-start">Join the NetLogo mailing list to keep up-to-date with what's happening in the NetLogo Community!</p>
                </div>
                <div className="col-lg-6">
                    <input type="text" className="form-control w-75 mb-3" placeholder="First Name"></input>
                    <input type="text" className="form-control w-75 mb-3" placeholder="Last Name"></input>
                    <input type="email" className="form-control w-75 mb-3" placeholder="Email"></input>

                <Button 
                    colorClass="blue-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="JOIN"
                    onClick={handleJoin}
                />
                </div>
            </div>

        </div>
    )
}

export { MailingList };
