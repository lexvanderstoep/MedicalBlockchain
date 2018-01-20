#!/bin/bash
pgrep ipfs
if [ $? -eq 1 ]; then
    ipfs init
    ipfs daemon &
fi
pgrep flask
if [ $? -eq 1 ]; then
cd back_end
./run.sh &
cd ..
fi

pgrep "^ng"
if [ $? -eq 1 ]; then
cd front_end
ng serve --host 0.0.0.0
fi
