#!/bin/bash

echo '********************************************************'
echo 'About to run your new Docusaurus app on the local server'
echo 'You will be able to view your app in your browser at the following URLs:'
echo 'Docusaurus web server: http://localhost:3000'
echo 'LiveReload web server: http://localhost:35729'
echo ''
echo 'NOTE: If you are using a non-zero port offset, the correct port numbers will be different.'
echo "******************************************************************************************"
cat /home/winner/shared/ports.txt

echo '----------------------------'
echo "cd $PWD/website && npm start"
cd $PWD/website && npm start
