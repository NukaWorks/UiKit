import {Meta, StoryObj} from "@storybook/react";
import {IconButton} from "./IconButton";
import '../Common/fonts.scss';
import {ComponentBaseProps} from "../Common/Interfaces/ComponentBaseProps";

const meta: Meta<ComponentBaseProps> = {
    title: "Base/IconButton",
    component: IconButton,
    argTypes: {
        theme: {
            options: ["Light", "Dark"],
            control: {type: "radio"},
        },
        disabled: {control: "boolean"},
    },
};

type Story = StoryObj<typeof meta>;
export const Default = {
    args: {
        theme: "Light",
        disabled: false,
    },
} satisfies Story;

export default meta;
