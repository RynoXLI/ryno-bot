const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a poll!')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('Question to ask')
                .setRequired(true)),
    async execute(interaction) {
        let question = interaction.options.getString('question');

        if (!question.endsWith('?')) {
            question = `${question}?`;
        }

        const msg = await interaction.reply({ content: question, fetchReply: true });

        msg.react('✅');
        msg.react('❌');
    },
};