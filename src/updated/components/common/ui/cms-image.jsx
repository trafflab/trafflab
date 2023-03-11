import React from 'react';

export default function CmsImage({ image_480=false, image=false, alt='trafflab' }) {

  return (
    <picture>
      <source media='(max-width: 480px)' srcSet={image_480 || image} />
      <img src={image} alt={alt} style={{width: "100%", height:"100%"}}  />
    </picture>
  )
}