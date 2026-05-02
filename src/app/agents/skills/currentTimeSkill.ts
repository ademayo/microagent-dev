import type { AgentInput, AgentSkill } from "../contracts";

export const currentTimeSkill: AgentSkill = {
	name: "current-time",
	description: "Returns the current server time for agent context.",

	invoke(_input: AgentInput) {
		return Promise.resolve({
			iso: new Date().toISOString(),
		});
	},
};
