/*

HackerRank URL : https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem?isFullScreen=false

David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

David wants to perform some number of swap operations such that:

Each container contains only balls of the same type.
No two balls of the same type are located in different containers. 

----------------------------------------------------------------------------------------------------------------

Function Description

Complete the organizingContainers function in the editor below.

organizingContainers has the following parameter(s):

int containter[n][m]: a two dimensional array of integers that represent the number of balls of each color in each container
Returns

string: either Possible or Impossible
*/

/*
 Complete the 'organizingContainers' function below.
 The function is expected to return a STRING.
 The function accepts 2D_INTEGER_ARRAY container as parameter.
*/

function organizingContainers(container) {
  // Count the number of balls in each containers
  const containedBalls = container.map((c) => c.reduce((a, b) => a + b));

  // Create an empty of the same size as the global container array and fill it with 0
  const ballsTypes = Array.from({ length: container.length }).fill(0);

  // Get the number of balls from each types
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container[i].length; j++) {
      ballsTypes[j] += container[i][j];
    }
  }

  // If the numbers of balls stored in each container exactly match the number of balls found per type, it's possible
  // to sort containers with only balls of the same types, if not, return "Impossible"
  return containedBalls.sort().every((n, i) => n === ballsTypes.sort()[i])
    ? "Possible"
    : "Impossible";
}
