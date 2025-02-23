import { FC } from "react";
import { useDraft } from "../hooks/useDraft";

export const TestComponent: FC = () => {
  const { data: status } = useDraft();
  console.log(status);

  return <></>
}