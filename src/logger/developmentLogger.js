const {createLogger, format, transports} = require('winston');
const {combine, timestamp, printf, colorize} = format;

const loggerFormat = printf(({level, message, timestamp, stack}) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});


const developmentLogger = () => {

    return createLogger({
        level: 'debug',
        format: combine(
            colorize(),
            timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
            format.errors({ stack: true}),
            loggerFormat
        ),
        // defaultMeta: { service: 'user-service' },
        transports: [
            //
            // - Write all logs with importance level of `error` or less to `error.log`
            // - Write all logs with importance level of `info` or less to `combined.log`
            //
            new transports.Console(),
        ],
    });

}

module.exports = developmentLogger;