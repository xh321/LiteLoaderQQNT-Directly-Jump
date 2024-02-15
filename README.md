# LiteLoaderQQNT - directly-jump

LiteLoaderQQNT插件，用于点击连接时自动跳转，而不用经过PCQQ的拦截页。
使用前需要安装[LiteLoaderQQNT](https://github.com/mo-jinran/LiteLoaderQQNT)，并在QQNT新版上使用。

## 使用方法

*建议从`LiteLoaderQQNT`应用商店中直接下载安装，方便快捷。*（新版本1.0`LiteLoaderQQNT`没有插件商店了，请遵循[手动安装方法](https://liteloaderqqnt.github.io/guide/plugins.html)）
也可以clone或下载zip文件解压，保留文件夹结构（文件夹名称为`插件名`，内容为github上的内容），将文件夹移动至`LiteLoaderQQNT数据目录/plugins/`下面，重启QQNT即可。

**版本不兼容提示**：从0.1.2起，插件已适配1.0版本以上`LiteLoaderQQNT`框架，同时不再兼容旧版框架，请遵循[安装方法](https://liteloaderqqnt.github.io/guide/install.html)更新框架。

本插件有2个功能：
1. NTQQ中点击不明链接，QQ会强制跳转到拦截页。安装本插件后，都会直达目标站点，不会再显示风险拦截页。当然，如果点击危险链接，风险自负。
2. 如果你不想用默认浏览器打开连接，你可以配置自定义浏览器打开。

如果不想用默认浏览器打开连接，你也可以前往 `LiteLoaderQQNT数据目录\directly_jump` 中找到 `config.json` 配置文件（至少在安装插件后开过一次QQ才会有这个文件），修改其中的 `browser` 字段为你的浏览器可执行文件完整路径（例如 `C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe` ，注意路径要写双斜杠，或者反斜杠 `/` ），配置此项后，点击任何链接都将采用指定浏览器打开。

## 原理

本来想劫持链接的click事件（详见`renderer.js`），但是这样做会导致右键菜单失灵，暂时没找到原因。

所以直接拦截IPC事件，修改URL检测返回值即可。

## 协议及免责

MIT | 禁止用于任何非法用途，插件开发属学习与研究目的，仅自用，未提供给任何第三方使用。任何不当使用导致的任何侵权问题责任自负。
