AgileVentures Website React Front End
=====================================

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

Customize Semantic_UI
----------------------

After running:
```
npm install semantic-ui 
```
We get a new folder /semantic with semantic-ui sources.
To create a custom build with customized colors you need to create a new folder inside:
```
$ mkdir semantic/src/themes/agile-ventures
$ mkdir semantic/src/themes/agile-ventures/globals
```
inside you need copy the main `site.variables` from the default theme:
```
$ cp semantic/src/themes/default/globals/site.variables semantic/src/themes/agile-ventures/ 
```
This file can be now edited.
After editing change `semantic/src/theme.config` from:
 
```
/* Global */
@site        : 'default';
@reset       : 'default';
```
to:
```
/* Global */
@site        : 'agile-ventures';
@reset       : 'default';
```
Now you can build the source:
```
cd semantic
$ gulp build-css
```
the compiled source will be in the `semantic/dist` folder
The current used [site.variables](scripts/site.variables) in in the scripts folder

