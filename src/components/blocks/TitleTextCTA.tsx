import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

interface ITitleTextCTA {
  title: string;
  text: string;
  buttonText: string;
}

export function TitleTextCTA({ title, text, buttonText }: ITitleTextCTA) {
  return (
    <div>
      <Heading>{title}</Heading>
      <Text>{text}</Text>
      <Button>{buttonText}</Button>
    </div>
  );
}
