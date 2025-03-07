import fetch from 'node-fetch';

const allowedLinks = [
	'http://trafflab-test.netlify.app',
	'https://trafflab-test.netlify.app',

	'https://dexsportworldcup.online',
	'http://dexsportworldcup.online',

	'http://trafflab.com',
	'https://trafflab.com',

	'http://trafflab.io',
	'https://trafflab.io',

	'http://localhost:8000',
	'http://localhost:9000',
	'http://127.0.0.1:3000',
];

export default async function formHandler(req, res) {
	const origin = req.headers['origin'];
	if (allowedLinks.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
		res.setHeader('Access-Control-Allow-Credentials', 'true');
	} else {
		res.statusCode = 403;
		return res.end();
	}
	if (req.method === 'OPTIONS') {
		const DEFAULT_ALLOWED_METHODS = 'POST';
		const requestHeaders = req.getHeader('access-control-request-headers');
		res.setHeader('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
		res.setHeader('Access-Control-Allow-Headers', requestHeaders);
		return res.end();
	}

	const body = req.body;
	console.log('Received form data:', body);

	const message =
		body.siteLang === 'ru'
			? body.type === 'web'
				? `ру-веб%0AИмя - ${body.name}%0AТелеграм - ${body.contact}`
				: `ru-рекл%0AВаш продукт - ${body.product}%0AВаше имя - ${body.name}%0AКонтакт для связи - ${body.contact}`
			: body.type === 'web'
			? `eng-web%0AName - ${body.name}%0ATelegram - ${body.contact}`
			: `eng-adv%0AProduct - ${body.product}%0AName - ${body.name}%0AContact - ${body.contact}`;

	console.log('Formatted message:', message);

	const telegramUrl = `https://api.telegram.org/bot5502333932:AAFTPXDUZcEJ9c07zoJrZZDZVFZO9GUk0Eo/sendMessage?chat_id=-738135275&parse_mode=html&text=${message}`;
	console.log(
		'Telegram API URL (token hidden):',
		telegramUrl.replace(process.env.TG_BOT_TOKEN, 'TOKEN_HIDDEN')
	);

	try {
		const fetchedData = await fetch(telegramUrl, {
			method: 'GET',
		});

		const responseText = await fetchedData.text();
		console.log('Telegram API response status:', fetchedData.status);
		console.log('Telegram API response:', responseText);

		if (fetchedData.ok) {
			res.statusCode = 200;
			res.end('ok');
		} else {
			res.statusCode = 500;
			res.end('tg-error: ' + responseText);
		}
	} catch (error) {
		console.error('Error sending to Telegram:', error);
		res.statusCode = 500;
		res.end('error: ' + error.message);
	}
}
