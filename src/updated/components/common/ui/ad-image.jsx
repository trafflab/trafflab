import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Is480Context } from '../../../utils/contexts';

export default function ADImage({ image_480=false, image=false, alt='trafflab', loadingType='lazy' }) {
  const is480 = React.useContext(Is480Context)

  if (is480) return (
    <GatsbyImage
      image={getImage(image_480)}
      objectFit="fill"
      objectPosition={'center'}
      style={{width: "100%", height:"100%"}}
      alt={alt}
      loading={loadingType}
    />
  )
  return (
    <GatsbyImage
      image={getImage(image)}
      objectFit="fill"
      objectPosition={'center'}
      style={{width: "100%", height:"100%"}}
      alt={alt}
      loading={loadingType}
    />
  )
}