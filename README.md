# [DataAPIConnect](https://dataapiconnect.com) - `Django API`

Start your Development with an Innovative Admin Template for **Material Tailwind CSS** and **React**. [DataAPIConnect](https://dataapiconnect.com) is built with over 70 frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. The product comes with a simple JWT authentication flow: login/register/logout. 


<br />

> Features

- ✅ Innovative `Material Tailwind CSS Design`
- ✅ React, Redux, Redux-persist
- ✅ Authentication: JWT Login/Register/Logout
- ✅ **Full-stack Ready** using a **Django API Server** (open-source project) - Server Features
  - Django / DRF / SQLite3 - a simple, easy to use backend
  - Authentication with JWT (login, logout, register)
  - Docker, Unitary tests
  
<br />

> React UI Tests:

| NodeJS | NPM | YARN | Status | 
| --- | --- | --- | --- | 
| `v16.13.0` | `v8.1.0`   | `v1.22.5` | ✔️ | 
| `v14.15.0` | `v6.14.8`  | `v1.22.5` | ✔️ |
| `v12.22.0` | `v6.14.11` | `v1.22.5` | ✔️ |

<br />

## ✨ Quick-start 

> 👉 **Start the [Django API](./django-api)** using `Docker`

```bash
$ cd django-api
$ docker-compose up --build  
```

At this point, the API should be up & running at `http://localhost:5000`, and we can test the interface using POSTMAN or `curl`.

<br />

> 👉 **Start the [Front end](./front)** (using another terminal)

```bash
$ cd front
$ npm install         # install dependencies
$ npm start   # start the app 
```

Once all the above commands are executed, the `Front` should be visible in the browser. By default, the app redirects the guest users to authenticate. 
After we register a new user and Sign IN, all the private pages become accessible. 

<br />



## ✨ General Information

The product is built using a `two-tier` pattern where the React frontend is decoupled logically and physically from the API backend. How to use the product: 

- `Compile and start` the **Django API Backend**
  - by default the server starts on port `5000`
- `Compile and start` the **Front**
  - UI will start on port `5173` and expects a running backend on port `5000`
- `Configuration` (Optional)
  - Change the API port
  - Configure the API port used by the React UI to communicate with the backend 

<br />

## ✨ Manual build

### **Start the Django API** 

Simple starter built with Python / DRF Library / Sqlite3 and JWT Auth. The authentication flow is based on [json web tokens](https://jwt.io).

<br />

> 👉 **Step #1** -  Change the directory to `django-api`

```bash
$ cd django-api
```

<br />

> 👉 **Step #2** - Create a virtual environment

```bash
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
```

<br />

> 👉 **Step #3** - Install dependencies using PIP

```bash
$ pip install -r requirements.txt
```

<br />

> 👉 **Step #4** - Create a new `.env` file using sample `env.sample`

The meaning of each variable can be found below: 

- `DEBUG`: if `True` the app runs in develoment mode
  - For production value `False` should be used
- `SECRET_KEY`: used in assets management

<br />

> 👉 **Step #5** - Start the API server

```bash
$ python manage.py migrate
$ python manage.py runserver 5000
```

The API server will start using the explicit port `5000`.

<br />

### Compile & start the **Front**

```bash
$ cd front
$
$ # Install Modules
$ npm install
$
$ # Start for development (LIVE Reload)
$ npm start
```

<br />

### Configuration (Optional)

> Change the port exposed by the Djago API

```bash
$ python manage.py runserver 5000
```

Now, the API will start on port `5000`. 

<br />

> Update the API port used by the React Frontend

**API Server URL** - `src/config/constant.js` 

```javascript
    API_SERVER: 'http://localhost:5001/api/'  // <-- The magic line
```

The value can be updated during the build using the environment

```bash
$ export REACT_APP_BACKEND_SERVER='http://localhost:5001/api/' # Unix/MacOS
$ set REACT_APP_BACKEND_SERVER='http://localhost:5001/api/'    # Windows CMD
$ $env:REACT_APP_BACKEND_SERVER='http://localhost:5001/api/'   # Windows PowerShell
```

<br />

## ✨ API

For a fast set up, use this POSTMAN file: [api_sample](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json)

> 👉 **Register** - `api/users/register` (**POST** request)

```
POST api/users/register
Content-Type: application/json

{
    "username":"test",
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> 👉 **Login** - `api/users/login` (**POST** request)

```
POST /api/users/login
Content-Type: application/json

{
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> 👉 **Logout** - `api/users/logout` (**POST** request)

```
POST api/users/logout
Content-Type: application/json
authorization: JWT_TOKEN (returned by Login request)

{
    "token":"JWT_TOKEN"
}
```

<br />