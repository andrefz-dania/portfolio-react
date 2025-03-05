export default function Button({
  style,
  onClick,
  className,
  children,
}: {
  style?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  if (style == "normal" || !style) {
    return (
      <button
        className={`bg-primary py-2 px-8 w-fit rounded-full hover:bg-primary/80 cursor-pointer font-bold ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (style == "outline") {
    return (
        <button className={`bg-transparent py-2 px-8 w-fit rounded-full border-2 border-primary cursor-pointer text-primary font-bold ${className}`} onClick={onClick}>
            {children}
        </button>
    );
  }
}
