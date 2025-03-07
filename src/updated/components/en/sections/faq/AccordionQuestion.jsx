import React from 'react';
import * as styles from './styles.module.css';

const AccordionQuestion = ({
	question,
	questionId,
	selectedQuestion,
	onQuestionSelect,
	answer,
}) => (
	<div className={styles.questionAccordion}>
		<button
			className={`${styles.questionButton} ${
				selectedQuestion === questionId ? styles.active : ''
			}`}
			onClick={() => onQuestionSelect(questionId)}
		>
			{question}
			<img
				src='/img/faq/accicon.svg'
				alt='accordion-icon'
				className={styles.accordionIcon}
			/>
		</button>
		<p
			className={`${styles.answer} ${
				selectedQuestion === questionId ? styles.show : ''
			}`}
		>
			{answer}
		</p>
	</div>
);

export default AccordionQuestion;
