module.exports = {
  token: process.env.DISCORD_BOT_TOKEN,
  applicationId: process.env.DISCORD_APP_ID,
  commandPath: './src/commands',
  env: {
    dev: {
      globalToGuild: process.env.DEVELOPMENT_GUILD_ID
    }
  }
};
