module.exports =  (config,title,name)=> {
    config = config || {};
    if(typeof config == 'string'){
        var configStr = config.split('/');
        var lastObj = configStr.pop();
        var configStrUrl = configStr.join('/');
        config = {
            fileUrl:'components'+configStrUrl+'/',
            name:lastObj,
            title:title,
        };
        if(title && typeof title == 'string' &&  title[0] == "/"){
            config.path = title;
            config.title = title.slice(1);
            if(name && typeof name == 'string'){
                config.title = name;
            }
        }
    }
    const configs = {
        fileUrl:'components/',
        fileType:'.vue',
        path:'/',
        name:'',
        component:null
    }
    const extends_if = (keyName,keyName1,CaseBool)=>{
        keyName1 = keyName1 || keyName;
        if(config[keyName1]){
            if(CaseBool){
                configs[keyName] = config[keyName1].toLocaleLowerCase();
            }else {
                configs[keyName] = config[keyName1]
            }
        }
        switch (keyName1){
            case 'name':
                configs.path = '/'+ config[keyName1].toLocaleLowerCase()
                break;
        }
    }
    for(var i in config){
        configs[i] = config[i];
    };
    let vueComponent = require('@/'+ configs.fileUrl + configs.name + `.vue`);
    if(vueComponent.default){
        configs.component = vueComponent.default;
    }else {
        configs.component = vueComponent;
    }
    extends_if('name',null,true);
    extends_if('name','title',true);
    extends_if('path');
    extends_if('component');
    return configs
}