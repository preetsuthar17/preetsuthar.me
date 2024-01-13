---
title: "Important Topics of Object Oriented Programming"
date: 2023-12-27
id: 34
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OOP
---

## Difference between POP and OOP

| POP                                                                          | OOP                                            |
| ---------------------------------------------------------------------------- | ---------------------------------------------- |
| Procedure Oriented Programming                                               | Object Oriented Programming                    |
| Top to bottom approach                                                       | Bottom to top approach                         |
| Divided into functions                                                       | Divided into classes and object                |
| Is slower than OOP                                                           | Is faster than POP                             |
| Doesn’t support polymorphism                                                 | Supports polymorphism                          |
| Doesn’t support advance functionality like data abstraction and inheritance. | Does support data abstraction and inheritance. |
| Code reusability isn’t supported                                             | Code can be reused multiple times              |
| ex: C, Pascal                                                                | ex: C++, Java                                  |

## Basic concepts of OOP

There are five basic concepts of OOP:

1. Class

   - It is collection of object.
   - it is passive entity

   ```cpp
   class cars{
    bmw;
    audi;
    tata;
   };

   // In this example cars is an class
   ```

2. Objects

   - It is instance of an class
   - It is active entity

   ```cpp
   class cars{
    bmw;
    audi;
    tata;
   };

   // In this example cars is an class and bmw, audi and tata are objects
   ```

3. Inheritance

   - It is function where child class can acquire properties of parent class.
   - Inheritance has multiple types:

     - Single level inheritance.
     - Multilevel inheritance.
     - Multiple inheritance.
     - Hybrid inheritance.
     - Hierarchical inheritance.

     ```cpp
     class Person{
      public:
       string name;
       int age;
      class Person1
       {
        Person p;
        p.name = "Rahul";
        p.age = 30
       }
     }

     // In above example Person is parent class and Person1 is child class
     // where child is acquiring properties from parent class.

     ```

4. Polymorphism
   - In this Poly means **\*\*\***“many”**\*\*\*** and Morphism means **“Forms”**
   - Polymorphism basically means that a single function can do action in many forms.
   - For example:
     - A men can be Father, Friend, Employee at the same according to the situation.
5. Data Abstraction
   - C++ supports data abstraction which basically hides the process happening in the background after running the code.
   - For example:
     - Cell phones, we call using them but we cannot see the background process that works behind making the call sharing receiving the signals and all.
6. Dynamic binding
   - Dynamic binding basically combines multiple functions and classes into single unit.
   - For example:
     - A medicine capsule, It has multiple types of medicines combined in single capsule.
7. Message Passing.
   - Message passing means when two objects communicate with each other and share messages it’s called “Message Passing”.

## Scope resolution operator

- This operator is used to target global variables in your program.
- When there are two variables with same name but one is global and another is local. we can use Scope resolution operator to target global variable and print the value of that global variable.
- We can use \***\*`::`\*\*** to target scope resolution operator.

```cpp
int a = 10; //global variable

int main(){
 int a = 9; //local variable
 cout<<::a;
 return 0
}

//output
10

/* The output is global variable because we used scope resolution operator,
/ Which targets the variable outside of main function */
```

## Call by reference and return by reference

Call by reference:

- In call by reference both the actual parameters refers to same memory location. So if any one parameter or value changes it will affect both the parameters.
- Here we pass addresses.

```cpp
int main(){
 int x = 10, y = 20;
 sum(&x, &y)
}

int sum(int *ptr1, int *ptr2){ // we use pointers here because we are working on memory level.
 *ptr1 = 20;
 *ptr2 = 10;
}

/* These & are called address of operators.
Using these means we are directly targetting the address of the operator.*/

```

Return by reference:

- Return by reference means any function which returns reference it’s return the reference of function. We can return any value and it can be manipulated outside.

```cpp
//Example:

int a = 10;

int &ref(){
 return a; // this variable must be global
}

int main(){
 ref()=9; // changing the value of function
 cout<<ref();
 return 0;
}

//Output:
/*
9
*/
```

## Inline function, Default argument

Inline function:

- Basically inline function is type of function, when used it reduces the compile time for program.

```cpp
inline sum(int a, int b){
 return a+b;
}
```

- Here we made an inline function named sum which just returns the sum of two variables.
- Now whenever someone calls this inline function `sum()` what it will do is just while compiling it will replace the function call `sum()` to the code we placed inside in this case it will replace `sum()` to `a+b` corresponding to variables.
- Soo inline functions are used to decrease the compiling time.
  - Use of inline functions is limited it can be only used when there isn’t any complex function creation. It cannot work for loops, complex process or anything else complex things. It can be only used for basic functionality like addition, multiplication or maybe printing anything in terminal etc.

Default Arguments:

- These are the arguments we provide while making a function by default.
- These are the arguments that we don’t need to define while calling the function.

```cpp
int sum(int a, int b = 10)
{
 return a+b;
}

int main(){
 sum(10);
}

```

## Types of Constructor mainly three types ( Default , parameterized , copy )

- There are three types of constructor:

  1. Default constructor.

     - A constructor that accepts no parameters is called default constructor.
     - Syntax

     ```cpp
     class_name(){
      // code
     }
     ```

  2. Parameterized constructor.

     - A constructor that accepts or receive parameters is called parameterized constructor.
     - Syntax

     ```cpp
     class_name(para1,para2,...)
     {
     //code
     }
     ```

     - Example:

     ```cpp
     #include <iostream>

     class A{
      private:
       int a,b;
      public:
       A(int x, int y){
        a=x;
        b=y;
       }
       void show(){
        cout<<a" "b;
       }
     };

     int main()
     {
      A obj(10,20);
      obj.show();
     }

     /* Output:
       10,20 */
     ```

  3. Copy constructor.

     - It is used to copy or initialize the value of one object into another object.
     - Syntax:

     ```cpp

     ```

## Inheritance

- Inheritance:
  - It is type of function where child class can acquire properties of the parent class.
- There are 5 types of inheritance,

  1. Single Inheritance

     - In single inheritance there are only two classes base class and derived class.
       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eaa8ded2-35a9-4a4d-845a-d98b5f86f4eb/Untitled.png)
     - Syntax:

       ```cpp
       class A{
       //code
       };
       class B:access_specifier A{
       //code
       }
       ```

     - Example:

       ```cpp
       #include <iostream>

       using namespace std;

       class A{
        public:
         void show_a(){
          cout<<"a";
         }
       };

       class B: public A{
           public:
            void show_b(){
             cout<<"b";
            }
       };

       int main(){
        B obj;
        obj.show_a();
        obj.show_b();
       }
       ```

  2. Multilevel Inheritance

     - When one class inherits another class and that class further inherits another class is called “multilevel inheritance”.
       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cb05b47c-2d0c-492b-ad3e-09e46aae3a4c/Untitled.png)
     - Syntax:

       ```cpp
       class A{
       //code
       };
       class B:access_specifier A{
       //code
       };
       class C:access_specifier B{
       //code
       };
       ```

     - Example:

     ```cpp
     #include <iostream>

     using namespace std;

     class A{
      public:
       void show_a(){
        cout<<"a";
       }
     };

     class B: public A{
         public:
          void show_b(){
           cout<<"b";
          }
     };

     class C: public B{
       public:
        void show_c(){
         cout<<"c";
        }
     };

     int main(){
      C obj;
      obj.show_a();
      obj.show_b();
      obj.show_c();
     }
     ```

  3. Multiple Inheritance

     - When single child class can acquire properties of multiple parent class is called “multilevel inheritance”
       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5444fd1b-99a2-4ca5-8a5e-2ce33b95d449/Untitled.png)
     - Syntax:

       ```cpp
       class A{
       //code
       };
       class B{
       //code
       };
       class C{
       //code
       };
       class D:access_specifier A,access_specifier B,access_specifier C{
       //code
       };

       ```

     - Example:

     ```cpp
     #include <iostream>
     using namespace std;

     class A{
      public:
       void show_a(){
        cout<<"a";
       }
     };

     class B{
      public:
       void show_b(){
        cout<<"b";
      }
     };

     class C{
      public:
       void show_c(){
        cout<<"c";
      }
     };

     class child_class:public A, public B, public C{
      public:
       void show_out(){
        cout<<"Child Class exit";
       }
     };

     int main(){
      child_class obj;
      obj.show_a();
      obj.show_b();
      obj.show_c();
      obj.show_out();
      return 0;
     }
     ```

  4. Hierarchical Inheritance

     - When there are more than one child class which can acquire properties of single parent class is called “Hierarchical inheritance”.

     ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50cd2792-4650-4709-9c08-f7c1729c9b28/Untitled.png)

     - Syntax:

       ```cpp
       class A{
       //code
       };
       class B:access_specifier A{
       //code
       };
       class C:access_specifier A{
       //code
       };
       ```

     - Example:

       ```cpp
       #include <iostream>
       using namespace std;

       class A{
        public:
         void show_a(){
          cout<<"a";
         }
       };

       class B:public A{
        public:
         void show_b(){
          cout<<"b";
         }
       };

       class C:public A{
        public:
         void show_c(){
          cout<<"c";
         }
       };

       int main(){
        C obj;
        obj.show_a();
        obj.show_c();
        B obj2;
        obj2.show_a();
        obj2.show_b();
        return 0;
       }
       ```

  5. Hybrid Inheritance.

     - Hybrid inheritance is combination of more than one inheritance.

     ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03c99623-c3d0-4d24-9726-20e0c83cd4c6/Untitled.png)

     - Syntax:

     ```cpp
     class A{
     //code
     };

     class B:public A{
     //code
     };

     class C:public A{
     //code
     };

     class D:public B, public C{
     //code
     };
     ```

     - Example:

       ```cpp
       #include <iostream>
       using namespace std;

       class A{
        public:
         void show_a(){
          cout<<"a";
         }
       };

       class B:public A{
        public:
         void show_b(){
          cout<<"b";
         }
       };

       class C:public A{
        public:
         void show_c(){
          cout<<"c";
         }
       };

       class D:public B, public C{
           public:
               void show_d(){
                   cout<<"d";
               }

       };

       int main(){
        B obj;
        obj.show_a();
        obj.show_b();
        D obj2;
        obj2.show_b();
        obj2.show_c();
        return 0;
       }
       ```

## Pointer ( this pointer)

- In CPP this pointer hold address of current object
- This is keyword in CPP which is used to define this pointer.

```cpp
int main(){
 cname obj;
 obj.add(); //this pointer holds the address of obj
}
```

- How to access member using `this pointer`?

```cpp
m = 10
this -> m = 10;
(*this).m = 10;

// All these three are same statement and last both are this pointer statement and all these statements means m = 10;
```

- Example:

  ```cpp
  #include <iostream>

  using namespace std;

  class mobile{
      int m = 10;
      public:
          void display(){
              cout<<"m = "<<m;
              cout<<"this -> m = "<<this -> m ;
              cout<<"(*this).m ="<<(*this).m;
          }
  };

  int main(){
      mobile obj;
      obj.display();
      return 0;
  }

  /* OUTPUT:
  m=10
  this -> m=10
  (*this).m=10

  */
  ```
