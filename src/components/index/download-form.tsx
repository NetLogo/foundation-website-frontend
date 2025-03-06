import React, {
  useState,
  useMemo,
  type ChangeEvent,
  type FormEvent,
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

  const netLogoVersions = useMemo(() => {
    console.log("Running useMemo");
    return versions.map((version) => version.version);
  }, []);

  // State for all form fields with typed interface
  const [formData, setFormData] = useState<FormData>({
    version: "7.0.0",
    platform: "Mac OS X",
    name: "",
    organization: "",
    email: "",
    subscribe: false,
    comments: "",
  });

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

  // Form submission handler with proper type
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.organization || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted with data:", formData);

    // For now, let's simulate a download
    const downloadUrl = determineDownloadUrl(
      formData.version,
      formData.platform
    );

    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute(
      "download",
      `NetLogo-${formData.version}-${formData.platform}.zip`
    );
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // You might want to reset the form or show a success message
    alert("Thank you for downloading NetLogo!");

    // Optional: reset certain fields after submission
    setFormData({
      ...formData,
      comments: "",
    });
  };

  // Helper function to determine download URL based on version and platform
  const determineDownloadUrl = (version: string, platform: string): string => {
    // This would be replaced with actual download URLs
    return `https://ccl.northwestern.edu/netlogo/download/NetLogo-${version}-${platform}.zip`;
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
      <form onSubmit={handleSubmit}>
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
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
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
            required
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
            required
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
