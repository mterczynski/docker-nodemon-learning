# Docker nodemon demo

## Build image

```
docker build -t <tag> .
```

## Run image

```
docker run -p <port on real machine>:3000 -v <absolute path to home>:/home/node/app <tag>
```
