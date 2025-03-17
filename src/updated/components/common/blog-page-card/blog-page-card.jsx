import * as React from 'react';
import * as styles from './blog-page-card.module.css';
import { Link } from 'gatsby';
import { SiteImage } from '../ui';

export default function BlogPageCard({ url, data }) {
	console.log('BlogPageCard data:', data); // Отладочный вывод
	return (
		<article className={styles.card}>
			<Link to={url} className={styles.linkTo}></Link>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<SiteImage image={data.cardImage} />
				</div>
				<div className={styles.textContainer}>
					<h3 className={styles.title}>{data.cardTitle}</h3>
					<p className={styles.text}>{data.cardText}</p>
					<div className={styles.tags}>
						{data.tags &&
							data.tags.map(tag => (
								<span key={tag} className={styles.tag}>
									{tag}
								</span>
							))}
					</div>
				</div>
			</div>
		</article>
	);
}
