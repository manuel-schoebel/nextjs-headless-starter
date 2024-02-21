"use client";

import { findPetsByStatus } from "@/api/findPetsByStatus";
import { useQuery } from "@tanstack/react-query";

export function ClientPets() {
  const { isPending, data } = useQuery({
    queryKey: ["findPetsByStatus"],
    queryFn: () => findPetsByStatus({ status: "available" }),
  });

  return (
    <div>
      {isPending && "Loading..."}
      {data?.data?.map((pet) => <div key={pet.id}>{pet.name}</div>)}
    </div>
  );
}
