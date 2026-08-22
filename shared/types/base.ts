export type ISingleTonReponse<T> = {
  code: number;
  message: string;
  data: T | null;
  timestamp?: string | null;
};
