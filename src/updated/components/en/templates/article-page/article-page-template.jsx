import * as React from 'react';
import * as styles from './article-page-template.module.css';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { SiteImage, BasicButton } from '../../../common/ui';
import PageLayout from '../../layouts/page-layout/page-layout';

export function ArticlePageTemplate({ article, content, path }) {
	React.useEffect(() => {
		localStorage.setItem('lang', 'en');
	}, []);
	return (
		<PageLayout>
			<Helmet>
				<title>{article.headTitle} | Trafflab.io</title>
				<meta name='description' content={article.headDescription} />
				<meta name='keywords' content={article.headKeywords} />
				<link rel='canonical' href={`https://trafflab.io${path}`} />
			</Helmet>

			<div className={styles.main}>
				<div className={styles.article}>
					{article.notReadyMessage ? (
						<h1 className={styles.title}>
							{article.notReadyMessage}
						</h1>
					) : (
						<div className={styles.content}>
							<h1 className={styles.title}>{article.title}</h1>
							<div className={styles.imageContainer}>
								<SiteImage
									alt={article.title}
									image={article.image}
								/>
							</div>
							<div
								className={styles.textContainer}
								dangerouslySetInnerHTML={{ __html: content }}
							/>
							<p className={styles.date}>{article.date}</p>
						</div>
					)}
					<Link to={`/en/blog`} className={styles.backLink}>
						Return to blog
					</Link>
				</div>
			</div>
		</PageLayout>
	);
}

export default function ArticlePage({ data }) {
	return (
		<ArticlePageTemplate
			article={data.markdownRemark.frontmatter}
			content={data.markdownRemark.html}
			path={data.markdownRemark.fields.slug}
		/>
	);
}
export const query = graphql`
	query ($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				lang
				date(formatString: "DD.MM.YYYY")
				title
				headTitle
				headDescription
				headKeywords
				notReadyMessage
				image {
					childImageSharp {
						gatsbyImageData(
							placeholder: BLURRED
							webpOptions: { quality: 85 }
							sizes: "(max-width: 480px) 1px, 1000000px"
							breakpoints: [480, 1008]
							layout: FULL_WIDTH
						)
					}
				}
			}
			fields {
				slug
			}
		}
	}
`;
