<div align = center>
  <h1>hexo-minecraft-skin-viewer</h1>
  <img alt="NPM License" src="https://img.shields.io/npm/l/hexo-minecraft-skin-viewer">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/hexo-minecraft-skin-viewer">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/hexo-minecraft-skin-viewer">
  <p align="center">
    A hexo plugin to display minecraft skin by skinview3d.
  </p>

[简体中文](https://github.com/D-Sketon/hexo-minecraft-skin-viewer/blob/main/README.md) | English

</div>

## Install

```bash
$ npm install hexo-minecraft-skin-viewer --save
```

## Usage

```
{% mcskin type='name'|'url' username|skinUrl [rotate=true] [animation=false] [width=300] [height=400] [...other args] %}
```

e.g.

```
{% mcskin name ATouuuu true true 100 200 %}
{% mcskin url https://mineskin.eu/skin/D_Sketon true true %}
```

### type

Optional value: `name` / `url`
Represents whether the second parameter is a Minecraft username or a skin url, required

### username|skinUrl

The specific Minecraft username or skin url, required

### rotate

Whether to turn on automatic rotation, optional, default is `true`

### animation

Whether to turn on model animation, optional, default is `false`

### width

Model width, optional, default is `300`

### height

Model height, optional, default is `400`

### other args

Other arguments will be attached to the inserted `script` tag. For example, you can insert attributes such as `data-pjax`

## Example

[Demo](https://d-sketon.top/20220902/hexo-mcskin-demo/)
