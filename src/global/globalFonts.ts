import { createGlobalStyle } from "styled-components";
import RedHatDisplayBlack from "@/fonts/RedHatDisplay-Black.ttf";
import RedHatDisplayBlackItalic from "@/fonts/RedHatDisplay-BlackItalic.ttf";
import RedHatDisplayBold from "@/fonts/RedHatDisplay-Bold.ttf";
import RedHatDisplayBoldItalic from "@/fonts/RedHatDisplay-BoldItalic.ttf";
import RedHatDisplayExtraBold from "@/fonts/RedHatDisplay-ExtraBold.ttf";
import RedHatDisplayExtraBoldItalic from "@/fonts/RedHatDisplay-ExtraBoldItalic.ttf";
import RedHatDisplayItalic from "@/fonts/RedHatDisplay-Italic.ttf";
import RedHatDisplayLight from "@/fonts/RedHatDisplay-Light.ttf";
import RedHatDisplayLightItalic from "@/fonts/RedHatDisplay-LightItalic.ttf";
import RedHatDisplayMedium from "@/fonts/RedHatDisplay-Medium.ttf";
import RedHatDisplayMediumItalic from "@/fonts/RedHatDisplay-MediumItalic.ttf";
import RedHatDisplayRegular from "@/fonts/RedHatDisplay-Regular.ttf";
import RedHatDisplaySemiBold from "@/fonts/RedHatDisplay-SemiBold.ttf";
import RedHatDisplaySemiBoldItalic from "@/fonts/RedHatDisplay-SemiBoldItalic.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 300;
    src: local('RedHatDisplay'),url(${RedHatDisplayLight}) format('truetype');
  }
  
  @font-face {
    font-family: 'Red Hat Display';
    font-style: italic;
    font-weight: 300;
    src: local('RedHatDisplay'),url(${RedHatDisplayLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 400;
    src: local('RedHatDisplay'),url(${RedHatDisplayRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: italic;
    font-weight: 400;
    src: local('RedHatDisplay'),url(${RedHatDisplayItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 500;
    src: local('RedHatDisplay'),url(${RedHatDisplayMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: italic;
    font-weight: 500;
    src: local('RedHatDisplay'),url(${RedHatDisplayMediumItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 600;
    src: local('RedHatDisplay'),url(${RedHatDisplaySemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: italic;
    font-weight: 600;
    src: local('RedHatDisplay'),url(${RedHatDisplaySemiBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    src: local('RedHatDisplay'),url(${RedHatDisplayBold}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: italic;
    font-weight: 700;
    src: local('RedHatDisplay'),url(${RedHatDisplayBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 800;
    src: local('RedHatDisplay'),url(${RedHatDisplayExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: italic;
    font-weight: 800;
    src: local('RedHatDisplay'),url(${RedHatDisplayExtraBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 900;
    src: local('RedHatDisplay'),url(${RedHatDisplayBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Red Hat Display';
    font-style: italic;
    font-weight: 900;
    src: local('RedHatDisplay'),url(${RedHatDisplayBlackItalic}) format('truetype');
  }
`;
