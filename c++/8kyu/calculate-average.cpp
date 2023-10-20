#include <numeric>
#include <vector>
#include <iostream>

double calcAverage(const std::vector<int> &values) {
  if (values.empty()) {
    return 0;
  }

  double sum = 0;
  for (int num : values) {
    sum += num;
  }
  return sum / values.size();
}

int main() {
  std::vector<int> numbers {3, 5, 7, 9, 11};
  std::cout << calcAverage(numbers) << std::endl;
}

// note to self: could've use std::accumulate, was unsure of implementation of said function. see cppreference.com
