import { agentRegistry } from "../../agents";
import type { AgentInput } from "../../agents/contracts";

type ResponseStatus = {
	status?: number | string;
};

export const AgentController = {
	index() {
		return {
			data: agentRegistry.all(),
		};
	},

	show(name: string, set: ResponseStatus) {
		const agent = agentRegistry.find(name);

		if (!agent) {
			set.status = 404;

			return {
				error: "Agent Not Found",
				message: `No agent is registered as "${name}".`,
			};
		}

		return {
			data: agentRegistry.describe(agent),
		};
	},

	async invoke(name: string, input: AgentInput, set: ResponseStatus) {
		const result = await agentRegistry.invoke(name, input);

		if (!result) {
			set.status = 404;

			return {
				error: "Agent Not Found",
				message: `No agent is registered as "${name}".`,
			};
		}

		return {
			data: result,
		};
	},
} as const;
