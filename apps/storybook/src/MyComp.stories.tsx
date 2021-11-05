import React from "react";
import {Meta, Story }  from "@storybook/react";

import { MyComp, MyCompProps } from '@moreptsviteex/package-a'

export default {
    title: 'MyComp',
    component: MyComp
} as Meta

const Template: Story<MyCompProps> = (args) => <MyComp {...args} />

export const ExampleStory: Story<MyCompProps>  = Template.bind({})