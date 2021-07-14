#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
yarn
yarn build # 生成静态文件

echo "build successful"

cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
if [ -z "$ACCESS_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:ZQD1224/blog.git
else
  msg='来自github action的自动部署'
  githubUrl=https://ZQD1224:${ACCESS_TOKEN}@github.com/ZQD1224/blog.git
  git config --global user.name "zhouqd"
  git config --global user.email "zhouqd1997@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

echo "push successful"
# deploy to coding
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@git.dev.tencent.com:xugaoyi/xugaoyi.git
# else
#   codingUrl=https://xugaoyi:${CODING_TOKEN}@git.dev.tencent.com/xugaoyi/xugaoyi.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist

echo "delete successful"
