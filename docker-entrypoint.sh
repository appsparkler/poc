#!/usr/bin/env bash
set -e;
cp /tmp/.bashrc ~/;
cp /tmp/.ssh ~/ -rf;
exec bash;
