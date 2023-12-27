---
title: "Must know Topics of Object Oriented Programming"
date: 2023-12-27
id: 35
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

## Advantages and application of OOP

- There are so many advantages of OOP here are few of them,
  - Code reusability:
    - OOP code is something which can reused in any other OOP program that program will run and compile successfully\*.
  - OOP functions:
    - OOP supports advances processes and functions like Data hiding, Dynamic binding, Polymorphism, Inheritance
  - Troubleshooting:
    - Because OOP is divided into classes and objects it’s easier to troubleshoot the code.
  - Security:
    - OOP has better security function for data or variables in code.

## Structure of C++ Program

- Here is the basic structure for mostly any C++ program

```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 10;
	cout<<a;
	return 0;
}
```

- Header files:
  - `#include <iostream>`
  - This is a header file which is used to include external functions in program. There are so many of these header files we can use any according to our need.
- Main function:
  - `int main(){
// Code
}`
  - This is main function where all the code should be written or defined. Our program can’t run without main function.
- Variables:
  - `int a = 10;`
  - This is a variable which basically stores value for something in something.
  - In this example we have stored 10 as value in variable named a.
- Input/Output files:
  - `cout<<a`
  - To print any output in console we can use `cout<<` or to take any input from user we can use `cin>>`
  - In this example we are using output so we used `cout<<a` and just like that we’re printing value of a.
- Return 0:
  - `return 0`
  - We used return statement and this is used to return any information or variables from function.
  - We cannot use this statement in any void functions.
  - If we’re using `int main()` we are required to return something if nothing then return 0;

## Basic data types

- There are three types of datatypes:
  1. Primitive datatypes.
     - These are the types of datatypes which are default included in c++
       - int
       - boolean
       - float
       - string
       - character
  2. Derived datatypes.
     - These are the types of datatypes which are derived from primitive or built from primitive datatypes.
       - Functions
       - Arrays
       - Pointers
  3. User-defined datatypes.
     - These are custom datatypes which are defined by a particular user.
       - Class
       - Structure
       - Union

## User defined data types and derived data types

- Derived datatypes:

  1. Functions

     - These are the type of datatypes which are used when our program is big and we need to make it easier so we divide it into multiple blocks which are called functions and than we can define those functions and call them into main function.

     ```cpp

     int sum(); //declaration

     int main()
     {
     	a = sum(x,y); //calling function
     	return 0;
     }

     int sum(int a, int b){ //defining function
     	return a+b;
     }
     ```

  2. Arrays

  - Array is just collection of similar types of datatypes. we use arrays when we need to define multiple amount of variable with same datatype.

  ```cpp
  int arr[] = {10,20,30,40,50} // here we defined 5 variables with same datatype int.
  ```

  1. Constant

     - Constant is a keyword which is used to make variable constant which means value of variable doesn’t change while or after or before compiling the program. the value of constant remains same.

     ```cpp
     const int a = 39; // the value of int a cannot be changed dynamically
     ```

  2. Pointers

     - Pointers are just another datatypes which are used to target the memory location of particular variable
     - using pointers we can directly work on memory level for variables.

     ```cpp
     int a = 10;
     int *ptr;
     ptr = &a;
     ```

- User defined datatypes:

  1. Class

     - Class is collection of multiple objects.
     - It represent similar types of objects.

     ```cpp
     class student{
     	string name; // objects
     	int enroll_no; // objects
     	int year; // objects
     };
     ```

  2. Structure

     - It is collection of different datatypes.

     ```cpp
     struct student{
     	string name;
     	int roll_no;
     	int year;
     };
     ```

  3. Union

     - Union is similar to structure but it shares the same memory location of definition.

     ```cpp
     union share{
     	int a;
     	char ch;
     };

     Union share c;
     ```

## Reference variable

Reference variable:

- Basically reference variable means alias to existing variable.
- It gives another name to an existing variable.
- Which means both of the variables one existing and another reference will share same variable mean both are just single variable.
- Whenever value of variable will be changed it will make changes on both of the variable.
- We cannot give NULL value to reference variable.
- You cannot have reference to reference.
- They are easy.

```cpp
	int x = 1;
	int *pX = &x;
	*pX = 5 // x = 5
```

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

## Function overloading and friend function

Function overloading:

- When any program has two or more functions with same name but with different types or parameters is called \***\*\*\*\***“Function Overloading”.\***\*\*\*\***
- There’s a catch that when there are two functions with same name they must have different parameters in them. two functions with same name cannot have same parameters.

```cpp
int sum(int a, int b){
	return a+b;
}

int sum(double a, double b){
	return a+b;
}

int main(){
	sum(10,10); /* Here because we gave integer parameters it will call the
function which has integer args. */
	sum(4.2,6.3); /* And here we gave point value double value it will call
 function which has double args. */
}

/* Output:
	20
	10.5
*/
```

Friend function:

- It is a type of function which can access value of private or protected without even being member of class.
- Friend function is declared in class with friend keyword.
- Friend function can become friend to more than one class.

Syntax:

```cpp
friend data_type name(){
//code
}
```

## Array

- Array is basically collection of similar types of datatypes.
- ex:
  `{1,2,3}` ✅ (This is valid array, all integers)
  `{’c’,’d’,’h’,’k’}` ✅ (This is valid array, all characters)
  `{234,6.3,’s,”hello”}` ❌ (This isn’t valid array cause there are multiple datatypes)
- Array index starts from 0.
  - `int arr[4] = {1,2,3,4}`
    - 0 index = 1
    - 1 index = 2
    - 2 index = 3
    - 3 index = 4

Syntax:

- `datatype arrayName[size];`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de64b779-33ed-4f9b-a390-d72007222cf7/Untitled.png)

## Characteristics of Constructor and Destructor

Constructor:

- It is special type of function which has same name as class.
- Constructor is called automatically when an object is created.
- Return type of constructor is same as class type.

Destructor:

- Destructor is used to deallocate the memory which was created by constructor.
- Destructor is special member function.
- It is executed automatically when an object is destroyed that has been created by constructor.
- Destructor declaration should always begin with tilde sign `~`

Example of constructor and destructor:

```cpp
#include <iostream.h>
#include <conio.h>

class test
{
	public:
		test(){
				cout<<"Constructor started";
		}
		~test(){
				cout<<"Destructor started";
		}
};

int main(){
	test obj;
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
     class_name(class_name &var){
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
     		A(A &ref){
     			a = ref.a;
     			b = ref.b;
     		}

     		void show(){
     			cout<<a<<" "<<b;
     		}
     };

     int main(){
     		A obj(10,20);
     		A obj2=obj;
     		obj.show();
     		obj2.show();
     }

     /* OUTPUT:
     		10 20
     		10 20
     */
     ```

## Definition of public private protected and ambiguity

- Public:
  - members can be accessed outside of the class
- Private:
  - Members cannot be accessed directly outside of the class we can use functions like friend function to access them.
- Protected:
  - Members cannot be accessed no matter what. they can be accessed in inherit class.
- Example:

  ```cpp
  class MyClass {
    public:    // Public access specifier
      int x;   // Public attribute
    private:   // Private access specifier
      int y;   // Private attribute
  };

  int main() {
    MyClass myObj;
    myObj.x = 25;  // Allowed (public)
    myObj.y = 50;  // Not allowed (private)
    return 0;
  }
  ```

## Inheritance and types of inheritance

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

## Virtual base class

- Virtual base class is used to overcome issue of diamond problems. :) idk
  ![Here in this diagram if notice closely data of `Students` is inherited into `Exams` and also into `Projects`.  Data of `Exam` and `Projects` is being inherited into `Results`. So basically what we can say is the data from `Student`Is inherited twice into `Results` right? like `Results` got two copies of data from `Student`. So in this case while compiling, compiler confuses which data it should process on and at last it gives us an error. To avoid this sorta problem we use ******************************************************Virtual base class******************************************************.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d3060760-d06b-483d-a1a6-632d89c480d3/Untitled.png)
  Here in this diagram if notice closely data of `Students` is inherited into `Exams` and also into `Projects`. Data of `Exam` and `Projects` is being inherited into `Results`. So basically what we can say is the data from `Student`Is inherited twice into `Results` right? like `Results` got two copies of data from `Student`. So in this case while compiling, compiler confuses which data it should process on and at last it gives us an error. To avoid this sorta problem we use \***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***Virtual base class\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***.
- Syntax:

```cpp
class Student{
//code
};

class Exam:virtual public Student{
//code
};

class Project:virtual public Student{
//code
};

class Result: public Exam, public Project{
// only one copy of student data will be inherited
//code
};
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

## Polymorphism

Polymorphism:

- Polymorphism word is made with two words poly which means many and morphism which means form. Same object with different behaviour.
- Basically polymorphism means many forms.
- When single function can work in many forms it is know as polymorphism.
- For example:
  - A men can be Father, Teacher, Friend at the same time. here Men is single thing but can work in many forms.
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f6f99ed-aba0-4157-bc75-0c795bd2e2bc/Untitled.png)
- There are two types of polymorphism
  1. Compile time polymorphism
     - A compile time polymorphism is type of polymorphism which is worked in compile time.
     - It is also known as static polymorphism and early binding polymorphism
     - Example:
       - Method overloading.
       ```cpp
       void add (int x, int y){
       //code
       }
       void add (int x, float y){
       //code
       }
       ```
  2. Runtime polymorphism
     - A Polymorphism which is achieved by runtime is called “\***\*\*\*\***Runtime Polymorphism\***\*\*\*\***”.
     - It is also known as dynamic polymorphism
     - Example:
       - Method overriding.
       ```cpp
       void add () //base class
       {
       }
       voi add () //derived
       {
       }
       ```
