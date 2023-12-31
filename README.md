# LiteLoaderQQNT - directly-jump

LiteLoaderQQNT插件，用于点击连接时自动跳转，而不用经过PCQQ的拦截页。
使用前需要安装[LiteLoaderQQNT](https://github.com/mo-jinran/LiteLoaderQQNT)，并在QQNT新版上使用。

## 使用方法

建议从`LiteLoaderQQNT`应用商店中直接下载安装，方便快捷。

也可以clone或下载zip文件解压，保留文件夹结构（文件夹名称为`插件名`，内容为github上的内容），将文件夹移动至`LiteLoaderQQNT数据目录/plugins/`下面，重启QQNT即可。

随后点击任何连接，都会直达目标站点，不会再显示风险拦截页。

当然，如果点击危险链接，风险自负。

## 原理

本来想劫持链接的click事件（详见`renderer.js`），但是这样做会导致右键菜单失灵，暂时没找到原因。

所以直接拦截IPC事件，修改URL检测返回值即可。

## 协议及免责

MIT | 禁止用于任何非法用途，插件开发属学习与研究目的，仅自用，未提供给任何第三方使用。任何不当使用导致的任何侵权问题责任自负。
