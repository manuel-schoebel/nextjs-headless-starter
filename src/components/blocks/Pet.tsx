import Image from "next/image";
import type { components } from "@/api/petstore";
import { Heading } from "@/components/ui/Heading";

export function Pet({ name, photoUrls }: components["schemas"]["Pet"]) {
  return (
    <div>
      <Heading>{name}</Heading>
      {photoUrls[0] && (
        <Image width={800} height={600} src={photoUrls[0]} alt={name} />
      )}
    </div>
  );
}
