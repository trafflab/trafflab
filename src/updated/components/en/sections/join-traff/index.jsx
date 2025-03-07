import React from 'react';
import * as styles from './styles.module.css';

import SectionWithOffset from '../svg-section/SectionWithOffset';
import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function JoinTraff() {
	const { openAdvFormPopup } = useContext(FormsContexts);

	const handleJoinTraff = () => {
		openAdvFormPopup();
	};

	return (
		<SectionWithOffset>
			<div className={styles.joinTraff}>
				<div className={styles.container}>
					<div className={styles.title}>
						Grow together with our team
					</div>
					<p className={styles.description}>
						Start using our tools and scale your business! Submit a
						request, and a manager will contact you as soon as
						possible!
					</p>
					<button className={styles.button} onClick={handleJoinTraff}>
						JOIN TRAFFLAB
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
