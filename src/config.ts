import fs from "fs";
import os from "os";
import path from "path";

type Config = {
  dbUrl: string,
  currentUserName : string
}


function getConfigPath(): string{
  return path.join(os.homedir(), '.gatorconfig.json');
}

function validateConfig(rawConfig: any): Config {
  if(!rawConfig.db_url || typeof rawConfig.db_url !== "string"){
    throw new Error("db_url is required");
  }

  if(!rawConfig.current_user_name || typeof rawConfig.current_user_name !== "string"){
    rawConfig.current_user_name = "";
  }

  return {
    dbUrl: rawConfig.db_url,
    currentUserName: rawConfig.current_user_name
  }
}


export function setUser(userName : string){
  const config = readConfig();
  config.currentUserName = userName;
  writeConfig(config);
}


export function readConfig(): Config {
    try{
      const data = fs.readFileSync(getConfigPath(), 'utf8');
      const parsed = JSON.parse(data);
      return validateConfig(parsed);
    }catch(err){
      throw new Error(`Failed to read config: ${err}`);
    }
}


function writeConfig(cfg:Config): void {
  try{
    const plainObj = {  
      db_url: cfg.dbUrl,
      current_user_name : cfg.currentUserName
    }
    fs.writeFileSync(
      getConfigPath(),
      JSON.stringify(plainObj),
      'utf8'
    );
    console.log('success')
  }catch(err){
    console.log('Error: ', err);
  }
}
