import React from 'react';
import * as styles from './styles.module.css';

import SectionWithOffset from '../svg-section/SectionWithOffset';
import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function JoinTraff() {
	const { openAdvFormPopup } = useContext(FormsContexts);

	const handleButtonClick = () => {
		if (typeof openAdvFormPopup === 'function') {
			openAdvFormPopup();
		} else {
			console.error(
				'openAdvFormPopup не является функцией:',
				openAdvFormPopup
			);
		}
	};

	return (
		<SectionWithOffset>
			<div className={styles.joinTraff}>
				<div className={styles.container}>
					<div className={styles.title}>
						Растите вместе с нашей командой
					</div>
					<p className={styles.description}>
						Начните пользоваться нашими инструментами и
						масштабируйте свой бизнес! Оставьте заявку, менеджер
						свяжется с вами в ближайшее время!
					</p>
					<button
						onClick={handleButtonClick}
						className={styles.button}
					>
						ПРИСОЕДИНИТЬСЯ К TRAFFLAB
					</button>
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
