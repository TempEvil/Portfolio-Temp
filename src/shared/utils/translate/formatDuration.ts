import i18next from "i18next";

export const formatDuration = (duration: string) => {
  if (!duration) return "";
  const [hours, minutes] = duration.split(":");
  const h = parseInt(hours, 10);
  const m = parseInt(minutes, 10);
  if (Number.isNaN(h) || Number.isNaN(m)) return "";
  return m === 0
    ? `${h}${i18next.t("hour")}`
    : `${h}${i18next.t("hour")} ${String(m).padStart(2, "0")}${i18next.t("minute")}`;
};
