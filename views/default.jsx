const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>Default</title>
      <link rel="stylesheet" href="/main.css"></link>
    </head>
    <body>
      <div>
          {html.children}
      </div>
    </body>

  </html>
  )
}

module.exports = Default