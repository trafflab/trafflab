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

	const tabs = ['ВЕБМАСТЕР', 'РЕКЛАМОДАТЕЛЬ'];

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
													styles.accordionButton
												}
												onClick={() =>
													toggleExpand('webmaster-1')
												}
											>
												<img
													src='/img/faq/accicon.svg'
													alt='Развернуть'
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
													У нас представлено множество
													проверенных и конвертящих
													офферов, эксклюзивных
													продуктов и ГЕО, которых
													нигде не найти.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Мы предлагаем одни из лучших
													ставок на рынке и большие
													капы, благодаря нашему
													фокусу на объемах и
													долгосрочном сотрудничестве.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Не нашли нужный оффер?
													Хотите обсудить ставку?
													Свяжитесь с нашим менеджером
													— подключение за 15 дней!
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
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
												<img
													src='/img/tabs/offers.png'
													alt='Офферы'
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
												СОКРАЩЕННЫЕ ХОЛДЫ И УДОБНЫЙ
												ВЫВОД СРЕДСТВ
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
													alt='Развернуть'
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
													Благодаря тесному
													сотрудничеству с множеством
													рекламодателей, мы
													обеспечиваем вам быстрые и
													своевременные выплаты.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Вы можете получить свои
													доходы любым удобным
													способом, объединяя все
													выплаты от рекламодателей в
													одном платеже, что позволяет
													минимизировать задержки.
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Быстрые выплаты любым
													удобным способом в срок до
													7-ми дней. Тесное
													сотрудничество с
													рекламодателями гарантирует
													своевременные выплаты без
													задержек.
												</p>
												<img
													src='/img/tabs/hold.png'
													alt='Офферы'
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
												Надежные выплаты
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
													alt='Развернуть'
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
													Наша CRM настроена таким
													образом, что её Uptime
													составляет 99.98%. В случае
													сбоев, мы компенсируем ваши
													потери.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Наши менеджеры всегда готовы
													помочь вам в любое время,
													обеспечивая оперативную
													поддержку и решение ваших
													вопросов. Вы получите
													персональное внимание и
													помощь в любой ситуации, что
													минимизирует простои и
													проблемы
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													CRM с 99.98% Uptime.
													Компенсировали $140,400: Мы
													на вашей стороне и признаем
													свои ошибки!
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
													className={
														styles.tabListImageText
													}
												>
													<img
														src='/img/tabs/arrowicon.svg'
														alt=''
													/>
													$140,400
												</div>
											</>
										)}
									</div>
									<div className={styles.tabContentListItem}>
										<div className={styles.titleContainer}>
											<h3 className={styles.tabListTitle}>
												Ваши деньги в безопасности
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
													alt='Развернуть'
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
													Решаем проблемы без лишнего
													шума и доказываем надежность
													делом. Мы активно
													контролируем процесс
													отслеживания лидов, чтобы
													предотвратить злоумышленное
													уменьшение их числа в
													статистике.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Наша уникальная CRM-система,
													разработанная под
													гемблинг-вертикаль,
													обеспечивает быстрый и
													точный обмен данными. В
													случае конфликтных ситуаций
													мы ведем переговоры с
													рекламодателями, защищая
													ваши интересы.
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Защищено $468,000 от скама:
													Мы гарантируем выплаты, даже
													если рекламодатель пропал.
												</p>
												<img
													src='/img/tabs/shield.png'
													alt='Офферы'
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
													$468,000
												</div>
											</>
										)}
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
													alt='Развернуть'
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
													Наша система позволяет
													быстро отслеживать
													мотивированный трафик и
													фрод.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													Мы также мгновенно реагируем
													на несогласованные запуски
													трафика и нарушения
													использования бренда
													рекламодателя в объявлениях,
													что обеспечивает
													безопасность и качество
													трафика.
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Качественный и окупаемый
													трафик без ботов и фрода.
													Автоматическая и ручная
													фильтрация гарантирует
													только реальных лидов,
													заинтересованных в вашем
													продукте.
												</p>
												<img
													src='/img/tabs/ftd.png'
													alt='Офферы'
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
												БЫСТРАЯ ИНТЕГРАЦИЯ И МИНИМУМ
												ОПЕРАЦИОНКИ
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
													alt='Развернуть'
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
													Наша команда быстро
													интегрирует продукт (обычно
													это занимает не более часа)
													и подбирает релевантный
													трафик из нашей обширной
													базы вебмастеров.
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Быстрый запуск, техническая
													поддержка и доступ к
													обширной базе вебмастеров
													максимум в течение часа.
												</p>

												<img
													src='/img/tabs/timetointegrate.png'
													alt='Офферы'
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
												АКТИВНОЕ ПРОДВИЖЕНИЕ ВАШЕГО
												ПРОДУКТА
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
													alt='Развернуть'
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
													Мы тщательно проверяем
													вебмастеров и контролируем
													качество трафика, чтобы вы
													получали максимальный
													результат от каждой
													проведенной рекламной
													кампании.
												</p>
												<p
													className={
														styles.tabListText
													}
												>
													У нас доступны практически
													все доступные источники
													трафика, что обеспечивает
													стабильные охваты и
													окупаемость.
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													Стимулируем спрос на ваш
													продукт среди вебмастеров!
													Ваш оффер не останется
													незамеченным.
												</p>
												<img
													src='/img/tabs/promotion.png'
													alt='Офферы'
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
												РАЗНООБРАЗИЕ ИСТОЧНИКОВ ТРАФИКА
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
													alt='Развернуть'
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
													Мы работаем со всеми
													популярными источниками
													трафика, что позволяет
													охватить максимально широкую
													аудиторию и найти именно
													ваших клиентов.
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
													Узнать больше
												</button>
											</div>
										) : (
											<>
												<p
													className={
														styles.tabListText
													}
												>
													FB, ASO, PPC, SEO, УБТ
													трафик и другие популярные
													источники трафика:
													максимальный охват вашей
													аудитории!
												</p>
												<img
													src='/img/tabs/sources.png'
													alt='Офферы'
													className={
														styles.tabListImage
													}
												/>
											</>
										)}
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
