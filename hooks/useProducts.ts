"use client";

import { useState, useEffect, useCallback } from "react";
import { apiClient, Product, GetProductsParams } from "../lib/api-client";

export function useProducts(initialParams: GetProductsParams = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<GetProductsParams>(initialParams);

  const fetchProducts = useCallback(
    async (currentParams: GetProductsParams) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await apiClient.getProducts(currentParams);
        if (response.error) {
          setError(response.error);
          setProducts([]); // Clear products on error
        } else if (response.data) {
          setProducts(response.data);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Initial fetch when the component mounts
  useEffect(() => {
    fetchProducts(params);
  }, [fetchProducts, params]);

  // This function allows the component to trigger a refetch with new parameters
  const refetch = (newParams: GetProductsParams) => {
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  return { products, isLoading, error, refetch, params };
}
