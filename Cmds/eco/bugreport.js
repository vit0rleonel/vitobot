module.exports = {
name: "bugreport",
aliases: "report",
code: `
$channelSendMessage[$channelID;your report has sucessfully been send
Your report: \`$message\`;no]
$useChannel[901639832093208626]
$color[RED]
$description[
  $userTag[$authorid]'s report is

**$message**]
$argsCheck[<150;report should be atleast 10 charactars or more longnot more than 150 charactars long]`}