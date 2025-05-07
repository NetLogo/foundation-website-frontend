const backend_url = import.meta.env.PUBLIC_BACKEND_URL;

interface Image {
  id: string;
}

const getImageUrl = (image: Image) => {
  return `${backend_url}/assets/${image.id}`;
};

const handleLinkClick = (url: string) => {
  const fullUrl =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  window.open(fullUrl, "_blank");
};

const NavigateToDonate = () => {
  const donatePath = "/donate";
  // Check if we're already on the homepage
  if (window.location.pathname !== donatePath) {
    window.location.href = donatePath;
  }
};

export {getImageUrl, handleLinkClick, NavigateToDonate};
