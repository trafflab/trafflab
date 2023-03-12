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

export default function formHandler(req, res){
  const origin = req.headers['origin']
  if (allowedLinks.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  } 
  else {
    res.statusCode = 403
    return res.end()
  }  
  if (req.method === 'OPTIONS') {
    const DEFAULT_ALLOWED_METHODS = 'POST';
    const requestHeaders = req.getHeader('access-control-request-headers');
    res.setHeader('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.setHeader('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  const body = req.body
  const message = body.siteLang === 'ru'
    ? `ru%0AВаш продукт - ${body.product}%0AВаше имя - ${body.name}%0AКонтакт для связи - ${body.contact}%0AУдобный канал связи - ${body.comfyContact || "Не указал"}`
    : `eng%0AName - ${body.name}%0ATelegram - @${body.tg}`


  fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${message}`, {
    method: 'GET'
  })
  .then(res => {
    if (res.ok) {
      res.statusCode = 200
      res.end("ok")
    }
    throw new Error(`FetchError: ${res.status} - ${res.message}`)
  })
  .catch(err => {
    res.statusCode = 500
    res.end(`${err}`)
  })
  return res.end()
};
