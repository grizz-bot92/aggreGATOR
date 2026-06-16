
export type CommandsRegistry = Record<string, CommandHandler>


export type CommandHandler = (cmdName: string, ...args: string[]) => Promise<void>;


export async function registerCommand(registry: CommandsRegistry, cmdName: string, handler: CommandHandler){
  registry[cmdName] = handler;
}

export async function runCommand(registry: CommandsRegistry, cmdName: string, ...args: string[]){
  const handler = registry[cmdName];
  if(!handler){
    throw new Error("Command not found");
  }else{
    handler(cmdName, ...args);
  }
  

}
