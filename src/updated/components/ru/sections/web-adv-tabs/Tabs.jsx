import * as React from 'react';
import * as styles from './tabs.module.css';
import SectionWithOffset from '../svg-section/SectionWithOffset';
import clsx from 'clsx';
import { useContext } from 'react';
import { FormsContexts } from '../../../../utils/contexts';

export default function Tabs() {
	const [activeTab, setActiveTab] = React.useState(0);
	const { openAdvFormPopup, openWebFormPopup } = useContext(FormsContexts);
	const [expandedItems, setExpandedItems] = React.useState({});

	const tabs = ['ВЕБМАСТЕР', 'РЕКЛАМОДАТЕЛЬ'];

	const toggleAccordion = item => {
		setExpandedItems(prevExpandedItems => ({
			...prevExpandedItems,
			[item]: !prevExpandedItems[item],
		}));
	};

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
										Зарабатывайте на проверенных продуктах,
										которые конвертят
									</h2>
									<img
										src='/img/tabs/fire.svg'
										alt='Огонь'
										className={styles.tabContentHeaderImage}
									/>
								</div>
								<div className={styles.buttonContainer}>
									<button
										className={styles.tabListButton}
										onClick={openWebFormPopup}
									>
										Стать вебмастером
									</button>
								</div>
								<div className={styles.tabContentList}>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												Офферы на любой вкус
											</h3>
											<button
												className={
													styles.accordionToggle
												}
												onClick={() =>
													toggleAccordion('offers')
												}
												aria-expanded={
													expandedItems['offers']
												}
												aria-controls='offers-content'
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Развернуть'
													className={
														expandedItems['offers']
															? styles.iconRotated
															: ''
													}
												/>
											</button>
										</div>

										{expandedItems['offers'] && (
											<div
												id='offers-content'
												className={
													styles.accordionContent
												}
											>
												<p
													className={
														styles.tabListText
													}
												>
													Более 1600 офферов, топовые
													ставки и большие капы.
													Локальные продукты, все ГЕО
													и типы трафика.
												</p>
												<button
													className={
														styles.learnMoreBtn
													}
												>
													Узнать больше
												</button>
											</div>
										)}

										<img
											src='/img/tabs/offers.png'
											alt='Офферы'
											className={styles.tabListImage}
										/>
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												СОКРАЩЕННЫЕ ХОЛДЫ И УДОБНЫЙ
												ВЫВОД СРЕДСТВ
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Быстрые выплаты любым удобным
											способом в срок до 7-ми дней. Тесное
											сотрудничество с рекламодателями
											гарантирует своевременные выплаты
											без задержек.
										</p>
										<img
											src='/img/tabs/hold.png'
											alt='Офферы'
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
												Надежные выплаты
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											CRM с 99.98% Uptime. Компенсировали
											$117,000: Мы на вашей стороне и
											признаем свои ошибки!
										</p>
										<img
											src='/img/tabs/macpreview.png'
											alt='Офферы'
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
												Ваши деньги в безопасности
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Защищено $390 000 от скама: Мы
											гарантируем выплаты, даже если
											рекламодатель пропал.
										</p>
										<img
											src='/img/tabs/shield.png'
											alt='Офферы'
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
										alt='Огонь'
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
										Привлекайте высококачественных лидов и
										увеличивайте продажи
									</h2>
									<img
										src='/img/tabs/fire.svg'
										alt='Огонь'
										className={styles.tabContentHeaderImage}
									/>
								</div>
								<div className={styles.buttonContainer}>
									<button
										className={styles.tabListButton}
										onClick={openAdvFormPopup}
									>
										Стать рекламодателем
									</button>
								</div>
								<div className={styles.tabContentList}>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												ПОЛУЧАЙТЕ ОКУПАЕМЫЙ ТРАФИК
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Качественный и окупаемый трафик без
											ботов и фрода. Автоматическая и
											ручная фильтрация гарантирует только
											реальных лидов, заинтересованных в
											вашем продукте.
										</p>
										<img
											src='/img/tabs/ftd.png'
											alt='Офферы'
											className={styles.tabListImage}
										/>
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												БЫСТРАЯ ИНТЕГРАЦИЯ И МИНИМУМ
												ОПЕРАЦИОНКИ
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											Быстрый запуск, техническая
											поддержка и доступ к обширной базе
											вебмастеров максимум в течение часа.
										</p>
										<img
											src='/img/tabs/timetointegrate.png'
											alt='Офферы'
											className={styles.tabListImage}
										/>
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												АКТИВНОЕ ПРОДВИЖЕНИЕ ВАШЕГО
												ПРОДУКТА
											</h3>
											<img
												src='/img/faq/accicon.svg'
												alt=''
											/>
										</div>
										<p className={styles.tabListText}>
											Стимулируем спрос на ваш продукт
											среди вебмастеров! Ваш оффер не
											останется незамеченным.
										</p>
										<img
											src='/img/tabs/promotion.png'
											alt='Офферы'
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
												РАЗНООБРАЗИЕ ИСТОЧНИКОВ ТРАФИКА
											</h3>
											<a href=''>
												<img
													src='/img/faq/accicon.svg'
													alt=''
												/>
											</a>
										</div>
										<p className={styles.tabListText}>
											FB, ASO, PPC, SEO, УБТ трафик и
											другие популярные источники трафика:
											максимальный охват вашей аудитории!
										</p>
										<img
											src='/img/tabs/sources.png'
											alt='Офферы'
											className={styles.tabListImage}
										/>
									</div>
									<img
										src='/img/tabs/bang.png'
										alt='Огонь'
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
