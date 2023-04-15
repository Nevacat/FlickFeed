import { setupWorker } from "msw";
import { mockHandler } from "./handler";

export const worker = setupWorker(...mockHandler);