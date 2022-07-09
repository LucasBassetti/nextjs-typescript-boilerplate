import { Story, Meta } from '@storybook/react';

import Main, { MainProps } from '.';

export default {
  title: 'Components/Data Display/Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default',
  },
} as Meta;

export const Basic: Story<MainProps> = (args) => <Main {...args} />;

Basic.args = {
  title: 'title basic',
  description: 'description basic',
};

export const Default: Story<MainProps> = (args) => <Main {...args} />;
