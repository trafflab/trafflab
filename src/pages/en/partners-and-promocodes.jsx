import * as React from 'react';
import { Helmet } from 'react-helmet';
import { SiteLayout } from '../../updated/components/common';
import PartnersAndPromocodesPageTemplate from '../../updated/components/en/templates/partners-and-promocodes-page-template';
import PageLayout from '../../updated/components/en/layouts/page-layout/page-layout';

export default function PartnersAndPromocodesPage() {
	return (
		<SiteLayout
			pageTitle='Partners and Promocodes | TRAFFLAB'
			siteLang='en'
		>
			<Helmet>
				<meta
					name='description'
					content='Partners and promocodes TRAFFLAB for affiliates of any level'
				/>
				<meta
					name='keywords'
					content='Trafflab, affiliates, partners, promocodes, discounts, affiliate marketing'
				/>
				<link
					rel='canonical'
					href='https://trafflab.io/en/partners-and-promocodes'
				/>
				<link
					rel='alternate'
					hreflang='ru'
					href='https://trafflab.io/ru/partners-and-promocodes'
				/>
				<link
					rel='alternate'
					hreflang='en'
					href='https://trafflab.io/en/partners-and-promocodes'
				/>
				<link
					rel='alternate'
					hreflang='uk'
					href='https://trafflab.io/ua'
				/>
			</Helmet>
			<PartnersAndPromocodesPageTemplate />
		</SiteLayout>
	);
}
