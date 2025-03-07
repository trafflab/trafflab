import * as React from 'react';
import * as styles from './styles.module.css';

export default function TrustedFeed() {
	return (
		<div className={styles.trustedFeed} id='trusted-feed'>
			<div className={styles.container}>
				<div className={styles.title}>
					Trusted by the <span>best</span>
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
							"From the very beginning of working with Trafflab,
							we established clear communication, which ultimately
							brought us 10X our usual profit"
						</p>
						<div className={styles.author}>
							<div className={styles.name}>UNISLOTS</div>
							<p className={styles.description}>
								Founders of a system for gaming halls
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
							"Trafflab did a great job, during a period of high
							workload they helped us with traffic, for which we
							are especially grateful"
						</p>
						<div className={styles.author}>
							<div className={styles.name}>DEXSPORT</div>
							<p className={styles.description}>
								Decentralized sports betting platform
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
							"From the very beginning of working with Trafflab,
							we established clear communication, which ultimately
							brought us 10X our usual profit"
						</p>
						<div className={styles.author}>
							<div className={styles.name}>Satoshi spirit</div>
							<p className={styles.description}>
								Founders of a system for gaming halls
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
							"Trafflab did a great job, during a period of high
							workload they helped us with traffic, for which we
							are especially grateful"
						</p>
						<div className={styles.author}>
							<div className={styles.name}>Bitslot</div>
							<p className={styles.description}>
								Decentralized sports betting platform
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
