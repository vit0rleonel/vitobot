module.exports = ({
  name: "set-msg",
  aliases: ['setmsg'],
  code: `$setServerVar[welcomeMsg;$message]
  Successfully set your welcome message to \`$message\`.
  $onlyIf[$message!=;Input something for your welcome message to be]`
})