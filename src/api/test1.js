import fetch from "node-fetch"

export default function formHandler(req, res){
  const body = req.body
  const message = 'test fetching' + JSON.stringify(body)

  const fetchedData = fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${message}`, {
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
  res.end(message)
}