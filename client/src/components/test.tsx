import { FC } from "react";
import { useApiStatus } from "../hooks/useApiStatus";

export const TestComponent: FC = () => {
  const { data: status } = useApiStatus();
  console.log(status);

  return <></>
}