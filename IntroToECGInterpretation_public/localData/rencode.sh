ffmpeg -i $1 -r 5 ${1%mp4}back.mp4
mv $1 ${1%mp4}old.mp4
mv ${1%mp4}back.mp4 $1
