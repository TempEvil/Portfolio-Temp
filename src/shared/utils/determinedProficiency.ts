export const determinedProficiency = (value: number) => {
  if (value <= 20) return "Beginner";
  else if (value <= 40) return "Elementary";
  else if (value <= 60) return "Intermediate";
  else if (value <= 80) return "Up.Intermediate";
  else if (value <= 90) return "Advanced";
  else return "Proficiency";
};
