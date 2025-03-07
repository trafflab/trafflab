import React from 'react';
import * as styles from './styles.module.css';

import SectionWithOffset from '../svg-section/SectionWithOffset';

export default function SupportRequest() {
	return (
		<SectionWithOffset>
			<div className={styles.joinTraff}>
				<div className={styles.container}>
					<div className={styles.title}>ANY QUESTIONS?</div>
					<p className={styles.description}>
						If you have additional questions about Trafflab, our
						cooperation and interaction — write to support, they
						will respond as soon as possible and explain everything
						in detail!
					</p>
					<a
						href='http://t.me/trafflab_cpa'
						className={styles.button}
					>
						CONTACT SUPPORT
					</a>
					<img
						src='/img/opening/trafflabjoinbg.png'
						alt='trafflabjoinbg'
						className={styles.joinBg}
					/>
				</div>
			</div>
		</SectionWithOffset>
	);
}
