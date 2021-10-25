module.exports = {
    name: "ascii",
    code: `
$description[\`\`\`arm
$jsonRequest[https://artii.herokuapp.com/make?text=$replaceText[$message; ;%20;-1]]
\`\`\`]
$color[RANDOM]
$onlyIf[$charCount[$noEscapingMessage]<20;{author:$username[$authorID]#$discriminator[$authorID]:$authorAvatar}{description:$getVar[no] Message must not be longer than 20 characters}{color:RED}]
$onlyIf[$message!=;{author:$username[$authorID]#$discriminator[$authorID]:$authorAvatar}{description:$getVar[no] Too few arguments given.

Usage:
\`ascii <message>\`}{color:RED}]
`
}