# 分支
  1. 创建分支 
    - git checkout -b dev // 创建分支并命名为`dev`,其中的`-b`表示创建并切换相当于执行力以下两条命令
      - git branch dev
      - git checkout dev
    - git branch // 会显示分支，并且在当前分支前打上`*`
  2. 合并分支 (merge)
    - git checkout master // 回到master分支上，也就是主分支上
    - git merge dev // 合并`dev`分支
    - git branch -d dev // 删除`dev`分支 
  3. 切换分支 (switch)
    - git switch -c dev //创建并切换到`dev`分支上
    - git switch dev // 切换到dev分支
    - 查看分支合成图 `git log --graph`
  4. 分支管理策略
    - git merge dev //默认使用` Fast forward `模式，删除分支后，会丢掉分支信息
    - git merge --no-ff -m "merge with no-ff" dev // 禁用Fast forward 模式
      -  git log --graph --pretty=oneline --abbrev-commit //查看分支历史

  5. bug分支
    - 每一个bug都可以通过新建一个临时的分支来修复，修复后，合并分支，然后将临时分支删除掉；
    - 当你当前的工作进行到一半时，暂时还无法提交，但是又必须解决bug，
    - 此时就可以使用`stash`功能，把现场储存起来，等修复完bug后，继续工作
    - git stash // 暂存目前的区域
    // 测试修改bug,如果在master上修改，那么就在master上创建临时分支`issue-101`
    - git stash apply  //修复完bug后，回到原有的分支，再回到stash工作状况，还需要使用git stash drop 删除这个stash
    - git stash pop 直接恢复并删除
    - git stash list 查看stash中是否有内容 
    - `git cherry-pick 4c805e2` 修复好bug后，其他分支也会存在相同的bug，此时就需要对每一个分支进行提交，所以git提供了此命令 ；`4c805e2` 是在修改bug分支，完成提交时的comiit id
  
  6. Feature分支
    - 新功能的分支，如果功能取消，且没有合并
    - git branch -D <分支名> // 强行删除一个没有合并的分支

  7. 