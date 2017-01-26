#!/bin/bash
cd ../page && npm run dev &
sleep 5
cd .. && ./node_modules/.bin/electron .
