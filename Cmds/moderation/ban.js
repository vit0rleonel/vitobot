module.exports = {
    name: "ban",
    aliases: ['gtfo'],
    code: `
$title[Successful banned.]
$thumbnail[$serverIcon]
$description[$userTag[$get[member]] got banned. 
$replaceText[$replaceText[$checkCondition[$messageslice[1]==];true;];false;Reason: $messageSlice[1]]]
$color[$userRoleColor[$authorID]]
$ban[$get[member]]
$footer[$userTag[$authorID]] $addTimestamp
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$get[member]]];You can't ban this Member due the role hirachie.]
$onlyIf[$get[member]!=$authorID;You\'re not able to ban yourself.]
$onlyif[$get[member]!=;Member not found, try it later again.]
$let[member;$replacetext[$replacetext[$checkcondition[$checkcondition[\`$message[1]\`==\`<@$mentioned[1;no]>\`]$checkcondition[$mentioned[1;no]!=]==truetrue];true;$mentioned[1;no]];false;$findmembers[$message[1];1;{id}]]] 
$onlyIf[$message!=;You're not able to ban \'nothing\'. Please provide a valid user.]
$onlyPerms[ban;You don't got enough permissions to use this command. (\`ban\`)]
$onlyBotPerms[ban;I got insufficient permissions, I require the permissions to \`ban\` members.]`
}
