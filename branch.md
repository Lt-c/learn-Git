# 分支
  - 创建分支
    - git checkout -b dev // 创建分支并命名为`dev`,其中的`-b`表示创建并切换相当于执行力以下两条命令
      - git branch dev
      - git checkout dev
    - git branch // 会显示分支，并且在当前分支前打上`*`
  - 合并分支
    - git checkout master // 回到master分支上，也就是主分支上
    - git merge dev // 合并dev分支