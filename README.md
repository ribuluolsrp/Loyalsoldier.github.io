# 前端养成记
我的技术博客《前端养成记》：关于网页重构、前端开发、设计等 | My blog on programming and design.

## Preparation

- [Git](http://git-scm.com/download) or/and [Github Desktop](https://desktop.github.com)
- [Python 2.7](https://www.python.org/downloads)
- [Node.js](https://nodejs.org/en/download/releases) (Recommend node.js v0.12.7)

## Installation
1. Download the [Ghost](https://github.com/TryGhost/Ghost/releases) or [Ghost-zh-cn build by DianYun.com](https://github.com/diancloud/Ghost/releases)
2. Unzip Ghost
3. Get the Buster, which is to make ghost blog static: `git clone https://github.com/Misiur/buster.git`
4. Go into the root of the project, then

 ```bash
npm install              // wait for completion
npm install --production // install the dependencies for production environment
npm run serve            // start the Ghost server in production environment

// open your browser, access to http://localhost:2368, the Ghost is there waiting for you
 ```
 
5. After you finish your blog, run

 ```bash
npm run generate         // equals to run `python buster.py generate` in the Buster/buster folder
npm run preview          // open the local server to view the static Ghost built by the step above
npm run gulp             // use gulp to minify all the static resources using by your static Ghost

// open your browser. access to http://localhost:9000, the static ghost is there.
 ```
7. Each time you finish writing, just run the `three steps` in `Step 5`. Things are all done well!
 
8. Commit your root folder to Github repo `username.github.io` in which `username` replace to your own Github username

## How I built my own blog?

See here: [《“前端养成记”博客上线历程》](http://loyalsoldier.me/my-frontend-cultivation-blog-launched)

## LICENSE
[MIT](https://github.com/Loyalsoldier/Loyalsoldier.github.io/blob/master/LICENSE)
