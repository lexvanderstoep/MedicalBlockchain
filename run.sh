#!/bin/bash

ipfs daemon &
back_end/run.sh &
cd front_end
ng serve --host 0.0.0.0
