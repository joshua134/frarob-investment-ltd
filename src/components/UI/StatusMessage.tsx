import { CheckCircle, AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  type: 'success' | 'error' | null;
  message: string;
}

export const StatusMessage = ({ type, message }: StatusMessageProps) => {
  if (!type || !message) return null;
  
  const isSuccess = type === 'success';
  const Icon = isSuccess ? CheckCircle : AlertCircle;
  const colorClass = isSuccess ? 'green' : 'red';
  
  return (
    <div className={`bg-${colorClass}-500/20 border border-${colorClass}-500 rounded-lg p-4 flex items-start space-x-3`}>
      <Icon className={`w-5 h-5 text-${colorClass}-500 flex-shrink-0 mt-0.5`} />
      <p className={`text-${colorClass}-400 text-sm`}>{message}</p>
    </div>
  );
};