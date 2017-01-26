#!/bin/bash
trap 'kill $(jobs -p)' EXIT
cd page && npm run dev &
sleep 5
./node_modules/.bin/electron .
