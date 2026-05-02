export const agentConfig = {
	defaultAgent: Bun.env.DEFAULT_AGENT ?? "echo",
	ollama: {
		baseUrl: `http://localhost:${Bun.env.OLLAMA_PORT ?? "11434"}`,
		textModel: Bun.env.OLLAMA_MODEL ?? "qwen3.5:4b",
		imageModel: Bun.env.OLLAMA_IMAGE_MODEL ?? "qwen3.5:4b",
	},
} as const;
