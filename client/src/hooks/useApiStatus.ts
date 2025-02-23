import { useQuery } from "@tanstack/react-query"

export const useApiStatus = () => {
  return useQuery({ queryKey: ['ping'], queryFn: async () => {
    const response = await fetch('http://localhost:5000/api/ping');
    const json = await response.json();
    return JSON.parse(JSON.stringify(json));
  } })
}