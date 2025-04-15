import * as React from 'react';
import * as styles from './partners-and-promocodes-page-template.module.css';
import PageLayout from '../../en/layouts/page-layout/page-layout';

export default function PartnersAndPromocodesPageTemplate() {
	return (
		<PageLayout>
			<section className={styles.section}>
				<div className={styles.container}>
					<h1 className={styles.title}>
						<span>Partners </span>
						<br />
						and promocode
					</h1>

					<p className={styles.description}>
						Get to know our partners and participate in
						promo-activities
					</p>

					<div className={styles.partnersGrid}>
						{/* Карточка 1 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-9.png'
									alt='Logo 1'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Decentralized platform for betting on any sports
							</p>
							<a href='' className={styles.connectButton}>
								Connect
							</a>
						</div>

						{/* Карточка 2 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-5.png'
									alt='Logo 2'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Decentralized platform for betting on any sports
							</p>
							<div className={styles.promocodeValue}>
								<span className={styles.promocodeCode}>
									TRAFFLAB40
								</span>
								<button
									className={styles.copyButton}
									onClick={() => {
										navigator.clipboard.writeText(
											'TRAFFLAB40'
										);
									}}
								>
									<svg
										width='23'
										height='23'
										viewBox='0 0 23 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4.39956 15.7107C4.12697 15.5553 3.90024 15.3307 3.74229 15.0596C3.58434 14.7884 3.50076 14.4804 3.5 14.1667V5.27778C3.5 4.3 4.3 3.5 5.27778 3.5H14.1667C14.8333 3.5 15.196 3.84222 15.5 4.38889M7.05556 9.42622C7.05556 8.79748 7.30532 8.19449 7.74991 7.74991C8.19449 7.30532 8.79748 7.05556 9.42622 7.05556H17.1293C17.4407 7.05556 17.7489 7.11687 18.0365 7.23601C18.3242 7.35515 18.5855 7.52977 18.8056 7.74991C19.0258 7.97004 19.2004 8.23138 19.3195 8.51901C19.4387 8.80663 19.5 9.1149 19.5 9.42622V17.1293C19.5 17.4407 19.4387 17.7489 19.3195 18.0365C19.2004 18.3242 19.0258 18.5855 18.8056 18.8056C18.5855 19.0258 18.3242 19.2004 18.0365 19.3195C17.7489 19.4387 17.4407 19.5 17.1293 19.5H9.42622C9.1149 19.5 8.80663 19.4387 8.51901 19.3195C8.23138 19.2004 7.97004 19.0258 7.74991 18.8056C7.52977 18.5855 7.35515 18.3242 7.23601 18.0365C7.11687 17.7489 7.05556 17.4407 7.05556 17.1293V9.42622Z'
											stroke='#AFAEB5'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</button>
							</div>
						</div>

						{/* Карточка 3 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-5.png'
									alt='Logo 3'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Decentralized platform for betting on any sports
							</p>
							<button
								className={styles.promocodeValue}
								onClick={() => {
									navigator.clipboard.writeText('TRAFFLAB40');
								}}
							>
								<span className={styles.promocodeCode}>
									TRAFFLAB40
								</span>
								<div className={styles.copyButton}>
									<svg
										width='23'
										height='23'
										viewBox='0 0 23 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4.39956 15.7107C4.12697 15.5553 3.90024 15.3307 3.74229 15.0596C3.58434 14.7884 3.50076 14.4804 3.5 14.1667V5.27778C3.5 4.3 4.3 3.5 5.27778 3.5H14.1667C14.8333 3.5 15.196 3.84222 15.5 4.38889M7.05556 9.42622C7.05556 8.79748 7.30532 8.19449 7.74991 7.74991C8.19449 7.30532 8.79748 7.05556 9.42622 7.05556H17.1293C17.4407 7.05556 17.7489 7.11687 18.0365 7.23601C18.3242 7.35515 18.5855 7.52977 18.8056 7.74991C19.0258 7.97004 19.2004 8.23138 19.3195 8.51901C19.4387 8.80663 19.5 9.1149 19.5 9.42622V17.1293C19.5 17.4407 19.4387 17.7489 19.3195 18.0365C19.2004 18.3242 19.0258 18.5855 18.8056 18.8056C18.5855 19.0258 18.3242 19.2004 18.0365 19.3195C17.7489 19.4387 17.4407 19.5 17.1293 19.5H9.42622C9.1149 19.5 8.80663 19.4387 8.51901 19.3195C8.23138 19.2004 7.97004 19.0258 7.74991 18.8056C7.52977 18.5855 7.35515 18.3242 7.23601 18.0365C7.11687 17.7489 7.05556 17.4407 7.05556 17.1293V9.42622Z'
											stroke='#AFAEB5'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
							</button>
						</div>

						{/* Карточка 4 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-8.png'
									alt='Logo 4'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Decentralized platform for betting on any sports
							</p>
							<a href='' className={styles.connectButton}>
								Connect
							</a>
						</div>

						{/* Карточка 5 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-8.png'
									alt='Logo 5'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Decentralized platform for betting on any sports
							</p>
							<a href='' className={styles.connectButton}>
								Connect
							</a>
						</div>

						{/* Карточка 6 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-7.png'
									alt='Logo 6'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Decentralized platform for betting on any sports
							</p>
							<a href='' className={styles.connectButton}>
								Connect
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}
