import React, {
  useState,
  useMemo,
  useEffect,
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
  devOs?: string;
  downloadedSetter?: () => void;
}

const DetectOS = () => {
  const userAgent = navigator.userAgent;
  let os = null;

  if (userAgent.indexOf("Win") !== -1) os = "Windows";
  else if (userAgent.indexOf("Mac") !== -1) os = "Mac";
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

const DownloadForm = ({ versions, devOs, downloadedSetter }: DownloadFormProps) => {

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

    return platforms
    // return downloadLinks?.map((link) => link.platform);
  }, [formData.version]);

  useEffect(() => {
    const os = DetectOS();
    if (!os) return;
    const matchedPlatform = platforms.find((p) => p.indexOf(os) != -1) || platforms[0];
    setFormData({
      ...formData,
      ["platform"]: matchedPlatform,
    });

  }, [platforms]);


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
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      downloadedSetter?.();
    }
  };

  const OtherOS = ({ devOs }: { devOs?: string }) => {
    if (devOs === "Windows") {
      return (
        <p className="pt-3">
          NetLogo works for{" "}
          <a href="/downloads/mac">Mac</a>
          {" "} and {" "}
          <a href="/downloads/linux">Linux</a>
          {" "} too.
        </p>
      );
    }
    else if (devOs === "Linux") {
      return (
        <p className="pt-3">
          NetLogo works for{" "}
          <a href="/downloads/windows">Windows</a>
          {" "} and {" "}
          <a href="/downloads/mac">Mac</a>
          {" "} too.
        </p>
      );
    }
    else if (devOs === "Mac") {
      return (
        <p className="pt-3">
          NetLogo works for{" "}
          <a href="/downloads/windows">Windows</a>
          {" "} and {" "}
          <a href="/downloads/linux">Linux</a>
          {" "} too.
        </p>
      );
    }

    return null;
  };


  return (
    <div className="download-form">
      <form onSubmit={handleFormSubmission} className="font-inter mt-1">
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
              For a response, write
              <a
                className="form-ref ms-1"
                href="mailto:feedback@ccl.northwestern.edu"
              >
                feedback@ccl.northwestern.edu
              </a>
            </div>
          </div>
        </div>
        <div className="mb-3 row my-4">
          <label htmlFor="version" className="col-sm-3 col-form-label fs-5 fw-semibold">
            Version
          </label>
          <div className="col-sm-9">
            <select
              className="form-select form-select-sl w-auto"
              id="version"
              name="version"
              value={formData.version}
              onChange={handleInputChange}
              aria-describedby="versionInfo"
            >
              {netLogoVersions.map((version) => (
                <option key={version} value={version}>
                  {`NetLogo ${version}`}
                </option>
              ))}
            </select>
            <div id="versionInfo" className="form-text mt-2">
              {"More versions "}
              <a
                target="_blank"
                className="form-ref"
                href="https://ccl.northwestern.edu/netlogo/oldversions.shtml"
              >
                {"here"}
              </a>
            </div>
          </div>
        </div>
        {platforms?.map((platform) =>
          devOs && platform.includes(devOs) && (
            <button type="submit" className="d-flex flex-col mt-4 mb-3 btn btn-primary btn-lg" key={platform} value={platform}>
              Download {platform}
            </button>
          )
        )}

        <OtherOS devOs={devOs} />
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
