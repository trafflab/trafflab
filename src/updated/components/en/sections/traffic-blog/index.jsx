import * as React from 'react';
import * as styles from './styles.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

export default function TrafficBlog() {
	// Fetch 4 latest articles using GraphQL query
	const articlesData = useStaticQuery(graphql`
		query TrafficBlogEnQuery(
			$lang: String = "en"
			$type: String = "article"
		) {
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				filter: {
					frontmatter: { lang: { eq: $lang }, type: { eq: $type } }
				}
				limit: 4
			) {
				edges {
					node {
						frontmatter {
							title
							cardText
							cardImage {
								childImageSharp {
									gatsbyImageData(
										quality: 85
										layout: CONSTRAINED
									)
								}
							}
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`).allMarkdownRemark.edges;

	// Transform data into a format suitable for display
	const articles =
		articlesData.map(article => ({
			title: article.node.frontmatter.title,
			description: article.node.frontmatter.cardText,
			image:
				article.node.frontmatter.cardImage?.childImageSharp
					?.gatsbyImageData?.images?.fallback?.src ||
				'/img/traffic-blog/crashgameart.png',
			alt: article.node.frontmatter.title,
			slug: article.node.fields.slug,
		})) || [];

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
					{articles.map((article, index) => (
						<div className={styles.article} key={index}>
							<Link
								to={article.slug}
								className={styles.articleLink}
								key={index}
							></Link>
							<img
								src={article.image}
								alt={article.alt}
								className={styles.articleImage}
							/>
							<div className={styles.articleContent}>
								<h3 className={styles.articleTitle}>
									{article.title}
								</h3>
								<p className={styles.articleDescription}>
									{article.description}
								</p>
							</div>
						</div>
					))}
				</div>
				<a href='/en/blog' className={styles.button}>
					View all articles
				</a>
			</div>
		</div>
	);
}
