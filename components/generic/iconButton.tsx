import { cn } from '@/lib/helpers';
import { SparklesIcon } from '@heroicons/react/24/solid';

interface IconButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = '',
  icon = 'sparkles',
}) => (
  <button
    type="button"
    className={cn(
      'inline-flex h-fit items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
      className,
    )}
    onClick={onClick}
  >
    {icon === 'sparkles' && (
      <SparklesIcon
        aria-hidden="true"
        className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
      />
    )}
  </button>
);

export default IconButton;
