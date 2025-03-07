import '../../../../styles/global.css';
import * as React from 'react';
import * as styles from './index-page-layout.module.css';

import { Header, Opening, Footer } from '../../sections';
import { SuccessMessage } from '../../elements';
import { MessagesContext, FormsContexts } from '../../../../utils/contexts';
import { NavPopup, FormPopupAdv, FormPopupWeb } from '../../popups';

export default function IndexPageLayout({ children }) {
	const [navPopupOpen, setNavPopupOpen] = React.useState(false);
	const openNavPopup = () => setNavPopupOpen(true);
	const closeNavPopup = () => setNavPopupOpen(false);

	const [isSuccessMessage, setIsSuccessMessage] = React.useState(false);
	const pageRef = React.useRef();
	const smoothScrollToHeader = () =>
		pageRef.current.scrollIntoView({ behavior: 'smooth' });

	const showSuccessMessage = () => {
		setIsSuccessMessage(true);
		setTimeout(() => setIsSuccessMessage(false), 2000);
	};

	const [webFormPopupOpen, setWebFormPopupOpen] = React.useState(false);
	const openWebFormPopup = () => setWebFormPopupOpen(true);
	const closeWebFormPopup = () => setWebFormPopupOpen(false);

	const [advFormPopupOpen, setAdvFormPopupOpen] = React.useState(false);
	const openAdvFormPopup = () => setAdvFormPopupOpen(true);
	const closeAdvFormPopup = () => setAdvFormPopupOpen(false);

	return (
		<FormsContexts.Provider
			value={{
				openAdvFormPopup,
				openWebFormPopup,
			}}
		>
			<MessagesContext.Provider value={showSuccessMessage}>
				<div ref={pageRef} className={styles.page}>
					<div className={styles.content}>
						<div className={styles.openingContainer}>
							<Header openNavPopupHandler={openNavPopup} />
							<Opening />
						</div>
						<main className={styles.main}>{children}</main>
						<Footer />

						<NavPopup
							isOpen={navPopupOpen}
							closeHandler={closeNavPopup}
						/>
					</div>

					<SuccessMessage isShown={isSuccessMessage} />

					<FormPopupWeb
						isOpen={webFormPopupOpen}
						closeHandler={closeWebFormPopup}
					/>
					<FormPopupAdv
						isOpen={advFormPopupOpen}
						closeHandler={closeAdvFormPopup}
					/>
				</div>
			</MessagesContext.Provider>
		</FormsContexts.Provider>
	);
}
