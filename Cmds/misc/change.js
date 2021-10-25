module.exports = {
  name: "change",
  code: `
$replaceText[$message; ;$randomText[-;/;+;>;<];-1]
`
}