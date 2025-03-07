import * as React from 'react';
import * as styles from './styles.module.css';
import AccordionQuestion from './AccordionQuestion';

export default function FAQ() {
	const [selectedRole, setSelectedRole] = React.useState(null);
	const [selectedQuestion, setSelectedQuestion] = React.useState(null);

	const handleRoleSelect = role => {
		setSelectedRole(role === selectedRole ? null : role);
		setSelectedQuestion(null);
	};

	const handleQuestionSelect = question => {
		setSelectedQuestion(question === selectedQuestion ? null : question);
	};

	return (
		<div className={styles.faq}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>
						What <span>questions</span> arise most often
					</h2>
					<img
						src='/img/faq/faqsticker.png'
						alt='faqsticker'
						className={styles.sticker}
					/>
				</div>
				<div className={styles.accordionContainer}>
					<div className={styles.roleAccordion}>
						<button
							className={`${styles.roleButton} ${
								selectedRole === 'webmaster'
									? styles.active
									: ''
							}`}
							onClick={() => handleRoleSelect('webmaster')}
						>
							<div>
								If you are a <span>Webmaster</span>
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
								question='How to start working with Trafflab?'
								questionId='question1'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='To start working, fill out the form on the site and specify that you are a webmaster. In 15 minutes, you will be contacted by the support @trafflab_cpa in Telegram. Then we will ask you a few questions to get to know you better and understand what we can offer you'
							/>

							<AccordionQuestion
								question='Do you work with beginners and provide guides?'
								questionId='question2'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Currently, we work with partners who have experience in the iGaming field. In our blog, you will find useful articles that we regularly update'
							/>
							<AccordionQuestion
								question='Who is your personal manager?'
								questionId='question3'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Your personal affiliate manager will select the necessary or recommend a converting offer, provide the necessary information, consult on payments, help you optimize and scale your traffic'
							/>

							<AccordionQuestion
								question='How to activate an offer?'
								questionId='question4'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Some offers are available immediately after registration in the CRM. For the activation of some offers, an advertiser approval is required (usually not more than 1 day)'
							/>
							<AccordionQuestion
								question='What do you offer to webmasters?'
								questionId='question5'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='TRAFFLAB provides the necessary infrastructure for its partners. Our applications are available to everyone, other consumables are discussed individually'
							/>
							<AccordionQuestion
								question='How is traffic quality assessed?'
								questionId='question6'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='The advertiser assesses many parameters, including user activity, repeat visits, conversions, time on site, and bounce rates, to determine compliance with KPI. Non-compliance with KPI may lead to deactivation of the offer. Fraud will result in a ban on the platform. We test offers before activation to ensure the realism of KPI'
							/>
							<AccordionQuestion
								question='Can I get a bump in rates?'
								questionId='question7'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='We offer competitive rates, often exceeding those of our competitors. We are always ready to discuss rate increases with proven partners who demonstrate high volumes of quality traffic. Also, don’t forget to follow the promo codes in our blog and social media'
							/>

							<AccordionQuestion
								question='Hold and payments:'
								questionId='question8'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='The hold is from 7 to 30 days depending on the offer conditions and the speed of traffic verification by the advertiser. Payments are made without delays in any convenient way'
							/>
							<AccordionQuestion
								question='What types of traffic are prohibited and by what criteria can it be considered fraud?'
								questionId='question9'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Prohibited are motivated traffic, bots, multi-accounts, and any fraud. We use an anti-fraud system and manual traffic verification. Advertisers also monitor traffic and evaluate behavioral factors and ROI'
							/>
							<AccordionQuestion
								question='What is the Trafflab ecosystem?'
								questionId='question10'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Trafflab is an AdTech company that creates infrastructure for webmasters, publishers, and arbitrageurs. Currently, our key product is a partner network with tools, primarily technical, to increase EPC traffic and increase conversions'
							/>
						</div>
					</div>

					{/* Advertiser Accordion */}
					<div className={styles.roleAccordion}>
						<button
							className={`${styles.roleButton} ${
								selectedRole === 'advertiser'
									? styles.active
									: ''
							}`}
							onClick={() => handleRoleSelect('advertiser')}
						>
							<div>
								If you are an <span>ADVERTISER</span>
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
								question='How to start working with Trafflab?'
								questionId='question1'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Fill out the form on the site, specifying that you are an advertiser. You will be contacted by the support @trafflab_cpa in Telegram within 15 minutes to clarify the details'
							/>
							<AccordionQuestion
								question='With which verticals do you work?'
								questionId='question2'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Trafflab specializes in iGaming and develops the EdTech direction'
							/>
							<AccordionQuestion
								question='What GEOs do you work with?'
								questionId='question3'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='We work with all countries (Tier 1-3)'
							/>
							<AccordionQuestion
								question='How many offers do you have and how do you select brands?'
								questionId='question4'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='We have more than 1600 offers from 500 advertisers. We constantly expand the assortment, cooperating with brands that meet our requirements and interests of webmasters'
							/>
							<AccordionQuestion
								question='With which payment models do you work?'
								questionId='question5'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='CPA, RevShare, Hybrid'
							/>
							<AccordionQuestion
								question='Do you have an internal binding?'
								questionId='question6'
								selectedQuestion={selectedQuestion}
								onQuestionSelect={handleQuestionSelect}
								answer='Yes, our inhouse-team tests all offers presented in Trafflab'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
