import React from 'react';
import * as styles from './statistics.module.css';
import clsx from 'clsx';

export default function Statistics() {
	return (
		<div className={styles.statistics} id='statistics'>
			<div className={styles.container}>
				<div className={styles.titleBlock}>
					<h2 className={styles.title}>
						За 2 года мы достигли{' '}
						<span className={styles.highlight}>
							высоких результатов
						</span>
					</h2>
				</div>

				<p className={styles.subtitle}>
					И это только начало — присоединяйтесь и растите вместе с
					нами!
				</p>

				<div className={styles.statsBlock}>
					<div className={styles.statsGrid}>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>
								Объем трафика наших партнеров
							</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsNumber}>
									176,905
								</div>
								<div className={styles.statsDescription}>
									FTD, столько привели наши партнеры в 2024
									году
								</div>
							</div>
						</div>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>
								Выплачено вебмастерам
							</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsGridItem}>
									<div className={styles.statsNumber}>
										$16M+
									</div>
									<div className={styles.statsDescription}>
										Полная сумма выплат вебмастерам за 2024
										год
									</div>
								</div>
								<div className={styles.statsGridItem}>
									<div className={styles.statsNumber}>
										$14M+
									</div>
									<div className={styles.statsDescription}>
										Полная сумма выплат вебмастерам за 2023
										год
									</div>
								</div>
							</div>
						</div>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>
								СТРАХОВОЙ ПУЛ Trafflab
							</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsNumber}>
									$486,000
								</div>
								<div className={styles.statsDescription}>
									Мы гарантируем безопасность и надежность для
									наших партнеров!
								</div>
							</div>
						</div>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>
								ШТАТ НАШИХ СОТРДУНИКОВ
							</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsNumber}>42+</div>
								<div className={styles.statsDescription}>
									Мы создаем новые рабочие места и привлекаем
									лучших специалистов!
								</div>
							</div>
						</div>
						<img
							src='/img/statistics/TapeSingle.png'
							alt='Текстура'
							className={styles.tapeSingle}
						/>
						<img
							src='/img/statistics/TapeDouble.png'
							alt='Текстура'
							className={styles.tapeDouble}
						/>
					</div>
				</div>
				<div
					className={clsx(
						styles.trafficBlock,
						styles.trafficBlockMobile
					)}
				>
					<div className={styles.trafficFlex}>
						<div className={styles.trafficContent}>
							<h3 className={styles.trafficTitle}>
								Вембастеров в нашей CRM
							</h3>
							<div className={styles.trafficNumber}>4000+</div>
						</div>
						<div className={styles.trafficContent}>
							<h3 className={styles.trafficTitle}>
								рекламодателей
							</h3>
							<div className={styles.trafficNumber}>500+</div>
						</div>
						<div className={styles.trafficContent}>
							<h3 className={styles.trafficTitle}>Офферов</h3>
							<div className={styles.trafficNumber}>1600+</div>
						</div>
					</div>
					<p className={styles.trafficDescription}>
						Нам доверяют все больше профессионалов и мы постоянно
						расширяем ассортимент брендов, с которыми мы
						сотрудничаем!
					</p>
				</div>
				<div className={styles.graphBlock}>
					<div className={styles.graphTitle}>
						Мы прошли большой путь и отточили свои стратегии с
						проверенными клиентами
					</div>
					<div className={styles.graphContainer}>
						<svg
							className={styles.chart}
							viewBox='-10 -10 890 312'
							preserveAspectRatio='none'
						>
							<defs>
								<linearGradient
									id='paint0_linear'
									x1='868'
									y1='-6.50005'
									x2='700'
									y2='137.5'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='white' />
									<stop offset='1' stopColor='#FF6666' />
								</linearGradient>
							</defs>
							<path
								d='M1 290C1 290 70.8237 278.298 113 262.5C154.299 247.031 170.011 218.321 213.5 211C272.392 201.085 312 279.5 385.5 226C422.892 198.782 464.04 244.46 506 202.5C542.5 166 554.185 147.584 596.5 136.5C646 123.534 672 190 701.5 146.5C729.285 105.529 776.038 118.041 811.5 83.5C839.473 56.2534 868 1 868 1'
								stroke='url(#paint0_linear)'
								strokeWidth='3'
								fill='none'
							/>
							<circle cx='6' cy='290' r='6' fill='white' />
							<circle cx='410' cy='217' r='6' fill='white' />
							<circle cx='866' cy='6' r='6' fill='white' />
						</svg>
						<svg
							width='295'
							height='421'
							viewBox='0 0 295 421'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={styles.chartMobile}
						>
							<path
								d='M5 416C5 416 27.9524 399.358 41.8166 376.891C55.3923 354.892 60.5573 314.063 74.8529 303.651C94.212 289.55 107.232 401.067 131.393 324.983C143.684 286.275 157.21 351.236 171.003 291.562C183.002 239.654 186.843 213.464 200.753 197.701C217.024 179.261 225.571 273.785 235.268 211.922C244.402 153.655 259.77 171.45 271.427 122.327C280.623 83.5784 290 5 290 5'
								stroke='url(#paint0_linear_2003_4218)'
								stroke-width='3'
							/>
							<circle cx='290' cy='5' r='5' fill='white' />
							<circle cx='5' cy='416' r='5' fill='#FF6666' />
							<defs>
								<linearGradient
									id='paint0_linear_2003_4218'
									x1='290'
									y1='-5.66616'
									x2='197.82'
									y2='12.5968'
									gradientUnits='userSpaceOnUse'
								>
									<stop stop-color='white' />
									<stop offset='1' stop-color='#FF6666' />
								</linearGradient>
							</defs>
						</svg>

						<div className={styles.graphDecorationLine}></div>
						<div className={styles.graphDecorationLine}></div>
						<div className={styles.graphDecorationAccent}>
							<div className={styles.graphDecorationAccentTitle}>
								FTD
							</div>
							<div className={styles.graphDecorationAccentText}>
								Столько привели наши партнеры
							</div>
						</div>
						<div className={styles.graphDecorationLine}></div>
						<div className={styles.graphDecorationLine}></div>
						<div className={styles.graphDecorationLine}></div>
					</div>
					<div
						className={`${styles.graphDecoration} ${styles.graphDecoration1}`}
					>
						<div className={styles.graphDecorationYear}>2022</div>

						<div className={styles.graphDecorationNumber}>$ 0</div>
						<p className={styles.graphDecorationText}>
							Мы начали запуск с нуля, постепенно нарабатывая
							связи и доверие пользователей
						</p>
					</div>
					<div
						className={`${styles.graphDecoration} ${styles.graphDecoration2}`}
					>
						<div className={styles.graphDecorationYear}>2023</div>

						<div className={styles.graphDecorationNumber}>
							$5.5M+
						</div>
						<p className={styles.graphDecorationText}>
							Уже за год мы сделали большой прорыв и смогли
							достичь FTD в 58,626
						</p>
					</div>
					<div
						className={`${styles.graphDecoration} ${styles.graphDecoration3}`}
					>
						<div className={styles.graphDecorationYear}>2024</div>

						<div className={styles.graphDecorationNumber}>
							$14M+
						</div>
						<p className={styles.graphDecorationText}>
							За два года мы прошли большой путь и смогли создать
							самую прозрачную платформу
						</p>
					</div>
					<img
						src='/img/tabs/graphcat.png'
						alt='graph cat'
						className={styles.graphCat}
					/>
				</div>
			</div>
		</div>
	);
}
