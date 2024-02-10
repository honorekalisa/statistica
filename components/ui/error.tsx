import { Alert, AlertDescription, AlertTitle } from "./alert";
import { AlertTriangle } from "lucide-react";

const ErrorAlert = ({ message }: { message: string }) => {
  return (
    <Alert className="w-fit flex items-center gap-4">
      <div className="flex items-center justify-center p-2 rounded-full bg-red-50 w-fit">
        <AlertTriangle className="h-4 w-4 text-red-500" color="red" />
      </div>
      <div>
        <AlertTitle className="text-sm">Error occurred</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </div>
    </Alert>
  );
};

export default ErrorAlert;
