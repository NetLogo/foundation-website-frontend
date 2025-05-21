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
    <div className={`content-image-layout reverse-on-mobile ${className}`}>
      <div className={`content-container ${contentClassName}`}>
        {children}
      </div>
      <div className={`image-container ${!hasImage ? 'empty-image' : ''} ${imageClassName}`}>
        {hasImage && (
          <img
            className="layout-image"
            src={imageUrl}
            alt={imageAlt}
          />
        )}
      </div>
    </div>
  );
};

export default ContentImageLayout;