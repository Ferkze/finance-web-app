#!/bin/bash

docker exec -it $(docker ps | grep mongo | awk '{print $1}') bash