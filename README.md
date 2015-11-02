# Loyalsoldier.github.io
我的技术博客《前端养成记》：关于网页重构、前端开发、设计等 | My blog on programming and design.

## Preparation

- [Git](http://git-scm.com/download) or/and [Github Desktop](https://desktop.github.com)
- [Python](https://www.python.org/downloads)
- [Node.js](https://nodejs.org/en/download/releases) (Recommend node.js v0.12.7)

## Installation
1. Download the [Ghost](https://github.com/TryGhost/Ghost/releases) or [Ghost-zh-cn build by DianYun.com](https://github.com/diancloud/Ghost/releases)
2. Unzip Ghost
3. Get the Buster, which is to make ghost blog static: `git clone https://github.com/Misiur/buster.git`
4. Go into the root path of the project, and then

 ```shell
cd ghost                 // go into the ghost folder
npm install --production // install the dependencies for production environment
npm start --production   // start the Ghost server

// open your browser, access to http://localhost:2368, the Ghost is there waiting for you
 ```
 
5. After you finish your blog, run

```shell
cd buster/buster // go into the folder where the buster.py is
python buster.py generate // let buster.py compile and copy the static resources that your use in your blog
python buster.py preview  // let buster.py start a local server at port 9000

// open your browser. access to http://localhost:9000, the static ghost is there.
```

6. Commit your root folder to Github repo `username.github.io` (which `username` converts to your own Github username)
