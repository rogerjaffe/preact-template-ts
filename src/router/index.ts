import { createRouter } from "@nanostores/router";

export const router = createRouter({
  home: "/",
  add: "/add/:delta",
  users: "/users/:userId",
  withParms: "/withparms",
  query: "/query",
} as const);
