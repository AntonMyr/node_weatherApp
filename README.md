# node_weatherApp
A weather app built with nodejs.

Learned how to make an api wrapper with this small project.

### How to use:

```
npm install
node app.js -a '<designated address, town, or country>'
```

Tips to make it work better is to make it more specific for example:

```
node app.js -a 'Stockholm'
```
^ Will just make it write out the weather in Stockholm

But:
```
node app.js -a 'Borgarfjordsgatan 6c Kista Stockholm'
```
^ Will write out the weather very specific to that place
