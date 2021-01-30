const axios = require("axios");

const INFO = "info";
const WARN = "warn";
const ERROR = "error";

class Logger{
    constructor(endpoint){
        this.endpoint = endpoint;
    }
    async log(message,severity = INFO){
        try{
            return await axios.post(this.endpoint, {
                timestamp: new Date().getTime(),
                message,
                severity
            })
        } catch(err){
            //silently ignore network errors
        }
    }
    warn(message){
        return this.log(message,WARN);
    }
    error(message){
        return this.log(message,ERROR);
    }
}


module.exports = Logger;



