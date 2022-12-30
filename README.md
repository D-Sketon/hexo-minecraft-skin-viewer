# hexo-minecraft-skin-viewer
![](https://img.shields.io/npm/v/hexo-minecraft-skin-viewer)   ![](https://img.shields.io/npm/dt/hexo-minecraft-skin-viewer)

A hexo plugin to display minecraft skin by skinview3d.  
使用skinview3d展示minecraft皮肤3D模型
## Install 

```bash
$ npm install hexo-minecraft-skin-viewer --save
```

## Usage

```
{% mcskin name ATouuuu true true 100 200 %}
{% mcskin url https://mineskin.eu/skin/D_Sketon true true %}
```
第一个参数代表选择MINECRAFT用户名还是皮肤地址  
参数范围：name/url（必填）  
The 1st parameter represents whether to select MINECRAFT username or skin url  
parameter range: name/url (required)  

第二个参数代表MINECRAFT用户名或皮肤地址（必填）  
The 2nd parameter represents MINECRAFT username or skin url (required)  

第三个参数代表是否开启自动旋转（选填，默认true）  
The 3rd parameter represents whether to turn on automatic rotation (optional,default true)  

第四个参数代表是否开启模型动画（选填，默认false）  
The 4th parameter represents whether to turn on model animation (optional,default false)  

第五个参数代表模型宽度（选填，默认300）  
The 5th parameter represents the width of the model (optional,default 300)  

第五个参数代表模型高度（选填，默认400）  
The 6th parameter represents the height of the model (optional,default 400)  

## Example
[Demo](https://d-sketon.top/20220902/hexo-mcskin-demo/)
