import "./styles/download-section.css";

const DownloadOptions = () => {
  return (
    <div className="container py-5 font-inter text-start">
      <h1 className="fw-bold mb-4">Download on a Different Device</h1>
      <p className="fs-6 mb-3">
        NetLogo is designed for desktop operating systems and cannot be downloaded on this device.
      </p>
      <p className="fs-5 text-muted mb-4">
        To install NetLogo, please use a computer running{" "}
        <a href="https://www.netlogo.org/">Windows</a>,{" "}
        <a href="https://www.netlogo.org/">macOS</a>, or{" "}
        <a href="https://www.netlogo.org/">Linux</a>.
        </p>
    </div>
  );
};

export default DownloadOptions;

