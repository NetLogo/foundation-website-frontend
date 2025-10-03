import "./styles/mautic-form.css";



const MauticMailingList = () => {
    /** This section is only needed once per page if manually copying **/
    if (typeof MauticSDKLoaded == 'undefined') {
        console.log("trying to load MauticSDK")
        var MauticSDKLoaded = true;
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://ccl.northwestern.edu/mautic/media/js/mautic-form.js?v56fde046';
        script.onload = function () {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://ccl.northwestern.edu/mautic';
        var MauticLang = {
            'submittingMessage': "Please wait..."
        }
    } else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }
    return (
        <div id="mauticform_wrapper_emaillistsignup" className="mauticform_wrapper">
            <form autoComplete="off" role="form" method="post" action="https://ccl.northwestern.edu/mautic/form/submit?formId=2" id="mauticform_emaillistsignup" data-mautic-form="emaillistsignup" encType="multipart/form-data">
                <div className="mauticform-error" id="mauticform_emaillistsignup_error"></div>
                <div className="mauticform-message" id="mauticform_emaillistsignup_message"></div>
                <div className="mauticform-innerform">
                    <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                        <div id="mauticform_emaillistsignup_first_name" className="mauticform-row mauticform-text mauticform-field-1 mauticform-required" data-validate="first_name" data-validation-type="text">
                            <input type="text" name="mauticform[first_name]" id="mauticform_input_emaillistsignup_first_name" placeholder="First Name" className="mauticform-input"></input>
                            <span className="mauticform-errormsg" style={{ display: 'none' }}>This is required.</span>
                        </div>
                        <div id="mauticform_emaillistsignup_last_name" className="mauticform-row mauticform-text mauticform-field-2 mauticform-required" data-validate="last_name" data-validation-type="text">
                            <input type="text" name="mauticform[last_name]" id="mauticform_input_emaillistsignup_last_name" placeholder="Last Name" className="mauticform-input"></input>

                            <span className="mauticform-errormsg" style={{ display: 'none' }}>This is required.</span>
                        </div>
                        <div id="mauticform_emaillistsignup_email" className="mauticform-row mauticform-email mauticform-field-3 mauticform-required" data-validate="email" data-validation-type="email">
                            <input type="email" name="mauticform[email]" id="mauticform_input_emaillistsignup_email" placeholder="Email" className="mauticform-input"></input>
                            <span className="mauticform-errormsg" style={{ display: 'none' }}>please add a valid email</span>
                        </div>
                        <div id="mauticform_emaillistsignup_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-4">
                            <button className="btn btn-ghost mauticform-button" name="mauticform[submit]" value="1" id="mauticform_input_emaillistsignup_submit" type="submit">Join</button>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="mauticform[formId]" id="mauticform_emaillistsignup_id" value="2"></input>
                <input type="hidden" name="mauticform[return]" id="mauticform_emaillistsignup_return" value=""></input>
                <input type="hidden" name="mauticform[formName]" id="mauticform_emaillistsignup_name" value="emaillistsignup"></input>

            </form>
            <iframe src="//ccl.northwestern.edu/mautic/form/2" width="300" height="300"><p>Your browser does not support iframes.</p></iframe>
        </div>


    )
}


export { MauticMailingList };