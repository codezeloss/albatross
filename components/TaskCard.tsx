import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit3Icon, EditIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { TaskProps } from "@/types";
import { formatDate } from "@/lib/utils";

export function TaskCard({
  id,
  title,
  description,
  date,
  isCompleted,
  isImportant,
}: TaskProps) {
  return (
    <Card className="w-full shadow-0 flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-xl font-normal">{title}</CardTitle>
        <CardDescription className="font-normal w-full">
          {description}
        </CardDescription>
      </CardHeader>

      <div>
        <CardContent className="-mb-3">
          <div>
            <p className="text-xs font-light text-muted-foreground">
              Date: {formatDate(date)}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div>
            {isCompleted ? (
              <Button
                className="bg-green-600 text-white font-medium hover:bg-green-400"
                size="sm"
                variant="default"
              >
                Completed
              </Button>
            ) : (
              <Button
                className="bg-red-600 text-white font-medium hover:bg-green-400"
                size="sm"
                variant="default"
              >
                Incomplete
              </Button>
            )}
          </div>

          <div className="flex items-center gap-x-2">
            <Button
              className="flex items-center gap-x-2"
              size="sm"
              variant="outline"
            >
              <PencilIcon size={16} />
              Edit
            </Button>
            <Button
              className="flex items-center gap-x-2"
              size="sm"
              variant="outline"
            >
              <Trash2Icon size={16} />
              Delete
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
