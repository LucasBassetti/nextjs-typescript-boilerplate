import { Story, Meta } from '@storybook/react/types-6-0';
import P, { PProps } from '.';

export default {
  title: 'Components/Data Display/P',
  component: P,
  args: {},
} as Meta;

export const Default: Story<PProps> = (args) => <P {...args} />;
