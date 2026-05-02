import { EchoBackend } from "../backends/echo/EchoBackend";
import type { AgentDefinition } from "../contracts";
import { timingMiddleware } from "../middleware";

export const echoAgent: AgentDefinition = {
	name: "echo",
	description:
		"Development agent that echoes input and reports the configured Ollama model.",
	backend: new EchoBackend(),
	middleware: [timingMiddleware],
};
