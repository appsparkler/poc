FROM node:13.0.1

COPY .bashrc /root/.bashrc

# docker-image setup
COPY docker-image-setup.sh /bin/docker-image-setup.sh
RUN chmod +x /bin/docker-image-setup.sh
RUN "/bin/docker-image-setup.sh"

# docker-entrypoint
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh
RUN chmod +x /bin/docker-entrypoint.sh
ENTRYPOINT ["/bin/docker-entrypoint.sh"]

CMD ["/bin/bash", "-l"]
