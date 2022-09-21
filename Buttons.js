//Coded by Tharindu Liyanage
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('ලිස්ට් 𝗠𝗘𝗡𝗨 📃')
global.allmenu = ('𝗔𝗟𝗟 මෙනු 🗂️')
global.script = ('𝗦𝘂𝗻𝗲𝘁𝗵+?')
global.owner = ('𝗦𝗨𝗞𝗜🥰')
global.deploy = ('ඩිවලොප්🛠️')
global.project = ('ප්‍රොජෙක්ට්🎮')
global.donate = ('ඩෝනට්😋')
global.stop = ('නවත් වන්න😡')
global.skip = ('ස්කිප් 🔞')
global.thanks = ('*𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝘆𝗼𝘂 ඔයාව සාදරයෙන් පිළිගමි .. කොහොමද ඉතින් ඔයාට 🙃.හොදින්ද😊..*')
// 👈 You Can change this your choice
global.nextimg = ('Next Image ➡️')
global.audio = ('🎶𝗔𝗨𝗗𝗘𝗢')
global.video = ('𝗩𝗜𝗗𝗘𝗢 📽')
global.yts = ('YTSEARCH 🌐')
global.play = ('𝗦𝗧𝗔𝗥𝗧 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
