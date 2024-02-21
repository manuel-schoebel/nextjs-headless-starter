interface IText {
  children: React.ReactNode;
}

export function Text({ children }: IText) {
  return <p>{children}</p>;
}
