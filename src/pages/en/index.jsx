import * as React from "react";
import { Helmet } from "react-helmet";
import IndexPageTemplate from "../../updated/components/en/templates/index-page-template";
import { SiteLayout } from "../../updated/components/common";

export default function IndexPage() {

  return (
    <SiteLayout pageTitle="TRAFFLAB" siteLang='en'>
      <Helmet>
        <meta name='description' content="for affiliates of any level"/>
        <meta name='keywords' content="Trafflab, affiliates, ecosystem, аффилейт-маркетинг"/>
        <link rel="canonical" href="https://trafflab.io/en" />
        <link rel="alternate" hreflang="ru" href="https://trafflab.io/ru" />
        <link rel="alternate" hreflang="en" href="https://trafflab.io/en" />
        <link rel="alternate" hreflang="uk" href="https://trafflab.io/ua" />
      </Helmet>
      <IndexPageTemplate />
    </SiteLayout>
  )
}