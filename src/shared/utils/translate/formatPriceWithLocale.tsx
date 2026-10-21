import { Span } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { formatPrice } from "./numberWithLocale";

// "$" + formatted price. `size` must match the fontSize of the parent <Text>.
// English: "$" uses the same size. Khmer: "$" is exactly one step smaller.
type PriceFontSize = "xs" | "sm" | "md" | "lg" | "xl";

const khmerCurrencySize: Record<PriceFontSize, string> = {
  xs: "2xs",
  sm: "xs",
  md: "sm",
  lg: "md",
  xl: "lg",
};

export const FormatPriceComponent = ({ value, size }: { value: number | string; size: PriceFontSize }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <Span fontSize={lang === "km" ? khmerCurrencySize[size] : size}>$</Span>
      {formatPrice(value, lang)}
    </>
  );
};
