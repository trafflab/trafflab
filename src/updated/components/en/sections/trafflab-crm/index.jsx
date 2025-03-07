import React from 'react';
import * as styles from './styles.module.css';

export default function TrafflabCrm() {
	return (
		<div className={styles.trafflabCrm}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div>
						<h2 className={styles.title}>
							<span>Trafflab CRM </span>— A product we are proud
							of
						</h2>
					</div>
					<div className={styles.text}>
						<p>
							We created a CRM specifically for the iGaming
							vertical, with a user-friendly interface, all
							necessary metrics, filters, and detailed statistics.
							It helps test multiple approaches, processes huge
							volumes of traffic, and is updated based on your
							feedback.{' '}
							<a href='#' className={styles.link}>
								Learn more →
							</a>
						</p>
					</div>
					<p className={styles.text}>
						Submit a request and our manager will contact you, tell
						you about Trafflab CRM, and provide access to the
						platform.
					</p>
					<a
						href='http://t.me/trafflab_cpa'
						className={styles.button}
					>
						Submit a request
					</a>
				</div>
				<div className={styles.image}>
					<img src='/img/tabs/crmpreview.png' alt='crm preview' />
				</div>
			</div>
		</div>
	);
}
