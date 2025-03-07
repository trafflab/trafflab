import * as React from 'react';
import * as styles from './form-popup-adv.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import { MessagesContext } from '../../../../utils/contexts';
import { sendFormToTgRu } from '../../../../utils/api';
import useForm from '../../../../hooks/use-form';
import { ADImage } from '../../../common/ui';

import PopupLayout from '../popup-layout/popup-layout';
import { BasicButton, BasicInput } from '../../../common/ui';
import ym from 'react-yandex-metrika';
import { Recaptcha } from '../../../common';

export default function FormPopupAdv({ closeHandler, isOpen }) {
	const images = useStaticQuery(graphql`
		query FormPopupAdvRuQuery {
			form_popup: file(name: { eq: "form-popup" }) {
				name
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						webpOptions: { quality: 85 }
						breakpoints: [984]
						layout: FULL_WIDTH
					)
				}
			}

			form_popup_480: file(name: { eq: "form-popup-480" }) {
				name
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						webpOptions: { quality: 85 }
						breakpoints: [560]
						layout: FULL_WIDTH
					)
				}
			}
		}
	`);
	const { values, handleChange, isValid, handleReset } = useForm();
	const [momentWindow, setMomentWindow] = React.useState({});
	const [recaptchaWindow, setRecaptchaWindow] = React.useState(false);

	const successMessageHandler = React.useContext(MessagesContext);

	const handleSendForm = () => {
		if (!values.name || !values.contact) return;
		fetch('/api/form', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				siteLang: 'ru',
				type: 'advertiser',
				product: values.product,
				name: values.name,
				contact: values.contact,
				comfyContact: values.comfyContact,
			}),
		})
			.then(res => {
				if (res.ok) {
					successMessageHandler();
					handleReset({
						product: '',
						name: '',
						contact: '',
						comfyContact: '',
					});
					//momentWindow.yaCounter308880837.reachGoal('tg_form_click');

					if (typeof window !== 'undefined') {
						if (window.fbq != null) {
							window.fbq('track', 'Lead', { type: 'adv' });
						}
						if (window.gtag != null) {
							window.gtag('event', 'generate_lead', {
								type: 'adv',
							});
						}
						ym('reachGoal', 'tg_form_click');
					}

					setRecaptchaWindow(false);
					closeHandler();
				} else return Promise.reject(`error ${res.status}`);
			})
			.catch(err => console.error(err));
	};
	React.useEffect(() => {
		setMomentWindow(window);
		values.phone = '';
	}, []);

	return (
		<PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
			<div className={styles.formPopup}>
				<button
					type='button'
					onClick={closeHandler}
					className={styles.closeButton}
				/>

				<div className={styles.imageContainer}>
					<img
						src={'/img/form-popup/popupimg.png'}
						alt='form-popup'
					/>
				</div>
				<div className={styles.titleContainer}>
					<p className={styles.title}>
						One step to Become the best with the best
					</p>
					<p className={styles.subtitle}>
						Submit a request for consultation — a manager will
						contact you as soon as possible!
					</p>
				</div>

				<form
					className={styles.form}
					onSubmit={e => {
						e.preventDefault();
						setRecaptchaWindow(true);
					}}
				>
					<div className={styles.inputsContainer}>
						<label className={styles.label} htmlFor='name'>
							Your name
						</label>
						<BasicInput
							name='name'
							placeholder='Name'
							value={values.name}
							onChange={handleChange}
							minLength={1}
							isRequired={true}
						/>
						<label className={styles.label} htmlFor='contact'>
							Telegram
						</label>
						<BasicInput
							name='contact'
							placeholder='Telegram'
							value={values.contact}
							onChange={handleChange}
							minLength={1}
							isRequired={true}
						/>
						<div className={styles.checkboxContainer}>
							<input
								type='checkbox'
								id='agreement'
								name='agreement'
								checked={values.agreement}
								required
							/>
							<label
								htmlFor='agreement'
								className={styles.checkboxLabel}
							>
								I agree to the processing of{' '}
								<a href='https://trafflab.ru/privacy-policy'>
									personal data
								</a>
							</label>
						</div>
					</div>
					<div className={styles.buttonContainer}>
						<button type='submit' className={styles.submitButton}>
							Submit
						</button>
					</div>
				</form>
				<Recaptcha
					isOpen={recaptchaWindow}
					handler={handleSendForm}
					hl='EN'
				/>
			</div>
		</PopupLayout>
	);
}
