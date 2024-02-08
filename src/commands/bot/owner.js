const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Dev`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Devu_Reloaded#8390`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `DevuWare`,
            inline: true,
        },
        {
            name: "🌐┆Invite",
            value: `[Invite](https://discord.com/api/oauth2/authorize?client_id=1204831184807526470&permissions=8&scope=bot+applications.commands)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
