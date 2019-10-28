FROM appsparkler/debian-box-base:latest

# docker-entrypoint
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh
RUN chmod +x /bin/docker-entrypoint.sh
ENTRYPOINT ["/bin/docker-entrypoint.sh"]

CMD ["/bin/bash", "-l"]
