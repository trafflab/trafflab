import * as React from 'react';
import * as styles from './footer-nav-list.module.css';
import { Link } from 'gatsby';

export default function FooterNavList({ linkPrefix }) {
	return (
		<nav className={styles.nav}>
			<div className={styles.title}>Основные страницы</div>
			<ul className={styles.list}>
				<li>
					<a href={`${linkPrefix}#ecosystem`} className={styles.link}>
						Наши преимущества
					</a>
				</li>
				<li>
					<a
						href={`${linkPrefix}#statistics`}
						className={styles.link}
					>
						О нас
					</a>
				</li>
				<li>
					<a
						href={`${linkPrefix}#trusted-feed`}
						className={styles.link}
					>
						Отзывы
					</a>
				</li>
				<li>
					<Link to='/ru/blog' className={styles.link}>
						Traffic-блог
					</Link>
				</li>
				<li>
					<a
						href={`${linkPrefix}#offers-list`}
						className={styles.link}
					>
						Топ-офферы
					</a>
				</li>
				<li>
					<Link
						to='/ru/partners-and-promocodes'
						className={styles.link}
					>
						Партнеры и промокоды
					</Link>
				</li>
			</ul>
		</nav>
	);
}
