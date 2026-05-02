import { appConfig } from "../config/app";
import { createApp } from "./app";

export function startServer() {
	return createApp().listen(appConfig.port);
}
