import * as React from 'react';
import * as styles from './partners-and-promocodes-page-template.module.css';
import PageLayout from '../../ru/layouts/page-layout/page-layout';

export default function PartnersAndPromocodesPageTemplate() {
	return (
		<PageLayout>
			<section className={styles.section}>
				<div className={styles.container}>
					<h1 className={styles.title}>
						<span>Партнеры </span>
						<br />и промокоды
					</h1>

					<p className={styles.description}>
						Ознакомьтесь с нашими партнерами и поучаствуйте в
						промо-активностях
					</p>

					<div className={styles.partnersGrid}>
						{/* Карточка 1 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-9.png'
									alt='Логотип PR'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Profit Rental — сервис аренды агентских аккаунтов для in-app и социальных сетей. Скидка 15% на первое пополнение по промокоду TRAFF 
							</p>
							<a href='https://profit-rental.com/?utm_source=website&utm_content=partners&utm_term=trafflab' target='_blank' className={styles.connectButton}>
								Подключиться
							</a>
						</div>

						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-10.png'
									alt='Логотип Lamanche'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Виртуальные карты для оплаты рекламы Facebook и Google. -0,5% навсегда от комиссии сервиса по промокоду TRAFFLAB

							 </p>
  <a href='https://lamanchepayments.com?utm_medium=partner&utm_campaign=trafflab&utm_source=web
' target='_blank' className={styles.connectButton}>
    Подключиться
  </a>
</div>
						{/* Карточка 3 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-5.png'
									alt='Логотип 3'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Децентрализованная платформа для ставок на любые
								виды спорта
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
									src='/img/partner-logos/partner-logo-11.png'
									alt='Логотип 4'
								/>
							</div>
							<p className={styles.partnerDescription}>
								PROXYMA — 60+ миллионов уникальных IP-адресов с круглосуточной поддержкой. По промокоду: TRAFFLAB - 15% скидка!
							</p>
							<a href='https://proxyma.io?utm_source=cross-promo&utm_campaign=trafflab' target='_blank' className={styles.connectButton}>
								Подключиться
							</a>
						</div>

						{/* Карточка 5 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-8.png'
									alt='Логотип 5'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Децентрализованная платформа для ставок на любые
								виды спорта
							</p>
							<a href='' className={styles.connectButton}>
								Подключиться
							</a>
						</div>

						{/* Карточка 6 */}
						<div className={styles.partnerCard}>
							<div className={styles.partnerLogo}>
								<img
									src='/img/partner-logos/partner-logo-7.png'
									alt='Логотип 6'
								/>
							</div>
							<p className={styles.partnerDescription}>
								Децентрализованная платформа для ставок на любые
								виды спорта
							</p>
							<a href='' className={styles.connectButton}>
								Подключиться
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageLayout>
	);
}
