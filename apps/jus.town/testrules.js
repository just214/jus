const eslint = require("eslint");

// Create an ESLint class instance
const linter = new eslint.ESLint();

// Get all rules and their metadata
const rules = linter.getRules();

// Extract the rule metadata into an array
const ruleArray = Object.entries(rules).map(([ruleId, rule]) => ({
  ruleId,
  description: rule.meta.docs.description,
  category: rule.meta.docs.category,
  recommended: rule.meta.docs.recommended,
}));

// Log the rule array
console.log(ruleArray);
