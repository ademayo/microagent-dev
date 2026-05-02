import { AgentRegistry } from "./AgentRegistry";
import { deepResearcherAgent } from "./deep-researcher/agent";
import { echoAgent } from "./echo/agent";

export const agentRegistry = new AgentRegistry([
	echoAgent,
	deepResearcherAgent,
]);

export type {
	AgentBackend,
	AgentDefinition,
	AgentInput,
	AgentMiddleware,
	AgentResult,
	AgentSkill,
	AgentSummary,
} from "./contracts";
