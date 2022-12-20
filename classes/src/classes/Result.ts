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
    // Default to false
    this.success = options?.success ?? false;

    // Default to null
    this.data = options?.data ?? null;

    // Default to empty
    this.errors = options?.errors ?? [];
  }
}
