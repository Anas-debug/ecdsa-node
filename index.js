import { generateEnvFile } from "./generatekey.js";
import { selectDirectories } from "./selectDirectories.js";
import { appKey } from "./generatekey.js";


selectDirectories();
generateEnvFile('AES_256_CBC_KEY', appKey, 'client', 'server');


