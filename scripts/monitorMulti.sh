#!/bin/bash
COMMAND='nodejs wrtc_multi.js >> log 2>&1 &'
PROCESS_PID='.wrtc_multi_pid'  # This file will contain the monitored process pid.
MONITOR_TMP='.monitor_wrtc_multi_tmp'  # This file will contain temporary information used by monitor process.
MONITOR_PID='.monitor_wrtc_multi_pid'  # This file will contain the monitor pid.
USER_NAME='ubuntu'

echo $$>$MONITOR_PID

# Execute command
eval $COMMAND

# Get pid
pid=$(cat $PROCESS_PID)

while [ 1 ]
do
        sleep 1
        ps -u $USER_NAME > $MONITOR_TMP
        pid2=$(grep -o $pid $MONITOR_TMP)
        if [[ "$pid2" -ne "$pid" ]]
        then
		echo date
                echo "$COMMAND is down"
                echo "Restarting process $COMMAND"
                # Exceute command
                eval $COMMAND
                # Get pid
                pid=$(cat $PROCESS_PID)
        fi
done
