#git stash

##stash?

현재 작업 중인데, 다른 브랜치로 checkout 해야할때,  커밋하기에도 애매~할경우 사용!

###내용
* git stash save (작업내용 감출때)<br>
Saved working directory and index state WIP  on 브랜치명
(작업중인 내용이 저장되었다. )
* 이 상태에서  git status 를 했을경우, commit 할 것이 없다라고 뜸
* git checkout 브랜치(타 브랜치-checkout 해야할 브랜치)
로 이동해서 작업을 한 뒤, 다시 checkout 을 통해 작업중인 브랜치로 이동해온다.
* git stash apply (저장되었던 파일-stash save 한 파일이 다시 수정중인 상태로 돌아옴)
* git stash list( 스테쉬한 내역)
* git reset --hard HEAD (스테쉬한 내용 날리기)
* git staus 를해보면 커밋할 내용이 없다고 뜨는데, 이는 전에 작업한것이 날라간 게 아니라... 남아있는 것
* git stash apply 를 하면 다시~ 스테쉬했던 파일이 살아남 (명시적으로 삭제 하지 않는 경우에는 )
* git stash apply 하면  가장 처음 save 한게 적용됨
* git stash drop 을하면 가장 처음에 save 한게 드랍됨.(삭제)
* 그리고 git stash apply  한 경우, 그 다음으로 stash 한 것이 적용됨.
* git stash apply, git stash drop (적용후 삭제) = git stash pop

### 참고 URL

[생활코딩](https://www.youtube.com/watch?time_continue=5&v=ArNd5sSwD04)
