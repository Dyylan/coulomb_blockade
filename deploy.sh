#!/bin/bash

NAME=${1:-coulomb}
PORT=${2:-8002}
REDEPLOY=${3:-0}
LOGS=${4:-0}

echo Pulling latest git
git pull

if [ $REDEPLOY != 0 ]
then
    echo stopping container coulomb
    docker container stop $NAME
    echo removing container coulomb
    docker container rm coulomb
fi

echo Building Docker image ...
docker build -t $NAME .

echo Running container ...
docker run --name $NAME -d -p $PORT:5001 --rm --env-file=.env $NAME