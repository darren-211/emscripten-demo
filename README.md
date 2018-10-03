# Emscripten Demo

演示地址：[https://emscripten-demo.oyzhen.me](https://emscripten-demo.oyzhen.me)

要点：

1. JS与C++交互的相关细节
2. 对emscripten编译生成的js做二次封装以符合JS的使用习惯
3. 动态加载wasm模块。

## 安装

### 安装emsdk（包含了emscripten、clang、binaryen、nodejs等编译依赖工具）

```
# Get the emsdk repo
git clone https://github.com/juj/emsdk.git

# Enter that directory
cd emsdk

# Fetch the latest version of the emsdk (not needed the first time you clone)
git pull

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes ~/.emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh

# on Windows, run `emsdk` instead of `./emsdk`, and `emsdk_env.bat` instead of `source ./emsdk_env.sh`.

```

更多细节: [访问emscripten官方文档](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)

### node环境准备

```
npm install
```

### VSCode插件

+ `C/C++`

## 编译C++为wasm

```
bash build-wasm.sh
```

编译后的.wasm文件及其js加载器存放在wasm目录下。

更多编译细节：[访问emscripten官方文档](http://kripken.github.io/emscripten-site/docs/getting_started/Tutorial.html)

## 运行

```
npm start
```

然后在浏览器打开链接：[http://127.0.0.1:3333](http://127.0.0.1:3333)，页面加载成功后打开浏览器控制台，尽情玩耍！
