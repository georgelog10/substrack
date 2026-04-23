interface SubIconProps {
  name: string;
  color: string;
  size?: number;
}

export default function SubIcon({ name, color, size = 36 }: SubIconProps) {
  const letter = name.charAt(0).toUpperCase();
  const bg = color + "18";
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.25,
      background: bg, border: `1px solid ${color}30`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
      fontSize: size * 0.38, fontWeight: 700, color,
      letterSpacing: "-0.01em",
    }}>{letter}</div>
  );
}
