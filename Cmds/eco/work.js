module.exports = {
name: "work",
code:`
$if[$getglobaluservar[gem1on]==on]
$globalcooldown[7s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[506;9000]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[506;9000]]]
$else
$globalcooldown[20s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[50;900]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[50;900]]]
$else
$if[$getglobaluservar[gem2on]==true]
$globalcooldown[2s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[239;10000]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[239;10000]]]
$else
$globalcooldown[7s;wait \`%time%\` ]
$author[worker]
$color[GREEN]
$description[you worked as $randomText[a developer;teacher;bdfd dev;a dog] and earned $random[506;9000]$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[506;9000]]]
$endif
$endif

`
}