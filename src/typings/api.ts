export interface APIResponse<T> {
  data: T;
  isPending: boolean;
  error: string | null;
}
