#!/bin/bash

pid=$(sudo pm2 pid conduit)
if [ $pid == 0 ]; then
   echo "Application is stopped"
else
   echo "Application is running"
   sudo pm2 stop conduit/ecosystem.config.js

