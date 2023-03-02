import * as React from 'react'
import '../../styles/global.css';

import useIs480 from '../../hooks/use-is-480';
import { Is480Context } from '../../utils/contexts';
import Helmet from "react-helmet";
import favicon from '../../../../images/misc/favicon.ico'

import { YMInitializer } from 'react-yandex-metrika';

export default function SiteLayout({ children, pageTitle = 'Trafflab' }) {
  const is480 = useIs480()
  
  return (
      <Is480Context.Provider value={is480}>
        <Helmet htmlAttributes={{lang: siteLang === 'ua' ? 'uk' : siteLang}}>
          <meta charSet="utf-8" />
          <meta name="author" content="Trafflab" />
          <link rel="icon" type="image/x-icon" href={favicon}></link>
          <meta name="yandex-verification" content="627efef0ddde2878" />
          <meta name="google-site-verification" content="sitqCiT_sBfNtwKP81rRGUpgGUIptgDzy1b6I46xV6E" />
          <title>{pageTitle}</title>
        </Helmet>
        {children}
        <YMInitializer accounts={[89406166]} options={{webvisor: true}} version="2" />
      </Is480Context.Provider>
  )
};
