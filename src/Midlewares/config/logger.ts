import "dotenv/config";
//@ts-ignore
const defaultLevel = process.env.debug === "true" ? "error" : "debug";
//@ts-ignore
const level = process.env.LOGGER_LEVEL || defaultLevel;

const consoleConfiguration = {
  json: true,
  stringify: true,
  level,
};
//@ts-ignore
module.exports = { consoleConfiguration };
