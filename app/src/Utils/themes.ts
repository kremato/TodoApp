import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
  }
}

export const theme = createTheme({
  typography: {
    poster: {
      color: grey[500],
      fontSize: 13,
    },
  },
});
