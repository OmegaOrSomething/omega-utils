const { MessageEmbed, Message } = require("discord.js");

/**
 *
 * @param {String[]} str
 * @returns
 */
const formatString = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
};

/**
 *
 * @param {Message} message
 * @param {MessageEmbed} embed
 * @param {String[]} description
 */
const errorize = (message, embed, description) => {
  if (!message) throw new Error(`A MESSAGE must be provided!`);
  if (!embed) throw new Error(`A MESSAGE_EMBED must be provided!`);
  if (!description) throw new Error(`A DESCRIPTION must be provided!`);

  embed
    .setAuthor({
      name: message.author.tag,
      iconURL: message.author.displayAvatarURL({ dynamic: true, size: 64 }),
    })
    .setColor(`RED`)
    .setFooter({ text: `An Error Occured` })
    .setTimestamp()
    .setDescription(description);
  return embed;
};

/**
 *
 * @param {Array} arr
 */
const arrayRandomize = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomNumber];
  return randomElement;
};

module.exports = {
  formatString,
  errorize,
  arrayRandomize,
};
