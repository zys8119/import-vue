# import-vue [![npm](https://img.shields.io/badge/npm-Install-zys8119.svg?colorB=cb3837&style=flat-square)](https://www.npmjs.com/package/import-vue)  [![github](https://img.shields.io/badge/github-<Code>-zys8119.svg?colorB=000000&style=flat-square)](https://github.com/zys8119/import-vue)

>Vue 路由快速引入工具

## 安装

```angular2html
npm i import-vue
```

## 配置
>arguments

<table class="table table-bordered table-striped">
    <thead>
        <tr>
          <th>argName</th>
          <th>type</th>
          <th>describe</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>config</td>
            <td>[string|object]</td>
            <td>
                <pre>
{
    fileUrl:'components/',
    fileType:'.vue',
    path:'/',
    name:'',
    component:null,
    title:'',
    //....其他参数同原生路由配置
}
                </pre>
            </td>
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>
            <td>路由的名称</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>路由的路径或路由名称</td>
        </tr>
    </tbody>
</table>

## 教程

>例子
###### 以下注册路由的方式不同但结果是一样的
```javascript
const importVue = require('import-vue');
import routerComponent from 'routerComponent'
new Router({
  routes: [
    {
        path:'/routercomponent',
        name:'routerName',
        component:routerComponent,
        //....
    },
    //OR
    importVue('routerComponent'),
    //OR
    importVue('routerComponent','routerName'),
    //OR
    importVue('routerComponent','/routercomponent','routerName'),
    //OR
    importVue({
        name:'routerComponent'
    }),
    //OR
    importVue({
        name:'routerComponent',
    }),
    //OR
    importVue({
        name:'routerComponent',
        title:'routerName',
    }),
    //OR
    importVue({
        name:'routerComponent',
        path:'/routercomponent'
    }),
    //OR
    importVue({
        name:'routerComponent',
        title:'routerName',
        path:'/routercomponent'
    }),
  ]
})
```

###### 具体方法及配置请查看[源代码](https://github.com/zys8119/import-vue/blob/master/index.js)