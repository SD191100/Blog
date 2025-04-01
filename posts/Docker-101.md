---
title: "Docker-101:how to install and use Docker"
date: "2025-03-14"
tags: ["Docker", "Devops", "Guides"]
---

# Docker

It is a containerising tool that is used to make a full environment app so that there is no dependency issues when others try to build the same app.

## Installation

we can install docker in two ways
1. Docker Desktop
2. Docker Engine

### Docker Desktop
Docker Desktop is a software application that enables developers to build, package, and run applications using Docker containers on their local machines. It provides an easy-to-use graphical interface and includes the necessary tools and components for managing Docker containers, such as the Docker engine, images, and networking capabilities.

For more information, see [[DOCKER DESKTOP]]

### Docker Engine

One click installation script:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Run docker as non root user:

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

Check out the [Install Docker Engine](https://docs.docker.com/engine/install/)for more info.

## Using Docker

### Building Image

```bash
docker build -t <imageName:version> ImageName .
```
The "." here tells to use Dockerfile in current folder also you have to be in directory where a Dockerfile is present. You need to [[DOCKERIZE]] your app/project before building the image.


### Running Containers

|COMMAND|DESCRIPTION|
|---|---|
|`docker run <image>`|Start a new container from an image|
|`docker run -it <image>`|Start a new container in interactive mode|
|`docker create <image>`|Create a new container|
|`docker start <container>`|Start a container|
|`docker stop <container>`|Graceful stop a container|
|`docker kill <container>`|Kill (SIGKILL) a container|
|`docker restart <container>`|Graceful stop and restart a container|
|`docker pause <container>`|Suspend a container|
|`docker unpause <container>`|Resume a container|
|`docker rm <container>`|Destroy a container|

### Inspect Containers

|COMMAND|DESCRIPTION|
|---|---|
|`docker ps`|List running containers|
|`docker ps --all`|List all containers, including stopped|
|`docker logs <container>`|Show a container output|
|`docker logs -f <container>`|Follow a container output|
|`docker top <container>`|List the processes running in a container|
|`docker diff`|Show the differences with the image (modified files)|
|`docker inspect`|Show information of a container (json formatted)|

### Images

|COMMAND|DESCRIPTION|
|---|---|
|`docker image ls`|List all local images|
|`docker history <image>`|Show the image history|
|`docker inspect <image>`|Show information (json formatted)|
|`docker tag <image> <tag>`|Tag an image|
|`docker commit <container> <image>`|Create an image (from a container)|
|`docker import <url>`|Create an image (from a tarball)|
|`docker rmi <image>`|Delete images|
|`docker pull <user>/<repository>:<tag>`|Pull an image from a registry|
|`docker push <user>/<repository>:<tag>`|Push and image to a registry|
|`docker search <test>`|Search an image on the official registry|
|`docker login`|Login to a registry|
|`docker logout`|Logout from a registry|
|`docker save <user>/<repository>:<tag>`|Export an image/repo as a tarball|
|`docker load`|Load images from a tarball|

### Executing Commands

|COMMAND|DESCRIPTION|
|---|---|
|`docker attach <container>`|Attach to a container|
|`docker cp <container>:<container-path> <host-path>`|Copy files from the container|
|`docker cp <host-path> <container>:<container-path>`|Copy files into the container|
|`docker export <container>`|Export the content of the container (tar archive)|
|`docker exec <container>`|Run a command inside a container|
|`docker exec -it <container> /bin/bash`|Open an interactive shell inside a container (there is no bash in some|
|`docker wait <container>`|Wait until the container terminates and return the exit code|
### Volumes

|COMMAND|DESCRIPTION|
|---|---|
|`docker volume ls`|List all vol1umes|
|`docker volume create <volume>`|Create a volume|
|`docker volume inspect <volume>`|Show information (json formatted)|
|`docker volume rm <volume>`|Destroy a volume|
|`docker volume ls --filter="dangling=true"`|List all dangling volumes (not referenced by any container)|
|`docker volume prune`|Delete all volumes (not referenced by any container)|

You can also push your built images to [[DOCKER HUB]] for future use and sharing.
