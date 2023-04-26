function minimumPlanes(array) {
  let n = array.length;
  let queue = [[0, 0]];
  while (queue.length > 0) {
    let [currAirport, currPlanes] = queue.shift();
    if (currAirport === n - 1) {
      return currPlanes + 1;
    }
    for (
      let i = currAirport + 1;
      i <= Math.min(n - 1, currAirport + array[currAirport]);
      i++
    ) {
      queue.push([i, currPlanes + 1]);
    }
  }
  return -1;
}

const fuel = [2, 1, 2, 3, 1];
console.log(minimumPlanes(fuel));

const fuel2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minimumPlanes(fuel2));
