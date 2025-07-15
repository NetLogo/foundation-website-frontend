// ContentImageLayout.tsx
import React, { type ReactNode } from "react";
import "./styles/content-image-layout.css";
import { getImageUrl } from "../../utils/url-utils";

export interface ContentImageLayoutProps {
  imageId?: string;
  imageSrc?: string;
  imageAlt?: string;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
}

const ContentImageLayout: React.FC<ContentImageLayoutProps> = ({
  imageId,
  imageSrc,
  imageAlt = "Section image",
  children,
  className = "",
  imageClassName = "",
  contentClassName = "",
}) => {
  // Determine if we have an image to display
  const hasImage = !!(imageSrc || imageId);
  const imageUrl = imageSrc || (imageId ? getImageUrl(imageId) : '');

  return (
    <div className={`container py-5 ${className}`}>
      <div className="row align-items-start gx-5">
        <div className={`col-lg-6 ${contentClassName}`}>
          {children}
        </div>

        <div className="col-lg-6 d-flex justify-content-center">
          {hasImage && (
            <img
              src={imageUrl}
              alt={imageAlt}
              className={`img-fluid ${imageClassName}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentImageLayout;