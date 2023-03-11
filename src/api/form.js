import fetch from "node-fetch"

const allowedLinks = [
  'http://trafflab-test.netlify.app',
  'https://trafflab-test.netlify.app',

  'http://trafflab.com',
  'https://trafflab.com',

  'http://localhost:8000',
  'http://localhost:9000',
  'http://127.0.0.1:3000',
];

export default async function formHandler(req, res){
  const { headers, method, body } = req;
  if (allowedLinks.includes(headers.origin)) {
    res.header('Access-Control-Allow-Origin', headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  } 
  else return res.status(403).end()
  if (method === 'OPTIONS') {
    const DEFAULT_ALLOWED_METHODS = 'POST';
    const requestHeaders = headers['access-control-request-headers'];
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  const message = body.siteLang === 'ru'
    ? `ru%0AВаш продукт - ${body.product}%0AВаше имя - ${body.name}%0AКонтакт для связи - ${body.contact}%0AУдобный канал связи - ${body.comfyContact || "Не указал"}`
    : `eng%0AName - ${body.name}%0ATelegram - @${body.tg}`

  try {
    const result = await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${message}`, {
      method: 'GET'
    })
    return res.status(200).json(result)
  } catch(err) {
    return res.status(500).json(err)
  }
};
