module.exports = {
    name: "owofy",
    aliases: ['owofi', 'furry', 'fuwwy', 'furryfy', 'furrfi', 'owo'],
    code: `
$replaceText[$replaceText[$replaceText[$replaceText[$message;l;w];L;W];r;w];R;W]

- \`$userTag[$authorID]\`
$onlyIf[$message!=;No owo...? Hmph!]
`
}