interface IHeading {
  children: React.ReactNode;
}

export function Heading({ children }: IHeading) {
  return <h1>{children}</h1>;
}
