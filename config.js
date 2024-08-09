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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919959026648";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_10_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAzMyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5aUljOUxVKzJEYWxNOXlxdTFsd08ycWtUYjh5S0daKzZZV09mU2ZueGRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQemJmVmVFUlNvcXpwZHdFZlduWW93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxM2E4ZWQwLTZkNTktNDlkMy1hMjYzLTg1NWZiMDE0MjFmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAyMDEsXG4gICAgICAyNTEsXG4gICAgICAxNTgsXG4gICAgICAxMTYsXG4gICAgICAxODksXG4gICAgICAyMTcsXG4gICAgICA1NCxcbiAgICAgIDI3LFxuICAgICAgNDIsXG4gICAgICAyMDIsXG4gICAgICAxOCxcbiAgICAgIDExNyxcbiAgICAgIDExMCxcbiAgICAgIDEzMyxcbiAgICAgIDEzOCxcbiAgICAgIDI1MixcbiAgICAgIDE4LFxuICAgICAgNjMsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDIyNSxcbiAgICAgIDIwNCxcbiAgICAgIDk5LFxuICAgICAgMTE3LFxuICAgICAgNzcsXG4gICAgICAyMDcsXG4gICAgICAyMzQsXG4gICAgICAzMCxcbiAgICAgIDEzMCxcbiAgICAgIDUyLFxuICAgICAgMTQzLFxuICAgICAgNjAsXG4gICAgICAyMDAsXG4gICAgICAyNDMsXG4gICAgICAxNjMsXG4gICAgICA5OSxcbiAgICAgIDE0LFxuICAgICAgMTIwLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVhWQjREMk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTk1OTAyNjY0ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDExMzMwMTkyNTg5NTM6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHU2dzdBREVLK08yTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3M0hGZDZVdGRpMStpVWRUZmtvZmRzRXNsRXhDcGxha0J6MmtsY1RCNEhNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJkS2tZREJINGFURUNSWjY3Y3FudHVNdUgvT2MxdjU1R2lyTkw3ckd4SEhrczdOdVlCaCtwRTBMUWorcGNJcmJGTW1tSDFxTG5sT1NwWkFlbEU4NERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjAxTjZtK1pNVEpjMERqYWExOE0rNWtDUmsydng3NFBSSVE3Zm94WjN3VW96aEtISXQrTnN4VlB4TjZJZmNtTjV6Ny91M0ZGUUxGOUlFdGR1L2dUdWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTk1OTAyNjY0ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMjA1NDI2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0dQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPR1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBa3h1ZWIxTG1oZzBCU1JMQlBKSTJNU1ZGYWlpd1k4YlJOUkkzTzZaZTdZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkwNzA3NDg3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUxNjcxMTI1N1wifSIKfQ=="  // PUT your SESSION_ID 


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
