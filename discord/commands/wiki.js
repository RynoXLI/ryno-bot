const fetch = require('node-fetch');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wiki')
        .setDescription('Search for a wiki')
        .addStringOption(option =>
            option.setName('search')
                .setDescription('the query')
                .setRequired(true),
        ),
    async execute(interaction) {
        const uri = encodeURIComponent(interaction.options.getString('search'));

        const res = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${uri}`);
        const data = await res.json();

        if (data['query']['pages'][0] == '-1') {
            await interaction.reply('uhhhh I ain\'t go nuthin');
        }

        const summary = data['query']['pages'][Object.keys(data['query']['pages'])[0]]['extract'];

        await interaction.reply(summary);
    },
};