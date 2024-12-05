type CardProps = {
  children: React.ReactNode;
};
const Card = ({ children }: CardProps) => {
  return <div className="p-4 border rounded-xl w-fit">{children}</div>;
};
export default Card;
