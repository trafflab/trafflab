import * as React from 'react';
import * as styles from './opening.module.css';
import { Is480Context, FormsContexts } from '../../../../utils/contexts';

import OpeningImage from './image/opening-image';
import OpeningButton from './button/opening-button';
import { TgButton } from '../../elements';
// import { FormPopup } from "../../popups";
import { BasicButton } from '../../../common/ui';

export default function Opening() {
	const is480 = React.useContext(Is480Context);
	const { openAdvFormPopup, openWebFormPopup } =
		React.useContext(FormsContexts);

	return (
		<section id='opening' className={styles.opening}>
			<div className={styles.content}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						{is480
							? 'International IGAMING CPA Network'
							: 'International IGAMING CPA Network'}
					</h1>
					<div className={styles.textContainer}>
						<p className={styles.subtitle1}>TRAFFLAB</p>
						<img
							src='/img/opening/cat.png'
							alt='trafflabpic'
							className={styles.trafflabCat}
						/>
					</div>
					<BasicButton
						handler={openAdvFormPopup}
						text='I am an advertiser'
						className={styles.buttonAdv}
						containerClassName={styles.buttonAdvContainer}
						arrowClassName={styles.arrowAdv}
					/>
					<BasicButton
						handler={openWebFormPopup}
						text='I am a webmaster'
						className={styles.buttonWeb}
						containerClassName={styles.buttonWebContainer}
						arrowClassName={styles.arrowWeb}
					/>
					<img
						src='/img/opening/trafflabbg.png'
						alt='trafflabpic'
						className={styles.trafflabPic}
					/>
					<div className={styles.subtitleContainer}>
						<p className={styles.subtitle2}>
							Choose your role and get maximum profit with the
							most transparent platform
						</p>
					</div>
				</div>
			</div>
			{/* <OpeningImage /> */}

			{/* <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/> */}
		</section>
	);
}
