import React from 'react';
import * as styles from './styles.module.css';

import SectionWithOffset from '../svg-section/SectionWithOffset';

export default function SupportRequest() {
	return (
		<SectionWithOffset>
			<div className={styles.joinTraff}>
				<div className={styles.container}>
					<div className={styles.title}>ОСТАЛИСЬ ВОПРОСЫ?</div>
					<p className={styles.description}>
						В случае возникновения дополнительных вопросов о
						Trafflab, о нашем с вами сотрудничестве и взаимодействии
						— пишите в саппорт, вам ответят ближайшее время и все
						подробно расскажут!
					</p>
					<a
						href='http://t.me/trafflab_cpa'
						className={styles.button}
					>
						НАПИСАТЬ САППОРТУ
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
