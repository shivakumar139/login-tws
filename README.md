# Login System TWS :fire:

## Run Locally :white_check_mark:

Clone the project

```bash
  https://github.com/shivakumar139/login-tws.git
```

Go to the project directory

```bash
  cd login-tws
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn run dev
```
Create a new file called ```.env``` Copy all the content from ```.env.developer``` and paste it into .env Change all url.


## Environment Variables :mushroom:

To run this project, you will need to add the following environment variables to your .env file



`APP_PORT` 

`DEBUG_MODE`

`DB_URL`

`JWT_SECRET`  

`APP_URL`

# API References :key:

## Variables

| Key | Value | Type |
| --- | ------|-------------|
| localhost | http://localhost:5000/api | default |



## Endpoints :point_left:
### [Auth](#auth)

* 
    1. [Login](#1-login)
    2. [Register](#2-register)


--------



## Auth :seedling:



### 1. Login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{localhost}}/api/v1/login
```



***Body:***

```js        
{
    "email": "shiva@gmail.com",
    "password": "12345"
}
```



### 2. Register



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{localhost}}/api/v1/register
```



***Body:***

```js        
{
    "name":"shiva",
    "email": "shiva@gmail.com",
    "password": "password",
    "mobile": "9023236998",
    "city": "ludhiana",
    "state": "Punjab",
    "country": "India",
    "address": "pritam nagar"
    
}
```
