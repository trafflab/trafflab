import * as React from 'react';
import * as styles from './footer.module.css';
import { Link } from 'gatsby';

import { Logo } from '../../../common';
import FooterNavList from './nav-list/footer-nav-list';
import FooterContactsList from './contacts-list/footer-contacts-list';

export default function Footer({ linkPrefix = '' }) {
	const [year, setYear] = React.useState('20..');
	React.useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer id='contacts' className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.logoContainer}>
					<Link to={`/ru/`} className={styles.logoLink}>
						<Logo />
						<p className={styles.year}>
							{year} © TraffLab. <br /> Все права защищены.
						</p>
					</Link>
				</div>
				<div className={styles.navContainer}>
					<FooterNavList linkPrefix={linkPrefix} />
				</div>

				<div className={styles.contactsContainer}>
					<FooterContactsList />
				</div>
				<div className={styles.otherContactsContainer}>
					<div className={styles.listTitle}>Поддержка</div>
					<ul className={styles.otherContactslist}>
						<li className={styles.listEement}>
							<a
								href='mailto:sales@trafflab.com'
								className={styles.link}
							>
								Почта →
							</a>
						</li>
						<li className={styles.listEement}>
							<a
								href='https://t.me/trafflab_cpa'
								className={styles.link}
							>
								Telegram →
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.contentBottom}>
				<img src='/img/footer/trafflabfooter.png' alt='' />
				<ul className={styles.contentBottomList}>
					<li>
						<a
							href='/ru/privacy-policy/'
							className={styles.contentBottomLink}
						>
							Политика конфиденциальности
						</a>
					</li>
					<li>
						<a
							href='/ru/terms-of-use/'
							className={styles.contentBottomLink}
						>
							Условия пользования
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
