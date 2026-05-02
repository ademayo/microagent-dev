import type {
	AgentDefinition,
	AgentInput,
	AgentInvocation,
	AgentMiddlewareNext,
	AgentResult,
} from "./contracts";

export class AgentRuntime {
	async invoke(
		agent: AgentDefinition,
		input: AgentInput,
	): Promise<AgentResult> {
		const invocation: AgentInvocation = {
			agent,
			input,
			skills: agent.skills ?? [],
		};

		const dispatch: AgentMiddlewareNext = async (currentInvocation) => {
			const backendResult = await agent.backend.invoke(currentInvocation);

			return {
				agent: agent.name,
				output: backendResult.output,
				metadata: {
					backend: agent.backend.name,
					...backendResult.metadata,
				},
			};
		};

		return [...(agent.middleware ?? [])]
			.reverse()
			.reduce((next, middleware) => {
				return (currentInvocation) =>
					middleware.handle(currentInvocation, next);
			}, dispatch)(invocation);
	}
}
