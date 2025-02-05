import { useMutation, useQuery } from "convex/react";
import { api } from "../_generated/api";

// Hook pour créer un freelance
export function useCreateFreelancer() {
  const createFreelancer = useMutation(api.freelancers.createfreelancer);
  return createFreelancer;
}

// Hook pour lister tous les freelances
export function useListFreelancers() {
  return useQuery(api.freelancers.listFreelancers);
}