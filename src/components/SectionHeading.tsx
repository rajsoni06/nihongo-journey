
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-8 w-full',
      center && 'text-center',
      className
    )}>
      <h2 className="section-title relative">
        <span className="text-shimmer inline-block transform hover:scale-105 transition-transform duration-300">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 max-w-3xl animate-fade-in-up">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
