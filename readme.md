Git is a distributed version control system
Git is free software distributed under the GPL.
test
git安装后使用
1. 设置用户信息
   1. git config --global user.name "My Name"
   2. git config --global user.email "xxx@qq.com"
2. git init 
   1. 初始化仓库，在文件夹中初始化，生成一个.git文件
   
Git命令
  - git add <文件名> <文件名> // 可以添加多个文件

  - git commit -m "上传描述" //  使用add添加的文件都可以一次性上传

  - git status //查看是否有被修改过
  - git diff <文件地址> //查看修改的内容
  - git log --pretty=oneline   // 查看每次commit时的信息
  ```
becd9844303502a79a75339b813988c9515a4ea (HEAD -> master) append GPL  //HEAD表示当前版本
7453bf0de7ce1cb18248d0e897267d956cfed4b5 修改
fbd840a3138cc53988ec3d56519bea0611c72253 修改
0a822c732616dad9f45d69a770e650dd287e9394 git 基本使用
90c1d9766d7db448403d458ccb1a89a214078a66 git 基本使用
bf3ce7b3b57e0ba66c6b3be6fd53b54e753c9a50 这是一个readme文件，用于上传练习
```
  - 