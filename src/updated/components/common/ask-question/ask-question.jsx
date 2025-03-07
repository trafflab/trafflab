import * as React from 'react';
import * as styles from './ask-question.module.css';
import LangList from './lang-list/lang-list';

export default function AskQuestion({ buttonText }) {
	return (
		<div className={styles.askQuestion}>
			<div className={styles.langListContainer}>
				<LangList />
			</div>
			<div className={styles.textContainer}>
				{/* <p className={styles.workTime}>24<span style={{color: 'var(--color-gray-1)'}}>/7</span></p> */}
				<a
					href='https://t.me/trafflab_cpa?utm_source=main-landing'
					target='__blank'
					className={styles.askButton}
				>
					{buttonText}
				</a>
			</div>
		</div>
	);
}
