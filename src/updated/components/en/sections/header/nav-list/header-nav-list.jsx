import * as React from 'react';
import * as styles from './header-nav-list.module.css';
import { Link } from 'gatsby';

export default function HeaderNavList({ linkPrefix }) {
	const [activeHash, setActiveHash] = React.useState('');
	const [currentPath, setCurrentPath] = React.useState('');

	React.useEffect(() => {
		setActiveHash(window.location.hash);
		setCurrentPath(window.location.pathname);

		const handleHashChange = () => setActiveHash(window.location.hash);
		window.addEventListener('hashchange', handleHashChange);

		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	const isActive = target => {
		if (target.startsWith('#')) {
			return activeHash === target;
		}
		return currentPath === target;
	};

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a
						href={`${linkPrefix}#ecosystem`}
						className={`${styles.link} ${
							isActive('#ecosystem') ? styles.active : ''
						}`}
					>
						Ecosystem
					</a>
				</li>
				<li className={styles.item}>
					<a
						href={`${linkPrefix}#trafflab-crm`}
						className={`${styles.link} ${
							isActive('#trafflab-crm') ? styles.active : ''
						}`}
					>
						TRAFFLAB Platform
					</a>
				</li>
				<li className={styles.item}>
					<Link
						to='/en/blog'
						className={`${styles.link} ${
							isActive('/en/blog') ? styles.active : ''
						}`}
					>
						Blog
					</Link>
				</li>
				<li className={styles.item}>
					<Link
						to='/en/partners-and-promocodes'
						className={`${styles.link} ${
							isActive('/en/partners-and-promocodes')
								? styles.active
								: ''
						}`}
					>
						PARTNERS AND PROMOCODES
					</Link>
				</li>
				<li className={styles.item}>
					<a
						href={`${linkPrefix}#contacts`}
						className={`${styles.link} ${
							isActive('#contacts') ? styles.active : ''
						}`}
					>
						Contacts
					</a>
				</li>
			</ul>
		</nav>
	);
}
