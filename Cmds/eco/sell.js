module.exports = {
name: "sell",
code: `
$if[$message[1]==iron]
you sold $message[2] iron ores <:iron:901797447301464104> and gained $multi[$message[2];72]$getservervar[simbol]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[72;$message[2]]]]
$setGlobalUserVar[iron;$sub[$getGlobalUserVar[iron];$message[2]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > < 
\`\`\`]
$onlyIf[$getGlobalUserVar[iron]>=$message[2];You dont have enough iron ores]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else
$if[$message[1]==stone]
you sold $message[2] stone ores <:stone:901797596140552212> and gained $multi[$message[2];21]$getservervar[simbol]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[21;$message[2]]]]
$setGlobalUserVar[stone;$sub[$getGlobalUserVar[stone];$message[2]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > < 
\`\`\`]
$onlyIf[$getGlobalUserVar[stone]>=$message[2];You dont have enough stone ores]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else
$if[$message[1]==diamond]
you sold $message[2] Diamonds <:damond:901797689887436811> and gained $multi[$message[2];593]$getservervar[simbol]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[593;$message[2]]]]
$setGlobalUserVar[diamond;$sub[$getGlobalUserVar[diamond];$message[2]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > < 
\`\`\`]
$onlyIf[$getGlobalUserVar[diamond]>=$message[2];You dont have enough diamonds]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else
Not an item you can only sell
\`stone\`,\`iron\`,\`diamond\`
$endif
$endif
$endif`}