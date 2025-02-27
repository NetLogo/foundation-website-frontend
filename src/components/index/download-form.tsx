import React from "react";
import "./styles/download-form.css";

const DownloadForm = () => {
  return (
    <div className="download-form">
      <h1 className="form-title">Download NetLogo</h1>
      <p>
        {"Most computers can run NetLogo (see "}
        <a
          target="_blank"
          className="form-ref"
          href="https://ccl.northwestern.edu/netlogo/requirements.html"
        >
          system requirements
        </a>
        {
          "). If you would like to run NetLogo on a Chromebook or in a web browser, please see if "
        }
        <a className="form-ref" target="_blank" href="http://netlogoweb.org/">
          NetLogo Web
        </a>
        {" will meet your needs."}
      </p>
      <p>
        {
          "Multiple versions of NetLogo can be installed on the same computer; installing a new one doesn't remove the old one. "
        }
      </p>
      <form>
        <div className="shared-form-row">
          <div>
            <label htmlFor="version">Version</label>
            <select id="version" name="version">
              <option value="7.0.0">NetLogo 7.0.0</option>
            </select>
          </div>
          <div>
            <label htmlFor="platform">Platform</label>
            <select id="platform" name="version">
              <option value="Mac OS X">Mac OS X</option>
              <option value="Windows">Windows</option>
              <option value="Linux">Linux</option>
            </select>
          </div>
        </div>
        <div className="detail-row">
          <p>
            {"More versions "}
            <a
              target="_blank"
              className="form-ref"
              href="https://ccl.northwestern.edu/netlogo/oldversions.shtml"
            >
              {"here"}
            </a>
            <br />
            {"For help using old models with new versions see the "}
            <a
              target="_blank"
              className="form-ref"
              href="https://ccl.northwestern.edu/netlogo/transition.html"
            >
              {"Transition Guide"}
            </a>
            .
          </p>
        </div>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-row">
          <label htmlFor="organization">Organization</label>
          <input type="text" id="organization" name="organization" required />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="detail-row email-row">
          <input
            className="email-signup"
            type="checkbox"
            id="subscribe"
            name="subscribe"
          />
          <label htmlFor="subscribe">
            Update me on the newest releases of NetLogo
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" rows={4} />
        </div>
        <div className="detail-row">
          <p>
            {"We read these but don't respond directly. For a response, write "}
            <a className="form-ref" href="mailto:feedback@ccl.northwestern.edu">
              {"feedback@ccl.northwestern.edu."}
            </a>
          </p>
        </div>
        <div className="submit-row">
          <button type="submit">Download</button>
          <p >
            {"Download trouble? Write"}{" "}
            <a className="form-ref" href="mailto:bugs@ccl.northwestern.edu">
              {"bugs@ccl.northwestern.edu."}
            </a>
          </p>
        </div>
        <div className="detail-row"></div>
      </form>
    </div>
  );
};

export { DownloadForm };
