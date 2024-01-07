import { years, getBoardMembers } from "@/lib/board";
import type { BoardMember } from "@/types/board";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import BoardCard from "./BoardCard";

export function BoardFeed() {
  return (
    <>
      <Accordion type="multiple">
        {years.map((year) => (
          <div key={year}>
            <AccordionItem value={year as unknown as string}>
              <AccordionTrigger>
                <h2>{year}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getBoardMembers(year).map((member: BoardMember) => (
                    <BoardCard member={member} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </>
  );
}
