#!/usr/bin/env bash
apt-get update
apt-get -y upgrade
apt-get install -y apt-utils
apt-get install nano
set -e;
cp /tmp/.bashrc ~/;
cp /tmp/.ssh ~/ -rf;
exec bash;
