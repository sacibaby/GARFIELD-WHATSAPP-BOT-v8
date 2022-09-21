//// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐾'] // 👈 Enter your Emoji 
global.emoji02 = ['🌺'] //👈 Enter your Emoji
global.notice = ` *හායි කොහොමද ඔයාට*
*❮𝗦𝗨𝗞𝗜-𝗠𝗗❯*
*I am 16 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*MY NAME IS  SUNETH*
*Also I am Student*
*Follow My WHATS APP- http://wa.me/+94770378874?text =*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+94770378874'] //👈  Enter Your number
global.premium =  ['+94770378874'] //👈  Enter Your number
global.ownernomer = '+94770378874' //👈  Enter Your number
global.ownername = '🍇SUNETH MD🍇' //👈 Enter Your name
global.botname = '𝗦𝗨𝗞𝗜-𝗠𝗗' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 SUNETH MD 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://github.com/blackbotalpha/GARFIELD-WHATSAPP-BOT-v8?organization=blackbotalpha&organization=blackbotalpha' // 👈 You Can change this your choice
global.region = '𝗦𝗥𝗜-𝗟𝗔𝗡𝗞𝗔, අනුරාධපුර , පදවිය' // 👈 You Can change this your choice
global.sc = 'https://github.com/blackbotalpha/GARFIELD-WHATSAPP-BOT-v8?organization=blackbotalpha&organization=blackbotalpha'
global.fbt = 'Follw Us 🌹' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'http://wa.me/+94770378874?text ='// 👈 Enter your Social media link to follow now button
global.welcome = '*𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝘆𝗼𝘂...ඔයාව සාදරයෙන් පිළිගමි අපගේ සමූහයට ...කොහොමද ඉතින් ඔයාට 🙃..හොදින්ද.🥰*' // 👈 You Can change this your choice
global.bye = '*𝗕𝘆𝗲 𝗯𝗿𝗼..යනවනම් පලයන් යකෝ උබව අල්ලන් හිටියේ නෑ ආය මේ පැත්ත පලාතේ එන්නා එපා😉*' // 👈 You Can change this your choice
global.packname = '𝗦𝗨𝗞𝗜-𝗠𝗗 𝘀𝘂𝗻𝗲𝘁𝗵'  // 👈 You Can change this your choice 
global.author = 'Suneth md' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://telegra.ph/file/3a5a49e312ba05cd64d01.jpg, upload a photo of your choice and put its link here
global.thumb =  'https://telegra.ph/file/fe6ef741e65b2355a7892.jpg' 
global.spoty = 'https://telegra.ph/file/1086ab52e1d0853ec8f57.jpg'
//Go to https://telegra.ph/file/ef85650aefce7ff31ed9c.jpg, upload a photo of your choice and put its link here
global.sp = '🧐'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
