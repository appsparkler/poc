docker.exe run --rm -it `
  -v ${HOME}/.ssh:/tmp/.ssh:ro `
  -v ${HOME}/.gitconfig:/root/.gitconfig `
  -v ${HOME}/projects:/root/projects `
  -w /root/projects/DockerFiles/debian-box `
  my-debian-box `
  /bin/bash `
