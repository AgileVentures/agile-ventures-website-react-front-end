AgileVentures Website React Front End
=====================================

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Installation
------------

```
$ git clone https://github.com/AgileVentures/agile-ventures-website-react-front-end
$ cd agile-ventures-website-react-front-end
$ yarn
```

Run
---

```
$ yarn start
```
Dokku Deployment
-----------------

This will only work if you have been given access to our dokku system - this is for advanced users who have demonstrated ongoing committment to the project.

To make the commands simple, add the following to your ~/.ssh/config

```
Host avp-dokku
HostName agileventures-playground.westeurope.cloudapp.azure.com
User dokku
```
Then the following commands (assuming you have the correct ssh key set up) will create an app and allow pushing to the production server via git

```sh
$ ssh avp-dokku apps:create agileventures-react-front-end-production # if not yet created
$ git remote add agileventures-react-front-end-production dokku@agileventures-playground.westeurope.cloudapp.azure.com:agileventures-react-front-end-production    # assuming you are in local directory for this project -- only needed first time
$ git push agileventures-react-front-end-production master
```

Setting up a Domain on Dokku/Azure
----------------------------

Tell dokku what domain to use:
```
$ ssh avp-dokku domains:add agileventures-react-front-end-production react.agileventures.org
```

Ensure has the DNS Zone on Azure is set correctly:

![Azure DNS Zone configuration pane](https://dl.dropbox.com/s/dzgh7i3sn4wrxqz/Screenshot%202018-11-01%2013.32.30.png?dl=0)
