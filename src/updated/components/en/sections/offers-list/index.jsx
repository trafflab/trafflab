import * as React from 'react';
import * as styles from './styles.module.css';

import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function OffersList() {
	const { openAdvFormPopup } = useContext(FormsContexts);

	const handleSubmitRequest = () => {
		openAdvFormPopup();
	};

	return (
		<div className={styles.offersList} id='top-offers'>
			<div className={styles.container}>
				<div className={styles.title}>
					<span>OFFERS LIST </span>FOR THE LAST MONTH
				</div>
				<p className={styles.description}>
					Submit a request to get access to other exclusive offers on
					our platform
				</p>
				<div className={styles.buttonContainer}>
					<button
						className={styles.button}
						onClick={handleSubmitRequest}
					>
						Submit a request
					</button>
				</div>
				<div className={styles.offers}>
					<img
						src='/img/offers/offersticker.png'
						alt='offersticker'
						className={styles.offerSticker}
					/>
					<img
						src='/img/offers/tape.png'
						alt='tape'
						className={styles.tape}
					/>
					<div className={styles.offer}>
						<img
							src='/img/offers/offer.png'
							alt='offer'
							className={styles.offerImg}
						/>
						<div className={styles.offerInfo}>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>Geo</div>
								<div className={styles.infoItemValue}>
									Austria
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Source
								</div>
								<div className={styles.infoItemValue}>
									Facebook
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Ставка
								</div>
								<div className={styles.infoItemValue}>
									$40,847
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
								</div>
								<div className={styles.infoItemValue}>-</div>
							</div>
						</div>
					</div>
					<div className={styles.offer}>
						<img
							src='/img/offers/offer.png'
							alt='offer'
							className={styles.offerImg}
						/>
						<div className={styles.offerInfo}>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>Geo</div>
								<div className={styles.infoItemValue}>
									Austria
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Source
								</div>
								<div className={styles.infoItemValue}>
									Facebook
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Ставка
								</div>
								<div className={styles.infoItemValue}>
									$40,847
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
								</div>
								<div className={styles.infoItemValue}>-</div>
							</div>
						</div>
					</div>
					<div className={styles.offer}>
						<img
							src='/img/offers/offer.png'
							alt='offer'
							className={styles.offerImg}
						/>
						<div className={styles.offerInfo}>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>Geo</div>
								<div className={styles.infoItemValue}>
									Austria
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Source
								</div>
								<div className={styles.infoItemValue}>
									Facebook
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Ставка
								</div>
								<div className={styles.infoItemValue}>
									$40,847
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
								</div>
								<div className={styles.infoItemValue}>-</div>
							</div>
						</div>
					</div>
					<div className={styles.offer}>
						<img
							src='/img/offers/offer.png'
							alt='offer'
							className={styles.offerImg}
						/>
						<div className={styles.offerInfo}>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>Geo</div>
								<div className={styles.infoItemValue}>
									Austria
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Source
								</div>
								<div className={styles.infoItemValue}>
									Facebook
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Ставка
								</div>
								<div className={styles.infoItemValue}>
									$40,847
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
								</div>
								<div className={styles.infoItemValue}>-</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
