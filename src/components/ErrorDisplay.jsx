import React from "react";
import { AlertTriangle } from "lucide-react"; // optional: for icon

const ErrorDisplay = ({ message }) => {
  if (!message) return null;

  return (
    <div className="max-w-md mx-auto bg-red-100 text-red-700 border border-red-400 rounded p-4 mt-4 flex items-center gap-3">
      <AlertTriangle className="w-5 h-5" />
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ErrorDisplay;
