import { DeepAgentBackend } from "../backends/deep-agent/DeepAgentBackend";
import type { AgentDefinition } from "../contracts";
import { timingMiddleware } from "../middleware";
import { currentTimeSkill } from "../skills";

export const deepResearcherAgent: AgentDefinition = {
	name: "deep-researcher",
	description:
		"Example deep agent module with its own backend, skills, and middleware.",
	backend: new DeepAgentBackend(),
	skills: [currentTimeSkill],
	middleware: [timingMiddleware],
};
