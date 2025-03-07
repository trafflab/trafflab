import * as React from 'react';
import { Helmet } from 'react-helmet';
import { SiteLayout } from '../../updated/components/common';
import PartnersAndPromocodesPageTemplate from '../../updated/components/ru/templates/partners-and-promocodes-page-template';

export default function PartnersAndPromocodesPage() {
	return (
		<SiteLayout pageTitle='Партнеры и промокоды | TRAFFLAB' siteLang='ru'>
			<Helmet>
				<meta
					name='description'
					content='Партнеры и промокоды TRAFFLAB для арбитражника любого уровня'
				/>
				<meta
					name='keywords'
					content='Trafflab, арбитраж, партнеры, промокоды, скидки, аффилейт-маркетинг'
				/>
				<link
					rel='canonical'
					href='https://trafflab.io/ru/partners-and-promocodes'
				/>
				<link
					rel='alternate'
					hreflang='ru'
					href='https://trafflab.io/ru/partners-and-promocodes'
				/>
				<link
					rel='alternate'
					hreflang='en'
					href='https://trafflab.io/en'
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
