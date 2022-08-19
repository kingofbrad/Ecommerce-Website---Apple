import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const fonts = {
    ...chakraTheme.fonts,
  body: `Inter, -apple-system, BlinkMacSystemFont`,
  heading: `Inter, -apple-system, BlinkMacSystemFont`,
};


const customTheme = extendTheme()
export default customTheme