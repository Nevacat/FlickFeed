import { CommentHandler } from "./CommentHandler";
import { PostHandler } from "./PostHander";
import { UserHanlder } from "./UserHandler";

export const mockHandler = [...PostHandler, ...UserHanlder,...CommentHandler];