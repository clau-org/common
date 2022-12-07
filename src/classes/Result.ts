// deno-lint-ignore-file
/**
 * Simple result class
 * success: boolean -> if worked or not
 * data: object -> if worked object else null
 * errors: array -> if worked empty array else errors in order
 */
export default class Result {
  success: boolean;
  data: any;
  errors: any[];

  constructor(options?: any) {
    this.success = options?.success ?? false;
    this.data = options?.data ?? null;
    this.errors = options?.errors ?? [];
  }
}
