import React from 'react';
import * as styles from './styles.module.css';

export default function TrafflabCrm() {
	return (
		<div className={styles.trafflabCrm}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div>
						<h2 className={styles.title}>
							<span>Trafflab CRM </span>— Продукт, которым мы
							гордимся
						</h2>
					</div>
					<div className={styles.text}>
						<p>
							Мы создали CRM, специально под iGaming вертикаль, с
							удобным интерфейсом, всеми необходимыми метриками,
							фильтрами и детальной статистикой. Она помогает
							тестировать множество подходов, обрабатывает
							огромные объемы трафика и обновляется с учетом ваших
							пожеланий.{' '}
							<a
								href='http://t.me/trafflab_cpa'
								className={styles.link}
							>
								Узнать подробнее →
							</a>
						</p>
					</div>
					<p className={styles.text}>
						Оставьте заявку и наш менеджер свяжется с вами,
						расскажет про Trafflab CRM и предоставит доступ к
						платформе.
					</p>
					<a
						href='http://t.me/trafflab_cpa'
						className={styles.button}
					>
						Оставить заявку
					</a>
				</div>
				<div className={styles.image}>
					<img src='/img/tabs/crmpreview.png' alt='crm preview' />
				</div>
			</div>
		</div>
	);
}
