import type { Meta, StoryObj } from "@storybook/react";
import { Text as TextComponent } from "./Text";

const meta = {
  title: "Components/Typography/Text",
  component: TextComponent,
  parameters: {},
  argTypes: {},
} as Meta<typeof TextComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Text",
  },
};
