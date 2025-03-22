import React, {
  useState,
  useMemo,
  type ChangeEvent,
  type FormEvent,
  version,
} from "react";
import "./styles/download-form.css";
import { type NetLogoVersion } from "../../utils/api";
// Define interface for form data
interface FormData {
  version: string;
  platform: string;
  name: string;
  organization: string;
  email: string;
  subscribe: boolean;
  comments: string;
}

interface DownloadFormProps {
  versions: NetLogoVersion[];
}

const DownloadForm = ({ versions }: DownloadFormProps) => {
  // State for all form fields with typed interface
  const [formData, setFormData] = useState<FormData>({
    version: "",
    platform: "Mac OS X",
    name: "",
    organization: "",
    email: "",
    subscribe: false,
    comments: "",
  });

  const netLogoVersions = useMemo(() => {
    const onlyVersions = versions.map((version) => version.version);

    setFormData({
      ...formData,
      ["version"]: onlyVersions[0],
    });

    return onlyVersions;
  }, []);

  const platforms = useMemo(() => {
    const downloadLinks = versions.find(
      (version) => version.version === formData.version
    )?.download_links;
    return downloadLinks?.map((link) => link.platform);
  }, [formData.version]);

  // Handle all input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    // track name, value, and type of input
    const { name, value, type } = e.target;

    // Use type assertion to handle checkbox type
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    // Update form data with new value
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send form data to backend

    // Go to download Link
    const downloadVersion = versions.find(
      (version) => version.version === formData.version
    );

    const downloadUrl = downloadVersion?.download_links.find(
      (link) => link.platform === formData.platform
    )?.download_url;

    if (!downloadUrl) {
      alert("Download link not found");
      return;
    } else {
      window.open(downloadUrl);
    }
  };

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
      <form onSubmit={handleFormSubmission}>
        <div className="shared-form-row">
          <div>
            <label htmlFor="version">Version</label>
            <select
              id="version"
              name="version"
              value={formData.version}
              onChange={handleInputChange}
            >
              {netLogoVersions.map((version) => (
                <option key={version} value={version}>
                  {`NetLogo ${version}`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="platform">Platform</label>
            <select
              id="platform"
              name="platform"
              value={formData.platform}
              onChange={handleInputChange}
            >
              {platforms?.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
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
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="detail-row email-row">
          <input
            className="email-signup"
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleInputChange}
          />
          <label htmlFor="subscribe">
            Update me on the newest releases of NetLogo
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            rows={4}
            value={formData.comments}
            onChange={handleInputChange}
          />
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
          <p>
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
