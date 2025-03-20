# Assignment - Customize Umbrella & Planes to Hire

## 🚀 Overview
This repository contains two simple assignments:

1. **Customize Umbrella** - A web tool that allows users to customize an umbrella by uploading a logo and selecting different colors.
2. **Planes to Hire** - Another assignment located inside this repository.

## 🎨 Customize Umbrella
This project enables users to preview their uploaded logo on an umbrella with three color options: **Pink, Blue, and Yellow**.

🔗 **Live Demo:** [Check it out here](https://vikaschouhan97.github.io/starapps/)

## ✈️ Planes to Hire
This assignment is included inside this repository under the folder **planes_to_hire**. Please explore it for more details.

### 🧑‍💻 Explanation of the Algorithm:
#### **Planes to Hire Algorithm**

1. **Initialize Variables:**
   - `currentRange`: Tracks how far we can reach with hired planes.
   - `planesHired`: Keeps count of the number of planes hired.
   - `index`: Keeps track of the airport being processed.
   - `maxHeap`: A max heap (array sorted in descending order) to store fuel availability from reachable airports.

2. **Loop Until We Reach the Last Airport:**
   - Add all reachable airports' fuel to `maxHeap`.
   - If `maxHeap` is empty and we haven't reached the last airport, return `-1` (impossible to reach).

3. **Hire the Plane with Maximum Fuel:**
   - Take the maximum available fuel from `maxHeap` and extend our range.

4. **Continue Until the Last Airport is Reached:**
   - Repeat the process until we reach the last airport.

### ⏱️ **Time Complexity Analysis:**
- Heap operations (sorting each time): **O(N log N)**
- Loop through airports: **O(N)**
- **Overall Complexity:** **O(N log N)**

## 📂 Repository Structure
```
📁 repository-root
 ├── 📄index.html
 ├── 📄styles.css
 ├── 📄script.js
 ├── 📁 planes_to_hire
 ├── 📄 README.md
```

## 🛠️ How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/vikaschouhan97/starapps.git
   ```
2. Open the respective project folder and `index.html` in your browser.

