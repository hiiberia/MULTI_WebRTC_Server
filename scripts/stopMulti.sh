#!/bin/bash
PROCESS_PID='.wrtc_multi_pid'  # This file contains the monitored process pid.
MONITOR_TMP='.monitor_wrtc_multi_tmp'  # This file contains temporary information used by monitor process.
MONITOR_PID='.monitor_wrtc_multi_pid'  # This file contains the monitor pid.
USER_NAME='ubuntu'

monitor_pid=$(cat $MONITOR_PID)
echo "Stopping monitor process $monitor_pid"
kill -9 $monitor_pid

pid=$(cat $PROCESS_PID)
echo "Stopping monitored process $pid"
kill -9 $pid

rm $MONITOR_TMP
rm $MONITOR_PID
rm $PROCESS_PID

