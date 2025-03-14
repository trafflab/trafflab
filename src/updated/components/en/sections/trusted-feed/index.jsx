import * as React from 'react';
import * as styles from './styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function TrustedFeed() {
	return (
		<div className={styles.trustedFeed} id='trusted-feed'>
			<div className={styles.container}>
				<div className={styles.title}>
					The best <span>trust us</span>
					<img
						src='/img/feedcards/tapetitle.png'
						alt='trusted-feed'
						className={styles.titleTape}
					/>
				</div>

				<div className={styles.feed}>
					<Swiper
						className={styles.swiper}
						spaceBetween={50}
						slidesPerView={4}
						loop={true}
						autoplay={{
							delay: 3000,
						}}
						breakpoints={{
							320: {
								slidesPerView: 1,
							},
							480: {
								slidesPerView: 4,
							},
						}}
						modules={[Autoplay]}
					>
						<SwiperSlide className={styles.swiperSlide}>
							<div className={styles.item}>
								<img
									src='/img/feedcards/feed1.png'
									alt='trusted-feed'
									className={styles.image}
								/>
								<p className={styles.text}>
									"The guys are true professionals! They
									always help with traffic and are open to
									dialogue"
								</p>
								<div className={styles.author}>
									<div className={styles.name}>CatAffs</div>
									<p className={styles.description}>
										iGaming affiliate program, direct
										advertiser
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.item}>
								<img
									src='/img/feedcards/feed2.png'
									alt='trusted-feed'
									className={styles.image}
								/>
								<p className={styles.text}>
									"Everything is great, it's very pleasant to
									work together"
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										TeamClover
									</div>
									<p className={styles.description}>
										Arbitrage team
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.item}>
								<img
									src='/img/feedcards/feed3.png'
									alt='trusted-feed'
									className={styles.image}
								/>
								<p className={styles.text}>
									"Trafflab is about quality and creativity.
									Any collaboration with the team for us as
									media is an extraordinary and competent way
									to attract audience attention"
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										TrafficCardinal
									</div>
									<p className={styles.description}>
										Media about traffic arbitrage, marketing
										and making money online
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.item}>
								<img
									src='/img/feedcards/feed4.png'
									alt='trusted-feed'
									className={styles.image}
								/>
								<p className={styles.text}>
									"TRAFFLAB is one of the few (about 1 in 100)
									CPA networks that are not only professionals
									in their niche but also know how to express
									it. Express it in an unconventional, smart,
									concise, beautiful, clear, and modern way.
									Few in the market do it as cool as they do."
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										HardCore Aff Club
									</div>
									<p className={styles.description}>
										Online community in affiliate marketing
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.item}>
								<img
									src='/img/feedcards/feed5.png'
									alt='trusted-feed'
									className={styles.image}
								/>
								<p className={styles.text}>
									"It's pleasant to work with you, always in
									touch and have a clear approach to business.
									Great to collaborate, looking forward to new
									projects in the future! And also to
									increased rates"
								</p>
								<div className={styles.author}>
									<div className={styles.name}>RR Team</div>
									<p className={styles.description}>
										Arbitrage team
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.item}>
								<img
									src='/img/feedcards/feed6.png'
									alt='trusted-feed'
									className={styles.image}
								/>
								<p className={styles.text}>
									"While the collaboration is quite brief so
									far, I can note the positive attitude and
									quick response to requests"
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										Marsa Team
									</div>
									<p className={styles.description}>
										Media buying holding
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.item}>
								<img
									src='/img/feedcards/feed7.png'
									alt='trusted-feed'
									className={styles.image}
								/>
								<p className={styles.text}>
									"Our work is excellent, everything is fast
									and with great connection! Everything is
									satisfactory and we manage everything! Thank
									you"
								</p>
								<div className={styles.author}>
									<div className={styles.name}>21st Team</div>
									<p className={styles.description}>
										Arbitrage team
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

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
