FROM debian-box-base:latest

COPY ./.bashrc /tmp/.bashrc
COPY ./docker-entrypoint.sh /bin/docker-entrypoint.sh

RUN chmod +x /bin/docker-entrypoint.sh
ENTRYPOINT ["/bin/docker-entrypoint.sh"]
