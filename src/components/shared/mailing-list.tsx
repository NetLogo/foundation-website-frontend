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
        <div className="mailing-list-section">
            <div className="mailing-list-body">
                 <div className="mailing-list-content">
                     <div className="mailing-list-text-cont">
                         <span className="mailing-list-title">
                             Join our mailing list! 
                         </span>
                         <span className="mailing-list-descript">
                             Join the NetLogo mailing list to keep up-to-date with what’s happening in the NetLogo Community!
                         </span>
                     </div>

                     <div className="mailing-list-input-cont">
                        <span className="mailing-list-input-text">
                            YOUR EMAIL
                        </span>
                        <input 
                            className="mailing-list-input-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
        </div>
    )
}

export { MailingList };
