import * as React from 'react';
import * as styles from './styles.module.css';

export default function TrafficBlog() {
	return (
		<div className={styles.trafficBlog}>
			<div className={styles.container}>
				<div className={styles.title}>
					<span>Traffic</span> Blog
				</div>
				<p className={styles.description}>
					Stay up to date with all affiliate marketing industry events
					with the TraffLab blog — current news, traffic
					recommendations, manuals, and insider information from
					private sources.
				</p>
				<div className={styles.articles}>
					<div className={styles.article}>
						<img
							src='/img/traffic-blog/crashgameart.png'
							alt='crashgameart'
							className={styles.articleImage}
						/>
						<div className={styles.articleContent}>
							<h3 className={styles.articleTitle}>
								Crash Games: Types and Approaches
							</h3>
							<p className={styles.articleDescription}>
								The gambling niche is constantly evolving,
								offering new entertainment formats for players.
								Among the latest innovations that have quickly
								attracted players' attention...
							</p>
						</div>
					</div>
					<div className={styles.article}>
						<img
							src='/img/traffic-blog/lifeisagame.png'
							alt='lifeisagame'
							className={styles.articleImage}
						/>
						<div className={styles.articleContent}>
							<h3 className={styles.articleTitle}>
								Popular Slots for AUDIENCES in Different Geos
							</h3>
							<p className={styles.articleDescription}>
								Different Geos — different tastes of the target
								audience. To increase the effectiveness of
								advertising campaigns, it's important to
								consider the preferences of the population. In
								this article, you...
							</p>
						</div>
					</div>
					<div className={styles.article}>
						<img
							src='/img/traffic-blog/myths.png'
							alt='myths'
							className={styles.articleImage}
						/>
						<div className={styles.articleContent}>
							<h3 className={styles.articleTitle}>
								popular myths about traffic arbitrage
							</h3>
							<p className={styles.articleDescription}>
								Traffic arbitrage — a sphere surrounded by myths
								and misconceptions, which often repel newcomers
								or, conversely, attract them unrealistic...
							</p>
						</div>
					</div>
					<div className={styles.article}>
						<img
							src='/img/traffic-blog/crashgameart.png'
							alt='crashgameart'
							className={styles.articleImage}
						/>
						<div className={styles.articleContent}>
							<h3 className={styles.articleTitle}>
								Gamingification in igaming: role, types, offers
							</h3>
							<p className={styles.articleDescription}>
								The gambling industry is developing rapidly:
								it's not only opening up new opportunities for
								earning, but also making users more selective
								and...
							</p>
						</div>
					</div>
				</div>
				<a href='/en/blog' className={styles.button}>
					View all articles
				</a>
			</div>
		</div>
	);
}
