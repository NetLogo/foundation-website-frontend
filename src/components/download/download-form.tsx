import React, {
  useState,
  useMemo,
  useEffect,
  type ChangeEvent,
  type MouseEvent,
  type FormEvent,
} from "react";
import "./styles/download-form.css";
import { type NetLogoVersion } from "../../utils/api";
import { getFormattedTimestamp } from "../../utils/datetime-utils";
import NetLogoAPI from "../../utils/api";

// Define interface for form data
export interface FormData {
  version: string;
  platform: string;
  first_name: string;
  last_name: string;
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

const submitToMautic = (data: FormData) => {
  // Create a hidden form
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://ccl.northwestern.edu/mautic/form/submit?formId=2';
  form.target = 'mautic-hidden-iframe'; // Submit to hidden iframe
  form.style.display = 'none';

  // Add form fields
  const fields = {
    'mauticform[first_name]': data.first_name,
    'mauticform[last_name]': data.last_name,
    'mauticform[email]': data.email,
    'mauticform[formId]': '2',
    'mauticform[return]': '',
    'mauticform[formName]': 'emaillistsignup'
  };

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  // Create hidden iframe if it doesn't exist
  let iframe = document.querySelector('iframe[name="mautic-hidden-iframe"]');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.name = 'mautic-hidden-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }

  // Append form and submit
  document.body.appendChild(form);
  form.submit();

};


const backend_url = import.meta.env.PUBLIC_BACKEND_URL;

const createImageURL = (imageId: string) => {
  return `${backend_url}/assets/${imageId}`;
};

const DownloadForm = ({ versions, devOs }: DownloadFormProps) => {

  // State for all form fields with typed interface
  const [formData, setFormData] = useState<FormData>({
    version: "",
    platform: "",
    first_name: "",
    last_name: "",
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



  const platforms = useMemo<[string, string, boolean, string][]>(() => {
    const downloadLinks = versions.find(
      (version) => version.version === formData.version
    )?.download_links;

    return downloadLinks?.map((link) => [link.platform, link.subplatform, Boolean(link.primary), link.platform_icon.icon.id]) || [];
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement>
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

  const handleClickChange = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  }

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.subscribe) {
      submitToMautic(formData);
    }

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
      const encodedURL = btoa(downloadUrl);
      window.location.href = "/thankyou?download_url=" + encodedURL;
    }
  };

  return (
    <div className="download-form">
      <form onSubmit={handleFormSubmission} className="font-inter mt-1">
        <div className="mb-3 row my-4">
          <label htmlFor="first_name" className="col-sm-3 col-form-label fs-5 fw-semibold">First Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required={formData.subscribe}
              onInvalid={(e) => e.target.setCustomValidity('Required if "update me" is checked below')}
              onInput={(e) => e.target.setCustomValidity('')} // Clear on input
            />
          </div>
        </div>
        <div className="mb-3 row my-4">
          <label htmlFor="last_name" className="col-sm-3 col-form-label fs-5 fw-semibold">Last Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={formData.last_name}
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
              required={formData.subscribe}
              onInvalid={(e) => e.target.setCustomValidity('Required if "update me" is checked below')}
              onInput={(e) => e.target.setCustomValidity('')} // Clear on input
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
                Update me on NetLogo news (including new releases)
              </label>
            </div>
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
          <div className="col-auto d-flex flex-row gap-3">
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
              {"Previous versions "}
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
        <div className="d-flex flex-row gap-2">
          {platforms?.map(([name, subname, primary_link, img_id]) =>
            devOs && name.includes(devOs) && primary_link === true ? (
              <button type="submit" className="mt-4 mb-3 btn btn-primary btn-lg d-flex align-items-center gap-2" name="platform" key={name} value={name} onClick={handleClickChange}>
                <img src={createImageURL(img_id || "")} className="button-icon" /> Download {subname}
              </button>

            ) : devOs && name.includes(devOs) ? (
              <button type="submit" className="mt-4 mb-3 btn btn-outline-primary btn-lg btn-ht" name="platform" key={name} value={name} onClick={handleClickChange}>
                <img src={createImageURL(img_id || "")} className="button-icon" /> Download {subname}
              </button>
            ) : null
          )}
        </div>

        <div className="detail-row"></div>
      </form>
    </div>
  );
};

export { DownloadForm };


//URL query parameter encoded
//Javascript to decode, download and ajavascript to put that as the link to go to in the a href beneath thanks for donwlading
//Take care of edge case


///
/// Move description to the right with smaller turtle image
//  default .input-group sizes
//  comment textarea needs to be smaller ---------
//  default cehkbox to true ----------
//
