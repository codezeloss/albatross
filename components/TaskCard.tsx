"use client";

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
import { PencilIcon, Trash2Icon } from "lucide-react";
import { TaskProps } from "@/types";
import { formatDate } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import AlertModal from "@/components/ui/alert-modal";
import { useDispatch } from "react-redux";
import { EditTaskModal } from "@/components/EditTaskModal";

export function TaskCard({
  id,
  title,
  description,
  date,
  isCompleted,
  isImportant,
}: TaskProps) {
  const router = useRouter();
  const params = useParams();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // ** Update Task status
  const updateStatus = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(`/api/${params.userId}/tasks`, {
        id,
        isCompleted: !isCompleted,
      });
      if (response.data) {
        toast({
          description: "Status updated successfully",
        });
        router.refresh();
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Cannot update the status, please try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ** Delete Task
  const deleteTask = async (taskId: string) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `/api/${params.userId}/tasks/${taskId}`
      );
      if (response.data) {
        toast({
          description: "Task deleted successfully",
        });
        router.refresh();
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Cannot delete the Task, please try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AlertModal
        isOpen={openAlertModal}
        onClose={() => setOpenAlertModal(false)}
        onConfirm={() => deleteTask(id)}
        loading={isLoading}
      />

      <EditTaskModal
        id={id}
        isOpen={showEditForm}
        setIsOpen={setShowEditForm}
        title={title}
        date={date}
        description={description}
        isCompleted={isCompleted}
        isImportant={isImportant}
      />

      <Card className="w-full shadow-0 flex flex-col justify-between border-r-8 dark:border-white/10 border-black border-b-8">
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
                  disabled={isLoading}
                  className="bg-green-600 text-white font-medium hover:bg-green-400 hover:transform hover:scale-110"
                  size="sm"
                  variant="default"
                  onClick={updateStatus}
                >
                  Completed
                </Button>
              ) : (
                <Button
                  disabled={isLoading}
                  className="bg-red-600 text-white font-medium hover:bg-red-400 hover:transform hover:scale-110"
                  size="sm"
                  variant="default"
                  onClick={updateStatus}
                >
                  Incomplete
                </Button>
              )}
            </div>

            <div className="flex items-center gap-x-2">
              <Button
                disabled={isLoading}
                className="flex items-center gap-x-2"
                size="sm"
                variant="outline"
                onClick={() => setShowEditForm(true)}
              >
                <PencilIcon size={16} />
                Edit
              </Button>
              <Button
                disabled={isLoading}
                className="flex items-center gap-x-2"
                size="sm"
                variant="outline"
                onClick={() => setOpenAlertModal(true)}
              >
                <Trash2Icon size={16} />
                Delete
              </Button>
            </div>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}
