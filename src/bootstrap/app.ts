import { Elysia } from "elysia";
import { registerApiRoutes } from "../routes/api";
import { registerWebRoutes } from "../routes/web";

export function createApp() {
	return new Elysia()
		.onError(({ code, error, set }) => {
			if (code === "NOT_FOUND") {
				set.status = 404;

				return {
					error: "Not Found",
					message: "The requested route does not exist.",
				};
			}

			set.status = 500;

			return {
				error: "Internal Server Error",
				message: error instanceof Error ? error.message : "Unexpected error.",
			};
		})
		.use(registerWebRoutes)
		.use(registerApiRoutes);
}
