const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flip')
        .setDescription('Flip a coin'),
    async execute(interaction) {

        const num = Math.round(Math.random());
        let face = 'Heads';
        if (num == 1) {
            face = 'Tails';
        }
        await interaction.reply(`${face}`);
    },
};