import { unstable_noStore as noStore } from "next/cache";

import { findPetsByStatus } from "@/api/findPetsByStatus";
import { ClientPets } from "./components/ClientPets";
import { Heading } from "@/components/ui/Heading";
import { BlocksRenderer } from "@/components/blocks/BlocksRenderer";
import { blocksMap } from "@/lib/blocksMap";
import { getPageConfigurationByPath } from "@/api/getPageConfigurationByPath";

export default async function Home() {
  noStore();

  const pageConfiguration = getPageConfigurationByPath("/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex items-center justify-center gap-12 px-4 py-16 ">
        <div>
          <h2 className="mb-4 text-2xl">Server side fetch example</h2>
          <Pets />
        </div>

        <div>
          <h2 className="mb-4 text-2xl">Client Side fetching</h2>
          <ClientPets />
        </div>
      </div>

      <div className="mt-24">
        <Heading>Block Renderer Example</Heading>

        <BlocksRenderer
          blocks={pageConfiguration.data.blocks}
          blocksMap={blocksMap}
        />
      </div>
    </main>
  );
}

async function Pets() {
  const pets = await findPetsByStatus({ status: "available" });

  return (
    <div>{pets.data?.map((pet) => <div key={pet.id}>{pet.name}</div>)}</div>
  );
}
