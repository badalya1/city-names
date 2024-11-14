import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";

import { queryClient } from "@/main";
import { AxiosError } from "axios";
import apiClient from "./client";
import { ApiError } from "./types/errors.types";
import { City, CreateCityInput, UpdateCityInput } from "./types/api.types";
import { toast } from "@/hooks/use-toast";

export const useCities = (): UseQueryResult<City[], AxiosError<ApiError>> => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const { data } = await apiClient.get<City[]>("/cities");
      return data;
    },
  });
};

export const useCity = (
  id: string
): UseQueryResult<City, AxiosError<ApiError>> => {
  return useQuery({
    queryKey: ["city", id],
    queryFn: async () => {
      const { data } = await apiClient.get<City>(`/cities/${id}`);
      return data;
    },
  });
};

export const useCreateCity = (): UseMutationResult<
  City,
  AxiosError<ApiError>,
  CreateCityInput
> => {
  return useMutation({
    mutationFn: async (cityData) => {
      const { data } = await apiClient.post<City>("/cities", cityData);
      return data;
    },
  });
};

export const useUpdateCity = (
  id: string
): UseMutationResult<City, AxiosError<ApiError>, UpdateCityInput> => {
  return useMutation({
    mutationFn: async (cityData) => {
      const { data } = await apiClient.put<City>(`/cities/${id}`, cityData);
      return data;
    },
  });
};

export const useDeleteCity = (): UseMutationResult<
  void,
  AxiosError<ApiError>,
  string
> => {
  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/cities/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
      toast({
        variant: "success",
        title: "Successfully deleted city",
        description: "The city you deleted has been removed from the list.",
      });
    },
    onError: (err) => {
      console.log(err);
      toast({
        variant: "error",
        title: "Failed to delete city",
        description: err.response?.data.message,
      });
    },
  });
};
