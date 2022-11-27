const {createLogger, format, transports} = require('winston');
const {combine, timestamp, printf} = format;

const loggerFormat = printf(({level, message, timestamp, stack}) => {
    return `[${level}] ${timestamp} : ${stack || message}`;
});


const productionLogger = () => {

    return createLogger({
        level: 'info',
        format: combine(
            timestamp(),
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

module.exports = productionLogger;