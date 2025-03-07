import * as React from 'react';
import * as styles from './styles.module.css';

export default function TrustedFeed() {
	return (
		<div className={styles.trustedFeed} id='trusted-feed'>
			<div className={styles.container}>
				<div className={styles.title}>
					Нам доверяют <span>лучшие</span>
					<img
						src='/img/feedcards/tapetitle.png'
						alt='trusted-feed'
						className={styles.titleTape}
					/>
				</div>
				<div className={styles.feed}>
					<div className={styles.item}>
						<img
							src='/img/feedcards/unislots.png'
							alt='trusted-feed'
							className={styles.image}
						/>
						<p className={styles.text}>
							«Буквально с момента начала работы с Trafflab у нас
							выстроилась понятная коммуникация, которая в
							результате принесла нам 10Х от нашей обычной
							прибыли»
						</p>
						<div className={styles.author}>
							<div className={styles.name}>UNISLOTS</div>
							<p className={styles.description}>
								Основатели системы для игровых залов
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<img
							src='/img/feedcards/dexsport.png'
							alt='trusted-feed'
							className={styles.image}
						/>
						<p className={styles.text}>
							«Trafflab большие молодцы, в период большой загрузки
							помогли нам с трафиком, за что им отдельное спасибо»
						</p>
						<div className={styles.author}>
							<div className={styles.name}>DEXSPORT</div>
							<p className={styles.description}>
								Децентрализованная платформа для ставок на спорт
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<img
							src='/img/feedcards/satoshi.png'
							alt='trusted-feed'
							className={styles.image}
						/>
						<p className={styles.text}>
							«Буквально с момента начала работы с Trafflab у нас
							выстроилась понятная коммуникация, которая в
							результате принесла нам 10Х от нашей обычной
							прибыли»
						</p>
						<div className={styles.author}>
							<div className={styles.name}>Satoshi spirit</div>
							<p className={styles.description}>
								Основатели системы для игровых залов
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<img
							src='/img/feedcards/bitslot.png'
							alt='trusted-feed'
							className={styles.image}
						/>
						<p className={styles.text}>
							«Trafflab большие молодцы, в период большой загрузки
							помогли нам с трафиком, за что им отдельное спасибо»
						</p>
						<div className={styles.author}>
							<div className={styles.name}>Bitslot</div>
							<p className={styles.description}>
								Децентрализованная платформа для ставок на спорт
							</p>
						</div>
					</div>
					<img
						src='/img/feedcards/tapecard.png'
						alt='trusted-feed'
						className={styles.cardTape}
					/>
				</div>
			</div>
		</div>
	);
}
