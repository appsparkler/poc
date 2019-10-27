FROM node:13.0.1

# COPY SSH FILES


# entrypoint setup
COPY ./docker-entrypoint.sh /bin/docker-entrypoint.sh
ENTRYPOINT ["/bin/docker-entrypoint.sh"]
