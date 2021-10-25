module.exports = {
name: "mine",
code: `
<:pickaxe:901797142610473011> You went mining in a cave and found $random[1;3] $randomText[iron;iron;iron;stone;stone;diamond]
 and sold it for $random[60;900]$getservervar[simbol]!!


$globalCooldown[30s;wait %time%]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[60;900]]]
$onlyIf[$getGlobalUserVar[pickaxe]>=1;You dont even own a <:pickaxe:901797142610473011>]
`}


