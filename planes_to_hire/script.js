function minPlanesToReachEnd(fuelArray) {
    const N = fuelArray.length;
    let currentRange = 0;
    let planesHired = 0;
    let index = 0;
    let maxHeap = [];

    while (currentRange < N - 1) {
        // Push all available fuel in the max heap from reachable airports
        while (index <= currentRange && index < N) {
            maxHeap.push(fuelArray[index]);
            maxHeap.sort((a, b) => b - a); // Simulating a max heap
            index++;
        }

        // If no more fuel available, return -1
        if (maxHeap.length === 0) return -1;

        // Hire the plane with maximum fuel
        currentRange += maxHeap.shift();
        planesHired++;
    }

    return planesHired;
}

// **Example Test Cases**
console.log(minPlanesToReachEnd([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToReachEnd([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
console.log(minPlanesToReachEnd([1, 0, 0, 0])); // Output: -1
