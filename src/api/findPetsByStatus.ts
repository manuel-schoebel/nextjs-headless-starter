import { client } from "@/api";
import { type operations } from "./petstore";

export async function findPetsByStatus(
  query: operations["findPetsByStatus"]["parameters"]["query"],
) {
  const pets = await client.GET("/pet/findByStatus", {
    params: {
      query,
    },
    cache: "no-cache",
  });
  return pets;
}
