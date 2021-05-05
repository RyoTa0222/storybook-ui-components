import React from "react";
import { Story, Meta } from "@storybook/react";
import { Props } from "./Task";
import Task from "./Task";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs/blocks";

export default {
  component: Task,
  title: "Task",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "1",
    title: "Test Task",
    updatedAt: new Date(2018, 0, 1, 9, 0),
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: "1",
    title: "Test Task",
    updatedAt: new Date(2018, 0, 1, 9, 0),
    state: "TASK_ARCHIVED",
  },
};
