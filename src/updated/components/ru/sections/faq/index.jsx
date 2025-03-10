import * as React from 'react';
import * as styles from './styles.module.css';
import AccordionQuestion from './AccordionQuestion';

export default function FAQ() {
	const [selectedRole, setSelectedRole] = React.useState(null);
	const [selectedQuestion, setSelectedQuestion] = React.useState(null);

	const handleRoleSelect = role => {
		setSelectedRole(role === selectedRole ? null : role);
		setSelectedQuestion(null);

		setTimeout(() => {
			const accordionElement = document.getElementById(
				`accordion-${role}`
			);
			if (accordionElement && role !== selectedRole) {
				accordionElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		}, 50);
	};

	const handleQuestionSelect = question => {
		setSelectedQuestion(question === selectedQuestion ? null : question);
	};

	return (
		<div className={styles.faq}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>
						Какие <span>вопросы</span> возникают чаще всего
					</h2>
					<img
						src='/img/faq/faqsticker.png'
						alt='faqsticker'
						className={styles.sticker}
					/>
				</div>
				<div className={styles.accordionContainer}>
					<div
						className={styles.roleAccordion}
						id='accordion-webmaster'
					>
						<button
							className={`${styles.roleButton} ${
								selectedRole === 'webmaster'
									? styles.active
									: ''
							}`}
							onClick={() => handleRoleSelect('webmaster')}
						>
							<div>
								Если вы <span>Вебмастер</span>
							</div>

							<img
								src='/img/faq/accicon.svg'
								alt='accordion-icon'
								className={styles.accordionIcon}
							/>
						</button>
						<div
							className={`${styles.questionsContainer} ${
								selectedRole === 'webmaster' ? styles.show : ''
							}`}
						>
							<AccordionQuestion
								question='Как начать работать с Trafflab?'
								questionId='question1'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Чтобы начать работу, заполните форму на сайте и укажите, что вы вебмастер. В течение 15 минут в Telegram с вами свяжется саппорт @trafflab_cpa. Далее мы зададим несколько вопросов, чтобы узнать вас лучше и понять, что мы можем предложить
'
							/>

							<AccordionQuestion
								question='Работаете ли вы с новичками и предоставляете гайды?'
								questionId='question2'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='На данный момент мы работаем с партнерами, кокторые имеют опыт в сфере iGaming. В нашем блоге вы найдете полезные статьи, которые мы регулярно обновляем
'
							/>
							<AccordionQuestion
								question='Кто такой персональный менеджер?'
								questionId='question3'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Ваш персональный affiliate менеджер подберет необходимый или посоветует конвертящий оффер, предоставит необходимую информацию, проконсультирует по выплатам, поможет оптимизировать и масштабировать ваш трафик'
							/>

							<AccordionQuestion
								question='Как активировать оффер?'
								questionId='question4'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Некоторые офферы доступны сразу после регистрации в CRM. Для активации некоторых офферов требуется аппрув рекламодателя (обычно не более 1 дня)'
							/>
							<AccordionQuestion
								question=' Что вы предоставляете вебмастеру?'
								questionId='question5'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='TRAFFLAB предоставляет необходимую инфраструктуру для своих партнеров. Наши приложения доступны всем, остальные расходники обсуждаются индивидуально'
							/>
							<AccordionQuestion
								question='Как оценивается качество трафика?'
								questionId='question6'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Рекламодатель оценивает множество параметров, включая активность пользователей, повторные посещения, конверсии, время на сайте и показатели отказов, для определения соответствия KPI. Невыполнение KPI может привести к деактивации оффера. Мошенничество приведет к блокировке на платформе. Мы тестируем предложения перед активацией, чтобы убедиться в реалистичности KPI'
							/>
							<AccordionQuestion
								question=' Могу ли я получить бамп ставки?'
								questionId='question7'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Мы предлагаем конкурентоспособные ставки, часто превышающие предложения конкурентов. Мы всегда готовы обсуждать повышение ставок с проверенными партнерами, демонстрирующими высокие объемы качественного трафика. Также не забывайте следить за промокодами в нашем блоге и социальных сетях'
							/>

							<AccordionQuestion
								question='Холд и выплаты:'
								questionId='question8'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Холд составляет от 7 до 30 дней в зависимости от условий оффера и скорости проверки трафика рекламодателем. Выплаты производятся без задержек любым удобным способом'
							/>
							<AccordionQuestion
								question='Какие типы трафика запрещены и по каким признакам он может быть признан фродом?'
								questionId='question9'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Запрещены мотивированный трафик, боты, мультиаккаунты и любое мошенничество. Мы используем антифрод-систему и ручную проверку трафика. Рекламодатели также контролируют трафик и оценивают поведенческие факторы и ROI'
							/>
							<AccordionQuestion
								question='Что такое экосистема Trafflab?'
								questionId='question10'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Trafflab — это AdTech компания, создающая инфраструктуру для вебмастеров, паблишеров и арбитражников. На данный момент наш ключевой продукт — партнёрская сеть с инструментами, преимущественно технического характера, для увеличения EPC трафика и повышения конверсий'
							/>
						</div>
					</div>

					{/* Advertiser Accordion */}
					<div
						className={styles.roleAccordion}
						id='accordion-advertiser'
					>
						<button
							className={`${styles.roleButton} ${
								selectedRole === 'advertiser'
									? styles.active
									: ''
							}`}
							onClick={() => handleRoleSelect('advertiser')}
						>
							<div>
								Если вы <span>РЕКЛАМОДАТЕЛЬ</span>
							</div>

							<img
								src='/img/faq/accicon.svg'
								alt='accordion-icon'
								className={styles.accordionIcon}
							/>
						</button>
						<div
							className={`${styles.questionsContainer} ${
								selectedRole === 'advertiser' ? styles.show : ''
							}`}
						>
							<AccordionQuestion
								question='Как начать сотрудничество с Trafflab?
'
								questionId='question1'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Заполните форму на сайте, указав, что вы рекламодатель. С вами свяжется саппорт @trafflab_cpa в Telegram в течение 15 минут для уточнения деталей'
							/>
							<AccordionQuestion
								question='С какими вертикалями вы работаете?'
								questionId='question2'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Trafflab специализируется на iGaming и развивает EdTech направление
'
							/>
							<AccordionQuestion
								question='Какие ГЕО?'
								questionId='question3'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Мы работаем со всеми странами (Tier 1-3)'
							/>
							<AccordionQuestion
								question='Сколько у вас офферов и как вы отбираете бренды?'
								questionId='question4'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='У нас более 1600 офферов от 500 рекламодателей. Мы постоянно расширяем ассортимент, сотрудничая с брендами, отвечающими нашим требованиям и интересам вебмастеров'
							/>
							<AccordionQuestion
								question=' С какими моделями оплаты вы работаете?'
								questionId='question5'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='CPA, RevShare, Hybrid'
							/>
							<AccordionQuestion
								question='Есть ли у вас внутренний баинг?'
								questionId='question6'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Да, наша inhouse-команда тестирует все офферы, представленные в Trafflab'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
