export type AgentInput = {
	input: string;
	context?: Record<string, unknown>;
};

export type AgentResult = {
	agent: string;
	output: string;
	metadata?: Record<string, unknown>;
};

export type AgentBackendResult = {
	output: string;
	metadata?: Record<string, unknown>;
};

export type AgentInvocation = {
	agent: AgentDefinition;
	input: AgentInput;
	skills: readonly AgentSkill[];
};

export type AgentBackend = {
	name: string;
	invoke(invocation: AgentInvocation): Promise<AgentBackendResult>;
};

export type AgentSkill = {
	name: string;
	description: string;
	invoke(input: AgentInput): Promise<unknown>;
};

export type AgentMiddlewareNext = (
	invocation: AgentInvocation,
) => Promise<AgentResult>;

export type AgentMiddleware = {
	name: string;
	handle(
		invocation: AgentInvocation,
		next: AgentMiddlewareNext,
	): Promise<AgentResult>;
};

export type AgentDefinition = {
	name: string;
	description: string;
	backend: AgentBackend;
	skills?: readonly AgentSkill[];
	middleware?: readonly AgentMiddleware[];
};

export type AgentSummary = {
	name: string;
	description: string;
	backend: string;
	skills: string[];
	middleware: string[];
};
