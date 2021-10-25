module.exports = {
name: "bal",
aliases: ['balance','money','wallet','cash'],
code: `
$author[Welcome to $userTag[$findUser[$message]] balance;$replaceText[$userAvatar[$findUser[$message]];null;$userAvatar[$clientID]]]
$addTimeStamp
$color[RANDOM]
$description[
**Wallet:** $textTrim[\`$numberSeparator[$getGlobalUserVar[cash;$findUser[$message]];,]]\` $getServerVar[simbol]]
$setGlobalUserVar[cash;$getGlobalUserVar[cash;$findUser[$message]];$findUser[$message]]


$deletecommand
$deleteIn[90m]
`
}