import React from 'react';
import SpecialCharacters from './SpecialCharacters';

export default {
  component: SpecialCharacters,
  title: 'German/SpecialCharacters',
  // decorators: [(story) => {story()}],
};

const Template = () => <SpecialCharacters />;

export const Default = Template.bind({});
// Default.decorators = [
//   (story) => {story()},
// ];
