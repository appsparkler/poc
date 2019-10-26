#!/usr/bin/env bash
set -e;
apt-get update;
apt-get -y upgrade;
apt-get install -y apt-utils;
apt-get install -y nano;

exec bash;
