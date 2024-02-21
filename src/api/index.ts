import createClient from "openapi-fetch";
import type { paths } from "./petstore";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is required");
}

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
});
export { client };
