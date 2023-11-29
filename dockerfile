FROM denoland/deno:alpine

LABEL maintainer="pablo02barto@correo.ugr.es" \
      version="5.0.1"

USER deno

WORKDIR /app/test

ENTRYPOINT [ "deno", "task", "test" ]