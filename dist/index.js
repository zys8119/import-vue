// const importVue = require("./import.js");
import importVue from './import.js';
export default function (config = {}, path, title, ex = {}) {
    const fileUrl = 'views/';
    let configs = {
        fileUrl: fileUrl,
        name: "",
        path: "/",
        title: title
    };
    if (typeof config == "object") {
        for (let i in config) {
            configs[i] = config[i];
        }
    } else {
        configs.name = config;
        configs.path = path || `/${config.split("/").pop()}`;
    }
    for (let i in ex) {
        configs[i] = ex[i];
    }
    return importVue(configs);
}