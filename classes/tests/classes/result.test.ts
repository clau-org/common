import { Result } from "../../src";

describe("Test 'Result' class ", () => {
  test("Test default values", async () => {
    // Create new instance with default values
    const resultDefault: any = new Result();

    // Success false
    expect(resultDefault.success).toEqual(false);

    // 0 errors
    expect(resultDefault.errors.length).toEqual(0);

    // null data
    expect(resultDefault.data).toEqual(null);
    
    // Empty message
    expect(resultDefault.message).toEqual('');

    // Create new instance with default values
    const result: Result = new Result({
      success: true,
      errors: ["TEST"],
      data: {
        test: true,
      },
      message: "TEST",
    });

    // Success true
    expect(result.success).toEqual(true);

    // 1 errors
    expect(result.errors.length).toEqual(1);

    // data.test true
    expect(result.data.test).toEqual(true);
    
     // data.message "TEST"
    expect(result.data.message).toEqual("TEST");
  });

  test("Test success 'false'", async () => {
    // Create new instance
    const result: Result = new Result();

    // Set success to false
    result.success = false;
    result.errors.push("TEST");

    // Success false
    expect(result.success).toEqual(false);

    // 1 errors
    expect(result.errors.length).toEqual(1);

    // data null
    expect(result.data).toEqual(null);
    
    // Empty message
    expect(result.message).toEqual('');
  });

  test("Test success 'true'", async () => {
    // Create new instance
    const result: Result = new Result();

    // Set success to true
    result.success = true;

    // Set data
    result.data = {
      test: true,
    };

    // Success false
    expect(result.success).toEqual(true);

    // 0 errors
    expect(result.errors.length).toEqual(0);

    // data null
    expect(result.data.test).toEqual(true);
    
    // Empty message
    expect(result.message).toEqual('');
  });
});
