import fs from "fs";
import os from "os";
import path from "path";

export type Config = {
  dbUrl: string,
  userName : string
}


function getConfigPath(): string{
  return os.homedir();
}

function validateConfig(rawConfig: any): Config {
  const response = JSON.parse(rawConfig);

  return response;
}



// export function setUser(){}



export function readConfig(): void {
    fs.readFile(path.join(getConfigPath(), '.gatorconfig.json'), 'utf8', (err, data) => {
      if(err){
        console.log(err);
        return;
      }
      console.log(data);
  });
}


function writeConfig(): void {
  try{
    fs.writeFileSync(
      path.join('files', 'starter3.txt'),
      'Hello World',
      'utf8'
    );
    console.log('success')
  }catch(err){
    console.log('Error: ', err);
  }
}

// fs.writeFileSync(path.join('files', 'starter2.txt'), 'Hello World', (err: ) => {
//   if(err) throw err;
//   console.log("Write complete");
// })

// readConfig();
writeConfig();

// validateConfig(newConfig.dbURL);