import React from 'react';
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

export default function ADImage({ image_480=false, image=false, alt='trafflab', loadingType='lazy' }) {

  const images = withArtDirection(getImage(image), [
    {
      media: '(max-width: 480px)',
      image: getImage(image_480)
    }
  ])

  return (
    <GatsbyImage
      image={images}
      objectFit="fill"
      objectPosition={'center'}
      style={{width: "100%", height:"100%"}}
      alt={alt}
      loading={loadingType}
    />
  )
}