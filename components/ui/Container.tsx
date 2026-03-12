export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full px-5 xl:px-20">
      {children}
    </div>
  );
}