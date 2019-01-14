# Docker nodemon demo

### Docker containers allows to run many apps using different node versions simultaneously.

## Build image

```
docker build -t <tag> .
```

## Run image

```
docker run -p <port on real machine>:3000 -v <absolute path to home>:/home/node/app <tag>
```
