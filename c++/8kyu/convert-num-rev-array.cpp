#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

std::vector<int> digitize(unsigned long n)
{
  std::string n_str = std::to_string(n);
  std::vector<int> n_arr;

  for (char digit : n_str)
  {
    n_arr.push_back(std::stoi(std::string(1, digit)));
  }

  std::reverse(n_arr.begin(), n_arr.end());
  return n_arr;
}

int main() 
{
  std::vector<int> rev_vec = digitize(35231);

  for (int num : rev_vec)
  {
    std::cout << num << std::endl;
  }
  return 0;
}

