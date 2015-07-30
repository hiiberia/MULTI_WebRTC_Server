#!/bin/bash
PROCESS_PID='.wrtc_multi_pid'  # This file will contain the process id.
#nodejs wrtc_multi.js >> logs/log 2>&1 &
nodejs wrtc_multi.js &>> logs/log &
#echo "Process id: $!"
echo $! > $PROCESS_PID
