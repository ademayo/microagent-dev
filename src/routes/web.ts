import { Elysia } from "elysia";
import { appConfig } from "../config/app";

export const registerWebRoutes = new Elysia().get("/", () => ({
	name: appConfig.name,
	status: "ok",
}));
