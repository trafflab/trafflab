import * as React from 'react';
import * as styles from './styles.module.css';

import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function OffersList() {
	const { openWebFormPopup } = useContext(FormsContexts);

	const handleSubmitRequest = () => {
		openWebFormPopup();
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
									Brazil
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
									Rate
								</div>
								<div className={styles.infoItemValue}>
									$25
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Min. deposit
								</div>
								<div className={styles.infoItemValue}>$3</div>
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
									Spain
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
									Rate
								</div>
								<div className={styles.infoItemValue}>
									€140
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Min. deposit
								</div>
								<div className={styles.infoItemValue}>€20</div>
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
									Spain
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
									Rate
								</div>
								<div className={styles.infoItemValue}>
									€130-140
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Min. deposit
								</div>
								<div className={styles.infoItemValue}>€10</div>
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
									Italy
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
									Rate
								</div>
								<div className={styles.infoItemValue}>
									€140-150
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Min. deposit
								</div>
								<div className={styles.infoItemValue}>€10</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
