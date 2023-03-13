import React from 'react';
import * as styles from './ad-image.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ADImage({ image_480=false, image=false, alt='trafflab', loadingType='lazy' }) {

  return (
    <div className={styles.adImage}>
      <GatsbyImage
        image={getImage(image)}
        objectFit="fill"
        objectPosition={'center'}
        style={{width: "100%", height:"100%"}}
        alt={alt}
        loading={loadingType}
      />
      <GatsbyImage
        image={getImage(image_480)}
        objectFit="fill"
        objectPosition={'center'}
        style={{width: "100%", height:"100%"}}
        alt={alt}
        loading={loadingType}
      />
    </div>
  )
}