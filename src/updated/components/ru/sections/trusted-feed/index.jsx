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
					Нам доверяют <span>лучшие</span>
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
									«Ребята профессионалы своего дела! Всегда
									выручат с трафиком и открыты к диалогу»
								</p>
								<div className={styles.author}>
									<div className={styles.name}>CatAffs</div>
									<p className={styles.description}>
										iGaming партнерская программа, прямой
										рекламодатель
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
									«Все хорошо, очень приятно вместе работать»
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										TeamClover
									</div>
									<p className={styles.description}>
										Арбитражная команда
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
									«Trafflab — это про качество и креативность.
									Любое сотрудничество с ребятами для нас как
									для медиа является неординарным и грамотным
									способом привлечения внимания аудитории»
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										TrafficCardinal
									</div>
									<p className={styles.description}>
										Медиа об арбитраже трафика, маркетинге и
										заработке в Интернете
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
									«TRAFFLAB — одна из немногих (примерно 1 на
									100) СPA-сеток, которые являются не только
									профи в своей нише, но еще и умеют это
									выражать. Выражать нестандартно, умно, емко,
									красиво и четко и современно. Мало кто в
									рынке делает так круто, как они.»
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										HardCore Aff Club
									</div>
									<p className={styles.description}>
										Онлайн-комьюнити в сфере
										affiliate-маркетинга
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
									«Работать с вами приятно, всегда на связи и
									четкий подход к делу. Здорово сотрудничать,
									надеемся на новые проекты в будущем! И так
									же на апнутые ставки»
								</p>
								<div className={styles.author}>
									<div className={styles.name}>RR Team</div>
									<p className={styles.description}>
										Арбитражная команда
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
									«Пока что сотрудничество достаточно
									непродолжительное, но могу подметить
									позитивное расположение и оперативную
									реакцию на запросы»
								</p>
								<div className={styles.author}>
									<div className={styles.name}>
										Marsa Team
									</div>
									<p className={styles.description}>
										Медиабаинговый холдинг
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
									«Наша работа прекрасна, все быстро и на
									хорошем коннекте! Все устраивает и все
									успеваем! Спасибо»
								</p>
								<div className={styles.author}>
									<div className={styles.name}>21st Team</div>
									<p className={styles.description}>
										Арбитражная команда
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
