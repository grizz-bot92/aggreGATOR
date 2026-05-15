import { setUser, readConfig } from "./config";

function main() {
    setUser("Brandon");
    const config = readConfig();
    console.log(config);
}

main();
