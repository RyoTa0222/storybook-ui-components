import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import { Props } from "./InboxScreen";
import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args!.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
} as any;

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template: Story<Props> = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
