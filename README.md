<div align = center>
  <h1>hexo-minecraft-skin-viewer</h1>
  <img alt="NPM License" src="https://img.shields.io/npm/l/hexo-minecraft-skin-viewer">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/hexo-minecraft-skin-viewer">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/hexo-minecraft-skin-viewer">
  <p align="center">
  使用skinview3d展示minecraft皮肤3D模型
  </p>

简体中文 | [English](https://github.com/D-Sketon/hexo-minecraft-skin-viewer/blob/main/README.en.md)

</div>

## 安装

```bash
$ npm install hexo-minecraft-skin-viewer --save
```

## 使用

```
{% mcskin type='name'|'url' username|skinUrl [rotate=true] [animation=false] [width=300] [height=400] [...other args] %}
```

例如：

```
{% mcskin name ATouuuu true true 100 200 %}
{% mcskin url https://mineskin.eu/skin/D_Sketon true true %}
```

### type

可选值：`name` / `url`
代表第二个参数是 Minecraft 用户名还是皮肤地址，必填

### username|skinUrl

具体的 Minecraft 用户名或皮肤地址，必填

### rotate

是否开启自动旋转，选填，默认为 `true`

### animation

是否开启模型动画，选填，默认为 `false`

### width

模型宽度，选填，默认为 `300`

### height

模型高度，选填，默认为 `400`

### 其他参数

其他参数将会附加在插入的 `script` 标签上。例如，你可以插入 `data-pjax` 等属性

## 示例

[Demo](https://d-sketon.github.io/20220902/hexo-mcskin-demo/)
