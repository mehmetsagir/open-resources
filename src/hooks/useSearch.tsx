import { useEffect, useState } from 'react';

import { Order, Sort } from '../types/search';

type Type = 'repositories';

type Params = {
  page?: number;
  per_page?: number;
  sort?: Sort | undefined;
  order?: Order | undefined;
};

type Props = {
  type: Type;
  searchText: string | undefined;
  codeRequired?: boolean | undefined;
  params?: Params;
  enabled: boolean;
  onSuccess: (data: any) => void;
  onError?: (err: any) => void;
};

const useSearch: React.FC<Props> = ({
  type,
  searchText,
  codeRequired,
  params: queryParams,
  enabled,
  onSuccess,
  onError,
}) => {
  const [perPage, setPerPage] = useState(30);
  const baseURL = `https://api.github.com/search/${type}`;

  const params = new URLSearchParams();
  if (searchText) params.append('q', searchText);

  params.append('per_page', String(perPage));

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]: any) => {
      if (value) params.append(key, value);

      if (key === 'per_page') {
        setPerPage(value);
      }
    });
  }

  const handleSearch = async () => {
    try {
      const data = await fetch(`${baseURL}?${params.toString()}`);
      const json = await data.json();

      if (codeRequired && json.items.length > 0) {
        json.items = json.items.filter((item: any) => item.language);
      }

      onSuccess(json);
    } catch (err) {
      onError?.(err);
    }
  };

  useEffect(() => {
    if (searchText && enabled) {
      handleSearch();
    }
  }, [searchText, enabled, queryParams?.page]);

  return null;
};

export default useSearch;
