import * as React from 'react';
import * as styles from './basic-button.module.css';

export default function BasicButton({
	text,
	handler,
	isActive = true,
	className,
	containerClassName,
	arrowClassName,
}) {
	return (
		<div className={containerClassName}>
			<button
				className={`${styles.button} ${className}`}
				style={
					isActive ? {} : { backgroundColor: 'var(--color-gray-2)' }
				}
				disabled={!isActive}
				onClick={handler}
				type='button'
			>
				<svg
					className={`${styles.arrow} ${arrowClassName}`}
					width='28'
					height='29'
					viewBox='0 0 28 29'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5.81015 8.46621L22.1932 19.9377M22.1932 19.9377L19.7374 6.01045M22.1932 19.9377L8.26591 22.3935'
						stroke='#1F1D1D'
						strokeWidth='3'
					/>
				</svg>

				{text}
			</button>
		</div>
	);
}
