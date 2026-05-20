import { CommandHandler } from "./commandHandler"

export type CommandsRegistry = {
  name: string,
  cmdName: CommandHandler
}
