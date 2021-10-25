module.exports = {
    name: "meme",
    code: `
$if[$jsonRequest[https://meme-api.herokuapp.com/gimme;nsfw]!=true]
$editMessage[$get[id];{title:$jsonRequest[https://meme-api.herokuapp.com/gimme;title;]}
{url:$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;]}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme;url;]}
{color:RANDOM}]
$wait[0.$random[2;4]s]
$let[id;$sendMessage[<a:loading:819146602903896064>;yes]]
$else
$editMessage[$get[id];{title:$jsonRequest[https://meme-api.herokuapp.com/gimme;title;]}
{url:$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;]}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme;url;]}
{color:RANDOM}]
$wait[0.$random[2;4]s]
$let[id;$sendMessage[<a:loading:819146602903896064>;yes]]
$onlyNSFW[The requested meme contains NSFW so I wont show it]
$endIf
`
} 
