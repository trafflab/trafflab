import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function SiteImage({ image, alt='trafflab', loadingType='lazy' }) {

  return (
    <GatsbyImage
      image={getImage(image)}
      objectFit="fill"
      objectPosition={'center'}
      // style={{width: "100%", height:"100%"}}
      alt={alt}
      loading={loadingType}
    />
  )
}