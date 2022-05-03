const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lmgtfy')
        .setDescription('Use this when a clown asks a question')
        .addStringOption(option =>
            option.setName('search')
                .setDescription('the question')
                .setRequired(true),
        )
        .addMentionableOption(option =>
            option.setName('clown')
                .setDescription('the clown')),
    async execute(interaction) {
        const member = interaction.options.getMentionable('clown');
        const uri = encodeURIComponent(interaction.options.getString('search'));

        let msg = `http://google.com/search?q=${uri}`;
        if (member !== null) {
            msg = `${member} clown: http://google.com/search?q=${uri}`;
        }

        await interaction.reply(msg);
    },
};