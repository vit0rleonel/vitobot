module.exports = {
name: "inventory",
aliases: "inv",
code: `
$author[Welcome to $username[$finduser[$message]] inventory;$replaceText[$authorAvatar;null;$userAvatar[$clientid]]]
$color[ORANGE]
$addTimeStamp
$thumbnail[$replaceText[$authorAvatar;null;$userAvatar[$clientid]]
$description[
$customEmoji[cropp;896847103647694859] **Plants:** \`$getGlobalUserVar[plant;$findUser[$message]]\`


 $customemoji[chandelierr;896847103647694859] **Chandeliers:** \`$getGlobalUserVar[chand;$findUser[$message]]\`


$customemoji[lazer;896847103647694859] **Laser grids:** \`$getGlobalUserVar[lase;$findUser[$message]]\`


 <:gem1:901156013313499156> **Silver gems:** \`$getGlobalUserVar[gem11;$findUser[$message]]\`


<:gem2:901157795401961552> **Mythical gems:** \`$getGlobalUserVar[gem22;$findUser[$message]]\`


<:premiumm:901195964587577395> **Premium points:** \`$getGlobalUserVar[premi;$findUser[$message]]\`

<:pickaxe:901797142610473011> **Pickaxe:** \`$getGlobalUserVar[pickaxe;$findUser[$message]]\`

]
$suppressErrors[ {error} ]`
}
