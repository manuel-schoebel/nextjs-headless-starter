import { type components } from "@/api/petstore";
import { Pet } from "@/components/blocks/Pet";

export const blocksMap = {
  pet: (props: components["schemas"]["Pet"]) => (
    <div className="my-12">
      <Pet {...props} />
    </div>
  ),
};
