const fs = require('fs')
const fetch = require('node-fetch')
const csvutil = require('./csvutil.js')

const fetchCSVfromGoogleSpreadSheet = async function(key) {
	const csvurl = `https://docs.google.com/spreadsheets/d/e/${key}/pub?gid=0&single=true&output=csv`
  const csv = await (await fetch(csvurl)).text()
  //console.log(csv)
	const data = csvutil.convertCSVtoArray(csv)
	//data.shift()
	return csvutil.csv2json(data)
}

const main = async function() {
  const key = '2PACX-1vS92FFvTP6VBPu-ZHnJOYitgzQY0gyKCiOBWJoyLkkV4lIQ4Se6rGxgMVP7pFLOoG4ywi7l43TR0Ou9'
  const data = await fetchCSVfromGoogleSpreadSheet(key)
  console.log(data)
}
if (require.main === module) {
  main()
} else {
}

exports.fetchCSVfromGoogleSpreadSheet = fetchCSVfromGoogleSpreadSheet
