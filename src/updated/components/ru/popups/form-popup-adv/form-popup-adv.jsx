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

	const DISABLE_RECAPTCHA = true; // Установите в false, когда нужно вернуть капчу

	const isDevelopment = () => {
		return (
			process.env.NODE_ENV === 'development' ||
			window.location.hostname === 'localhost' ||
			window.location.hostname === '127.0.0.1'
		);
	};

	const handleSendForm = () => {
		if (!values.product || !values.name || !values.contact) return;
		fetch('/api/form', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				siteLang: 'en',
				type: 'advertiser',
				product: values.product,
				name: values.name,
				contact: values.contact,
			}),
		})
			.then(res => {
				if (res.ok) {
					successMessageHandler();
					handleReset({
						product: '',
						name: '',
						contact: '',
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
						Один шаг, чтобы стать лучшим вместе с лучшими
					</p>
					<p className={styles.subtitle}>
						Оставьте заявку на консультацию — менеджер свяжется с
						вами в ближайшее время!
					</p>
				</div>

				<form
					className={styles.form}
					onSubmit={e => {
						e.preventDefault();
						if (DISABLE_RECAPTCHA || isDevelopment()) {
							handleSendForm();
						} else {
							setRecaptchaWindow(true);
						}
					}}
				>
					<div className={styles.inputsContainer}>
						<div className={styles.inputRow}>
							<div className={styles.inputColumn}>
								<label
									className={styles.label}
									htmlFor='product'
								>
									Ваш продукт
								</label>
								<BasicInput
									name='product'
									placeholder='Trafflab CPA'
									value={values.product}
									onChange={handleChange}
									minLength={1}
									isRequired={true}
								/>
							</div>
							<div className={styles.inputColumn}>
								<label className={styles.label} htmlFor='name'>
									Ваше имя
								</label>
								<BasicInput
									name='name'
									placeholder='Иван'
									value={values.name}
									onChange={handleChange}
									minLength={1}
									isRequired={true}
								/>
							</div>
						</div>
						<label className={styles.label} htmlFor='contact'>
							Контактная информация
						</label>
						<BasicInput
							name='contact'
							placeholder='+7 123 456 7890 / ivan@example.com'
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
								checked={values.agreement || false}
								onChange={handleChange}
								required
							/>
							<label
								htmlFor='agreement'
								className={styles.checkboxLabel}
							>
								Я согласен на обработку{' '}
								<a href='https://trafflab.ru/privacy-policy'>
									персональных данных
								</a>
							</label>
						</div>
					</div>
					<div className={styles.buttonContainer}>
						<button type='submit' className={styles.submitButton}>
							Отправить
						</button>
					</div>
				</form>
				<Recaptcha
					isOpen={recaptchaWindow}
					handler={handleSendForm}
					hl='RU'
				/>
			</div>
		</PopupLayout>
	);
}
