FROM node:13.0.1

COPY .bashrc /root/.bashrc

# docker-image setup
COPY docker-image-setup.sh /tmp/docker-image-setup.sh
RUN "/tmp/docker-image-setup.sh"

# docker-entrypoint
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh
ENTRYPOINT ["/bin/docker-entrypoint.sh"]

CMD ["/bin/bash", "-l"]
