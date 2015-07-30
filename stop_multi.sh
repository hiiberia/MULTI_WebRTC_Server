#!/bin/bash
ps -u root -f > .test_tmp
#res=$(ps -u ubuntu -f)
#echo $res>.test_tmp1
res=$(grep wrtc_multi.js .test_tmp)
echo $res>.test_tmp
res=$(grep -o [0-9]* .test_tmp)
echo $res>.test_tmp
pid=$(grep -o ^[0-9]* .test_tmp)
#if [ -n $pid ]; then
if [ -z "$pid" ]; then
	echo "Nothing to do! nodejs wrtc_multi.js is not started"
else 
	if (( $pid >= 0 )); then
		echo "Stopping node wrtc_multi.js on process $pid"
		kill -9 $pid
	fi
fi
rm .test_tmp
