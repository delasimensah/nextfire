import { MantineThemeOverride } from "@mantine/core";

const getTheme = (fontFamily: string): MantineThemeOverride => {
  return {
    fontFamily,
    headings: { fontFamily },
    components: {
      Button: {
        classNames: { root: "font-bold" },
      },
    },
  };
};

export default getTheme;
