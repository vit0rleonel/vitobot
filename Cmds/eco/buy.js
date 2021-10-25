module.exports = {
name: "buy",
aliases: ['buyy' , 'purchase' , 'koop' , 'acheter' , '買' , '买' , 'Kaufen' , 'αγορά' , 'खरीदना' , '구입'],
code: ` 
$if[$message[1]==plant]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25]]]
$setGlobalUserVar[plant;$sum[$getGlobalUserVar[plant];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:cropp:899245624745136159> \`plant's\` **for $numberSeparator[$multi[$message[2];25];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else
$if[$message[1]==chandelier]


$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[250;$message[2]]]]
$setGlobalUserVar[chand;$sum[$getGlobalUserVar[chand];$message[2]]]

**$username Purchased $message[2]** <:chandelierr:899245623809810462> \`Chandelier's\` **for $numberSeparator[$multi[$message[2];250];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > < 
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];250];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else

$if[$message[1]==laser]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];7500]]]
$setGlobalUserVar[lase;$sum[$getGlobalUserVar[lase];$multi[1;$message[2]]]]


**$username Purchased $message[2]** $customemoji[lazer;896847103647694859] \`Laser grid's\` **for $numberSeparator[$multi[$message[2];7500];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];7500];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else

$if[$message[1]==silver]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];6500]]]
$setGlobalUserVar[gem11;$sum[$getGlobalUserVar[gem12];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:gem1:901156013313499156> \`Silver gem's\` **for $numberSeparator[$multi[$message[2];6500];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];6500];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]



$else


$if[$message[1]==myth]



$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];9700]]]
$setGlobalUserVar[gem22;$sum[$getGlobalUserVar[gem22];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:gem2:901157795401961552> \`Mythical gem's\` **for $numberSeparator[$multi[$message[2];9700];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];9700];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else


$if[$message[1]==premium]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]
$setGlobalUserVar[premi;$sum[$getGlobalUserVar[premi];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:premiumm:901195964587577395>
 \`Premium's\` **for $numberSeparator[$multi[$message[2];25000];,]**$getservervar[simbol]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else

$if[$message[1]==pickaxe]







$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];750]]]
$setGlobalUserVar[pickaxe;$sum[$getGlobalUserVar[pickaxe];$multi[1;$message[2]]]]


**$username Purchased $message[2]** <:pickaxe:901797142610473011> \`Pickaxe's\` **for $numberSeparator[$multi[$message[2];750];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];750];You dont have enough money]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else
That item does not exist you can only buy
\`plant\`,\`chandelier\`,\`laser\`,\`silver\`,\`myth\`,\`premium\`,\`pickaxe\`




$endif
$endif
$endif
$endif
$endif
$endif
$endif


`}


