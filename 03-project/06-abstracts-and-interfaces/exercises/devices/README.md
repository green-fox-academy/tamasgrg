# Model devices

We need to model several devices. The class diagram should look like this:
[Devices](../assets/devices.png)

- Scanner
  - class member:
    - _speed: int
  - constructor that gets an integer and assigns speed with it
  - scan() function which prints: "I'm scanning a document speed() ppm" to the
    console
- Printer(abstract)
  - getSize() pure virtual function
  - print() function that writes "I'm printing something that's getSize() cm."
- Printer2D
  - class member:
    - _sizeX: int
    - _sizeY: int
  - constructor that gets 2 integers and assigns sizeX and sizeY with it
  - override getSize() function that returns a string which looks like:
    "_sizeX + X + _sizeY";
- Printer3D
  - class member:
    - _sizeX: int
    - _sizeY: int
    - _sizeZ: int
  - constructor that gets 3 integers and assigns sizeZ, sizeY and sizeZ with it.
  - override getSize() function that returns a string which looks like:
    "_sizeX + X + _sizeY + X + _sizeZ"
- Copier
  - constructor that gets 3 integers and assigns sizeX, sizeY and speed with it.
  - copy() function that prints the following to the console: "scan() + and +
    print()".

```c++
#include <iostream>

int main( int argc, char* args[] )
{
  // Create a vector that holds Printer* objects
  // Fill the vector with 3 Printer2D, 2 Printer3D and 1 copier.
  // Iterate through the vector and invoke print function on all of them.

  // Create a vector that holds Scanner* objects
  // Fill the vector with 2 Scanner and 2 Copier objects.
  // Iterate through the vector and invoke scan function on all of them

  // Create a Copier object and invoke copy function on it.
}
```
