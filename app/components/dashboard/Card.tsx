type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="p-3 rounded-xl w-full h-full bg-white">{children}</div>
  );
};

export default Card;
