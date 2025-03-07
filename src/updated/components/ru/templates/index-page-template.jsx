import * as React from 'react';
import IndexPageLayout from '../layouts/index-page-layout/index-page-layout';

import {
	Tabs,
	Statistics,
	TrafflabCrm,
	TrustedFeed,
	JoinTraff,
	OffersList,
	TrafficBlog,
	FAQ,
	SupportRequest,
} from '../sections';

export default function IndexPageTemplate() {
	React.useEffect(() => {
		localStorage.setItem('lang', 'ru');
	}, []);

	return (
		<IndexPageLayout>
			<Tabs />
			<Statistics />
			<TrafflabCrm />
			<TrustedFeed />
			<JoinTraff />
			<OffersList />
			<TrafficBlog />
			<FAQ />
			<SupportRequest />
		</IndexPageLayout>
	);
}
