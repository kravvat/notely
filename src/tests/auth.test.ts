import { describe, expect, test } from "vitest"
import { IncomingHttpHeaders } from "http"
import { getAPIKey } from "../api/auth.js"

describe("getAPIKey", () => {

  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {}

    const result = getAPIKey(headers)

    expect(result).toBeNull()
  })
})
