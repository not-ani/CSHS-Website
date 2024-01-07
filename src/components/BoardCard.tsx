import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import type { BoardMember } from "@/types/board";
import { Badge } from "./ui/badge";

export default function BoardCard(props: { member: BoardMember }) {
  const { member } = props;

  return (
    <Card
      key="1"
      className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
    >
      <img
        alt="Profile picture"
        className="object-cover w-full"
        height="320"
        src={member.photo}
        style={{
          aspectRatio: "320/320",
          objectFit: "cover",
        }}
        width="320"
      />
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
          {member.name}
        </h2>
        <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">
          {member.position.map((pos) => (
            <Badge key={pos} className="mr-1">
              {pos}
            </Badge>
          ))}
        </h3>
        <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
          {member.bio}
        </p>
        <div className="flex mt-4 space-x-2">
          <Button
            className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
            size="sm"
            variant="outline"
          >
            Contact: {member.email}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
