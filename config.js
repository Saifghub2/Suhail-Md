const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_58_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICA1MixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICA4NixcbiAgICAgICAgMTM4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxQnRBWVQ3elowc0EvblJaTVY4bitBQnJDS21paHlBQUtneUFVYkJNYWtjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwX3hFVWcyOFJqQzFHVHJhdG1NY1RRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMzNTE1ZGY4LTViNzItNGNlMC1hMzcwLTJjN2Y3YWQxODRhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxMTEsXG4gICAgICAxNTQsXG4gICAgICAxNDYsXG4gICAgICAyMzUsXG4gICAgICAyMzksXG4gICAgICA0LFxuICAgICAgMTI1LFxuICAgICAgMTk2LFxuICAgICAgMjE0LFxuICAgICAgMTYwLFxuICAgICAgMjQxLFxuICAgICAgNTEsXG4gICAgICAxODcsXG4gICAgICAxMTcsXG4gICAgICAxMjksXG4gICAgICA2MixcbiAgICAgIDgwLFxuICAgICAgNDgsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxMjQsXG4gICAgICAyMDUsXG4gICAgICAyMzUsXG4gICAgICAyMjgsXG4gICAgICAyMDIsXG4gICAgICA3NyxcbiAgICAgIDE4OSxcbiAgICAgIDQ3LFxuICAgICAgMTA2LFxuICAgICAgNzcsXG4gICAgICAxMjksXG4gICAgICA1MixcbiAgICAgIDExNyxcbiAgICAgIDI1NSxcbiAgICAgIDgwLFxuICAgICAgMTkzLFxuICAgICAgMzYsXG4gICAgICAxNzgsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLQlZCM0pRR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5OTU5MDI2NjQ4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MTEzMzAxOTI1ODk1MzoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdTZ3N0FERU95dHZyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjczSEZkNlV0ZGkxK2lVZFRma29mZHNFc2xFeENwbGFrQnoya2xjVEI0SE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzFxWGRKWWhwQ0VmdHBqTU05ckR1T21TVEpTRUZhMS91Y041R3gyS3hVN2twMU4ySlI4YzZhbGs4ZkFDazh2UnZvM1h4YWh0WVNhWFdIWUEvZWw4QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNmFyTVUxVlJ2bUdHYWV1N05WSXpUZFJ3K0FKTXlraXk3SjM5MFBtMGw2OXFPUHZKL3c1WkEzWVp5L2R0ZGFkWFNScERZUi9JU2Y3dVRUZVhXQ2paQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5OTU5MDI2NjQ4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3ODM0NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPR1BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9HUC5qc29uIjogIntcImtleURhdGFcIjpcIkFreHVlYjFMbWhnMEJTUkxCUEpJMk1TVkZhaWl3WThiUk5SSTNPNlplN1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTA3MDc0ODczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNTE2NzExMjU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
