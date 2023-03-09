/**
 * ?: Automated testing is a one which throws an error when the expected value is not same as the actual (output) value
 */

/**Below is a simple code that shows how the testing looks like */

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

let expectedFullName = "Test FullName"; //this is passed

expectedFullName = "TestFullName"; //throws error since it is not same as the returned name from the function

const actualValue = getFullName("Test", "FullName");

if (actualValue !== expectedFullName) {
  throw new Error(`${actualValue} is not equal to ${expectedFullName}`);
}
