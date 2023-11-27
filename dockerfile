FROM denoland/deno:alpine

LABEL maintainer="pablo02barto@correo.ugr.es" \
      version="5.0.1"

USER deno

WORKDIR /home/deno

COPY deno.json deno.lock ./

RUN deno cache --lock=deno.lock deno.json

WORKDIR /app/test

ENTRYPOINT [ "deno", "task", "test" ]