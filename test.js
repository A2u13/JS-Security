let body = $response.body
let script = document.createElement('script')
script.setAttribute('src','https://cdn.jsdelivr.net/gh/frederick-wang/scu-urp-assistant@latest/dist/scu-urp-assistant-bookmarklet.js')
document.getElementsByTagName('head')[0].appendChild(script)
$done({ body })
