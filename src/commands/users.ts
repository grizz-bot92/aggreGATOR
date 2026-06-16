import { setUser } from "../config";

export async function handlerLogin(cmdName: string, ...args: string[]){
  if(args.length == 0){
    throw new Error("Args must contain username.")
  }
  setUser(args[0]);

  console.log("User has been set.");
}

