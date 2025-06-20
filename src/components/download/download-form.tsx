import React, {
  useState,
  useMemo,
  type ChangeEvent,
  type FormEvent,
} from "react";
import "./styles/download-form.css";
import { type NetLogoVersion } from "../../utils/api";
import NetLogoAPI from "../../utils/api";

// Define interface for form data
export interface FormData {
  version: string;
  platform: string;
  name: string;
  organization: string;
  email: string;
  subscribe: boolean;
  comments: string;
  ip: string;
  country: string;
  time_stamp: string;
}

interface DownloadFormProps {
  versions: NetLogoVersion[];
  downloadedSetter?: () => void;
}

const DetectOS = () => {
  const userAgent = navigator.userAgent;
  let os = null;
  
  if (userAgent.indexOf("Win") !== -1) os = "Windows";
  else if (userAgent.indexOf("Mac") !== -1) os = "macOS";
  else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
  else if (userAgent.indexOf("Android") !== -1) os = "Android";
  else if (userAgent.indexOf("like Mac") !== -1) os = "iOS"; // iPhone, iPad
  
  return os;
}

const getFormattedTimestamp = () => {
  const now = new Date();
  const pad = (n:number) => String(n).padStart(2, '0');

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1); // Months are 0-indexed
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

const DownloadForm = ({ versions, downloadedSetter }: DownloadFormProps) => {
  // State for all form fields with typed interface
  const [formData, setFormData] = useState<FormData>({
    version: "",
    platform: "Mac OS X",
    name: "",
    organization: "",
    email: "",
    subscribe: false,
    comments: "",
    ip: "",
    country: "",
    time_stamp: "",
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

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send form data to backend
    const api = new NetLogoAPI();

    await fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      formData.ip = data.ip;
      formData.country = data.country_name;
      formData.time_stamp = getFormattedTimestamp();
    });

    const result = api.sendDownloadForm(formData);
    
    //Go to download Link
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
      downloadedSetter?.();
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
            <a className="form-ref" href="mailto:netlogo-help@ccl.northwestern.edu">
              {"netlogo-help@ccl.northwestern.edu"}
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
