/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface IBlocksRenderer {
  blocks: any[];
  blocksMap: any;
}

interface IBlock {
  block: any;
  blocksMap?: any;
}

function Block({ block, blocksMap }: IBlock) {
  if (!block) return <p>Empty component passed</p>;
  if (!blocksMap) return <p>componentMap cannot be undefined</p>;

  // TODO: __typename might be different using TYPO3
  const { __typename, ...componentProps } = block;

  if (!__typename) return <p>__typename cannot be undefined</p>;
  if (__typename === "Error") return <p>__typename equals Error</p>;

  // not each __typename is within the type of IComponentConfiguration

  const componentKey = `${__typename}_${block.id}`;

  if (blocksMap[__typename]) {
    const Comp = blocksMap[__typename];

    return (
      <Comp key={componentKey} {...componentProps} __typename={__typename} />
    );
  }

  return (
    <p key={componentKey}>
      {`Component ${__typename} was used but has not been implemented
        yet.`}
    </p>
  );
}

export function BlocksRenderer({ blocks, blocksMap }: IBlocksRenderer) {
  if (!blocks || blocks.length === 0) {
    return <p>No blocks to render</p>;
  }

  return (
    <>
      {blocks.map((c: any) => {
        if (!c.__typename) return <p>no __typename</p>;
        if (!c.id) return <p>no id</p>;

        return (
          <Block
            key={`${c.__typename}-${c.id}`}
            block={c}
            blocksMap={blocksMap}
          />
        );
      })}
    </>
  );
}
