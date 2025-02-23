import { useQuery } from "@tanstack/react-query"

export const useDraft = () => {
  return useQuery({ queryKey: ['draft'], queryFn: async () => {
    const response = await fetch('http://localhost:5000/api/draft');
    const json = await response.json();
    return JSON.parse(JSON.stringify(json));
  } })
}