import { CommandsRegistry,  registerCommand, runCommand } from "./commands/commands";
import { handlerLogin } from "./commands/users";

const args = process.argv.slice(2);

async function main() {
  if(args.length < 1){
    console.log("usage: cli <command> [args...]");
    process.exit(1);
  }
  const cmndName = args[0];
  const cmndArgs = args.slice(1);

  const registry: CommandsRegistry = {};

  registerCommand(registry, "login", handlerLogin);
  registerCommand(registry, "register", handlerLogin)

  try{
    await runCommand(registry, cmndName, ...cmndArgs);
  }catch(err){
    if(err instanceof Error){
      console.error(err.message);
    }else{
      console.error(err); 
    }
    process.exit(0);
  }
  
}

main();
