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
1. 上传
  - git add <文件名> <文件名> // 可以添加多个文件

  - git commit -m "上传描述" //  使用add添加的文件都可以一次性上传

  - git status //查看是否有被修改过
  - git diff <文件地址> //查看修改的内容
  - git log --pretty=oneline   // 查看每次commit时的信息
  ```
be215ed7d9bbcd0414022968a5b5199ea210b0c3 (HEAD -> master) 新增reset回退命令 // HEAD表示当前版本
50d30a9041e25cf4f4a59b7915c7f36e992aa343 新增附件
dbecd9844303502a79a75339b813988c9515a4ea append GPL
7453bf0de7ce1cb18248d0e897267d956cfed4b5 修改
fbd840a3138cc53988ec3d56519bea0611c72253 修改
0a822c732616dad9f45d69a770e650dd287e9394 git 基本使用
90c1d9766d7db448403d458ccb1a89a214078a66 git 基本使用
bf3ce7b3b57e0ba66c6b3be6fd53b54e753c9a50 这是一个readme文件，用于上传练习
```
2. 撤销修改
  - git reset --hard HEAD^ // `HEAD^`表示上一个版本， `HEAD^^`表示上上个版本，如果回退的版本过多，`HEAD~100`表示回退到一百个版本前；
  - git reset --hard 50d30a // 回滚过多，可以取消回退，并跳转到指定的版本 `50d30a`是git的commit id
  - git reflog //记录每一次命令，显示commit id
  - git checkout -- <文件> // 使这个文件回到最近一次`git commit`或者是`git add`状态
  
3.删除文件
  - git rm <文件名称> // 删除文件,随后需要使用`git commit`，更新
  - 如果误删 `git checkout -- <文件名称>` 使用这个回退版本

git远程仓库
  1. 创建ssh秘钥，windows使用Git Bash， 输入`ssh-keygen -t rsa -C "youremail@example.com"` ,随后一路回车
  2. 在路径`C:\Users\Administrator\.ssh`,没有修改，一般存放在这个路径,不要去移动它，里面有`id_rsa`和`id_rsa.pub`两个文件,`id_rsa`私钥，`id_ras.pub`公钥
  3. git remote add origin git@github.com:Lt-c/learn-Git.git // 链接到远程的仓库
  4. git push -u origin master  // 把当前分支，推送到远程，因为远程的库是空的，所以第一次推送master分支时候，加上了`-u`参数，git就会把本地的master和远程的master分支关联起来，以后的推送或者拉去就可以简化命令为 `git push origin master`
  
分支管理策略


