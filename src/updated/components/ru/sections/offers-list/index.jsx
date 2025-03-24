import * as React from 'react';
import * as styles from './styles.module.css';
import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function OffersList() {
	const { openWebFormPopup } = useContext(FormsContexts);

	const handleButtonClick = () => {
		if (typeof openWebFormPopup === 'function') {
			openWebFormPopup();
		}
	};
	return (
		<div className={styles.offersList} id='offers-list'>
			<div className={styles.container}>
				<div className={styles.title}>
					<span>СПИСОК ОФФЕРОВ </span>ЗА ПОСЛЕДНИЙ МЕСЯЦ
				</div>
				<p className={styles.description}>
					Оставьте заявку, чтобы получить доступ к остальным
					эксклюзивным офферам на нашей платформе
				</p>
				<div className={styles.buttonContainer}>
					<button
						className={styles.button}
						onClick={handleButtonClick}
					>
						Оставить заявку
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
								<div className={styles.infoItemTitle}>Гео</div>
								<div className={styles.infoItemValue}>
									Бразилия
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Источник
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
									$25
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
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
								<div className={styles.infoItemTitle}>Гео</div>
								<div className={styles.infoItemValue}>
									Испания
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Источник
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
									€140
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
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
								<div className={styles.infoItemTitle}>Гео</div>
								<div className={styles.infoItemValue}>
									Испания
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Источник
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
									€130-140
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
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
								<div className={styles.infoItemTitle}>Гео</div>
								<div className={styles.infoItemValue}>
									Италия
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Источник
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
									€140-150
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.infoItemTitle}>
									Миндеп/бейс
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
