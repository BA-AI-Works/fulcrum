import fulcrumLogoPath from "@assets/Fulcrum-logo_1753800988343.png";

interface FulcrumLogoProps {
  className?: string;
}

export default function FulcrumLogo({ className = "" }: FulcrumLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={fulcrumLogoPath} 
        alt="Fulcrum Logo" 
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}
