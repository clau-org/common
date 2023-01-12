/** Class representing a result. */
export default class Result {
  success: boolean;
  data: any;
  errors: any[];
  /**
   * Create a result.
   * @param {object} options - The options to initialize the result.
   */
  constructor(options?: any) {
    // Default values
    this.success = options?.success ?? false;
    this.data = options?.data ?? null;
    this.errors = options?.errors ?? [];
    this.message = options?.message ?? "";
  }
}
