import * as React from 'react';
import * as styles from './styles.module.css';

export default function TrafficBlog() {
	return (
		<div className={styles.trafficBlog}>
			<div className={styles.container}>
				<div className={styles.title}>
					<span>Traffic</span> - блог
				</div>
				<p className={styles.description}>
					Будьте в курсе всех событий рынка аффилиейт-маркетинга с
					блогом TraffLab — актуальные новости, рекомендации по
					заливу, мануалы и инсайдерская информация из закрытых
					источников.
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
								Краш-игры: разновидности и подходы
							</h3>
							<p className={styles.articleDescription}>
								Ниша гемблинга постоянно развивается, предлагая
								всё новые форматы развлечений для игроков. Среди
								последних новинок, которые быстро привлекли
								внимание игроков...
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
								Популярные слоты АУДИТОРИИ в различных гео
							</h3>
							<p className={styles.articleDescription}>
								Разные Гео — разные вкусы целевой аудитории.
								Чтобы увеличить эффективность рекламных
								кампаний, важно учитывать предпочтения
								населения. В данной статье вы...
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
								популярные Мифы про АРБИТРАЖ трафика
							</h3>
							<p className={styles.articleDescription}>
								Арбитраж трафика — сфера, окружённая мифами и
								заблуждениями, которые часто отталкивают
								новичков или же, наоборот, привлекают их
								нереалистичными...
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
								Геймификация в igaming: роль, виды, офферы
							</h3>
							<p className={styles.articleDescription}>
								Гемблинг-индустрия стремительно развивается: это
								не только открывает новые возможности для
								заработка, но и делает пользователей более
								избирательными и...
							</p>
						</div>
					</div>
				</div>
				<a href='/ru/blog' className={styles.button}>
					Посмотреть все статьи
				</a>
			</div>
		</div>
	);
}
