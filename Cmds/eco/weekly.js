module.exports = {
name: "weekly",
code: ` 
$if[$getglobaluservar[gem1on]==on]
$globalCooldown[5d;$customemoji[redtickk;896847103647694859] Im sorry what? its called **weekly not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Weekly;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your weekly and got \`5666\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];5666]]
$setGlobaluservar[weekly;true]
$else
$globalCooldown[1w;$customemoji[redtickk;896847103647694859] Im sorry what? its called **weekly not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Weekly;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your weekly and got \`3500\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];3500]]
$setGlobaluservar[weekly;true]
$else
$if[$getglobaluservar[gem2on]==true]
$globalCooldown[3d;$customemoji[redtickk;896847103647694859] Im sorry what? its called **weekly not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Weekly;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your weekly and got \`7500\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];7500]]
$setGlobaluservar[weekly;true]
$else
$globalCooldown[1w;$customemoji[redtickk;896847103647694859] Im sorry what? its called **weekly not secondly** so wait \`%time%\` ]
$thumbnail[$userAvatar[$clientid]]
$author[Weekly;$userAvatar[$clientid]]
$color[BLACK]
$description[You claimed your weekly and got \`3500\`$getservervar[simbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];3500]]
$setGlobaluservar[weekly;true]
$endif
$endif


`}