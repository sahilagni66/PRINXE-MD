let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🔮⃞ㅤ Gɾσυρ Nαɱҽ : *${groupMetadata.subject}*\n\n 🎀̫҂ MҽɱႦҽɾʂ : *${participants.length}*${text ? `\n𒁷 Mҽʂʂαɠҽ : ${text}\n` : ''}\n\n┌───⊷ 𝐓ꭤ̱ꬶꤦᥣі𝗌̱𝗍\n` + users.map(v => '🥮ᩧᩙᩪᩩ̶̷ ㅤ ͟ ͟ ͟ ͟   @' + v.replace(/@.+/, '')).join`\n` + '\nඉᩧ ㅤ🧺ᩙ꤬ㅤ𝐋ıᩧ𝖿ᧉׅ ıᩧꗏ ᥣıᩧ𝗂ƙᧉׅ α 𝖼ⱺıᩧɳ. 𝐘ⱺυ 𝖼αɳ ꗏρᧉׅɳᑯ 𝗂ƚ α𐓣ყ ωαყ ყⱺυ ωıᩧ𝗌ɦ , ᑲυ𝗍 ყⱺυ ⱺɳᥣ𝗒 ꗏρᧉׅɳᑯ ıᩧƚ ⱺɳ𝖼ᧉׅ. ൭ㅤᰰᮬㅤ̣', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
