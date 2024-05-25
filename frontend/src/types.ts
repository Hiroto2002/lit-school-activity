export type DbResponse<T> = {
  data: T;

  message: string;
  status: number;
};
