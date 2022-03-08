# 分支
  - 创建分支 
    - git checkout -b dev // 创建分支并命名为`dev`,其中的`-b`表示创建并切换相当于执行力以下两条命令
      - git branch dev
      - git checkout dev
    - git branch // 会显示分支，并且在当前分支前打上`*`
  - 合并分支 (merge)
    - git checkout master // 回到master分支上，也就是主分支上
    - git merge dev // 合并`dev`分支
    - git branch -d dev // 删除`dev`分支 
  - 切换分支 (switch)
    - git switch -c dev //创建并切换到`dev`分支上
    - git switch dev // 切换到dev分支
  - 查看分支合成图 `git log --graph`
  - 分支管理策略
    - Fast forward 模式，删除分支后，会丢掉分支信息

// 测试修改bug,如果在master上修改，那么就在master上创建临时分支`issue-101`