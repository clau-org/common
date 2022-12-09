// deno-lint-ignore-file
export type ResultOptions = {
  success: boolean;
  data: any;
  errors: any[];
};

/** Class representing a result. */
export default class Result {
  success: boolean;
  data: any;
  errors: any[];

  /**
   * Create a result.
   * @param {object} options - The options
   */
  constructor(options?: ResultOptions) {
    this.success = options?.success ?? false;
    this.data = options?.data ?? null;
    this.errors = options?.errors ?? [];
  }
}
