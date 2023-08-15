import React from "react";
import { navigate } from "gatsby";
import { Loader } from '../updated/components/common/ui';
import Helmet from "react-helmet";

const getRedirectLanguage = () => {

  if (typeof navigator === `undefined`) return "en";
  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "en":
      return "en";
    case "ru":
      return "ru";
    // case "uk":
    //   return "ua";
    default:
      return "en";
  }
};

export default function IndexPage() {

  React.useEffect(() => {
    let urlLang = 'en'
    const savedLang = localStorage.getItem('lang')

    if (savedLang) urlLang = localStorage.getItem('lang')
    else {
      urlLang = getRedirectLanguage();
      localStorage.setItem('lang', urlLang);
    }
    navigate(`/${urlLang}`, {replace: true})

  }, []);

  return (
    <>
      <Helmet>
        <meta name="yandex-verification" content="a5c1bf84551f7a25" />
      </Helmet>
      <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: '#181818',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <Loader />
      </div>
    </>
  ) 
};
