interface FulcrumLogoProps {
  className?: string;
}

export default function FulcrumLogo({ className = "" }: FulcrumLogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-8 h-8 bg-fulcrum-red transform -skew-x-12 flex items-center justify-center rounded-sm">
        <span className="text-white font-bold text-lg transform skew-x-12">F</span>
      </div>
      <span className="text-2xl font-bold text-gray-700">fulcrum</span>
    </div>
  );
}
