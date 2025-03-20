
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
        <span className="inline-block">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-2 max-w-3xl",
          className?.includes('text-white') ? 'text-white/90' : 'text-muted-foreground'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
