# Micro Agent Development Environment #
## Environment For Working With Ollama ##

## Project Structure

```text
src/
  app/
    agents/
      backends/          Backend adapters for local logic, Ollama, LangChain, etc.
      core/              Runtime contracts and middleware pipeline
      middleware/        Cross-agent invocation middleware
      skills/            Reusable skills agents can opt into
      echo/              Example simple agent module
      deep-researcher/   Example deep agent module
    http/controllers/    Request handlers
  bootstrap/             App and server startup
  config/                Runtime configuration
  routes/                Web and API route registration
  index.ts               Entrypoint
```

## Commands

```sh
bun run dev
bun run build
bun run start
```

## Agent Modules

Each agent owns its module and exports an `AgentDefinition`:

```ts
export const myAgent = {
  name: "my-agent",
  description: "What this agent does.",
  backend: new MyBackend(),
  skills: [mySkill],
  middleware: [timingMiddleware],
};
```

Register new agents in `src/app/agents/index.ts`.

## Agent Routes

- `GET /api/agents`
- `GET /api/agents/:agent`
- `POST /api/agents/:agent/invoke`
