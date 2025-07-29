
interface FulcrumLogoProps {
  className?: string;
}

export default function FulcrumLogo({ className = "" }: FulcrumLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/fulcrum-new-logo.png" 
        alt="Fulcrum Logo" 
        className="h-8 w-auto"
      />
    </div>
  );
}
