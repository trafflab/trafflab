import * as React from 'react';
import * as styles from './footer-nav-list.module.css';
import { Link } from 'gatsby';

export default function FooterNavList({ linkPrefix }) {
	return (
		<nav className={styles.nav}>
			<div className={styles.title}>Main pages</div>
			<ul className={styles.list}>
				<li>
					<a href={`${linkPrefix}#ecosystem`} className={styles.link}>
						Our advantages
					</a>
				</li>
				<li>
					<a
						href={`${linkPrefix}#statistics`}
						className={styles.link}
					>
						About us
					</a>
				</li>
				<li>
					<a
						href={`${linkPrefix}#trusted-feed`}
						className={styles.link}
					>
						Traffic sources
					</a>
				</li>
				<li>
					<Link to={`${linkPrefix}blog`} className={styles.link}>
						Traffic blog
					</Link>
				</li>
				<li>
					<Link
						to={`${linkPrefix}partners-and-promocodes`}
						className={styles.link}
					>
						Partners and promocodes
					</Link>
				</li>
			</ul>
		</nav>
	);
}
