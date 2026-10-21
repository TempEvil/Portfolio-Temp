export type public_link = {
  name: string;
  url: string;
};

export type work_experience = {
  company: string;
  position: string;
  duration: string;
  responsibility: string[];
};

export type education = {
  school: string;
  degree: string;
  duration: string;
};

export type nameValue = {
  name: string;
  value: number;
};

export type personalData = {
  first_name: string;
  last_name: string;
  address: string;
  telephone: string;
  email: string;
  about_me: string;
  public_link: public_link[];
  work_experience: work_experience[];
  education: education[];
  training: education[];
  technical_skills: nameValue[];
  soft_skils: nameValue[];
  languages: nameValue[];
  references: [];
  hobbies: string[];
};
