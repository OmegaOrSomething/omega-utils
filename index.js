const { MessageEmbed, Message } = require("discord.js");
const ms = require("ms");

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
  if (!message) return new Error(`A MESSAGE must be provided!`);
  if (!embed) return new Error(`A MESSAGE_EMBED must be provided!`);
  if (!description) return new Error(`A DESCRIPTION must be provided!`);

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

/**
 *
 * @param {Message} msg A variable which is <Discord.Message>
 * @param {String} type The type of value [VALID TYPES: MEMBERS | ROLES]
 * @param {String} query The query to filter
 */
const multiQueryStartsWith = (msg, type, query) => {
  if (!msg) throw new Error(`A <Discord.Message> is required`);
  if (!type) throw new Error(`A Query Type is required`);
  if (!query) throw new Error(`A Query is required`);

  const valid = ["roles", "members"];
  if (!valid.includes(type.toLowerCase()))
    throw new Error(`The valid Query Types are [MEMBERS] and [ROLES]`);
  const results = [];
  switch (type) {
    case "members":
      const temp = msg.guild.members.cache.filter((m) =>
        m.user.username.toLowerCase().startsWith(query.toLowerCase())
      );
      const allMem = temp.toJSON();
      allMem.forEach((mem) => {
        results.push(mem);
      });
      break;

    case "roles":
      const temporary = msg.guild.roles.cache.filter((r) =>
        r.name.toLowerCase().startsWith(query.toLowerCase())
      );
      const allRoles = temporary.toJSON();
      allRoles.forEach((role) => {
        results.push(role);
      });
      break;

    default:
      throw new Error(`The valid Query Types are [MEMBERS] and [ROLES]`);
  }
  return results;
};

/**
 *
 * @param {Message} msg
 * @param {String} type
 * @param {String} query
 * @returns
 */
const multiQueryIncludes = (msg, type, query) => {
  if (!msg) throw new Error(`A <Discord.Message> is required`);
  if (!type) throw new Error(`A Query Type is required`);
  if (!query) throw new Error(`A Query is required`);

  const valid = ["roles", "members"];
  if (!valid.includes(type.toLowerCase()))
    throw new Error(`The valid Query Types are [MEMBERS] and [ROLES]`);
  const results = [];
  switch (type) {
    case "members":
      const temp = msg.guild.members.cache.filter((m) =>
        m.user.username.toLowerCase().includes(query.toLowerCase())
      );
      const allMem = temp.toJSON();
      allMem.forEach((mem) => {
        results.push(mem);
      });
      break;

    case "roles":
      const temporary = msg.guild.roles.cache.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
      );
      const allRoles = temporary.toJSON();
      allRoles.forEach((role) => {
        results.push(role);
      });
      break;

    default:
      throw new Error(`The valid Query Types are [MEMBERS] and [ROLES]`);
  }
  return results;
};

/**
 *
 * @param {Number} time
 */
const formatTime = (time) => {
  if (isNaN(time)) throw new Error(`Value is NOT_A_NUMBER`);
  if (parseInt(time) >= ms("24h"))
    throw new Error(`Value is OVER_TWENTY_FOUR_HOURS`);
  let final = {};
  if (time < 60) {
    final.seconds = time;
    return final;
  } else if (time >= 60 && time <= 3600) {
    final.minutes = parseInt((time / 60).toString().split(".")[0]);
    final.seconds = time % 60;
    return final;
  } else if (time >= 3600) {
    final.hours = parseInt((time / 3600).toString().split(`.`)[0]);
    final.minutes = parseInt(((time % 3600) / 60).toString().split(`.`)[0]);
    final.seconds = (time % 3600) % 60;
    return final;
  }
};

const isValidHex = (hex) => {
  if (!hex) throw new Error(`A HEX_CODE is required`);
  if (hex.length !== 6) return false;
  if (!/^#?([0-9A-F]{6})$/i.test(hex)) return false;
  return true;
};

module.exports = {
  formatString,
  formatTime,
  errorize,
  arrayRandomize,
  multiQueryStartsWith,
  multiQueryIncludes,
  isValidHex,
};
