const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

function rps(left) {
  return left === "rock" ? "left" : "right";
}

describe("rock, paper, scissors", () => {
  it("should say left wins for rock vs. scissors", () => {
    const left = "rock";
    const right = "scissors";

    const outcome = rps(left, right);

    assert.equal(outcome, "left");
  });

  it("should say right wins for scissors vs. rock", () => {
    const left = "scissors";
    const right = "rock";

    const result = rps(left, right);

    assert.equal(result, "right");
  });
});
