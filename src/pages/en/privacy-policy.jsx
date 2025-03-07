import * as React from 'react';
import { SiteLayout } from '../../updated/components/common';
import Header from '../../updated/components/en/sections/header/header';
import Footer from '../../updated/components/en/sections/footer/footer';
import { NavPopup } from '../../updated/components/en/popups';

export default function PrivacyPolicy() {
	const [navPopupOpen, setNavPopupOpen] = React.useState(false);
	const openNavPopup = () => setNavPopupOpen(true);
	const closeNavPopup = () => setNavPopupOpen(false);

	return (
		<SiteLayout pageTitle='Privacy Policy | TRAFFLAB' siteLang='en'>
			<Header openNavPopupHandler={openNavPopup} />
			<div
				className='container'
				style={{
					color: 'white',
					padding: '40px 20px',
					maxWidth: '1200px',
					margin: '0 auto',
				}}
			>
				<h1>Privacy Policy</h1>
				<div style={{ lineHeight: '1.6', fontSize: '20px' }}>
					<h2>Last updated: March 11, 2024</h2>

					<p>
						This Privacy Policy describes how your personal data is
						collected and processed when you, an individual, are a
						user of the website _____ (hereinafter "Website") or
						related dApps.
					</p>

					<p>
						To simplify reading this Privacy Policy, our Website,
						dApps, service content, and all related features,
						services, content, and applications that we may provide
						to you from time to time, etc., are collectively
						referred to as "Services".
					</p>

					<p>
						We ask you to carefully read this Privacy Policy, which
						was last updated on the date indicated above
						(hereinafter "Privacy Policy"), as it contains important
						information about who we are, how and why we collect,
						store, use, transfer and share personal information,
						about your rights regarding your personal information,
						and how to contact us and supervisory authorities in
						case you have a complaint. This Privacy Policy should be
						read together with and in addition to any separate
						product or service agreement entered into between us
						from time to time.
					</p>

					<p>
						Whenever we refer to "law" within this Privacy Policy,
						we mean all laws as amended from time to time. If we
						have used but not explained the meaning of a certain
						term in this Privacy Policy, that term has the same
						meaning as in the Terms of Use. When we refer to
						"information" or "data" within this Privacy Policy, we
						mean your personal information.
					</p>

					<p>
						We collect your personal information when you visit,
						use, or interact with us online, as well as through our
						advertising displayed through online services operated
						by us or unrelated third parties. We may use or share
						the collected personal information to provide you with
						products and services, as well as for advertising
						purposes.
					</p>

					<p>
						By browsing, accessing, or using the Services, you
						hereby unconditionally agree to this Privacy Policy.
					</p>

					<p>
						The terms "Company", "we", "us", "our" or _____ refer to
						_____, a company with registration number _____,
						registered at: _____.
					</p>

					<p>
						This Privacy Policy is governed by the applicable laws
						and regulations of England and Wales.
					</p>

					<p>
						For users from the EU, the provisions of the General
						Data Protection Regulation (Regulation (EU) 2016/679)
						(GDPR) and the Data Protection Act 2018 apply.
					</p>

					<p>
						The Company makes every effort to protect your privacy.
						The Company uses the information collected about you to
						fulfill its contractual obligations and improve customer
						service.
					</p>

					<p>
						All terms defined in the Terms of Use have the same
						meaning in this Privacy Policy. "Personal Data" and
						"Personal Information" mean any information relating to
						an identified or identifiable living person.
					</p>

					<p>
						We request your consent when necessary; otherwise, by
						using our Services, you agree to the collection, use,
						and sharing of your personal information in accordance
						with applicable laws and other notices you may have
						received based on your relationship with us.
					</p>

					<p style={{ fontWeight: 'bold' }}>
						PLEASE READ THE PRIVACY POLICY CAREFULLY BEFORE CREATING
						YOUR ACCOUNT. IF YOU DO NOT AGREE WITH ALL OR ANY OF
						THESE TERMS, PLEASE LEAVE THE WEBSITE OR DAPP
						IMMEDIATELY
					</p>

					<h2>1. COLLECTION OF YOUR PERSONAL DATA</h2>

					<h3>1.1. Personal data that we may collect</h3>

					<p>
						The categories of personal information we collect depend
						on how you interact with us, our Services, and the
						requirements of applicable law. We collect information
						that you provide to us, information that we receive
						automatically when you use our Services, and information
						from other sources, such as third-party services and
						organizations, as described below.
					</p>

					<h4>1.1.1 Information that you provide to us directly</h4>

					<p>
						We may collect the following personal information that
						you provide to us:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							<strong>Account creation.</strong> We may collect
							information when you create an account with us, such
							as name and email address, as well as your mobile
							money ID. We may also require you to provide
							additional information for identification and
							verification.
						</li>
						<li>
							<strong>Transaction information.</strong> To
							complete transactions within the Services, you may
							need to provide us or our third parties with
							information about your payment or information about
							your digital wallet, etc. We will never request or
							collect your private keys.
						</li>
						<li>
							<strong>Other transactions.</strong> We may collect
							personal information and details related to your
							activities in our Services.
						</li>
						<li>
							<strong>Your communication with us.</strong> We may
							collect personal information, such as email address,
							when you request information about our Services or
							otherwise communicate with us.
						</li>
						<li>
							<strong>Interactive features.</strong> We and other
							users of our Services may collect personal
							information that you submit or make available
							through our interactive features (for example,
							through Discord community, messaging and chat
							features, and social media pages). Any personal
							information you provide in public sections of these
							features will be considered "public" ("User
							Content"), unless otherwise required by applicable
							law, and is not subject to the privacy protection
							mentioned herein. Please be careful before
							disclosing any information that could identify you
							in the real world to other users.
						</li>
						<li>
							<strong>Surveys.</strong> We may contact you to
							participate in surveys. If you decide to
							participate, you may be asked to provide certain
							information, which may include personal information.
						</li>
						<li>
							<strong>
								Business development and strategic partnerships.
							</strong>{' '}
							We may collect personal information from individuals
							and third parties to evaluate and implement
							potential business opportunities.
						</li>
					</ul>

					<h4>1.1.2 Information collected automatically</h4>

					<p>
						We may automatically collect personal information when
						you use our Services:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							<strong>Automatic data collection.</strong> We may
							automatically collect certain information when you
							use our Services, such as your Internet Protocol
							(IP) address, user settings, MAC address, cookie
							identifiers, mobile carrier, mobile advertising and
							other unique identifiers, browser or device
							information, location information (including
							approximate location derived from IP address),
							Internet service provider. We may also automatically
							collect information about your use of our Services,
							such as pages you visit before, during, and after
							using our Services, information about links you
							click on, types of content you interact with,
							frequency and duration of your activities, and other
							information about how you use our Services.
						</li>
						<li>
							<strong>
								Policy on the use of cookies, pixel tags/web
								beacons, and other technologies.
							</strong>{' '}
							We, as well as third parties providing content,
							advertising, or other features on our Services, may
							use cookies, pixel tags, local storage, and other
							technologies ("Technologies") to automatically
							collect information through your use of our
							Services.
						</li>
						<li>
							<strong>Cookies.</strong> Cookies are small text
							files placed in device browsers that store
							preferences and facilitate and enhance your
							experience.
						</li>
						<li>
							<strong>
								Pixel tags/web beacons and other technologies.
							</strong>{' '}
							A pixel tag (also known as a web beacon) is a piece
							of code embedded in our Services that collects
							information about interactions with our Services.
							The use of a pixel tag allows us to record, for
							example, that a user has visited a specific web page
							or clicked on a specific advertisement. We may also
							include web beacons in emails to understand if
							messages were opened, acted upon, or forwarded.
						</li>
					</ul>

					<p>
						Our use of these Technologies falls into the following
						general categories:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							<strong>Operationally necessary.</strong> This
							includes Technologies that allow you to access our
							Services, applications, and tools that are required
							to identify irregular website behavior, prevent
							fraudulent activity, improve security, or allow you
							to use our functionality;
						</li>
						<li>
							<strong>Performance-related.</strong> We may use
							Technologies to assess the performance of our
							Services, including as part of our analytical
							practices to help us understand how people use our
							Services (see "Analytics" below);
						</li>
						<li>
							<strong>Functionality-related.</strong> We may use
							Technologies that allow us to offer you enhanced
							functionality when accessing or using our Services.
							This may include identifying you when you log into
							our Services or tracking your specified preferences,
							interests, etc.;
						</li>
						<li>
							<strong>Advertising or targeting-related.</strong>{' '}
							We may use our own or third-party Technologies to
							deliver content, including advertisements, relevant
							to your interests, on our Services or on third-party
							websites.
						</li>
					</ul>

					<p>
						See "Your Privacy Choices and Rights" below to
						understand your choices regarding these Technologies.
					</p>

					<h4>Your Privacy Choices</h4>

					<p>
						The privacy choices you may have regarding your personal
						information are determined by applicable law and
						described below.
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							<strong>Electronic messages.</strong> If you receive
							an unwanted email from us, you can use the
							unsubscribe link found at the bottom of the email to
							opt out of receiving future emails. Note that you
							will continue to receive transaction-related emails
							regarding services you have requested. We may also
							send you certain non-promotional communications
							regarding us and our Services, and you will not be
							able to opt out of those messages (e.g.,
							communications regarding our Services or updates to
							our Terms of Use or this Privacy Policy).
						</li>
						<li>
							<strong>"Do Not Track".</strong> "Do Not Track"
							("DNT") is a privacy preference that users can set
							in certain web browsers. Note that we do not respond
							to or honor DNT signals or similar mechanisms
							transmitted by web browsers.
						</li>
						<li>
							<strong>
								Cookies and interest-based advertising.
							</strong>{' '}
							You can stop or limit the placement of Technologies
							on your device or remove them by adjusting your
							preferences as your browser or device permits.
							However, if you adjust your preferences, our
							Services may not work properly. Note that
							cookie-based opt-outs are not effective on mobile
							applications. However, you may opt out of
							personalized advertisements on some mobile
							applications by following the instructions for
							Android, iOS, and others. Please note that you must
							separately opt out in each browser and on each
							device.
						</li>
					</ul>

					<p>
						The online advertising industry also provides websites
						from which you can opt out of receiving targeted ads
						from data partners and other advertising partners that
						participate in self-regulatory programs. You can access
						them and learn more about targeted advertising, consumer
						choice, and privacy by visiting the Network Advertising
						Initiative, Digital Advertising Alliance, European
						Digital Advertising Alliance, and Digital Advertising
						Alliance of Canada.
					</p>

					<h4>Your Privacy Rights</h4>

					<p>
						In accordance with applicable law, you may have the
						right to:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							<strong>
								Access personal information about you,
								including:
							</strong>{' '}
							(i) confirming whether we are processing your
							personal information; (ii) obtaining access to or a
							copy of your personal information; or (iii)
							receiving an electronic copy of personal information
							that you have provided to us, or asking that we send
							this information to another company (the right to
							data portability);
						</li>
						<li>
							<strong>
								Request correction of your personal information
							</strong>{' '}
							if it is inaccurate or incomplete. In some cases, we
							may provide self-service tools that enable you to
							update your personal information;
						</li>
						<li>
							<strong>
								Request deletion of your personal information;
							</strong>
						</li>
						<li>
							<strong>
								Request restriction of or object to our
								processing of your personal information,
							</strong>{' '}
							including where the processing of your personal
							information is based on our legitimate interest or
							for direct marketing purposes; and
						</li>
						<li>
							<strong>
								Withdraw your consent to our processing of your
								personal information.
							</strong>{' '}
							Please note that your withdrawal will only apply to
							future processing and will not affect the lawfulness
							of processing before the withdrawal.
						</li>
					</ul>

					<p>
						If you wish to exercise any of these rights, please
						contact us. We will process such requests in accordance
						with applicable laws.
					</p>

					<h4>Analytics</h4>

					<p>
						We may use our Technologies and other third-party tools
						to process analytics information on our Services. These
						technologies allow us to process usage data to better
						understand how our Services are used, and to continually
						improve and personalize our Services. Some of our
						analytics partners include:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							<strong>Google Analytics.</strong> For more
							information about how Google uses your data
							(including for its own purposes, such as for
							profiling or linking it to other data), please visit
							Google Analytics' Privacy Policy.
						</li>
					</ul>

					<h4>Social Media Platforms</h4>

					<p>
						Our Services may contain social media buttons such as
						Discord, Snapchat, Twitter, and Telegram, which may
						include widgets such as the "share this" button or other
						interactive mini-programs. These features may collect
						your IP address and information about which page you are
						visiting on our Services, and may set a cookie to enable
						the feature to function properly. Your interactions with
						these platforms are governed by the privacy policy of
						the company providing them.
					</p>

					<h4>1.1.3 Information collected from other sources</h4>

					<p>
						<strong>Third-party sources.</strong> We may receive
						information about you from other sources, including
						through third-party services and organizations. For
						example, if you access our Services through a
						third-party application, such as an app store, a
						third-party login service, or a social networking site,
						we may collect information about you from that
						third-party application that you have made available
						through your privacy settings.
					</p>

					<h2>2. USE OF YOUR PERSONAL DATA</h2>

					<h3>2.1. We use your data for the following purposes:</h3>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							2.1.1 To fulfill obligations and provide you with
							services for which we have received your consent;
						</li>
						<li>
							2.1.2 To understand your needs and preferences when
							using our Services;
						</li>
						<li>
							2.1.3 To develop new and improve existing service
							and product offerings, to notify you of changes
							related to our Services;
						</li>
						<li>
							2.1.4 To verify and confirm the identity of users
							who open and manage accounts, in order to prevent
							fraud, deception, and other illegal activities;
						</li>
						<li>
							2.1.5 To comply with legal requirements for
							combating money laundering and terrorist financing;
						</li>
						<li>
							2.1.6 To ensure the security of our Website, our
							Services, and your account;
						</li>
						<li>
							2.1.7 To support, respond to, and resolve your
							complaints and issues related to the use of our
							Services and the capabilities of our Website or our
							dApps.
						</li>
						<li>
							2.1.8 Other purposes. We also use your information
							for other purposes at your request or in accordance
							with applicable law.
						</li>
					</ul>

					<h4>Automated Decision-Making</h4>

					<p>
						We may engage in automated decision-making, including
						profiling. Our processing of your personal information
						will not result in a decision based solely on automated
						processing that significantly affects you, unless such a
						decision is a necessary part of a contract we have with
						you, we have your consent, or we are permitted by law to
						engage in such automated decision-making. If you have
						questions about our automated decision-making, you may
						contact us.
					</p>

					<h4>De-identified and Aggregated Information</h4>

					<p>
						We may use personal information and other information
						about you to create de-identified and/or aggregated
						information, such as de-identified location information,
						information about the device from which you access our
						Services, or other analyses we create.
					</p>

					<h3>
						2.2. We use aggregated personal data to understand how
						our users use our Services, provided that this data
						cannot identify any individual. We also use third-party
						web analytics tools that help us understand how users
						interact with our website.
					</h3>

					<h2>3. DISCLOSURE OF YOUR PERSONAL DATA</h2>

					<h3>
						3.1 We may share your information with selected third
						parties, including:
					</h3>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							3.1.1 business partners, suppliers, and independent
							contractors to perform any contract we enter into
							with them or with you;
						</li>
						<li>
							3.1.2 advertisers and advertising networks (only
							aggregated personal data);
						</li>
						<li>
							3.1.3 analytics and search engine providers that
							assist us in the improvement and optimization of
							services;
						</li>
					</ul>

					<h3>3.2 We may also disclose your personal data if:</h3>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							3.2.1 if we are obliged to disclose or share your
							personal data in order to comply with any legal
							obligation, or in order to enforce or apply our
							Terms of Use or other conditions; or to protect the
							rights, property, or our customers, or others. This
							includes exchanging information with other companies
							and organizations for the purposes of fraud
							protection and credit risk reduction.
						</li>
					</ul>

					<h2>4. SECURITY AND STORAGE OF YOUR PERSONAL DATA</h2>

					<h3>
						4.1. We have implemented security measures to ensure the
						confidentiality of your personal data and to protect
						your data from loss, misuse, alteration, or destruction.
						Only authorized representatives have access to your
						personal data, and these representatives are required to
						treat the information as confidential. The security
						measures currently in place will be reviewed from time
						to time in line with legal and technical developments.
					</h3>

					<p>
						4.2. Unfortunately, the transmission of information via
						the internet is not completely secure. Although we will
						do our best to protect your personal data, any
						transmission is at your own risk. Once we have received
						your information, we will use strict procedures and
						security features to try to prevent unauthorized access.
					</p>

					<p>
						4.3. We will not sell, rent, or transfer your
						information to third parties. However, we may share your
						information with trusted third parties to help us
						perform statistical analysis, send you email, provide
						customer support, or arrange for deliveries. All such
						third parties are prohibited from using your personal
						information except to provide these services to us, and
						they are required to maintain the confidentiality of
						your information.
					</p>

					<p>
						4.4. Our website may from time to time contain links to
						and from the websites of our partner networks,
						advertisers, and affiliates. If you follow a link to any
						of these websites, please note that these websites have
						their own privacy policies and that we do not accept any
						responsibility for these policies. Please check these
						policies before you submit any personal data to these
						websites.
					</p>

					<p>
						4.5. We will keep your personal information for as long
						as you are a customer of _____. We may keep your
						personal information for up to 5 years after you stop
						being a customer. The reasons we may do this are:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							to respond to a question or complaint, or to show
							whether we gave you fair treatment;
						</li>
						<li>
							to study customer data as part of our own research;
						</li>
						<li>
							to comply with legal rules that apply to us about
							keeping records.
						</li>
					</ul>

					<p>
						We may also keep your data for longer than 5 years if
						certain laws mean we cannot delete it for legal,
						regulatory, or technical reasons.
					</p>

					<h2>5. INTERNATIONAL DATA TRANSFERS</h2>

					<p>
						All information processed by us may be transferred,
						processed, and stored anywhere in the world, including
						but not limited to, the United States or other
						countries, which may have data protection laws that are
						different from the laws where you live. We endeavor to
						safeguard your information consistent with the
						requirements of applicable laws.
					</p>

					<h2>6. MISCELLANEOUS</h2>

					<p>
						6.1. The Privacy Policy remains in full force and effect
						while you use the Website.
					</p>

					<p>
						6.2 The Company reserves the right to change the Privacy
						Policy at any time at the Company's sole discretion.
						They will notify you of amendments by means of an
						automatic notification on the Website, but will not
						request any action to confirm your consent. If you do
						not agree with the new amended version, then you must
						immediately cease access to the Website and stop using
						all Services. If you continue to use the services, the
						amended Privacy Policy is legally binding for you, and
						your actions will constitute acceptance of the
						amendments.
					</p>

					<p>
						6.4. If you are in the European Economic Area,
						Switzerland, or the United Kingdom, you have the right
						to lodge a complaint with a supervisory authority if you
						believe our processing of your personal information
						violates applicable law.
					</p>

					<p>
						6.5. The Services are not directed to children under 18
						(or other age as required by local law), and we do not
						knowingly collect personal information from children. If
						you learn that your child has provided us with personal
						information without your consent, you may contact us. If
						we learn that we have collected a child's personal
						information in violation of applicable law, we will
						promptly take steps to delete such information.
					</p>

					<p>
						6.6. You can withdraw your consent to our processing of
						your information at any time. Please contact us if you
						want to do this at: _____. This will only affect the way
						we use information when our reason for processing your
						information is that you have given your consent to this
						use. If you withdraw your consent, we may not be able to
						provide certain services to you. If this is the case, we
						will tell you. You then have the option to give us your
						consent again if you want to access our products or
						services.
					</p>

					<p>
						6.7. We will apply adequate technical and organizational
						security measures to protect your personal information.
						We will make reasonable efforts to ensure that your
						personal data is accurate, complete, and up-to-date.
						Please ensure that you notify us without undue delay of
						any changes to the personal data you have provided to us
						by updating your details or contacting us using the
						contact details provided in this Privacy Policy.
					</p>

					<p>
						6.8. By accessing the Website or using any of our
						products or services, you agree and authorize the export
						of personal data to the Company, as well as its storage
						and use as specified in this Privacy Policy.
					</p>

					<p>
						This Privacy Policy is governed by, interpreted, and
						takes effect in accordance with the laws of England and
						Wales applicable to contracts deemed to be made within
						such state, without regard to choice of law or conflict
						of law provisions. Exclusive jurisdiction for all
						disputes between you and the Company will belong to the
						state and federal courts located in England and Wales,
						and you and the Company waive any objections to
						jurisdiction and venue in such courts.
					</p>

					<p style={{ fontWeight: 'bold' }}>
						HOTBY YOU WAIVE YOUR RIGHT TO A JURY TRIAL IN RESPECT OF
						ANY CLAIM, ACTION OR PROCEEDING DIRECTLY OR INDIRECTLY
						ARISING OUT OF OR RELATING TO THIS AGREEMENT, TO THE
						MAXIMUM EXTENT PERMITTED BY LAW.
					</p>

					<h2>7. CONTACT INFORMATION</h2>

					<p>
						7.9. We are responsible as the "Controller" of this
						personal information for the purposes of those laws. If
						you have any questions about this Privacy Policy or how
						we (may) collect, store, or use your information, please
						contact us by email at: _____.
					</p>
				</div>
			</div>
			<Footer />

			{/* Добавляем компонент NavPopup */}
			<NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup} />
		</SiteLayout>
	);
}
