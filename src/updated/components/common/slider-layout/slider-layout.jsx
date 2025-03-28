import * as React from 'react';
import * as styles from './slider-layout.module.css';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import SliderLayoutArrow from './arrow/slider-layout-arrow';

export default function SliderLayout({ children, options, isArrows = true }) {
	// Добавляем состояние для отслеживания, находимся ли мы на клиенте
	const [isBrowser, setIsBrowser] = React.useState(false);

	// Устанавливаем isBrowser в true только на клиенте
	React.useEffect(() => {
		setIsBrowser(true);
	}, []);

	// Если мы не на клиенте, возвращаем заглушку
	if (!isBrowser) {
		return <div className={styles.arrowContainer}>{children}</div>;
	}

	// Рендерим Splide только на клиенте
	return (
		<Splide hasTrack={false} options={options}>
			<div className={`splide__arrows ${styles.arrowContainer}`}>
				<button
					className={`splide__arrow splide__arrow--prev ${styles.prevArrow}`}
					data-arrows={isArrows}
				>
					<SliderLayoutArrow isLeft={true} />
				</button>

				<SplideTrack>{children}</SplideTrack>

				<button
					className={`splide__arrow splide__arrow--next ${styles.nextArrow}`}
					data-arrows={isArrows}
				>
					<SliderLayoutArrow isLeft={false} />
				</button>
			</div>
		</Splide>
	);
}
