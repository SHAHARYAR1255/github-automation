foldername=$2
commitmsg=$3
remote=$4

init(){
    git init 
    git remote add $remote git@github.com:SHAHARYAR1255/$foldername.git
    git add .
    git commit -m "$commitmsg"
    git push -u $remote master
}

push(){
    git add .
    git commit -m "$foldername"
    git push $commitmsg master
}



if [ $1 == "repo" ]
then
    node /d/JAVASCRIPT/automate/automatejs/create.js $2 $3
elif [ $1 == "init" ]
then
    init
elif [ $1 == "push" ]
then
    push
fi