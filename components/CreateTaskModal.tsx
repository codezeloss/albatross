"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as React from "react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { onClickClose } from "@/redux/modalSlice";
import { useParams, useRouter } from "next/navigation";

const formSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(10)
    .max(50),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(40)
    .max(150),
  date: z.date({
    required_error: "Date is required",
  }),
  isCompleted: z.boolean().default(false).optional(),
  isImportant: z.boolean().default(false).optional(),
});

export function CreateTaskModal() {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ** RTK - Modal
  const { isOpen } = useSelector((state: any) => state.modal);

  // ** Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      date: undefined,
      isCompleted: false,
      isImportant: false,
    },
  });

  // !! Handle Form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/${params.userId}/tasks`, values);
      if (response.data) {
        dispatch(onClickClose());
        toast({
          description: "Task added successfully",
        });
        router.refresh();
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Cannot add the Task, please try again",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(onClickClose())}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-normal text-2xl">
            Create New Task
          </DialogTitle>
          <DialogDescription>Add your new task</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <FormField
                control={form.control}
                name="isCompleted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Mark as is Completed</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isImportant"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Mark as is Important</FormLabel>
                  </FormItem>
                )}
              />{" "}
            </div>

            <Button disabled={isLoading} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
