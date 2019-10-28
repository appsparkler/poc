# :whale:Debian Box with base-image `appsparkler/debian-box-base`

## Getting started:
- MOUNT your `.ssh` folder with `-v <local-path-to-ssh>:/tmp/.ssh`
  - For ex. : `${HOME}/.ssh:/tmp/.ssh`
- MOUNT your `.gitconfig` file with `-v <local-path-to-.gitconfig>:/root/.gitconfig`
  - For ex. : `${HOME}/.gitconfig:/.gitconfig`
- MOUNT any other folder you need.
- `./start.ps1` file has a container-setup with `ps1-script`.

The `.ssh` folder will be copied from `/tmp/.ssh` to `/root/.ssh` by the `docker-entrypoint.sh`.
