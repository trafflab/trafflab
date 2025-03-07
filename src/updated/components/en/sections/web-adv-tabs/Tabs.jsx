import * as React from 'react';
import * as styles from './tabs.module.css';
import SectionWithOffset from '../svg-section/SectionWithOffset';
import clsx from 'clsx';
import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function Tabs() {
	const [activeTab, setActiveTab] = React.useState(0);
	const [expandedItems, setExpandedItems] = React.useState({});
	const { openAdvFormPopup, openWebFormPopup } = useContext(FormsContexts);

	const toggleExpand = index => {
		setExpandedItems(prev => ({
			...prev,
			[index]: !prev[index],
		}));
	};

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
										onClick={openWebFormPopup}
									>
										Become a webmaster
									</button>
								</div>
								<div className={styles.tabContentList}>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												Offers for every taste
											</h3>
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('webmaster-1')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'webmaster-1'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['webmaster-1'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													We offer a variety of proven
													and converting offers,
													exclusive products and GEOs
													that you won't find anywhere
													else.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													We offer some of the best
													rates in the market and
													large caps, thanks to our
													focus on volume and
													long-term cooperation.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Can't find the offer you
													need? Want to discuss rates?
													Contact our manager —
													connection in 15 days!
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'webmaster-1'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													More than 1600 offers, top
													rates and large caps. Local
													products, all GEOs and
													traffic types.
												</p>
												<img
													src='/img/tabs/offers.png'
													alt='Offers'
													className={
														styles.tabListImage
													}
												/>
											</>
										)}
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												REDUCED HOLDS AND CONVENIENT
												WITHDRAWALS
											</h3>
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('webmaster-2')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'webmaster-2'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['webmaster-2'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													Thanks to close cooperation
													with many advertisers, we
													provide you with fast and
													timely payments.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													You can receive your income
													in any convenient way,
													combining all payments from
													advertisers in one payment,
													which minimizes delays.
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'webmaster-2'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Fast payments in any
													convenient way within 7
													days. Close cooperation with
													advertisers guarantees
													timely payments without
													delays.
												</p>
												<img
													src='/img/tabs/hold.png'
													alt='Offers'
													className={
														styles.tabListImage
													}
												/>
											</>
										)}
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
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('webmaster-3')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'webmaster-3'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['webmaster-3'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													Our CRM is configured in
													such a way that its Uptime
													is 99.98%. In case of
													failures, we compensate for
													your losses.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Our managers are always
													ready to help you at any
													time, providing prompt
													support and solving your
													issues. You will receive
													personal attention and
													assistance in any situation,
													which minimizes downtime and
													problems.
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'webmaster-3'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													CRM with 99.98% Uptime.
													We've compensated $117,000:
													We're on your side and
													acknowledge our mistakes!
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
													className={
														styles.tabListImageText
													}
												>
													<img
														src='/img/tabs/arrowicon.svg'
														alt=''
													/>
													$117,000
												</div>
											</>
										)}
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												Your money is safe
											</h3>
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('webmaster-4')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'webmaster-4'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['webmaster-4'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													We solve problems without
													unnecessary noise and prove
													reliability through actions.
													We actively monitor the lead
													tracking process to prevent
													malicious reduction of their
													number in statistics.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Our unique CRM system,
													developed for the gambling
													vertical, provides fast and
													accurate data exchange. In
													case of conflict situations,
													we negotiate with
													advertisers, protecting your
													interests.
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'webmaster-4'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Protected $390,000 from
													scams: We guarantee
													payments, even if the
													advertiser disappears.
												</p>
												<img
													src='/img/tabs/shield.png'
													alt='Offers'
													className={
														styles.tabListImage
													}
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
											</>
										)}
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
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('advertiser-1')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'advertiser-1'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['advertiser-1'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													Our system allows you to
													quickly track incentivized
													traffic and fraud.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													We also instantly respond to
													unauthorized traffic
													launches and violations of
													the advertiser's brand usage
													in ads, ensuring traffic
													safety and quality.
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'advertiser-1'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Quality and profitable
													traffic without bots and
													fraud. Automatic and manual
													filtering guarantees only
													real leads interested in
													your product.
												</p>
												<img
													src='/img/tabs/ftd.png'
													alt='Offers'
													className={
														styles.tabListImage
													}
												/>
											</>
										)}
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												FAST INTEGRATION AND MINIMAL
												OPERATIONS
											</h3>
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('advertiser-2')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'advertiser-2'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['advertiser-2'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													Our team quickly integrates
													the product (usually takes
													no more than an hour) and
													selects relevant traffic
													from our extensive webmaster
													database.
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'advertiser-2'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Quick launch, technical
													support, and access to an
													extensive webmaster database
													within an hour maximum.
												</p>

												<img
													src='/img/tabs/timetointegrate.png'
													alt='Offers'
													className={
														styles.tabListImage
													}
												/>
											</>
										)}
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												ACTIVE PROMOTION OF YOUR PRODUCT
											</h3>
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('advertiser-3')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'advertiser-3'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['advertiser-3'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													We carefully check
													webmasters and control
													traffic quality so that you
													get maximum results from
													each advertising campaign.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													We have almost all available
													traffic sources, which
													ensures stable reach and
													profitability.
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'advertiser-3'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													We stimulate demand for your
													product among webmasters!
													Your offer won't go
													unnoticed.
												</p>
												<img
													src='/img/tabs/promotion.png'
													alt='Offers'
													className={
														styles.tabListImage
													}
												/>
											</>
										)}
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
											<button
												className={
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('advertiser-4')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Expand'
													className={
														expandedItems[
															'advertiser-4'
														]
															? styles.rotatedIcon
															: ''
													}
												/>
											</button>
										</div>
										{expandedItems['advertiser-4'] ? (
											<div
												className={
													styles.expandedContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													We work with all popular
													traffic sources, which
													allows us to reach the
													widest possible audience and
													find exactly your customers.
												</p>
												<button
													className={
														styles.learnMoreButton
													}
													onClick={() =>
														toggleExpand(
															'advertiser-4'
														)
													}
												>
													Learn more
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													FB, ASO, PPC, SEO, UBT
													traffic and other popular
													traffic sources: maximum
													reach for your audience!
												</p>
												<img
													src='/img/tabs/sources.png'
													alt='Offers'
													className={
														styles.tabListImage
													}
												/>
											</>
										)}
									</div>
									<img
										src='/img/tabs/bang.png'
										alt='Fire'
										className={styles.tabContentListSticker}
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
