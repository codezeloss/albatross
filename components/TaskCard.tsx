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

export function TaskCard() {
  return (
    <Card className="w-full shadow-0">
      <CardHeader>
        <CardTitle className="text-xl font-normal">Create project</CardTitle>
        <CardDescription className="font-normal">
          Deploy your new project in one-click Deploy your new project in
          one-click Deploy your new project in one-click Deploy your new project
          in one-click..
        </CardDescription>
      </CardHeader>

      <CardContent className="-mb-3">
        <div>
          <p className="text-xs font-light text-muted-foreground">
            Created: 15 Aug 2024
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <div>
          <Button
            className="bg-green-500 text-white font-medium hover:bg-green-400"
            size="sm"
            variant="default"
          >
            Completed
          </Button>
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
    </Card>
  );
}
