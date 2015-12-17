#!/usr/bin/env bash

killall nodeBeTest &> /dev/null&
nohup node ./backend-http.js &> ./tmp/backend.log&
killall nodeFeTest &> /dev/null&
nohup node ./frontend-http.js &> ./tmp/frontend.log&