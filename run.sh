#!/bin/bash
pgrep ipfs
if [ $? -eq 1 ]; then
    ipfs init
    ipfs daemon &
fi
cd back_end
back_end/run.sh &
cd ..
cd front_end
ng serve --host 0.0.0.0
