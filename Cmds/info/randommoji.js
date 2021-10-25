bot.command({
 name: "addr",
 code: `$addEmoji[$splitText[1];$splitText[2]]
$textSplit[$jsonRequest[https://api.meowee.cf/api/random/randomemoji?;emoji;];|]`
});
