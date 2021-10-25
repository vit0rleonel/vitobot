module.exports = {
  name: "8ball",
  code: `
$title[🎱 ball]
$author[$userTag[$authorID];$authorAvatar]
$description[here's your 🎱 ball 

> $randomText[As i see it, yes.;Ask again later.;Better not tell you now.;Cannot predict now.;Concentrate and ask again.;Dont count on it.;It is certain.;It is decidedly so.;Most likely.;My reply is no.;My sources say no.;Outlook not so good.;Outlook good.;Reply hazy, try again.;Signs point to yes.;Very doubtful.;Without a doubt.;Yes.;Yes - definitely.;You may rely on it.]]
$color[BLUE]
$cooldown[10s;$getVar[no] Just wait god dammit. %time% left]
$onlyIf[$message!=;$getVar[no] Provide something for the bot to decide]
`
}