import * as React from 'react';
import * as styles from './nav-popup.module.css';
import { Link } from 'gatsby';
import PopupLayout from '../popup-layout/popup-layout';
import NavPopupContactsList from './contacts-list/nav-popup-contacts-list';
import { Logo } from '../../../common';

export default function NavPopup({ isOpen, closeHandler, linkPrefix = '' }) {
	const handelClose = evt => {
		if (evt.target.nodeName === 'A') closeHandler();
	};
	return (
		<PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
			<div className={styles.navPopup}>
				<button onClick={closeHandler} className={styles.closeButton} />
				<div className={styles.logoContainer}>
					<Logo />
				</div>

				<div className={styles.content}>
					<nav className={styles.nav}>
						<ul onClick={handelClose} className={styles.list}>
							<li>
								<a href={`${linkPrefix}#ecosystem`}>
									Экосистема
								</a>
							</li>
							<li>
								<Link to='/ru/blog'>Блог</Link>
							</li>
							<li>
								<Link to='/ru/partners-and-promocodes'>
									Партнеры и промокоды
								</Link>
							</li>
							<li>
								<a href={`${linkPrefix}#contacts`}>Контакты</a>
							</li>
						</ul>
					</nav>
					<NavPopupContactsList />
				</div>
			</div>
		</PopupLayout>
	);
}
