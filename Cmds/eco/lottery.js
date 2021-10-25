module.exports = {
name: "lottery",
code: `
$channelSendMessage[$channelID;$authorid;you entered the 150k <:looott:901640510458974238>lottery and paid 250$getservervar[simbol] wait 1 day to get the results also please dont enter again thank you;no]
$useChannel[901639832093208626]
$userTag[$authorid] entered the lottery for 150k

ID - $authorid
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];250]]
$onlyIf[$getGlobalUserVar[cash]>=250;You dont have enough money]

`}