module.exports = {
name: "daily",
code: `
$if[$getglobaluservar[gem1on]==on]
$globalCooldown[20h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$else
$globalCooldown[24h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$else
$if[$getglobaluservar[gem2on]==true]
$globalCooldown[12h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$else
$globalCooldown[24h;$customemoji[redtickk;896847103647694859] Im sorry what? its called **daily not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Daily;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your daily and got \`2000\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$setGlobaluservar[day;true]
$endif
$endif
`
}