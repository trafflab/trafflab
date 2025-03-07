import * as React from 'react';
import * as styles from './blog-page-list.module.css';
import { BlogPageCard } from '../../../common';

export default function BlogPageList({ articlesData }) {
	const [sortType, setSortType] = React.useState('date'); // date, title, etc
	const [selectedTag, setSelectedTag] = React.useState('all');

	// Получаем уникальные теги из всех статей
	const getAllTags = () => {
		const tags = new Set();
		tags.add('all');

		articlesData.forEach(article => {
			if (article.node.frontmatter.tags) {
				article.node.frontmatter.tags.forEach(tag => tags.add(tag));
			}
		});

		return Array.from(tags);
	};

	const getFilteredAndSortedArticles = () => {
		let articles = [...articlesData];

		// Фильтрация по тегам
		if (selectedTag !== 'all') {
			articles = articles.filter(article =>
				article.node.frontmatter.tags?.includes(selectedTag)
			);
		}

		// Сортировка
		switch (sortType) {
			case 'date':
				return articles.sort(
					(a, b) =>
						new Date(b.node.frontmatter.date) -
						new Date(a.node.frontmatter.date)
				);
			case 'title':
				return articles.sort((a, b) =>
					a.node.frontmatter.title.localeCompare(
						b.node.frontmatter.title
					)
				);
			default:
				return articles;
		}
	};

	return (
		<section className={styles.blogPageList}>
			<div className={styles.textContainer}>
				<h2 className={styles.title}>
					<span>Traffic</span>-блог
				</h2>
				<div className={styles.aboutContainer}>
					<p className={styles.about}>
						Следите за аффилиейт-маркетингом с блогом TraffLab:
						новости, гайды, рекомендации и инсайды
					</p>
				</div>
				<div className={styles.filterContainer}>
					<div className={styles.tagButtons}>
						{getAllTags().map(tag => (
							<button
								key={tag}
								onClick={() => setSelectedTag(tag)}
								className={`${styles.tagButton} ${
									selectedTag === tag
										? styles.tagButtonActive
										: ''
								}`}
							>
								{tag === 'all' ? 'Все' : tag}
							</button>
						))}
					</div>
					<div className={styles.sortSelect}>
						<select
							value={sortType}
							onChange={e => setSortType(e.target.value)}
							className={styles.select}
							onFocus={e =>
								e.target.parentElement.classList.add(
									styles.active
								)
							}
							onBlur={e =>
								e.target.parentElement.classList.remove(
									styles.active
								)
							}
						>
							<option value='date'>По дате</option>
							<option value='title'>По названию</option>
						</select>
						<img
							src='/img/traffic-blog/arrowttd.svg'
							alt='arrow-down'
							className={styles.arrow}
						/>
					</div>
				</div>
			</div>
			<ul className={styles.list}>
				{getFilteredAndSortedArticles().map((articleData, index) => (
					<li key={index} className={styles.item}>
						<BlogPageCard
							url={articleData.node.fields.slug}
							data={articleData.node.frontmatter}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
