#include <iostream>

int opposite(int number) { return number *= -1; }

int main(int argc, char *argv[]) {
  std::cout << opposite(1) << std::endl;
  std::cout << opposite(14) << std::endl;
  std::cout << opposite(-34) << std::endl;
  return 0;
}
