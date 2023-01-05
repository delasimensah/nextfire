import { MantineThemeOverride, ButtonProps } from "@mantine/core";

const ButtonDefaultProps: Partial<ButtonProps> = {
  size: "lg",
};

const getTheme = (fontFamily: string): MantineThemeOverride => {
  return {
    fontFamily,
    headings: { fontFamily },
    components: {
      Button: {
        // defaultProps: ButtonDefaultProps,
        classNames: { root: "font-bold" },
      },
    },
  };
};

export default getTheme;
