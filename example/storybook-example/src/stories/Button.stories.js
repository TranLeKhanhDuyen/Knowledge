import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

// export const Red = () => <Button label="Press me" backgroundColor="red" />;
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me 2",
  size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: "blue",
  label: "Press Me 3",
  size: "lg",
};
