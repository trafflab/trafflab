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
					<Link to={`/en/`} className={styles.logoLink}>
						<Logo />
						<p className={styles.year}>
							{year} © TraffLab. <br /> All rights reserved.
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
					<div className={styles.listTitle}>Support</div>
					<ul className={styles.otherContactslist}>
						<li className={styles.listEement}>
							<a
								href='mailto:admin@trafflab.com'
								className={styles.link}
							>
								Email →
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
							href='/en/privacy-policy/'
							className={styles.contentBottomLink}
						>
							Privacy policy
						</a>
					</li>
					<li>
						<a
							href='/en/terms-of-use/'
							className={styles.contentBottomLink}
						>
							Terms of use
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
