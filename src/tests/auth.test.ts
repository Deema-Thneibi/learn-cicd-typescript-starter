import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns API key when valid authorization header is provided", () => {
    const headers = {
      authorization: "ApiKey 12345",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("12345");
  });

  test("returns null when no authorization header is provided", () => {
    const headers = {};

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null when authorization header does not start with ApiKey", () => {
    const headers = {
      authorization: "Bearer 12345",
    };

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
