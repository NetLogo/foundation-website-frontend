import "./styles/mautic-form.css";
import { useEffect, useRef } from "react";

const MauticMailingList = () => {
    const formRef = useRef(null);
    const iframeRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        if (window.MauticSDK) {
            window.MauticSDK.onLoad?.();
            return;
        }

        window.MauticSDKLoaded = true;
        window.MauticDomain = "https://ccl.northwestern.edu/mautic";
        window.MauticLang = { submittingMessage: "Please wait..." };

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://ccl.northwestern.edu/mautic/media/js/mautic-form.js";
        script.onload = () => {
            window.MauticSDK?.onLoad?.();
        };
        document.head.appendChild(script);
    }, []);

    // Intercept form submission to use hidden iframe
    useEffect(() => {
        const form = formRef.current;
        const iframe = iframeRef.current;
        if (!form || !iframe) return;



        const handleIframeLoad = () => {

            // Show success message when iframe loads (meaning form submitted)
            const messageDiv = document.getElementById('mauticform_emaillistsignup_message');
            if (messageDiv) {
                messageDiv.innerHTML = '<div style="color: green; padding: 10px;">Thank you for subscribing!</div>';
                messageDiv.style.display = 'block';
            }
            // Clear any errors
            const errorDiv = document.getElementById('mauticform_emaillistsignup_error');
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }
            // Optionally reset the form
            form.reset();
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Set the form to submit to the hidden iframe
            form.setAttribute('target', 'mautic-response-iframe');

            // Submit the form (it will load in the iframe)
            form.submit();
        };

        form.addEventListener('submit', handleSubmit);
        iframe.addEventListener('load', handleIframeLoad);

        return () => {
            form.removeEventListener('submit', handleSubmit);
            iframe.removeEventListener('load', handleIframeLoad);
        };
    }, []);

    return (
        <div id="mauticform_wrapper_emaillistsignup" className="mauticform_wrapper">
            {/* Hidden iframe to capture the form submission */}
            <iframe
                ref={iframeRef}
                name="mautic-response-iframe"
                style={{ display: 'none' }}
                title="Form response"
            />

            <form
                ref={formRef}
                autoComplete="off"
                role="form"
                method="post"
                action="https://ccl.northwestern.edu/mautic/form/submit?formId=2"
                id="mauticform_emaillistsignup"
                data-mautic-form="emaillistsignup"
                encType="multipart/form-data"
            >
                <div className="mauticform-error" id="mauticform_emaillistsignup_error"></div>
                <div className="mauticform-message text-start" id="mauticform_emaillistsignup_message"></div>
                <div className="mauticform-innerform">
                    <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                        <div id="mauticform_emaillistsignup_first_name" className="mauticform-row mauticform-text mauticform-field-1 mauticform-required" data-validate="first_name" data-validation-type="text">
                            <input type="text" name="mauticform[first_name]" id="mauticform_input_emaillistsignup_first_name" placeholder="First Name" className="form-control w-75 mb-3"></input>
                            <span className="mauticform-errormsg" style={{ display: 'none' }}>This is required.</span>
                        </div>
                        <div id="mauticform_emaillistsignup_last_name" className="mauticform-row mauticform-text mauticform-field-2 mauticform-required" data-validate="last_name" data-validation-type="text">
                            <input type="text" name="mauticform[last_name]" id="mauticform_input_emaillistsignup_last_name" placeholder="Last Name" className="form-control w-75 mb-3"></input>
                            <span className="mauticform-errormsg" style={{ display: 'none' }}>This is required.</span>
                        </div>
                        <div id="mauticform_emaillistsignup_email" className="mauticform-row mauticform-email mauticform-field-3 mauticform-required" data-validate="email" data-validation-type="email">
                            <input type="email" name="mauticform[email]" id="mauticform_input_emaillistsignup_email" placeholder="Email" className="form-control w-75 mb-3"></input>
                            <span className="mauticform-errormsg" style={{ display: 'none' }}>please add a valid email</span>
                        </div>
                        <div id="mauticform_emaillistsignup_submit" className="d-grid col-3 mauticform-row mauticform-button-wrapper mauticform-field-4">
                            <button className="btn btn-primary" name="mauticform[submit]" value="1" id="mauticform_input_emaillistsignup_submit" type="submit">Join</button>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="mauticform[formId]" id="mauticform_emaillistsignup_id" value="2"></input>
                <input type="hidden" name="mauticform[return]" id="mauticform_emaillistsignup_return" value=""></input>
                <input type="hidden" name="mauticform[formName]" id="mauticform_emaillistsignup_name" value="emaillistsignup"></input>
            </form>
        </div>
    );
}

export { MauticMailingList };