import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

type FormSuccessProps = {
  message?: string;
};

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div className="flex items-center bg-emerald-500/15 rounded-md p-3 gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon />
      <p>{message}</p>
    </div>
  );
}
