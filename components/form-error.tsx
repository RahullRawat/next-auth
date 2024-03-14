import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type FormErrorProps = {
  message?: string;
};

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="flex items-center bg-destructive/15 rounded-md p-3 gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon />
      <p>{message}</p>
    </div>
  );
}
