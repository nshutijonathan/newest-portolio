export enum Skill {
  None = "NONE",
  Frontend = "FRONTEND",
  Backend = "BACKEND",
  DevOps = "DEVOPS",
  Cloud = "CLOUD",
  Testing = "TESTING",
}

export type SkillSet = {
  skill: Skill;
  skillSet: string[];
};

export const skills: SkillSet[] = [
  {
    skill: Skill.Frontend,
    skillSet: ["React", "Redux", "TypeScript", "CSS", "Tailwind", "Bootstrap", "NextJS", "Angular"],
  },
  {
    skill: Skill.Backend,
    skillSet: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Python", "GraphQL", "Apollo", "AJAX"],
  },
  {
    skill: Skill.Testing,
    skillSet: ["Jest", "TestCafe", "Cypress", "Playwright"],
  },
  {
    skill: Skill.DevOps,
    skillSet: ["Git", "Docker", "AI-assisted development", "Scrum methodology"],
  },
  {
    skill: Skill.Cloud,
    skillSet: ["AWS"],
  },
];
