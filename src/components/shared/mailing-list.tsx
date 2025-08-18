import "./styles/mailing-list.css";
import { Button } from "./button";
import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import NetLogoAPI from "../../utils/api";
import { getFormattedTimestamp } from "../../utils/datetime-utils";
/** force commit */


export interface MailingData {
  last_name: string;
  first_name: string;
  email: string;
  ip: string;
  country: string;
  time_stamp: string;
}





const MailingList = () => {

    const [statusCode, setStatusCode] = useState<number | null>(null);

    const [mailingData, setMailingData] = useState<MailingData>({
        last_name: "",
        first_name: "",
        email: "",
        ip: "",
        country: "",
        time_stamp: "",
    });

    // Handle all input changes
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>
        ) => {
        // track name, value, and type of input
        const { name, value, type } = e.target;

        // Update form data with new value
        setMailingData({
            ...mailingData,
            [name]: value
        });
    };

    const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const api = new NetLogoAPI();

        await fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
            mailingData.ip = data.ip;
            mailingData.country = data.country_name;
            mailingData.time_stamp = getFormattedTimestamp();
            });

        const result = api.sendMailingForm(mailingData);

        const result_status = (await result).status
        // return result_status
        // console.log('hi')
        // console.log((await result).status)

        setStatusCode(result_status);

          if (result_status === 200) {
            setMailingData({
            last_name: "",
            first_name: "",
            email: "",
            ip: "",
            country: "",
            time_stamp: "",
            });
        }
    }

    return(
        <div className="container w-100 py-5 font-inter" id="mailing-container">
            <form onSubmit={handleFormSubmission}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 ps-5 pb-3 mx-auto">
                        <h1 className="fw-bold text-start">Join our mailing list!</h1>
                        <p className="fw-medium description-text text-start" style={{fontSize:"18px"}}>Join the NetLogo mailing list to keep up-to-date with what's happening in the NetLogo Community!</p>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
                        <input type="text" name="first_name" value={mailingData.first_name} className="form-control w-75 mb-3" placeholder="First Name" onChange={handleInputChange}></input>
                        <input type="text" name="last_name" value={mailingData.last_name} className="form-control w-75 mb-3" placeholder="Last Name" onChange={handleInputChange}></input>
                        <input type="email" name="email" value={mailingData.email} className="form-control w-75 mb-3" placeholder="Email" onChange={handleInputChange}></input>


                        <div className="d-grid col-3">
                            <button className="btn btn-primary" type="submit">Join</button>
                        </div>
                    </div>
                </div>
            </form>
            {statusCode === 200 && (
                <p className="text-success mt-3 fw-semibold" style={{fontSize:"18px"}}>You have successfully joined the mailing list!</p>
            )}
            {statusCode && statusCode !== 200 && (
                <p className="text-danger mt-3 fw-semibold" style={{fontSize:"18px"}}>Something went wrong. Please try again.</p>
            )}

        </div>
    )
}

export { MailingList };
