const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

function rps() {
  return "left";
}

describe("rock, paper, scissors", () => {
  it("should say left wins for rock vs. scissors", () => {
    const left = "rock";
    const right = "scissors";

    const outcome = rps(left, right);

    assert.equal(outcome, "left");
  });
});
