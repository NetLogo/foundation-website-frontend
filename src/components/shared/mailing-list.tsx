import "./styles/mailing-list.css";
import { MauticMailingList } from "../shared/mautic-mailing-list";


const MailingList = () => {
    return (
        <div className="container w-100 py-5 font-inter" id="mailing-container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 ps-5 pb-3 mx-auto">
                    <h1 className="fw-bold text-start">Join our mailing list!</h1>
                    <p className="fw-medium description-text text-start" style={{ fontSize: "18px" }}>Join the NetLogo mailing list to keep up-to-date with what's happening in the NetLogo Community!</p>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
                    <MauticMailingList />
                </div>
            </div>
        </div>
    )
}

export { MailingList };
