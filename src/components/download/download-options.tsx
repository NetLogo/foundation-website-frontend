import "./styles/download-section.css";

const DownloadOptions = () => {
  return (
    <div className="container py-5 font-inter text-start">
      <h1 className="fw-bold mb-4">Download on a Different Device</h1>
      <p className="fs-5 mb-3">
        Choose which platform to download:
      </p>
      <div className="d-flex flex-row gap-4">
        <a href="/downloads/windows" className="btn btn-primary w-auto">Windows</a>
        <a href="/downloads/mac" className="btn btn-primary w-auto">Mac</a>
        <a href="/downloads/linux" className="btn btn-primary w-auto">Linux</a>
      </div>
      <div className="pt-4">
        <a href="https://netlogoweb.org/">You can also run NetLogo Web in the browser</a>
      </div>
    </div>
  );
};

export default DownloadOptions;

