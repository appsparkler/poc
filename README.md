# :whale:Debian Box pre-installed with `Node` and `Nano`

## Getting started:
- MOUNT your `.ssh` folder with `-v <local-path-to-ssh>:/tmp/.ssh`
  - For ex. : `${HOME}/.ssh:/tmp/.ssh`
- MOUNT your `.gitconfig` file with `-v <local-path-to-.gitconfig>:/root/.gitconfig`
  - For ex. : `${HOME}/.gitconfig:/.gitconfig`
- MOUNT any other folder you need.

The `.ssh` folder will be copied from `/tmp/.ssh` to `/root/.ssh` by the `docker-entrypoint.sh`.
