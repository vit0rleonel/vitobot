module.exports = {
name: "claims",
code: `
$thumbnail[$useravatar[$clientid]]
$color[GREEN]
$description[

  **Reward claim.**
$replaceText[$replaceText[$getGlobalUserVar[day;$findUser[$message]];false;$customemoji[redtickk;896847103647694859]];true;$customemoji[greetick;896847103647694859]] Daily

$replaceText[$replaceText[$getGlobalUserVar[weekly;$findUser[$message]];false;$customemoji[redtickk;896847103647694859]];true;$customemoji[greetick;896847103647694859]] Weekly]`
}