// deno-lint-ignore-file
import { assertEquals } from "../deps.ts";
import { Result, ResultOptions } from "../mod.ts";

Deno.test("Test 'Result' class ", async (t) => {
  await t.step("Test default values", async () => {
    // Create new instance with no default values
    const resultDefault = new Result();

    assertEquals(resultDefault.success, false);
    assertEquals(resultDefault.errors.length, 0);
    assertEquals(resultDefault.data, null);

    // Create new instance with default values
    const options: ResultOptions = {
      success: true,
      errors: ["TEST"],
      data: {
        test: true,
      },
    };

    const result = new Result(options);

    assertEquals(result.success, true);
    assertEquals(result.errors.length, 1);
    assertEquals(result.data.test, true);
  });

  await t.step("Test success 'false'", async () => {
    // Create new instance
    const result = new Result();
    result.success = false;
    result.errors.push("TEST");

    assertEquals(result.success, false);
    assertEquals(result.errors.length, 1);
    assertEquals(result.data, null);
  });

  await t.step("Test success 'true'", async () => {
    // Create new instance
    const result = new Result();
    result.success = true;
    result.data = {
      test: true,
    };

    assertEquals(result.success, true);
    assertEquals(result.errors.length, 0);
    assertEquals(result.data.test, true);
  });
});
