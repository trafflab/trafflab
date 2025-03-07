import * as React from 'react';
import { SiteLayout } from '../../updated/components/common';
import Header from '../../updated/components/en/sections/header/header';
import Footer from '../../updated/components/en/sections/footer/footer';
import { NavPopup } from '../../updated/components/en/popups';

export default function TermsOfUse() {
	const [navPopupOpen, setNavPopupOpen] = React.useState(false);
	const openNavPopup = () => setNavPopupOpen(true);
	const closeNavPopup = () => setNavPopupOpen(false);

	return (
		<SiteLayout pageTitle='Terms of Use | TRAFFLAB' siteLang='en'>
			<Header openNavPopupHandler={openNavPopup} />
			<div
				className='container'
				style={{
					padding: '40px 20px',
					maxWidth: '1200px',
					margin: '0 auto',
				}}
			>
				<h1>Terms of Use</h1>
				<div
					style={{
						lineHeight: '1.6',
						fontSize: '20px',
						color: 'white',
					}}
				>
					<h2>1. Introduction</h2>
					<p>
						These terms of use and documents mentioned below
						Conditions", apply to the use of the current website
						trafflab.io" and related services collectively called
						"Service".
					</p>

					<p>
						You should carefully review these terms, as they contain
						important information about your rights and obligations
						in relation to the use of the website and form a legally
						binding agreement between you - our client "Client", and
						between you - our client "Client", and us. Using this
						website and/or accessing the Service, you, whether a
						guest or a registered user with an account "Account",
						agree to these terms and any amendments that may be
						published from time to time. If you do not accept these
						terms, you should not access the Service and use the
						website.
					</p>

					<p>
						The Service is owned by Vdsoft&Script Development SRL, a
						limited liability company registered in Country Name
						with company registration number 3-102-887249, with a
						registered address: City of San Jose, Canton: Montes de
						Oca, District: San Pedro, Barrio Dent, two hundred
						meters north and fifty east from Centro Cultural
						Costarricense Norteamericano, Ofident Building, office
						number 3
					</p>

					<h2>2. General Terms</h2>
					<p>
						We reserve the right to review and update these terms,
						including any documents mentioned and related below at
						any time. You should periodically visit this page to
						review the terms. Any amendments will be mandatory and
						will come into effect immediately after publication on
						this website. If you object to any such changes, you
						must immediately stop using the Service. Your continued
						use of the website after such publication will signify
						your acceptance of the amended terms. Any bets not
						settled before the coming into force of the amended
						terms will be subject to the previous terms.
					</p>

					<h2>3. Your Obligations</h2>
					<p>
						You acknowledge that at all times when accessing the
						website and using the Service:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							3.1. You are older than 18 years or you have reached
							the legal age at which gambling or gaming activities
							are permitted in accordance with the law or
							jurisdiction which applies to you. We reserve the
							right to request documents, confirming your age, at
							any time.
						</li>
						<li>
							3.2. You have legal capacity and can enter into a
							legally binding agreement with us. You should not
							access the Website or use the Service if you do not
							have legal capacity.
						</li>
						<li>
							3.3. You are a resident of a jurisdiction that
							permits gambling. You are not a resident of any
							country where access to online gambling for its
							residents or for any person in such a country is
							prohibited. You are fully responsible for ensuring
							that your use of the service is legal.
						</li>
						<li>
							3.4. You cannot use VPN, proxy or similar services
							or devices that mask or manipulate the
							identification of your real location.
						</li>
						<li>
							3.5. You are an authorized user of the payment
							method you are using.
						</li>
						<li>
							3.6. You must make all payments to us in good faith
							and not attempt to cancel a payment made or take any
							actions that will lead to the cancellation of such
							payment by a third party.
						</li>
						<li>
							3.7. When placing bets, you may lose some or all of
							your money deposited in the Service in accordance
							with these Terms, and you will be fully responsible
							for this loss.
						</li>
						<li>
							3.8. When placing bets, you should not use any
							information obtained in violation of any legislation
							in force in the country where you were located when
							the bet was placed.
						</li>
						<li>
							3.9. You are not acting on behalf of another party
							or for any commercial purposes, but only on your own
							behalf as a private individual in a personal
							capacity.
						</li>
						<li>
							3.10. You should not attempt to manipulate any
							market or element within the Service in bad faith or
							in a way that adversely affects the integrity of the
							Service or us.
						</li>
						<li>
							3.11. You must generally act in good faith towards
							us in relation to the Service at all times and for
							all bets placed using the Service.
						</li>
						<li>
							3.12. You, or, if applicable, your employees,
							employers, agents or family members, are not
							registered as an Affiliate in our Affiliate Program.
						</li>
					</ul>

					<h2>4. Restricted Use</h2>
					<p>4.1. You must not use the Service:</p>
					<ul style={{ paddingLeft: '20px' }}>
						<li>
							4.1.1. If you are under 18 years of age or below the
							age of majority established by the laws of the
							jurisdiction applicable to you, or if you are
							legally unable to enter into a binding legal
							agreement with us, or you are acting as an agent for
							or otherwise on behalf of a person younger than 18
							years or below the age of majority established by
							the laws of the jurisdiction applicable to you;
						</li>
						<li>
							4.1.2. If you are in a jurisdiction where online
							gambling is prohibited or otherwise restricted;
						</li>
						<li>
							4.1.3. If you are a resident of or located in the
							United States of America, or if you are using a
							payment card issued by a bank located in the United
							States of America, or if you are using an IP address
							located in the United States of America;
						</li>
						<li>
							4.1.4. If you are a resident of or located in a
							jurisdiction other than those in which we accept
							clients;
						</li>
						<li>
							4.1.5. If you use VPN, proxy or similar services or
							devices that mask or manipulate the identification
							of your real location;
						</li>
						<li>
							4.1.6. If you are not an authorized user of the
							payment method you are using;
						</li>
						<li>
							4.1.7. If you are acting on behalf of another party
							or for any commercial purposes, rather than on your
							own behalf as a private individual in a personal
							capacity;
						</li>
						<li>
							4.1.8. If you, or, if applicable, your employees,
							employers, agents or family members, are registered
							as an Affiliate in our Affiliate Program.
						</li>
					</ul>

					<h2>5. Your Account</h2>
					<p>
						5.1. To use the Service, you must register an Account
						with us. We reserve the right to refuse to create an
						Account for any reason.
					</p>
					<p>
						5.2. You may only have one Account and must use the
						Service only through this Account. We reserve the right
						to close your Account and cancel all transactions if we
						find that you have more than one Account.
					</p>
					<p>
						5.3. You must provide complete and accurate information
						about yourself when registering an Account, including a
						valid email address, and must update this information to
						keep it current. Failure to comply with this requirement
						is a violation of these Terms and may result in
						immediate termination of your Account and confiscation
						of any funds in your Account.
					</p>
					<p>
						5.4. You must keep your username and password for your
						Account confidential and must not disclose them to any
						third party. We are not responsible for any unauthorized
						access to your Account unless it occurred through our
						fault. We recommend that you use a "complex" password
						that is not used for any other online services. You can
						request a password reset if you have forgotten it.
					</p>
					<p>
						5.5. You must not transfer, sell, or pledge your Account
						to third parties. This includes the transfer of valuable
						assets, including, but not limited to, player Accounts.
						Any attempts to transfer your Account will be invalid.
					</p>
					<p>
						5.6. We reserve the right to refuse to open an Account,
						close an Account or refuse to accept bets at our sole
						discretion.
					</p>

					<h2>6. Protection of Minors</h2>
					<p>
						6.1. To open an Account and use the Service, you must be
						at least 18 years old or you must have reached the legal
						age at which gambling or gaming activities are permitted
						in accordance with the law or jurisdiction that applies
						to you. We reserve the right to request documents
						confirming your age at any time.
					</p>
					<p>
						6.2. We conduct age verification checks and reserve the
						right to close your Account and confiscate any funds if
						there is evidence that you do not meet our age
						requirements.
					</p>

					<h2>7. Deposits</h2>
					<p>
						7.1. You can deposit funds into your Account using any
						of the methods specified on the Website, such as credit
						cards, debit cards or bank transfers. All payments must
						be made from your own account, with your own
						credit/debit card, e-wallet or bank account that is
						registered in your name.
					</p>
					<p>
						7.2. We do not accept cash funds sent to us to top up
						your Account.
					</p>
					<p>
						7.3. We do not charge a commission for deposits.
						However, some payment methods may charge transaction
						fees, and such fees will be deducted from your deposit.
					</p>
					<p>
						7.4. Funds deposited in your Account do not earn
						interest.
					</p>
					<p>
						7.5. Please note that some payment methods require
						additional processing, and it may take up to three
						business days for funds to be credited to your Account.
					</p>
					<p>
						7.6. We reserve the right to use additional procedures
						and means to verify your identity when processing
						deposits to your Account.
					</p>

					<h2>8. Withdrawals</h2>
					<p>
						8.1. You can withdraw any unused and cleared funds held
						in your player account by submitting a withdrawal
						request in accordance with our withdrawal terms. The
						minimum withdrawal amount per transaction is €10 or
						equivalent in another currency, except when closing an
						account, in which case you can withdraw the full
						balance.
					</p>
					<p>
						8.2. There are no withdrawal fees if you wager your
						deposit at least once. Otherwise, we have the right to
						deduct a fee of 8% with a minimum amount of 4 euros or
						equivalent in your account currency to combat money
						laundering.
					</p>
					<p>
						8.3. We reserve the right to request photo ID, proof of
						address or perform additional verification procedures
						(request your selfie, arrange a verification call, etc.)
						to verify your identity before providing any withdrawals
						from your Account. We also reserve the right to conduct
						identity verification at any time during the term of
						your relationship with us.
					</p>
					<p>
						8.4. All withdrawals must be made to the original debit,
						credit card, bank account, payment method used to make a
						payment to your Account. We may, and always at our sole
						discretion, allow you to withdraw funds to a payment
						method from which your original deposit was not made.
						This will always be subject to additional security
						checks.
					</p>
					<p>
						8.5. If you wish to withdraw funds but your account is
						unavailable, inactive, blocked or closed, please contact
						our customer service department.
					</p>

					<h2>9. Responsible Gambling</h2>
					<p>
						9.1. We strive to promote responsible gambling and
						prevent excessive gambling. While we will strive to
						ensure compliance with self-exclusion, ultimately, you
						are responsible for your own actions. We cannot be held
						responsible if you continue to play using other accounts
						where your identity has not been verified, or if you
						open new accounts with false information.
					</p>
					<p>
						9.2. You can set limits on your Account, including
						limits on deposits, losses, bets and session time. You
						can set these limits by contacting our customer service
						department.
					</p>
					<p>
						9.3. You can request temporary or permanent
						self-exclusion from all games offered on the Website by
						contacting our customer service department. In the case
						of permanent self-exclusion or self-exclusion for a
						specific period of time, your Account will be closed or
						blocked for the appropriate period, and no new Accounts
						can be opened.
					</p>

					<h2>10. Bonuses and Promotions</h2>
					<p>
						10.1. We may offer bonuses and promotions from time to
						time, which are governed by these Terms as well as any
						specific terms associated with the specific bonus or
						promotion.
					</p>
					<p>
						10.2. Bonuses and promotions may be withdrawn or changed
						at any time without prior notice.
					</p>
					<p>
						10.3. Bonuses and promotions may be time-limited, and
						wagering requirements and other conditions may apply.
					</p>
					<p>
						10.4. Bonuses and promotions may be limited to one per
						person, family, household, email address, IP address,
						phone number, payment method (e.g., debit or credit
						card, e-wallet, etc.) or shared computer.
					</p>
					<p>
						10.5. We reserve the right to withdraw any bonus or
						promotion, cancel any bonus funds and any winnings
						obtained using bonus funds if we believe that the bonus
						or promotion has been misused or the terms of the bonus
						or promotion have been violated.
					</p>

					<h2>11. Bets</h2>
					<p>
						11.1. A bet is considered valid when it has been
						confirmed by us.
					</p>
					<p>
						11.2. In the event of a dispute regarding the placement
						or timing of any bet, the decision of our betting
						manager is final.
					</p>
					<p>
						11.3. We reserve the right to refuse any bet or part of
						a bet without explanation.
					</p>
					<p>
						11.4. We reserve the right to cancel any bet that was
						accepted when the Account had a negative balance or when
						the bet was placed during a technical problem that would
						otherwise have prevented the bet from being placed.
					</p>
					<p>11.5. We reserve the right to cancel any bet if:</p>
					<ul style={{ paddingLeft: '20px' }}>
						<li>
							11.5.1. The bet was placed on behalf of a person who
							colluded with others for the purpose of obtaining an
							unfair advantage;
						</li>
						<li>
							11.5.2. The bet was placed by a person who has the
							ability to directly or indirectly influence the
							outcome of an event;
						</li>
						<li>
							11.5.3. The bet was placed by a person who is
							directly or indirectly connected with the operator
							of the event on which the bet was placed;
						</li>
						<li>
							11.5.4. The bet was placed as a result of any form
							of cooperation between clients;
						</li>
						<li>
							11.5.5. The bet was placed using stolen, cloned or
							otherwise fraudulent payment cards or other
							fraudulent payment methods.
						</li>
					</ul>

					<h2>12. Results</h2>
					<p>
						12.1. We determine the results of all events on which
						bets are accepted based on the official results
						announced at the end of the event.
					</p>
					<p>
						12.2. Once we have confirmed and announced the result of
						an event, all bets on that event become final.
					</p>
					<p>
						12.3. In the event of any dispute regarding the result
						of any event, the decision of our betting manager, based
						on information from independent sources, is final.
					</p>
					<p>
						12.4. We reserve the right to suspend payment on a
						market and seek confirmation of the result if there is
						any doubt or uncertainty regarding the result.
					</p>

					<h2>13. Payouts</h2>
					<p>
						13.1. We strive to process all payouts in accordance
						with the payout instructions provided on the Website.
					</p>
					<p>
						13.2. We reserve the right to request documents to
						verify your identity and source of funds before
						processing any payout.
					</p>
					<p>
						13.3. We reserve the right to refuse a payout if we have
						reasonable grounds to believe that you have engaged in
						fraudulent activity or have violated these Terms.
					</p>

					<h2>14. Errors</h2>
					<p>
						14.1. If we erroneously credit your Account with funds
						that do not belong to you, whether due to a technical
						problem, human error, administrative error or otherwise,
						the amount erroneously credited will remain our property
						and will be deducted from your Account. If you have
						withdrawn funds that were erroneously credited to your
						Account, the erroneously credited amount will constitute
						a debt owed to us. In the event of an erroneous credit,
						you are obliged to notify us through customer support.
					</p>
					<p>
						14.2. If for any reason software or hardware or human
						error results in a display error, we are not responsible
						for any direct or indirect expenses, costs, losses or
						claims arising from such errors, and we reserve the
						right to cancel all games/bets associated with such
						errors and take any other actions to correct such
						errors.
					</p>

					<p>
						14.3. TO THE EXTENT PERMITTED BY APPLICABLE LAW, WE WILL
						NOT COMPENSATE YOU FOR ANY REASONABLY FORESEEABLE LOSSES
						OR DAMAGES, DIRECT OR INDIRECT, THAT YOU MAY INCUR IF WE
						FAIL TO PERFORM OUR OBLIGATIONS UNDER THESE TERMS, IF WE
						DO NOT BREACH ANY DUTIES IMPOSED ON US BY LAW (INCLUDING
						CASES WHERE WE CAUSE DEATH OR BODILY INJURY THROUGH OUR
						NEGLIGENCE, IN WHICH CASE WE ARE NOT LIABLE TO YOU IF
						THIS FAILURE TO PERFORM OBLIGATIONS IS RELATED TO: I)
						YOUR OWN FAULT; II) A THIRD PARTY NOT RELATED TO OUR
						PERFORMANCE OF THESE TERMS (FOR EXAMPLE, PROBLEMS
						RELATED TO THE OPERATION OF THE COMMUNICATION NETWORK,
						CONGESTION AND CONNECTION OR OPERATION OF YOUR COMPUTER
						EQUIPMENT); OR III) ANY OTHER EVENTS THAT NEITHER WE NOR
						OUR SUPPLIERS COULD FORESEE OR PREVENT, EVEN IF WE OR
						THEY TOOK REASONABLE PRECAUTIONS. SINCE THIS SERVICE IS
						INTENDED FOR CONSUMER USE ONLY, WE ARE NOT LIABLE FOR
						ANY COMMERCIAL LOSSES OF ANY KIND.
					</p>

					<p>
						14.4. IN THE EVENT THAT WE ARE FOUND LIABLE FOR ANY
						EVENT UNDER THESE TERMS, OUR TOTAL AGGREGATE LIABILITY
						TO YOU IN CONNECTION WITH THESE TERMS SHALL NOT EXCEED
						A) THE VALUE OF THE BETS YOU PLACED THROUGH YOUR ACCOUNT
						IN RESPECT OF THE RELEVANT BET/WAGER OR PRODUCT THAT
						GAVE RISE TO THE RELEVANT LIABILITY, OR B) 500 EUROS IN
						THE AGGREGATE, WHICHEVER IS LESS.
					</p>

					<p>
						14.5. WE STRONGLY RECOMMEND THAT YOU I) CAREFULLY CHECK
						THE SUITABILITY AND COMPATIBILITY OF THE SERVICE WITH
						YOUR OWN COMPUTER EQUIPMENT BEFORE USE; AND II) TAKE
						REASONABLE PRECAUTIONS TO PROTECT YOURSELF FROM
						MALICIOUS SOFTWARE OR DEVICES, INCLUDING BY INSTALLING
						ANTI-VIRUS SOFTWARE.
					</p>

					<h2>15. Underage Gambling</h2>
					<p>
						15.1. If we suspect or receive notification that you are
						currently under 18 years of age or were under 18 years
						of age or below the age of majority established by the
						laws of the jurisdiction applicable to you when you
						placed any bets through the Service, your Account will
						be suspended (blocked) to prevent you from placing
						further bets or withdrawing funds from your Account. We
						will then investigate this matter, including whether you
						placed bets as an agent or otherwise on behalf of a
						person younger than 18 years or below the age of
						majority established by the laws of the jurisdiction
						applicable to you. If it is determined that you: a)
						currently; b) were under 18 years of age or below the
						age of majority that applies to you at the relevant
						time; or c) placed bets as an agent or on behalf of a
						person under 18 years of age or below the age of
						majority that applies:
					</p>

					<ul style={{ paddingLeft: '20px' }}>
						<li>
							all winnings, currently or to be credited to your
							Account, will be withheld;
						</li>
						<li>
							all winnings obtained from bets through the Service
							while underage must be paid to us upon request (if
							you do not comply with this provision, we will seek
							to recover all expenses associated with the return
							of such amounts); and/or
						</li>
						<li>
							any money deposited in your Account that is not
							winnings will be returned to you OR withheld until
							you reach the age of 18 at our discretion. We
							reserve the right to deduct payment transaction fees
							from the refund amount, including transaction fees
							for deposits to your trafflab.io account that we
							covered.
						</li>
					</ul>

					<p>
						15.2. This condition also applies to you if you are over
						18 years old but place your bets in a jurisdiction that
						sets a higher age than 18 years for legal betting, and
						you have not reached that minimum legal age in that
						jurisdiction.
					</p>

					<p>
						15.3. In the event that we suspect that you are
						violating the provisions of this clause or attempting to
						use them fraudulently, we reserve the right to take any
						necessary actions to investigate this matter, including
						informing the relevant law enforcement authorities.
					</p>

					<h2>16. Fraud</h2>
					<p>
						We will pursue criminal and contractual sanctions
						against any Client involved in fraud, dishonesty or
						criminal acts. We will withhold payment to any Client
						who is suspected of such actions. The Client must
						indemnify and be liable to pay us on demand all costs,
						charges or losses incurred by us (including any direct,
						indirect or consequential losses, loss of profit, loss
						of business and loss of reputation) arising directly or
						indirectly from the Client's fraud, dishonesty or
						criminal acts.
					</p>

					<h2>17. Intellectual Property</h2>
					<p>
						17.1. Any unauthorized use of our name and logo may
						result in legal action against you.
					</p>

					<p>
						17.2. In the relationship between us and you, we are the
						sole owners of the rights to the Service, our
						technology, software and business systems ("Systems"),
						as well as our odds. You must not use your personal
						profile for your own commercial gain (for example,
						selling your status updates to an advertiser); and when
						choosing a nickname for your Account, we reserve the
						right to remove or return it if we deem it appropriate.
					</p>

					<p>
						17.3. You may not use our URL, trademarks, trade names
						and/or trade dress, logos ("Marks") and/or our odds in
						connection with any product or service that is not ours,
						which may in any way cause confusion among Clients or
						the public, or which in any way disparages us.
					</p>

					<p>
						17.4. Except as expressly provided in these Terms, we
						and our licensors do not grant you any express or
						implied rights, licenses, titles or interests in respect
						of the Systems or Marks, and all such rights, licenses,
						titles and interests are specifically reserved by us and
						our licensors. You agree not to use any automatic or
						manual devices to monitor or copy web pages or content
						within the Service. Any unauthorized use or reproduction
						may result in legal action against you.
					</p>

					<h2>18. Your License</h2>
					<p>
						18.1. In accordance with these Terms and your compliance
						with them, we grant you a non-exclusive, limited,
						non-transferable and non-sublicensable license to access
						and use the Service solely for your personal
						non-commercial purposes. Our license to you terminates
						if our agreement with you under these Terms ends.
					</p>

					<p>
						18.2. Except for your own content, you may not under any
						circumstances modify, publish, transmit, sell,
						reproduce, upload, post, distribute, perform, display,
						create derivative works or otherwise use the Service
						and/or any content on it or software contained therein,
						except as we expressly permit in these Terms or
						otherwise on the Website. No information or content on
						the Service or provided to you in connection with the
						Service may be modified or altered, combined with other
						data or published in any form, including, for example,
						screen scraping or database and any other activity aimed
						at collecting, storing, reorganizing or manipulating
						such information or content.
					</p>

					<p>
						18.3. Any non-compliance by you with this clause may
						also be a violation of our or third parties'
						intellectual property rights and other proprietary
						rights, which may subject you to civil liability and/or
						criminal prosecution.
					</p>

					<h2>19. Your Conduct and Security</h2>
					<p>
						19.1. For your protection and the protection of all our
						Clients, it is strictly prohibited to post any content
						on the Service, as well as conduct in connection with it
						and/or the Service, which is in any way illegal,
						unacceptable or undesirable ("Prohibited Conduct").
					</p>

					<p>
						19.2. If you engage in Prohibited Conduct or we in our
						discretion determine that you are engaging in Prohibited
						Conduct, your Account and/or your access to or use of
						the Service may be immediately terminated without notice
						to you. Legal action may be taken against you by another
						Client, another third party, law enforcement authorities
						and/or us in connection with your engagement in
						Prohibited Conduct.
					</p>

					<p>
						19.3. Prohibited Conduct includes, but is not limited
						to, accessing or using the Service to: promote or share
						information that you know is false, misleading or
						illegal; engage in any illegal or illicit activity, such
						as, but not limited to, any activity that facilitates or
						promotes any criminal activity or enterprise, violates
						the privacy of another Client or any other third party
						or other rights, or that creates or distributes computer
						viruses; harm minors in any way; transmit or provide any
						content that is illegal, harmful, threatening, abusive,
						tormenting, defamatory, vulgar, obscene, indecent,
						violent, hateful or racially or ethnically or otherwise
						objectionable; transmit or provide any content to which
						the user has no right to provide under any law or
						contractual or fiduciary relationship, including,
						without limitation, any content that infringes the
						copyrights, trademarks or other intellectual property
						rights and proprietary rights of a third party; transmit
						or provide any content or material that contains any
						software virus or other computer or program code
						(including HTML) designed to interrupt, destroy or alter
						the functionality of the Service, its presentation or
						any other website, computer software or hardware;
						interfere with, disrupt or reverse engineer the Service
						in any way, including, without limitation, intercepting,
						emulating or redirecting communication protocols used by
						us, creating or using cheats, mods or hacks or any other
						software designed to modify the Service, or using any
						software that intercepts or collects information from or
						through the Service; extract or index any information
						from the Service using any robot, spider or other
						automated mechanism; engage in any activity or action
						that, in our sole and complete unlimited discretion,
						results in or may result in another Client being
						deceived or defrauded; transmit or provide any
						unsolicited or unauthorized advertising or mass mailing,
						such as, but not limited to, junk mail, instant
						messages, "spim", "spam", chain letters, pyramid schemes
						or other forms of solicitations; creating Accounts on
						the Website by automatic means or under false or
						fraudulent pretenses; impersonating another Client or
						any other third party, or any other act or thing which,
						in our reasonable opinion, is contrary to our business
						principles. The above list of Prohibited Conduct is not
						exhaustive and may be amended by us at any time or from
						time to time. We reserve the right to investigate and
						take all such actions as we in our discretion deem
						appropriate or necessary in the circumstances,
						including, without limitation, removing a Client's post
						from the Service and/or terminating their Account, and
						taking any action against any Client or third party who
						directly or indirectly participates or knowingly permits
						any third party to directly or indirectly participate in
						Prohibited Conduct, with or without notice to such
						Client or third party.
					</p>

					<h2>20. Links to Other Websites</h2>
					<p>
						The Service may contain links to third-party websites
						that are not maintained by us, not affiliated with us
						and over which we have no control. Links to such
						websites are provided solely for the convenience of
						Clients and are in no way researched, monitored or
						checked by us for accuracy or completeness. Links to
						such websites do not imply any endorsement by us and/or
						any association with the linked websites or their
						content or their owners. We do not control and are not
						responsible for their availability, accuracy,
						completeness, accessibility and usefulness. Accordingly,
						when accessing such websites, we recommend that you take
						the usual precautions when visiting a new website,
						including reviewing their privacy policy and terms of
						use.
					</p>

					<h2>21. Complaints</h2>
					<p>
						21.1. If you have any concerns or questions regarding
						these Terms, you should contact our customer service
						department through the links on the Website and use your
						Registered Email Address in all communications with us.
					</p>

					<p>
						21.2. NOTWITHSTANDING THE FOREGOING, WE HAVE NO
						LIABILITY TO YOU OR ANY THIRD PARTY WHEN RESPONDING TO
						ANY COMPLAINT WE HAVE RECEIVED OR TAKEN ACTION IN
						CONNECTION WITH IT.
					</p>

					<p>
						21.3. If a Client is not satisfied with how a bet has
						been settled, then the Client should provide details of
						their claim to our customer service department. We will
						make reasonable efforts to respond to requests of such a
						nature within a few days and in any case we intend to
						respond to all such requests within 28 days of receipt.
					</p>

					<p>
						21.4. Disputes must be filed within three (3) days from
						the date when the disputed bet was settled. No claims
						will be honored after this period. The Client is fully
						responsible for the transactions of their Account.
					</p>

					<p>
						21.5. In the event of a dispute between you and us, our
						customer service department will attempt to reach an
						agreed resolution. If our customer service department is
						unable to reach an agreed resolution with you, the
						matter will be escalated to our management.
					</p>

					<p>
						21.6. If all efforts to resolve the dispute to the
						Client's satisfaction have been unsuccessful, the Client
						has the right to resolve the dispute through
						arbitration.
					</p>

					<h2>22. Assignment of Rights</h2>
					<p>
						Neither these Terms nor any rights or obligations under
						them may be assigned by you without prior written
						consent from us, which will not be unreasonably
						withheld. We may, without your consent, assign all or
						any part of our rights and obligations hereunder to any
						third party provided that such third party is capable of
						providing a service substantially similar to the
						Service, by posting written notice of this on the
						Service.
					</p>

					<h2>23. Severability</h2>
					<p>
						In the event that any provision of these Terms is found
						by any competent authority to be unenforceable or
						invalid, the relevant provision shall be modified to
						ensure its enforceability in accordance with the
						intention of the original text to the maximum extent
						permitted by applicable law. The validity and
						enforceability of the remaining provisions of these
						Terms shall not be affected.
					</p>

					<h2>24. Breach of these Terms</h2>
					<p>
						Without limiting our other remedies, we may suspend or
						terminate your Account and refuse to continue to provide
						you with the Service, in any case without prior notice,
						if, in our reasonable opinion, you are in breach of any
						material term of these Terms. Notice of any such action
						taken, however, will be promptly provided to you.
					</p>

					<h2>25. General Provisions</h2>
					<p>
						25.1. Term of Agreement. These Terms remain in full
						force and effect while you access or use the Service, or
						are a Client or visitor to the Website. These Terms
						survive the termination of your Account for any reason.
					</p>

					<p>
						25.2. Gender. Words denoting the singular include the
						plural and vice versa, words denoting the masculine
						gender include the feminine and neuter gender and vice
						versa, and words denoting persons include individuals,
						partnerships, associations, trusts, unincorporated
						organizations and corporations.
					</p>

					<p>
						25.3. Waiver of Rights. No waiver by us, whether by
						conduct or otherwise, of a breach or threatened breach
						by you of any term or condition of these Terms will be
						effective against us or binding on us unless made in
						writing and duly signed by us, and, unless otherwise
						provided in the written waiver, will be limited to the
						specific breach waived. Failure on our part to enforce
						at any time any term or condition of these Terms shall
						not be construed as a waiver of such provision or of our
						right to enforce such provision at any other time.
					</p>

					<p>
						25.4. Acknowledgment. By accessing or using the Service,
						you acknowledge that you have read, understood and
						agreed to each clause of these Terms. As a result, you
						hereby irrevocably waive any future arguments, claims,
						demands or proceedings that contradict anything
						contained in these Terms.
					</p>

					<p>
						25.5. Language. In case of discrepancies between the
						English version of these rules and any other language
						version, the English language version will be considered
						correct.
					</p>

					<p>
						25.6. Applicable Law. These Terms are governed
						exclusively by the legislation in force in the state of
						Anjouan in the Union of Comoros.
					</p>

					<p>
						25.7. Entire Agreement. These Terms constitute the
						entire agreement between you and us regarding your
						access and use of the Service and supersede all prior
						agreements and communications, oral or written,
						regarding the subject matter hereof.
					</p>
				</div>
			</div>
			<Footer />

			{/* Добавляем компонент NavPopup */}
			<NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup} />
		</SiteLayout>
	);
}
