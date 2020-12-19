## What is this?

It's a little demo application for installing Dynatrace in three different scenarios:

- EC2 instance
- EKS
- Combination of EKS and AWS Lambda

## EC2 instructions

Spin up an EC2 instance. I used Lightsail with Ubuntu to speed things up a bit. Make sure ports 3000 and 3001 are open. Now SSH into the instance and run this:

```
sudo apt-get --assume-yes update
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get --assume-yes install nodejs
sudo apt-get --assume-yes install redis-server
redis-server &
redis-cli config set requirepass foobar
git clone https://github.com/mreider/formica.git
cd formica/backend
npm install
node redis-data-upload.js
node index.js &
cd ../frontend
OUTPUT=$(dig +short myip.opendns.com @resolver1.opendns.com)
sed -i 's/127.0.0.1/${OUTPUT}/' .env
npm install
node index.js &
```

## EKS

# For Lambda

Install serverless framework

`npm install -g serverless`

Setup profile in .aws/credentials

Deploy

`sls deploy --profile <profile-name>`

# Frontend
Navigate to frontend folder
Edit main.js and replace the variable value at line 34 to the backend URL. 

NOTE: This could've been done through environment variables but it'd require some time so we're leaving it as is. We'll work on it later today but at least it can be tested in the meantime. 

copy files from project's frontend folder to /var/www/html

visit
`http://54.196.232.87/`
