# Model a wireless adapter

We need to create a class hierarchy like this:
[Wireless Adapter](../assets/wireless_adapter.png)

- Device
  - class member:
    - _id: int
  - constructor that gets an integer and assigns id with it
  - getID() function that returns the id
- USBDevice
  - class member:
    - _usbType: int
  - constructor that gets 2 integers and assigns id and usbType with it
- NetworkDevice
  - class member:
    - _bandwidth: int
  - constructor that gets 2 integers and assigns id and bandwidth with it
- WirelessAdapter
  - constructor that gets 3 integers and assigns id, usbType and bandwidth with
    it
  - info() function that prints the id, usbType and bandwidth to the console

As you can see the class hierarchy forms a diamond. With normal inheritance this
would mean that WirelessAdapter class has 2 _id member because it inherits one
from the USBDevice and one from NetworkDevice. In order to ensure the
WirelessAdapter class has only one _id member you need to use virtual
inheritance.

```c++
#include <iostream>

int main( int argc, char* args[] )
{
  WirelessAdapter adapter(0, 2, 100);
  adapter.info();
}
```
