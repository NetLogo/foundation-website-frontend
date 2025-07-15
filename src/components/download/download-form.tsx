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
  const pad = (n: number) => String(n).padStart(2, '0');

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
    platform: "",
    name: "",
    organization: "",
    email: "",
    subscribe: true,
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

    const platforms = downloadLinks?.map((link) => link.platform);

    if (platforms) {
      setFormData({
        ...formData,
        ["platform"]: platforms[0],
      });
    }

    return platforms
    // return downloadLinks?.map((link) => link.platform);
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
      <form onSubmit={handleFormSubmission} className="font-inter mt-1">
        <div className="row g-3 align-items-start">
          <div className="col">
            <div className="d-flex align-items-center gap-3 mb-1">
              <label htmlFor="version" className="fs-5 fw-semibold form-label mb-0">Version</label>
              <select
                className="form-select form-select-sl w-75"
                id="version"
                name="version"
                value={formData.version}
                onChange={handleInputChange}
                aria-describedby="versionHelp"
              >
                {netLogoVersions.map((version) => (
                  <option key={version} value={version}>
                    {`NetLogo ${version}`}
                  </option>
                ))}
              </select>
            </div>
            <p id="versionHelp" className="form-text mb-0">
              {"More versions "}
              <a
                target="_blank"
                className="form-ref"
                href="https://ccl.northwestern.edu/netlogo/oldversions.shtml"
              >
                {"here"}
              </a>
              .
            </p>
          </div>
          <div className="col d-flex align-items-center gap-4">
            <label htmlFor="platform" className="fs-5 fw-semibold form-label mb-0">Platform</label>
            <select
              className="form-select form-select-sl w-75"
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

        <div className="mb-3 row my-4">
          <label htmlFor="name" className="col-sm-3 col-form-label fs-5 fw-semibold">Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-3 row my-4">
          <label htmlFor="organization" className="col-sm-3 col-form-label fs-5 fw-semibold">Organization</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-3 row my-4">
          <label htmlFor="email" className="col-sm-3 col-form-label fs-5 fw-semibold">Email</label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
              />
              <label className="form-check-label small" htmlFor="subscribe">
                Update me on the newest releases of NetLogo
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3 row my-4">
          <label htmlFor="comments" className="col-sm-3 col-form-label fs-5 fw-semibold">
            Comments
          </label>
          <div className="col-sm-9">
            <textarea
              id="comments"
              name="comments"
              className="form-control"
              rows={2}
              value={formData.comments}
              onChange={handleInputChange}
              aria-describedby="commentsHelp"
            ></textarea>
            <div id="commentsHelp" className="form-text mt-1">
              We read these but don't respond directly. For a response, write
              <a
                className="form-ref ms-1"
                href="mailto:netlogo-help@ccl.northwestern.edu"
              >
                netlogo-help@ccl.northwestern.edu
              </a>
            </div>
          </div>
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


///
/// Move description to the right with smaller turtle image
//  default .input-group sizes
//  comment textarea needs to be smaller ---------
//  default cehkbox to true ----------
//
