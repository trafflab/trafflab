import * as React from "react";
import IndexPageLayout from "../layouts/IndexPageLayout/IndexPageLayout";

// import { FormPopup, ArticlePopup, NavPopup } from "../popups";
import { PartnersMarquee, CountriesMarquee } from '../../common'
import {
  Statistics,
  WhatWeDo,
  Pro,
  TrafficSources,
  PageForm,
  Ecosystem,
  Blog,
  Vacancies,
} from '../sections';
import { changeUrl } from "../../../utils/utils";

export default function IndexPageTemplate({ blogData }) {

  const [ articlePopupOpen, setArticlePopupOpen ] = React.useState(false);
  const [ articleData, setArticleData ] = React.useState({});

  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);

  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  const openArticlePopup = (articleData, slug) => {
    setArticleData(articleData)
    changeUrl(slug)
    setArticlePopupOpen(true);
  }  
  const closeArticlePopup = () => {
    setArticlePopupOpen(false);
    changeUrl(`/ru/`)
  }

  return (
    <IndexPageLayout openFormPopupHandler={openFormPopup}>
      <Statistics />
      <WhatWeDo openFormPopupHandler={openFormPopup}/>
      <Pro />
      <CountriesMarquee />
      <PageForm isMiddle />
      <TrafficSources />
      <Ecosystem />
      <Blog articlesData={blogData} openArticlePopupHandler={openArticlePopup}/>
      <PartnersMarquee />
      <Vacancies />
      <PageForm  />

      {/* <ArticlePopup data={articleData} isOpen={articlePopupOpen} closeHandler={closeArticlePopup} /> */}
      {/* <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/> */}
    </IndexPageLayout>
  )
}