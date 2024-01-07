import type { BoardMember, Year } from "@/types/board";

export const boardMembers: BoardMember[] = [
  // Add your board members here
  // Example:
  {
    name: "Aniketh (Ani) Chenjeri",
    position: ["President", "Founder"],
    year: 2023,
    bio: "Aniketh is a sofmore at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the president of the club.",
    photo: "/ani-headshot.jpeg",
    email: "aniketchenjeri@gmail.com",
  },

  {
    name: "Sami-ul Ahmed",
    position: ["Advisor", "Founder"],
    year: 2023,
    bio: "Sami is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/sami-headshot.jpeg",
  },
  {
    name: "Abhi Kasu",
    position: ["Advisor", "Founder"],
    year: 2023,
    bio: "Abhi is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },
  {
    name: "Aryamann Sheoran",
    position: ["Advisor", "Founder"],
    year: 2023,
    bio: "Arymann is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },
  {
    name: "Ariuka Bayasgalan",
    position: ["Head of Open Courseware"],
    bio: "Ariuka is a senior at Cherry Creek High School. She  is passionate about computer science and is the head of open courseware for CSHS.",
    year: 2023,
    photo: "/ariuka.jpeg",
  },
  {
    name: "Alyssa Wang",
    position: ["Head of Tutoring"],
    bio: "Alyssa is a junior at Cherry Creek High School. She  is passionate about computer science and is the head of tutoring for CSHS.",
    year: 2023,
    photo: "/alyssa-headshot.jpeg",
  },
  // 2022

  {
    name: "Aniketh (Ani) Chenjeri",
    position: ["Founder"],
    year: 2022,
    bio: "Aniketh is a sofmore at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS.",
    photo: "/ani-headshot.jpeg",
    email: "aniketchenjeri@gmail.com",
  },
  {
    name: "Sami-ul Ahmed",
    position: ["Advisor", "President"],
    year: 2022,
    bio: "Sami is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/sami-headshot.jpeg",
  },
  {
    name: "Abhi Kasu",
    position: ["Advisor", "President"],
    year: 2022,
    bio: "Abhi is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },
  {
    name: "Aryamann Sheoran",
    position: ["Advisor", "President"],
    year: 2022,
    bio: "Arymann is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },
];

export const years: Year[] = [
  // Add the years here
  2023,
  2022, // ... etc.
];

export function getBoardMembers(year: Year): BoardMember[] {
  return boardMembers.filter((member) => member.year === year);
}
