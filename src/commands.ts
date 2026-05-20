import { CommandHandler } from './commandHandler';
import { CommandsRegistry } from "./commandRegistry";
import { gatorLogin } from './gatorLogin';

export function getCommands() : Record<string, CommandsRegistry>{
  return{
    login:{
      name: "gator login",
      cmdName: gatorLogin(),
    }
  }
}