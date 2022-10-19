import { Dimensions, I18nManager } from "react-native";
import type { NativeWindStyleSheet as NativeWindStyleSheetInterface } from "../index";

import { setDimensions } from "./dimensions";
import { create, resetRuntime, setVariables } from "./runtime";
import {
  getColorScheme,
  setColorScheme,
  toggleColorScheme,
} from "./color-scheme";
import { useVariable } from "./use-variable";

export const NativeWindStyleSheet: NativeWindStyleSheetInterface = {
  create,
  __reset,
  getColorScheme,
  setColorScheme,
  toggleColorScheme,
  setVariables,
  setDimensions,
  useVariable,
  // setDangerouslyCompileStyles: context.setDangerouslyCompileStyles,
};

function __reset() {
  resetRuntime();
  setDimensions(Dimensions);
  setVariables({
    "--i18n-direction": I18nManager.isRTL ? "rtl" : "ltr",
  });

  // context.dangerouslyCompileStyles = undefined;
}
__reset();
