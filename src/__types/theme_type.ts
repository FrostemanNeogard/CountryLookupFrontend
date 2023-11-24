export type ThemeType = {
  primary: string;
  primaryDarkened: string;
  secondary: string;
  secondaryDarkened: string;

  primaryFontFamily: string;
  primaryText: string;
  secondaryText: string;

  elementColors: {
    anchor: {
      color: string;
    }
  }

  borders: {
    verticalDividerBorder: string;

    primaryBorder: string;
    primaryRadius: string;
  }
}