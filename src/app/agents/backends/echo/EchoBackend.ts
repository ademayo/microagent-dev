import { agentConfig } from "../../../../config/agents";
import type { AgentBackend, AgentInvocation } from "../../contracts";

export class EchoBackend implements AgentBackend {
	readonly name = "echo";

	async invoke(invocation: AgentInvocation) {
		return {
			output: invocation.input.input,
			metadata: {
				context: invocation.input.context ?? {},
				model: agentConfig.ollama.textModel,
			},
		};
	}
}
