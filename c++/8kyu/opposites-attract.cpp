#include <iostream>

bool lovefunc(int f1, int f2) {
  int result;
  result = f1 % 2 != f2 % 2;
  if (result == 1) {
    return true;
  } else {
    return false;
  }
}

int main() {
  std::cout << lovefunc(4, 5) << std::endl;
  return 0;
}

