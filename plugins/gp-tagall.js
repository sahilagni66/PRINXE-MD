let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`͏██ 𝐆𝗋ⱺ⃢υρ 𝐍α︪︣ꭑ𝖾 : *${groupMetadata.subject}*\n\n ͏██ 𝐌︪︣𝖾ꭑᑲ⃢𝖾𝗋𝗌 : *${participants.length}*${text ? `\n♟️⃟︪︣ 𝐌𝖾𝗌⃟𝗌α𝗀𝖾 : ${text}\n` : ''}\n\n 𝐓︪α︣𝗀ᥣ𝗂𝗌𝗍\n` + users.map(v => '🥮ᩧᩙᩪᩩ̶̷ ㅤ ͟ ͟ ͟ ͟   @' + v.replace(/@.+/, '')).join`\n` + '\n *𝆭 𝆺̸̶𝅥⃝🍶⃞.   Ხᧉ ࣪ ɑ ׅ ᥎𐐫𝗂᧑︪︩ᧉ ࣪ ᥰᨭ𝗍 . ׄɑᥰ ࣪ ᧉ᧑͠ɦ𐐫 ׅ࣪  .⛲⃝* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
