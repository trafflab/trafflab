import * as React from 'react';
import * as styles from './lang-list.module.css';
import { navigate } from 'gatsby';
import { changeRelativeUrlLang, getUrlLang } from '../../../../utils/utils';

export default function LangList() {
	const [lang, setLang] = React.useState('');

	const handleChange = evt => {
		localStorage.setItem('lang', evt.target.value);
		setLang(evt.target.value);
		navigate(changeRelativeUrlLang(evt.target.value));
	};

	React.useEffect(() => {
		setLang(getUrlLang());
	}, [lang]);

	return (
		<div className={styles.langList}>
			<svg
				width='22rem'
				height='22rem'
				viewBox='0 0 22 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M3.53331 8.33333H18.4666M3.53331 13.6667H18.4666M10.5556 3C9.05811 5.39966 8.26421 8.17144 8.26421 11C8.26421 13.8286 9.05811 16.6003 10.5556 19M11.4444 3C12.9419 5.39966 13.7358 8.17144 13.7358 11C13.7358 13.8286 12.9419 16.6003 11.4444 19M3 11C3 12.0506 3.20693 13.0909 3.60896 14.0615C4.011 15.0321 4.60028 15.914 5.34315 16.6569C6.08601 17.3997 6.96793 17.989 7.93853 18.391C8.90914 18.7931 9.94943 19 11 19C12.0506 19 13.0909 18.7931 14.0615 18.391C15.0321 17.989 15.914 17.3997 16.6569 16.6569C17.3997 15.914 17.989 15.0321 18.391 14.0615C18.7931 13.0909 19 12.0506 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z'
					stroke='#AFAEB5'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>

			<select
				value={lang}
				onChange={handleChange}
				className={styles.select}
			>
				<option className={styles.option} value='en'>
					EN
				</option>
				{/* <option value='ua'>UA</option> */}
				<option className={styles.option} value='ru'>
					RU
				</option>
			</select>
		</div>
	);
}
