import React from 'react';

import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

export default function CmsImage({ image_480=false, image=false, alt='trafflab' }) {

  const images = (typeof image === 'object' || typeof image_480 === 'object') ? withArtDirection(getImage(image ? image : image_480), [
    {
      media: '(max-width: 480px)',
      image: getImage(image_480 ? image_480 : image)
    }
  ]) : {image_480: image_480, image: image}

  return (
    (typeof image === 'object' || typeof image_480 === 'object') ? (
      <GatsbyImage
        image={images}
        objectFit="fill"
        objectPosition={'center'}
        style={{width: "100%", height:"100%"}}
        alt={alt}
        formats={["auto", "webp", "avif"]}
      />
    ) : (
      <picture>
        <source media='(max-width: 480px)' srcSet={images.image_480} />
        <img src={images.image} alt={alt} style={{width: "100%", height:"100%"}}  />
      </picture>
    )
  )
}