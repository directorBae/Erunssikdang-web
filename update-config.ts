import fs from "fs";

// config.json 파일 읽기
const configFilePath = "./src/configs/config.json";
const config = JSON.parse(fs.readFileSync(configFilePath, "utf8"));

// 변수 수정
config.isDev = false;

// 수정된 내용을 다시 config.json 파일에 쓰기
fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2));

console.log("Config file updated successfully");
