import * as React from 'react';
import * as styles from './blog-page-template.module.css';
import { Link } from 'gatsby';

import PageLayout from '../../layouts/page-layout/page-layout';
import { BlogPageList } from '../../sections';

export default function BlogPageTemplate({ blogData }) {
	React.useEffect(() => {
		localStorage.setItem('lang', 'en');
	}, []);
	return (
		<PageLayout>
			<div className={styles.content} id='blog'>
				<BlogPageList articlesData={blogData} />
				<Link to={'/en/blog#blog'} className={styles.link}>
					<button className={styles.button}>Back to top</button>
				</Link>
			</div>
		</PageLayout>
	);
}
