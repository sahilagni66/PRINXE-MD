let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`͏Ɠяᨵׁׅʊք Ɲɑׁׅ֮мἐ : *${groupMetadata.subject}*\n\nⲘҽⲙ⃝ⲃҽʀֆ : *${participants.length}*${text ? `\n♟️⃟︪︣ 𝐌𝖾𝗌⃟𝗌α𝗀𝖾 : ${text}\n` : ''}\n\n─────⧼ Ƭαິɠᥣꪱִ໋ׅ࣪࣪꯱ׁׅ֒Ե ⧽──────\n` + users.map(v => ' ✿︩︪ᩘ(𐇽 ͜͡ຶ |𐇽🍃ׄᮬᩥ࣭ׄ  @' + v.replace(/@.+/, '')).join`\n` + '\n *𝐌⃝𝗂𐓣ᑯ 𝗒ⱺυ'𝗋𝖾 ⱺω𐓣 ᑲυ𝗌𝗂𐓣𝖾𝗌𝗌𓋜* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
