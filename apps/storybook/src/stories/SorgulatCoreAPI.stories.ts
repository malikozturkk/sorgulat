import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import { AuthAPI } from './SorgulatCoreAPI';

const meta = {
  title: 'Sorgulat Core API/AUTH',
  component: AuthAPI,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AuthAPI>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const auth: Story = {};
