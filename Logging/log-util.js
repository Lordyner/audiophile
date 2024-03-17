import logLevelData from "./log-level"
import pino from "pino"

const logLevels = new Map(Object.entries(logLevelData))

export function getLogLevel(logger) {
    return logLevels.get(logger) || logLevels.get("*") || "info"
}

export function getLogger(name) {
    return pino({
        name,
        level: getLogLevel(name),
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
            }
        }
    })
}