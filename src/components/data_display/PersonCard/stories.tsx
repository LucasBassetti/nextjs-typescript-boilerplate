import { Story, Meta } from '@storybook/react/types-6-0';

import PersonCard, { PersonCardProps } from '.';

export default {
  title: 'Components/Data Display/PersonCard',
  component: PersonCard,
  args: {},
} as Meta;

export const Default: Story<PersonCardProps> = (args) => <PersonCard {...args} />;
