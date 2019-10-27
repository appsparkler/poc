#!/usr/bin/env bash
set -e;

chmod +x /bin/docker-entrypoint.sh;

# APT tasks
apt-get update;
apt-get -y upgrade;
apt-get install -y apt-utils;
apt-get install -y nano;

# 

exec bash;
