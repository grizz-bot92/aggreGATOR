import { setUser } from "./config";

type CommandHandler = (cmdName: string, ...args: string[]) => void;

function handlerLogin(cmdName: string, ...args: string[]){
  if(args.length == 0){
    throw new Error("Args must contain username.")
  }
  setUser(args[0]);

  console.log("User has been set.");
}

type CommandsRegistry = {
  cmdName: CommandHandler
}

function registerCommand(registry: CommandsRegistry, cmdName: string, handler: CommandHandler){
  //*
}

function runCommand(registry: CommandsRegistry, cmdName: string, ...args: string[]){
  //*
}

