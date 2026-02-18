import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
      }}
      {...props}
    />
  );
}

export default Image;
