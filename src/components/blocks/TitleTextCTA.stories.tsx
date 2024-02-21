import type { Meta, StoryObj } from "@storybook/react";
import { TitleTextCTA } from "./TitleTextCTA";

const meta = {
  title: "Blocks/TitleTextCTA",
  component: TitleTextCTA,
  parameters: {},
  argTypes: {},
} as Meta<typeof TitleTextCTA>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleTextCTAStory: Story = {
  args: {
    title: "Title",
    text: "Text",
    buttonText: "CTA",
  },
};
