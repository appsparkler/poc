docker.exe pull appsparkler/my-debian-box:latest;

docker.exe run --rm -it `
  -v ${HOME}/.ssh:/tmp/.ssh:ro `
  -v ${HOME}/.gitconfig:/root/.gitconfig `
  -v ${HOME}/projects:/root/projects `
  -w /root/projects/github/pocpin `
  appsparkler/debian-box-base `
  /bin/bash `;
