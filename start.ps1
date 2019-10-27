docker.exe pull appsparkler/debian-box-base:latest;

docker.exe run --rm -it `
  -v ${HOME}/.ssh:/tmp/.ssh:ro `
  -v ${HOME}/.gitconfig:/root/.gitconfig `
  -v ${HOME}/projects:/root/projects `
  -w /root/projects/DockerFiles/debian-box `
  appsparkler/debian-box-base `
  /bin/bash `;
