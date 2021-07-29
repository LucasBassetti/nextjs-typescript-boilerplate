import { Story, Meta } from '@storybook/react/types-6-0';

import H1, { H1Props } from '.';

export default {
  title: 'Components/Data Display/H1',
  component: H1,
  args: {},
} as Meta;

export const Default: Story<H1Props> = (args) => <H1 {...args} />;
