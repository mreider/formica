# Pre-requisites

Redis

Node12.x

npm

Apache2

Pm2

Serverless Framework

# Clone repo and navigate to backend folder

install packages

`npm install`

update .env (Environment Variables)

`nano .env`

# Open port in security settings (in case of AWS as well)
EC2 instance security settings

# Start app with PM2 
`pm2 start index.js`

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
