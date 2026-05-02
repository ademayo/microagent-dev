import { Elysia, t } from "elysia";
import { AgentController } from "../app/http/controllers/AgentController";
import { HealthController } from "../app/http/controllers/HealthController";

export const registerApiRoutes = new Elysia({ prefix: "/api" })
	.get("/health", () => HealthController.show())
	.get("/agents", () => AgentController.index())
	.get("/agents/:agent", ({ params, set }) =>
		AgentController.show(params.agent, set),
	)
	.post(
		"/agents/:agent/invoke",
		({ body, params, set }) => AgentController.invoke(params.agent, body, set),
		{
			body: t.Object({
				input: t.String({ minLength: 1 }),
				context: t.Optional(t.Record(t.String(), t.Unknown())),
			}),
		},
	);
