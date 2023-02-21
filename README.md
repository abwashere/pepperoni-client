# Pepperoni app
Client app

## Description
This app was created for training purposes.

It is a fake restaurant website that is also used to make/edit reservations, change the menu, and add/edit staff members.


## Getting started
This app has 2 repositories : [Api](https://github.com/abwashere/pepperoni-server),
[Front](https://github.com/abwashere/pepperoni-client).


### 1. Install Dependencies

Use npm to install packages.
```bash
cd pepperoni-client
npm install
```

### 2. Set Environment Variables - client side

Set up those variables in a **`.env`** file before first running the scripts.

REACT_APP_PORT = 3000

REACT_APP_SERVER_URL = "your-backend-localhost-url"

REACT_APP_NODE_ENV = "dev" // only in dev

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
