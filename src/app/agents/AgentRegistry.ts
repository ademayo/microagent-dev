import type {
	AgentDefinition,
	AgentInput,
	AgentResult,
	AgentSummary,
} from "./contracts";
import { AgentRuntime } from "./core/AgentRuntime";

export class AgentRegistry {
	private readonly agents = new Map<string, AgentDefinition>();

	private readonly runtime = new AgentRuntime();

	constructor(agents: readonly AgentDefinition[]) {
		for (const agent of agents) {
			this.agents.set(agent.name, agent);
		}
	}

	all(): AgentSummary[] {
		return [...this.agents.values()].map((agent) => this.describe(agent));
	}

	find(name: string): AgentDefinition | undefined {
		return this.agents.get(name);
	}

	describe(agent: AgentDefinition): AgentSummary {
		return {
			name: agent.name,
			description: agent.description,
			backend: agent.backend.name,
			skills: (agent.skills ?? []).map((skill) => skill.name),
			middleware: (agent.middleware ?? []).map((middleware) => middleware.name),
		};
	}

	async invoke(
		name: string,
		input: AgentInput,
	): Promise<AgentResult | undefined> {
		const agent = this.find(name);

		if (!agent) {
			return undefined;
		}

		return this.runtime.invoke(agent, input);
	}
}
