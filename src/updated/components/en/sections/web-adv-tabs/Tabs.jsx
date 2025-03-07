import * as React from 'react';
import * as styles from './tabs.module.css';
import SectionWithOffset from '../svg-section/SectionWithOffset';
import clsx from 'clsx';
import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function Tabs() {
	const [activeTab, setActiveTab] = React.useState(0);
	const { openAdvFormPopup, openWebFormPopup } = useContext(FormsContexts);

	const tabs = ['WEBMASTER', 'ADVERTISER'];

	return (
		<SectionWithOffset>
			<div className={styles.tabs} id='ecosystem'>
				<div className={styles.tabsContainer}>
					<div className={styles.tabsList}>
						{tabs.map((tab, index) => (
							<button
								key={index}
								className={`${styles.tabButton} ${
									activeTab === index ? styles.active : ''
								}`}
								onClick={() => setActiveTab(index)}
							>
								{tab}
							</button>
						))}
					</div>
					<div className={styles.tabContent}>
						{activeTab === 0 && (
							<div className={styles.tabContent}>
								<div className={styles.tabContentHeader}>
									<h2 className={styles.tabTitle}>
										Earn on proven products that convert
									</h2>
									<img
										src='/img/tabs/fire.svg'
										alt='Fire'
										className={styles.tabContentHeaderImage}
									/>
								</div>
								<div className={styles.buttonContainer}>
									<button
										className={styles.tabListButton}
										onClick={openAdvFormPopup}
									>
										Become a webmaster
									</button>
								</div>
								<div className={styles.tabContentList}>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												Offers for any taste
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											More than 1600 offers, top rates and
											large caps. Local products, all GEOs
											and types of traffic.
										</p>
										<img
											src='/img/tabs/offers.png'
											alt='Offers'
											className={styles.tabListImage}
										/>
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												SHORT HOLD AND CONVENIENT
												WITHDRAWAL
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Fast payments by any convenient
											method within 7 days. Close
											cooperation with advertisers
											guarantees timely payments without
											delays.
										</p>
										<img
											src='/img/tabs/hold.png'
											alt='Offers'
											className={styles.tabListImage}
										/>
									</div>
									<div
										className={clsx(
											styles.tabContentListItem,
											styles.tabContentListItemMobile
										)}
									>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												Reliable payments
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											CRM with 99.98% Uptime. We
											compensated $117,000: We are on your
											side and acknowledge our mistakes!
										</p>
										<img
											src='/img/tabs/macpreview.png'
											alt='Offers'
											className={
												styles.tabListImageAbsolute
											}
										/>
										<div
											className={
												styles.tabListImageUptime
											}
										>
											99.98% UPTIME
										</div>
										<div
											className={styles.tabListImageText}
										>
											<img
												src='/img/tabs/arrowicon.svg'
												alt=''
											/>
											$117,000
										</div>
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												Your money is safe
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Protected $390,000 from scams: We
											guarantee payments, even if the
											advertiser disappears.
										</p>
										<img
											src='/img/tabs/shield.png'
											alt='Offers'
											className={styles.tabListImage}
										/>
										<div
											className={
												styles.tabListImageCentered
											}
										>
											<img
												src='/img/tabs/shieldicon.svg'
												alt=''
											/>
											$390,000
										</div>
									</div>
									<img
										src='/img/tabs/bang.png'
										alt='Fire'
										className={styles.tabContentListSticker}
									/>
								</div>
							</div>
						)}
						{activeTab === 1 && (
							<div className={styles.tabContent}>
								<div
									className={clsx(
										styles.tabContentHeader,
										styles.advertisment
									)}
								>
									<h2 className={styles.tabTitle}>
										Attract high-quality leads and increase
										sales
									</h2>
									<img
										src='/img/tabs/fire.svg'
										alt='Fire'
										className={styles.tabContentHeaderImage}
									/>
								</div>
								<div className={styles.buttonContainer}>
									<button
										className={styles.tabListButton}
										onClick={openAdvFormPopup}
									>
										Become an advertiser
									</button>
								</div>
								<div className={styles.tabContentList}>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												GET PROFITABLE TRAFFIC
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Quality and profitable traffic
											without bots and fraud. Automatic
											and manual filtering guarantees only
											real leads interested in your
											product.
										</p>
										<img
											src='/img/tabs/ftd.png'
											alt='Offers'
											className={styles.tabListImage}
										/>
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												FAST INTEGRATION AND MINIMUM
												OPERATIONS
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Fast launch, technical support, and
											access to an extensive webmaster
											database within an hour at most.
										</p>
										<img
											src='/img/tabs/timetointegrate.png'
											alt='Offers'
											className={styles.tabListImage}
										/>
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												ACTIVE PROMOTION OF YOUR PRODUCT
											</h3>
											<img
												src='/img/faq/accicon.svg'
												alt=''
											/>
										</div>
										<p className={styles.tabListText}>
											We stimulate demand for your product
											among webmasters! Your offer will
											not go unnoticed.
										</p>
										<img
											src='/img/tabs/promotion.png'
											alt='Offers'
											className={styles.tabListImage}
										/>
									</div>
									<div
										className={clsx(
											styles.tabContentListItem,
											styles.tabContentListItemPosition
										)}
									>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												VARIETY OF TRAFFIC SOURCES
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											FB, ASO, PPC, SEO, UBT traffic and
											other popular traffic sources:
											maximum reach of your audience!
										</p>
										<img
											src='/img/tabs/sources.png'
											alt='Offers'
											className={styles.tabListImage}
										/>
									</div>
									<img
										src='/img/tabs/bang.png'
										alt='Fire'
										className={clsx(
											styles.tabContentListSticker,
											styles.advertismentSticker
										)}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</SectionWithOffset>
	);
}
