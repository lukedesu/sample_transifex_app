const express = require('express')
const path = require('path')
const i18n = require('i18n-express')
const app = express()
const port = 3000

app.use(i18n({
    translationsPath: path.join(__dirname, 'locales'),
    siteLangs: ['en','th-TH','zh-CN','hi-IN','ja-JP','ko-KR','vi-VN','ms-MY'],
    paramLangName: 'lang',
    textsVarName: 't'
  }));

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))