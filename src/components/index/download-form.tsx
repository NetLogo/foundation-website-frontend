import React from "react";
import "./styles/download-form.css";

const DownloadForm = () => {
  return (
    <div className="download-form">
      <h1>Download NetLogo</h1>
      <p>
        {
          "Most computers can run NetLogo (see system requirements). If you wouldlike to run NetLogo on a Chromebook or in a web browser, please see if NetLogo Web will meet your needs."
        }
      </p>
      <p>
        {
          "Multiple versions of NetLogo can be installed on the same computer; installing a new one doesnt remove the old one. "
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
          <p>More versions here</p>
          <p>For help using old models with new versions see the Transition Guide.</p>
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
        <div className="detail-row">
            <input type="checkbox" id="subscribe" name="subscribe" />
            <label htmlFor="subscribe">Update me on the newest releases of NetLogo</label>
        </div>
        <div className="form-row">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" rows={4} />
        </div>
        <div className="detail-row">
          <p>We read these but dont respond directly. For a response, write feedback@ccl.northwestern.edu.</p>
        </div>
        <div className="submit-row">
          <button type="submit">Download</button>
        </div>
      </form>
    </div>
  );
};

export { DownloadForm };
