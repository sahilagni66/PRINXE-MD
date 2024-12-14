let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`͏ ִ۫ ꯭𓈒🧺Ɠяᨵׁׅʊք Ɲɑׁׅ֮мЄ : *${groupMetadata.subject}*\n\n ͏✿゙ ⃞🏴‍☠️ ͏Ⲙҽⲙ⃝ⲃҽʀֆ : *${participants.length}*${text ? `\n♟️⃟︪︣ 𝐌𝖾𝗌⃟𝗌α𝗀𝖾 : ${text}\n` : ''}\n\n─────⧼ Ƭαິɠᥣꪱִ໋ׅ࣪࣪꯱ׁׅ֒Ե ⧽──────\n` + users.map(v => '━ 🪻̸⃝ ✦  @' + v.replace(/@.+/, '')).join`\n` + '\n *𝆭 𝆺̸̶𝅥⃝🍶⃞.   Ხᧉ ࣪ ɑ ׅ ᥎𐐫𝗂᧑︪︩ᧉ ࣪ ᥰᨭ𝗍 . ׄɑᥰ ࣪ ᧉ᧑͠ɦ𐐫 ׅ࣪  .⛲⃝* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
