import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import apiClient from "./client";
import { ApiError } from "./types/errors.types";
import {
  CityList,
  CreateCityListInput,
  UpdateCityListInput,
} from "./types/api.types";

export const useAllLists = (): UseQueryResult<
  CityList[],
  AxiosError<ApiError>
> => {
  return useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const { data } = await apiClient.get<CityList[]>("/lists");
      return data;
    },
  });
};

export const useCityListById = (
  id: string
): UseQueryResult<CityList, AxiosError<ApiError>> => {
  return useQuery({
    queryKey: ["lists", id],
    queryFn: async () => {
      const { data } = await apiClient.get<CityList>(`/lists/${id}`);
      return data;
    },
    enabled: !!id,
  });
};

export const useCreateCityList = (): UseMutationResult<
  CityList,
  AxiosError<ApiError>,
  CreateCityListInput
> => {
  return useMutation({
    mutationFn: async (data) => {
      const { data: responseData } = await apiClient.post<CityList>(
        "/lists",
        data
      );
      return responseData;
    },
  });
};

export const useUpdateCityList = (
  id: string
): UseMutationResult<CityList, AxiosError<ApiError>, UpdateCityListInput> => {
  return useMutation({
    mutationFn: async (data) => {
      const { data: responseData } = await apiClient.put<CityList>(
        `/lists/${id}`,
        data
      );
      return responseData;
    },
  });
};

export const useDeleteCityList = (): UseMutationResult<
  void,
  AxiosError<ApiError>,
  string
> => {
  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/lists/${id}`);
    },
  });
};
