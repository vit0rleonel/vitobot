module.exports = ({
name: "dwelcome",
code: `Successfully disabled welcome messages for this guild! To enable them again, do \`$getServerVar[prefix]setwelcomechannel <#channel>\`.
$djseval[//if you dont use a customisable prefix system, replace $getServerVar[prefix] with your bot's prefix]
$resetServerVar[welcomeChannel]
`
})