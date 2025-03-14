import React from 'react';
import * as styles from './statistics.module.css';
import clsx from 'clsx';

export default function Statistics() {
	return (
		<div className={styles.statistics} id='statistics'>
			<div className={styles.container}>
				<div className={styles.titleBlock}>
					<h2 className={styles.title}>
						In 2 years we have achieved{' '}
						<span className={styles.highlight}>
							impressive results
						</span>
					</h2>
				</div>

				<p className={styles.subtitle}>
					And this is just the beginning — join us and grow together!
				</p>

				<div className={styles.statsBlock}>
					<div className={styles.statsGrid}>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>
								Traffic volume of our partners
							</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsNumber}>
									176,905
								</div>
								<div className={styles.statsDescription}>
									FTD, brought by our partners in 2024
								</div>
							</div>
						</div>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>
								Paid to webmasters
							</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsGridItem}>
									<div className={styles.statsNumber}>
										$16M+
									</div>
									<div className={styles.statsDescription}>
										Total payments to webmasters for 2024
									</div>
								</div>
								<div className={styles.statsGridItem}>
									<div className={styles.statsNumber}>
										$14M+
									</div>
									<div className={styles.statsDescription}>
										Total payments to webmasters for 2023
									</div>
								</div>
							</div>
						</div>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>
								Trafflab INSURANCE POOL
							</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsNumber}>
									$486,000
								</div>
								<div className={styles.statsDescription}>
									We guarantee safety and reliability for our
									partners!
								</div>
							</div>
						</div>
						<div className={styles.statsItem}>
							<div className={styles.statsLabel}>OUR STAFF</div>
							<div className={styles.statsFlex}>
								<div className={styles.statsNumber}>42+</div>
								<div className={styles.statsDescription}>
									We create new jobs and attract the best
									specialists!
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
								Webmasters in our CRM
							</h3>
							<div className={styles.trafficNumber}>4000+</div>
						</div>
						<div className={styles.trafficContent}>
							<h3 className={styles.trafficTitle}>Advertisers</h3>
							<div className={styles.trafficNumber}>500+</div>
						</div>
						<div className={styles.trafficContent}>
							<h3 className={styles.trafficTitle}>Offers</h3>
							<div className={styles.trafficNumber}>1600+</div>
						</div>
					</div>
					<p className={styles.trafficDescription}>
						More and more professionals trust us, and we are
						constantly expanding the range of brands we work with!
					</p>
				</div>
				<div className={styles.graphBlock}>
					<div className={styles.graphTitle}>
						We've come a long way and refined our strategies with
						proven clients
					</div>
					<div className={styles.graphContainer}>
						<svg
							width='933'
							height='292'
							viewBox='0 0 933 292'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={styles.chart}
						>
							<path
								d='M1 290C1 290 49.9319 273.112 82.5 268C129.375 260.642 171.5 285 204 268C242.187 248.025 237.5 294.5 311 241C348.392 213.782 464.04 244.46 506 202.5C542.5 166 566.185 148.584 608.5 137.5C687 116.938 691.5 181 721 137.5C748.785 96.5286 839.038 118.041 874.5 83.5C902.473 56.2534 931 1 931 1'
								stroke='url(#paint0_linear_2564_1102)'
								stroke-width='3'
							/>
							<circle cx='5' cy='285' r='5' fill='#FF6666' />
							<circle cx='929' cy='5' r='5' fill='white' />
							<circle cx='310' cy='241' r='5' fill='#FF9999' />
							<circle cx='630' cy='134' r='5' fill='#FFCCCC' />
							<defs>
								<linearGradient
									id='paint0_linear_2564_1102'
									x1='868'
									y1='-6.5'
									x2='700'
									y2='137.5'
									gradientUnits='userSpaceOnUse'
								>
									<stop stop-color='white' />
									<stop offset='1' stop-color='#FF6666' />
								</linearGradient>
							</defs>
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
								d='M5 416C5 416 12.0786 391.984 22.0591 384.713C36.424 374.249 37.0625 408.889 47.0222 384.713C58.7247 356.307 55.705 422.4 78.2292 346.316C89.6881 307.609 146.641 358.173 159.5 298.5C170.685 246.593 176.095 197.782 191 179C202.956 163.934 216.605 180.99 225.645 119.128C234.16 60.8613 261.818 91.455 272.685 42.333C281.258 3.58506 290 5.00664 290 5.00664'
								stroke='url(#paint0_linear_2555_1570)'
								stroke-width='3'
							/>
							<circle cx='290' cy='5' r='5' fill='white' />
							<circle cx='5' cy='416' r='5' fill='#FF6666' />
							<circle cx='90' cy='332' r='5' fill='#FF9999' />
							<circle cx='190' cy='180' r='5' fill='#FFCCCC' />
							<defs>
								<linearGradient
									id='paint0_linear_2555_1570'
									x1='270.694'
									y1='-5.65807'
									x2='184.331'
									y2='10.2935'
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
								Brought by our partners
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
							We started from scratch, gradually building
							connections and user trust
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
							In just one year, we made a big breakthrough and
							achieved 58,626 FTD
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
							In two years, we've come a long way and created the
							most transparent platform
						</p>
					</div>
					<div
						className={`${styles.graphDecoration} ${styles.graphDecoration4}`}
					>
						<div className={styles.graphDecorationYear}>2025</div>

						<div className={styles.graphDecorationNumber}>
							$16M+
						</div>
						<p className={styles.graphDecorationText}>
							In two years, we've come a long way and created the
							most transparent platform
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
