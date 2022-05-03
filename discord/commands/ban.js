const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('ban a player')
        .addMentionableOption(option =>
            option.setName('degenerate')
                .setDescription('ban a bad guy...')
                .setRequired(true)),
    async execute(interaction) {
        const member = interaction.options.getMentionable('degenerate');
        await interaction.reply(`what a dumbass! yeah I'm looking at you ${member}`);
    },
};