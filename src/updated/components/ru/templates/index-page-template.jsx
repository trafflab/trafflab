import * as React from "react";
import IndexPageLayout from "../layouts/index-page-layout/index-page-layout";

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

export default function IndexPageTemplate() {

  React.useEffect(() => {
    localStorage.setItem('lang', 'ru');
  }, [])

  return (
    <IndexPageLayout>
      <Statistics />
      <WhatWeDo/>
      <Pro />
      <CountriesMarquee />
      <PageForm isMiddle />
      <TrafficSources />
      <Ecosystem />
      <Blog/>
      <PartnersMarquee />
      <Vacancies />
      <PageForm  />
    </IndexPageLayout>
  )
}