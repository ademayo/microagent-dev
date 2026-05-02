import { appConfig } from "../../../config/app";
import { agentRegistry } from "../../agents";

export const HealthController = {
	show() {
		return {
			name: appConfig.name,
			status: "ok",
			agents: agentRegistry.all().length,
			uptime: process.uptime(),
		};
	},
} as const;
