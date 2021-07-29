import { Story, Meta } from '@storybook/react/types-6-0';

import H2, { H2Props } from '.';

export default {
  title: 'Components/Data Display/H2',
  component: H2,
  args: {},
} as Meta;

export const Default: Story<H2Props> = (args) => <H2 {...args} />;
