import type { AgentBackend, AgentInvocation } from "../../contracts";

export class DeepAgentBackend implements AgentBackend {
	readonly name = "deep-agent";

	async invoke(invocation: AgentInvocation) {
		const skillResults = await Promise.all(
			invocation.skills.map(async (skill) => ({
				name: skill.name,
				result: await skill.invoke(invocation.input),
			})),
		);

		return {
			output: `Deep agent received: ${invocation.input.input}`,
			metadata: {
				skills: skillResults,
			},
		};
	}
}
