# Remote logger client
Debug your apps easily. Send your logs anywhere. 

### Install
```
npm install @jduttweiler/remote-logger-client
```

### Usage 
Important: You need to have running an instance of remote-logger-server, otherwise you can't see the logs.


```
const Logger = require("@jduttweiler/remote-logger-client");
const logger = new Logger("http://localhost:7001/logs");

logger.log("something happened here")
logger.log("we are going to implement the logging of more complex javascript objects!")

logger.warn("At least this is already quite useful ¯\_(ツ)_/¯")
logger.error("Something went wrong")
```
