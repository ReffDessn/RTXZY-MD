let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Bot Ini Menggunakan Script :\n• https://github.com/BOTCAHX/RTXZY-MD
`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sekrip', 'sourcecodebot']
handler.tags = ['info']
handler.command = /^(sekript|sourcebot)$/i

module.exports = handler
