export interface TaskProps {
  id: string;
  title: string;
  description: string;
  date: Date;
  isCompleted: boolean;
  isImportant: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
