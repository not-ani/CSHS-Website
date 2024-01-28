import BoardCard from "@/components/BoardCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
export type BoardMember = {
  name: string;
  position: Position[];
  bio: string;
  photo: string; // URL to the photo
  email?: string; // Email address
  year: Year;
};

export type Year = string; // or number, depending on how you store years
type Position =
  | "President"
  | "Vice President"
  | "Head of Open Courseware"
  | "Head of Tutoring"
  | "Founder"
  | "Advisor"
  | "Chief Operating Officer"
  | "Sponser";
