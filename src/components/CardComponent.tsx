
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CardComponentProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  externalLink?: string;
  className?: string;
}

const CardComponent = ({
  image,
  title,
  description,
  link,
  externalLink,
  className
}: CardComponentProps) => {
  // Wrapper component based on whether it's an internal or external link
  const WrapperComponent = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return <Link to={link} className="h-full">{children}</Link>;
    }
    if (externalLink) {
      return <a href={externalLink} target="_blank" rel="noopener noreferrer" className="h-full">{children}</a>;
    }
    return <div className="h-full">{children}</div>;
  };

  return (
    <WrapperComponent>
      <div className={cn(
        "group h-full glass-card transform transition-all duration-500 hover:-translate-y-2",
        className
      )}>
        <div className="relative overflow-hidden aspect-video rounded-t-xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-japan-red transition-colors">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
          <div className="mt-4">
            <span className="inline-block text-sm font-medium text-japan-red before:content-[''] before:block before:w-12 before:h-1 before:rounded before:bg-japan-red before:mb-2 transform before:transition-all before:duration-300 group-hover:before:w-full">
              {link || externalLink ? "Learn More" : ""}
            </span>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default CardComponent;
