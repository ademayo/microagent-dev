function numberFromEnv(name: string, fallback: number) {
	const value = Bun.env[name];

	if (!value) {
		return fallback;
	}

	const parsed = Number(value);

	if (!Number.isInteger(parsed) || parsed < 1 || parsed > 65_535) {
		throw new Error(`${name} must be a valid TCP port.`);
	}

	return parsed;
}

export const appConfig = {
	name: Bun.env.APP_NAME ?? "Micro Agent",
	port: numberFromEnv("APP_PORT", 3000),
} as const;
