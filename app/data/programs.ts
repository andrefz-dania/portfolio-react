export type ProgramType = {
    id: number;
  name: string;
  icon: string;
};
export const codePrograms = [
  { id: 0, name: "JavaScript", icon: "/icons/js.png" },
  { id: 1, name: "HTML", icon: "/icons/html.png" },
  { id: 2, name: "CSS", icon: "/icons/css.png" },
  { id: 3, name: "React", icon: "/icons/react.webp" },
  { id: 4, name: "Tailwind CSS", icon: "/icons/tw.png" },
  { id: 5, name: "Visual Studio Code", icon: "/icons/vsc.png" },
  { id: 6, name: "Git", icon: "/icons/git.webp" },
  { id: 7, name: "GitHub", icon: "/icons/gh.svg" },

  //TODO add mongodb and sql
];

export const designPrograms = [
  { id: 0, name: "Figma", icon: "/icons/figma.png" },
  { id: 1, name: "Adobe Photoshop", icon: "/icons/ps.svg" },
  { id: 2, name: "Adobe Illustrator", icon: "/icons/ai.svg" },
  { id: 3, name: "Adobe InDesign", icon: "/icons/id.svg" },
  { id: 4, name: "Clip Studio Paint", icon: "/icons/csp.png" },
  { id: 5, name: "DaVinci Resolve", icon: "/icons/resolve.png" },
  { id: 6, name: "Blender", icon: "/icons/blender.png" }
];

export const otherPrograms = [
  { id: 0, name: "Ollama", icon: "/icons/ollama.png" },
  { id: 1, name: "Stable Diffusion", icon: "/icons/sd.png" },
  { id: 2, name: "Unity Engine", icon: "/icons/unity.png" },
];

