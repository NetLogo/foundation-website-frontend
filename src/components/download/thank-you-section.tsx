import "./styles/download-section.css";
import ContentImageLayout from "../shared/content-image-layout";
import { useEffect } from "react";

const ThankYouSection = () => {
    
    useEffect(() => {
        // console.log("yo...");
        // console.log("window.location.search:", window.location.search)
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const downloadValue = urlParams.get("download_url");

        // console.log("query string:", queryString);
        // console.log("Raw download cal:", downloadValue);
        
        if (downloadValue) {
            try {
                // console.log("hiiiiiii")
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
        }, []);

    return (
        <ContentImageLayout>
            <div className="thankyou-container">
                <h1 className="d-flex flex-row col-12 text-nowrap fw-semibold">Thanks for downloading!</h1>
            </div>
        </ContentImageLayout>
    );
}

export default ThankYouSection; 