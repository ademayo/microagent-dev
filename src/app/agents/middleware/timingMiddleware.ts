import type { AgentMiddleware } from "../contracts";

export const timingMiddleware: AgentMiddleware = {
	name: "timing",

	async handle(invocation, next) {
		const startedAt = performance.now();
		const result = await next(invocation);

		return {
			...result,
			metadata: {
				...result.metadata,
				durationMs: Math.round(performance.now() - startedAt),
			},
		};
	},
};
