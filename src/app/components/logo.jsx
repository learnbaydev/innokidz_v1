import logoImage from "@assets/Frame 1_1753340599011.png";

export default function Logo({ className = "", size = "default" }) {
  const sizeConfig = {
    small: { height: "h-8", width: "w-auto" },
    default: { height: "h-12", width: "w-auto" },
    large: { height: "h-16", width: "w-auto" },
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="InnoKidz - Future Entrepreneurs"
        className={`${config.height} ${config.width} object-contain hover:scale-105 transition-transform duration-300`}
      />
    </div>
  );
}
