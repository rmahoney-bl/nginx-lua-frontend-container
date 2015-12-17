[![Stories in Ready](https://badge.waffle.io/rmahoney-bl/nginx-lua-frontend-container.png?label=ready&title=Ready)](https://waffle.io/rmahoney-bl/nginx-lua-frontend-container)
Nginx Lua Frontend Container
============================

# Overview
This is a proof-of-concept that demonstrates an Nginx configuration where upon receiving an http
request, Nginx will send the request first to a backend process and subsequently to a frontend
process, then return the result of the frontend process to the client.

In this demonstration, Nodejs is used to create both the frontend and backend processes, but it is not important which web technology is used for facilitating these processes in general.

In a future iteration of this project, the frontend will be implemented with the React rendering engine python as a backend.

# Installation
The installation process assumes you are running Ubuntu Linux.

```sh
sudo apt-get install nginx nginx-extras nodejs git
cd /var/www
git clone git@github.com:rmahoney-bl/nginx-lua-frontend-container.git
sudo ln -s /var/www/nginx-lua-frontend-container/nginx.conf /etc/nginx/sites-enabled/nging-lua-test.conf
sudo /etc/init.d/nginx start
```

# Running
```sh
./start.sh
```
The start script will start both the frontend and backend processes in the background.

To verify that things are running smoothly, log files are written to the ./tmp folder for each process.

# Verification

Open 127.0.0.1 in your web browser.  If you see the current time, then it's working.

This project generates the time value from the backend process and renders it from the frontend process.