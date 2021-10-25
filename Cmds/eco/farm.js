module.exports = ({
  name: "farm",
  description: "Work at a farm and get some money",
  usage: "$getserverVar[prefix]farm",
  code: `
$if[$getglobaluservar[lasere]==false]
$author[Farmer;https://emoji.gg/assets/emoji/5556_Cashroom.gif]
$thumbnail[$replaceText[$replaceText[$userAvatar[$authorid];null;$servericon];$servericon;null;$getservervar[pfp]]]
$footer[Requested by $username] 
$color[$getservervar[hex]]


$setGlobalUserVar[plant;$sub[$getGlobalUserVar[plant];$message]]

  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message;30]]

  $description[Pog you farmed up $message pepper plants and earned \`$numberSeparator[$multi[$message;30];,]\`$getServerVar[simbol]
!]

  $cooldown[50s;Sorry the farm is closed for the next %time%]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  ot conatin the following charactars
\`\`\`
- ;\ / . , [ ]  _ +  $  ? ( ) { } ! @ # % ^ & * | > < [ ]
\`\`\`]
$onlyIf[$getGlobalUserVar[plant]>=$message;You dont have enough plants]
$onlyIf[$message>=1;**SPECIFY AN AMOUNT**]

  $else


  
$author[Farmer 4 life;https://emoji.gg/assets/emoji/5556_Cashroom.gif]
$thumbnail[$replaceText[$replaceText[$userAvatar[$authorid];null;$servericon];$servericon;null;$getservervar[pfp]]]
$footer[Requested by $username#$discriminator[$authorid];$replaceText[$replaceText[$useravatar;null;$servericon];$servericon;null;$authorAvatar[$clientid]]]




$setGlobalUserVar[plant;$sub[$getGlobalUserVar[plant];$message]]

  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message;60]]

  $description[Pog you farmed up $message pepper plants and earned \`$numberSeparator[$multi[$message;60];,]\`$getServerVar[simbol]
!]
  
  $color[$getUserVar[embedColor]]
  $globalcooldown[20s;Sorry the farm is closed for the next %time%]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  ot conatin the following charactars
\`\`\`
- ;\ / . , [ ]  _ +  $  ? ( ) { } ! @ # % ^ & * | > < [ ]
\`\`\`]
$onlyIf[$getGlobalUserVar[plant]>=$message;You dont have enough plants]
$onlyIf[$message>=1;**SPECIFY AN AMOUNT**]
  $endif`
})