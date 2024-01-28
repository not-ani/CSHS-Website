import type { BoardMember, Year } from "@/types/board";

export const sponser: BoardMember[] = [
  {
    name: "Paul Lein",
    position: ["Sponser", "Advisor"],
    year: "2023-2024",
    bio: "Mr. Lein is a teacher at Cherry Creek High School. He is passionate about computer science and is the sponser of CSHS.",
    photo: "/lein-headshot.jpg",
    email: "plein@cherrycreekschools.org",
  },
  {
    name: "Paul Lein",
    position: ["Sponser", "Advisor"],
    year: "2022-2023",
    bio: "Mr. Lein is a teacher at Cherry Creek High School. He is passionate about computer science and is the sponser of CSHS.",
    photo: "/lein-headshot.jpg",
  },
];

const twentyThreeFour: BoardMember[] = [
  {
    name: "Aniketh (Ani) Chenjeri",
    position: ["President", "Founder"],
    year: "2023-2024",
    bio: "Aniketh is a sophmore at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the president of the club.",
    photo: "/ani-headshot.jpeg",
    email: "aniketchenjeri@gmail.com",
  },
  {
    name: "Ariuka Bayasgalan",
    position: ["Head of Open Courseware"],
    bio: "Ariuka is a senior at Cherry Creek High School. She  is passionate about computer science and is the head of open courseware for CSHS.",
    year: "2023-2024",
    photo: "/ariuka.jpeg",
  },
  {
    name: "Alyssa Wang",
    position: ["Head of Tutoring"],
    bio: "Alyssa is a junior at Cherry Creek High School. She  is passionate about computer science and is the head of tutoring for CSHS.",
    year: "2023-2024",
    photo: "/alyssa-headshot.jpeg",
  },
  {
    name: "Karthikey Mishra",
    photo: "null",
    position: ["Chief Operating Officer"],
    bio: "Karthikey is a junior at Cherry Creek High School. He  is passionate about computer science and is the chief operating officer for CSHS.",
    year: "2023-2024",
  },
  {
    name: "Kasey Perlmen",
    photo: "null",
    position: ["Chief Operating Officer"],
    bio: "Kasey is a junior at Cherry Creek High School. She  is passionate about computer science and is the chief operating officer for CSHS.",
    year: "2023-2024",
  },
];

export const legacy: BoardMember[] = [
  {
    name: "Abhi Kasu",
    position: ["Advisor", "Founder", "President"],
    year: "2023-2024",
    bio: "Abhi is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },
  {
    name: "Aryamann Sheoran",
    position: ["Advisor", "Founder", "President"],
    year: "2023-2024",
    bio: "Arymann is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },

  {
    name: "Sami-ul Ahmed",
    position: ["Advisor", "Founder", "President"],
    year: "2023-2024",
    bio: "Sami is a senior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/sami-headshot.jpeg",
  },
];

export const boardMembers: BoardMember[] = [
  // Add your board members here
  // Example:
  ...sponser,
  ...twentyThreeFour,

  // 2022

  {
    name: "Aniketh (Ani) Chenjeri",
    position: ["Founder"],
    year: "2022-2023",
    bio: "Aniketh is a freshman at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS.",
    photo: "/ani-headshot.jpeg",
    email: "aniketchenjeri@gmail.com",
  },
  {
    name: "Sami-ul Ahmed",
    position: ["Founder", "President"],
    year: "2022-2023",
    bio: "Sami is a junior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/sami-headshot.jpeg",
  },
  {
    name: "Abhi Kasu",
    position: ["Founder", "President"],
    year: "2022-2023",
    bio: "Abhi is a junior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },
  {
    name: "Aryamann Sheoran",
    position: ["Founder", "President"],
    year: "2022-2023",
    bio: "Arymann is a junior at Cherry Creek High School. He is passionate about computer science and is one of the founders of CSHS. He is also the advisor of the club.",
    photo: "/no-image.jpg",
  },
];

export const years: Year[] = [
  // Add the years here
  "2023-2024",
  "2022-2023",
];

export function getBoardMembers(year: Year): BoardMember[] {
  return boardMembers.filter((member) => member.year === year);
}
