import * as React from 'react';
import * as styles from './footer-contacts-list.module.css';

export default function FooterContactsList() {
	return (
		<div>
			<div className={styles.title}>Социальные сети</div>
			<ul className={styles.list}>
				<li>
					<a href='https://bit.ly/3U6Dvub' className={styles.link}>
						Telegram →
					</a>
				</li>
				<li>
					<a href='https://bit.ly/3xPzgJy' className={styles.link}>
						Instagram →
					</a>
				</li>
				<li>
					<a href='https://bit.ly/3mlddUS' className={styles.link}>
						Linkedin →
					</a>
				</li>
				<li>
					<a href='https://bit.ly/3MzbKow' className={styles.link}>
						Facebook →
					</a>
				</li>
				<li>
					<a href='https://bit.ly/3Mhb3A9' className={styles.link}>
						YouTube →
					</a>
				</li>
				<li>
					<a href='https://bit.ly/3xdtWOC' className={styles.link}>
						Twitter →
					</a>
				</li>
			</ul>
		</div>
	);
}
