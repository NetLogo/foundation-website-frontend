import "./styles/download-section.css";
import ContentImageLayout from "../shared/content-image-layout";
import { useState, useEffect } from "react";

const ThankYouSection = () => {

    // const [downloadinURL, setDownloadinURL] = useState(false);
    const [downloadValue,  setdownloadValue] = useState<string | null>(null);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setdownloadValue(urlParams.get("download_url"));
        }, []);

    useEffect(() => {
        if (downloadValue) {
            try {
                // setDownloadinURL(true);
                const link = document.createElement("a");
                link.href = atob(downloadValue);
                link.download = "";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            catch (error) {
                console.error("Invalid download URL:", error);
            }}

        else {
            return;
        }
        }, [downloadValue]);

    const DownloadAgain = () => {
        if (downloadValue) {
        return (
            <p className="text-start pt-5">If your download didn't work,{" "}<a href={atob(downloadValue)}>click here</a></p>
        );
        } else {
        return (
            <p className="text-start pt-5">You may not have downloaded before coming to this page.{" "}<a href="/download">Click here</a>{" "}
            to go to the download page.</p>
        )
        }
    };

    

    return (
        <ContentImageLayout>
            <div className="thankyou-container font-inter">
                <h1 className="d-flex flex-row col-12 text-nowrap fw-semibold">Thanks for downloading!</h1>
                <DownloadAgain />
            </div>
        </ContentImageLayout>
    );
}

export default ThankYouSection; 