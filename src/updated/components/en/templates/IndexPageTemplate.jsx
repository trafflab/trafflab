import * as React from "react";
import IndexPageLayout from "../layouts/IndexPageLayout/IndexPageLayout";

import { PartnersMarquee, CountriesMarquee } from '../../common'
import {
  // Statistics,
  WhatWeDo,
  // Pro,
  TrafficSources,
  PageForm,
  Ecosystem,
  Blog,
  Vacancies,
} from '../sections';

export default function IndexPageTemplate() {

  React.useEffect(() => {
    localStorage.setItem('lang', 'en');
  }, [])

  return (
    <IndexPageLayout>
      <CountriesMarquee />
      <TrafficSources />
      <WhatWeDo/>
      <Ecosystem />
      <Blog/>
      <PartnersMarquee />
      <Vacancies />
      <PageForm  />

      {/* <Statistics /> */}
      {/* <Pro /> */}
      {/* <PageForm isMiddle /> */}
    </IndexPageLayout>
  )
}