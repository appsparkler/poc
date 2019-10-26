docker.exe run --rm -it `
  -v ${HOME}/.ssh:/tmp/.ssh:ro `
  -v docker-node-volume:/root `
  -v ${HOME}/.gitconfig:/root/.gitconfig `
  -v ${HOME}/projects:/root/projects `
  -w /root/projects `
  my-debian-box `
  /bin/bash `
