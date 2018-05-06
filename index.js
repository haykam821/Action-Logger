module.exports = (action, logChannel, commandMessage, actedUpon, reason) => {
    logChannel.send("", {
        embed: {
            title: `Moderator Action: ${action}`,
            fields: [
                {
                    name: "Moderator",
                    value: commandMessage.author,
                },
                {
                    name: "Channel Executed",
                    value: commandMessage.channel,
                },
                {
                    name: "User",
                    value: actedUpon,
                },
                {
                    name: "Reason",
                    value: reason,
                }
            ],
            color: 0x7289DA,
            timestamp: new Date(),
        }
    })
}