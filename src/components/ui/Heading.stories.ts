import type { Meta, StoryObj } from "@storybook/react";
import { Heading as HeadingComponent } from "./Heading";

const meta = {
  title: "Components/Typography/Heading",
  component: HeadingComponent,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof HeadingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    children: "Heading",
  },
};
