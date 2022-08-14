import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    error: string;
    onSecondary: string;
    onSuccess: string;
    secondary: string;
    success: string;
    textPrimary: string;
    textSecondary: string;

    button: {
      backgroundColor: string;
      color: string;

      hover: {
        backgroundColor: string;
      };

      active: {
        backgroundColor: string;
      };
    };
  }
}
