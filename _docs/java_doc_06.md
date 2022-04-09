---
title: Java
tags: 
 - pksoooooo
 - github
description: Java Jungsuck Study
---

# 1.객체지향언어

## 1.1 객체지향언어의 역사
- 겍체지향이론의 개본 개념은 '실제 세계는 사물(객체)로 이루어져 있으며. 발생는 모든 사건들은 사물간의 상호작용이다.'라는 것이다.

## 1.2 객체지향언어

- 코드의 재사용성이 높다.
    - 새로운 코드를 작성할 때 기존의 코드를 이용하여 쉽게 작성할 수 있다.
- 코드의 관리가 용이하다.
    - 코드간의 관계를 이용해서 적은 노력으로 쉽게 코드를 변경할 수 있다.
- 신뢰성이 높은 프로그래밍을 가능하게 한다.
    - 제어자와 메서드를 이용해서 데이터를 보호하고 올바른 값을 유지하도록 하며, 코드의 중복을 제거하여 코드의 불일치로 인한 오동작을 방지할 수 있다.

<b>객체지향개념을 학습할 때 재사용성과 유지보수 그리고 중복된 코드의 제거, 이 세 가지 관점에서 보면 보다 쉽게 이해할 수 있을 것이다.</b>

# 2.클래스와 객체

## 2.1 클래스와 객체의 정의와 용도
- 클래스의 정의 : 클래스란 객체를 정의해 놓은 것이다.
- 클래스의 용도 : 클래스는 객체를 생성하는데 사용한다.
- 객체의 정의 : 실제로 존재하는 것. 사물 또는 개념
- 객체의 용도 : 객체가 가지고 있는 기능과 속성에 따라 다름
- 유형의 객체 : 책상, 의자 자동차, TV와 같은 사물
- 무형의 객체 : 수학공식, 프로그램 에러와 같은 논리나 개념

## 2.2 객체와 인스턴스
- 클래스로부터 객체를 만드는 과정을 클래스의 <b>인스턴스화</b>라고 한다
- 어떤 클래스로부터 만들어진 객체를 그 클래스의 <b>인스턴스라고<b> 한다

## 2.3 객체의 구성요소 - 속성과 기능
- 속성(property) : 멤버변수, 특성, 필드, 상태
- 기능(functiom) : 메서드, 함수, 행위

```java
//클래스
class Tv {
  //변수(속성)
  String color; //색깔
  boolean power;  //전원상태
  int channel; //채널

  //메서드(기능)
  void power()      { power = !power; }
  void channelUp()  { channel++; }
  void channelDown(){ channel--; }  
}
```

## 2.4 인스턴스의 생성과 사용
```java
class Tv {
    //변수(속성)
    String color; //색깔
    boolean power;  //전원상태
    int channel; //채널
  
    //메서드(기능)
    void power()      { power = !power; }
    void channelUp()  { channel++; }
    void channelDown(){ channel--; }
}

class TvTest { 
      public static void main(String[] args){
        Tv tv = new Tv();       // 인스턴스 참조 변수 tv선언 및 인스턴스 생
        tv.channel = 8;         // 인스턴스의 변수 channel의 값에 8넣음
        tv.color = "white";     
        tv.power = true;
        tv.channelDown();       // 인스턴스의 메서드 channelDown()을 호출
        System.out.println("Now channel : "+tv.channel);
      }
}
```
```인스턴스는 참조변수를 통해서만 다룰 수 있으며, 참조변수의 타입은 인스턴스의 타입과 일치해야한다.```

```java
class Tv {
	//변수(속성)
	String color; //색깔
	boolean power;  //전원상태
	int channel; //채널

	//메서드(기능)
	void power()      { power = !power; }
	void channelUp()  { ++channel; }
	void channelDown(){ --channel; }
}

class TvTest2 {
	public static void main(String[] args){
		Tv tv1 = new Tv();       // 인스턴스 참조 변수 tv선언 및 인스턴스 생
		Tv tv2 = new Tv();       // 인스턴스 참조 변수 tv선언 및 인스턴스 생

		System.out.println("t1 channel -> " + tv1.channel);
		System.out.println("t2 channel -> " + tv2.channel);

		tv1.channel = 7;         // 인스턴스의 변수 channel의 값에 7넣음
		System.out.println("tv1 channel 7로 변경");

		System.out.println("t1 channel -> " + tv1.channel);
		System.out.println("t2 channel -> " + tv2.channel);
	}
}

실행결과
t1 channel -> 0
t2 channel -> 0
tv1 channel 변경
t1 channel -> 7
t2 channel -> 0
```

```java
class Tv {
	//변수(속성)
	String color; //색깔
	boolean power;  //전원상태
	int channel; //채널

	//메서드(기능)
	void power()      { power = !power; }
	void channelUp()  { ++channel; }
	void channelDown(){ --channel; }
}

class TvTest3 {
	public static void main(String[] args){
		Tv tv1 = new Tv();       // 인스턴스 참조 변수 tv선언 및 인스턴스 생
		Tv tv2 = new Tv();       // 인스턴스 참조 변수 tv선언 및 인스턴스 생

		System.out.println("t1 channel -> " + tv1.channel);
		System.out.println("t2 channel -> " + tv2.channel);
		tv2 = tv1;
		tv1.channel = 7;         // 인스턴스의 변수 channel의 값에 7넣음
		System.out.println("tv1 channel 7로 변경");

		System.out.println("t1 channel -> " + tv1.channel);
		System.out.println("t2 channel -> " + tv2.channel);
	}
}

실행결과
t1 channel -> 0
t2 channel -> 0
tv1 channel 7로 변경
t1 channel -> 7
t2 channel -> 7
```
- 자신을 참조하고 있는 참조변수가 하나도 없는 인스턴스는 더 이상 사용되어질 수 없으므로 ' 가비지 컬렉터(Garbage Collector)'에 의해서 자동적으로 메모리에서 제거된다
- 하나의 인스턴스를 여러 개의 참조변수가 가리키는 경우(가능)
- 여러 인스턴스를 하나의 참조변수가 가리키는 경우(불가능)

## 2.5 객체 배열
```java
Tv tv1, tv2, tv3;
//위아래 동일
Tv[] tvArr = new Tv[3];
```
```java
class Tv {
	//변수(속성)
	String color; //색깔
	boolean power;  //전원상태
	int channel; //채널

	//메서드(기능)
	void power()      { power = !power; }
	void channelUp()  { ++channel; }
	void channelDown(){ --channel; }
}

class TvTest4 {
	public static void main(String[] args){
		Tv[] tvArr = new Tv[3];

		//tv객체 생성해서 tv객체 배열에 각 요소 저장
		for (int i = 0; i < tvArr.length; i++) {
			tvArr[i] = new Tv();
			tvArr[i].channel = i+10;    //tvArr[i]의 channel에 i+10을 저장
		}

		for (int i = 0; i < tvArr.length; i++) {
			tvArr[i].channelUp();
			System.out.println("channel --> " + tvArr[i].channel);
		}
	}
}

실행결과
channel --> 11
channel --> 12
channel --> 13

```

## 2.6 클래스의 또 다른 정의
1. 클래스 - 데이터와 함수의 결합
    -	변수 : 하나의 데이터를 저장할 수 있는 공간
    -	배열 : 같은 종류의 여러 데이터를 하나의 집합으로 저장할 수 있는 공간
    -	구조체 : 서로 관련된 여러 데이터를 종류에 관계없이 하나의 집합으로 저장할 수 있는 공간
    -	클래스 : 데이터와 함수의 결합(구조채 + 함수)

2. 클래스 - 사용자정의 타입(user-defined type)

```java
class Time {
    private int hour;
    private int minunte;
    private float second;
    
    public int getHour() {
        return hour;
    }
    public void setHour(int hour) {
        if (hour < 0  || hour > 23) return;
        this.hour = hour;
    }
    public int getMinunte() {
        return minunte;
    }
    public void setMinunte(int minunte) {
        if(minunte < 0 || minunte > 59) return;
        this.minunte = minunte;

    }
    public float getSecond() {
        return second;
    }
    public void setSecond(float second) {
        if(second < 0.0f || second > 59.99f)return;
        this.second = second;
    }

 class Test{
    public static void main(String[] args) {

        Time time = new Time();
        time.setHour(24);
        time.setMinunte(22);
        
        System.out.println(time.getHour());
    }
}

실행결과
0
```

# 3. 변수와 메서드
## 3.1 선언위치에 따른 변수의 종류
- 변수는 클래스변수, 인스턴스변수, 지역변수 모두 세 종류가 있다.
```java
class Variables
//클래스 영역 S
{
    int iv;     //인스턴스 변수
    static int cv; //클래스 변수 (static변수, 공유변수)

    //메서드 영역 S
    void method(){
        int iv = 0; //지역 변수
    }
    //메서드 영역 E
}
//클래스 영역 E
```
- 인스턴스변수
    - 클래스 영역에 선언
    - 클래스의 인스턴스를 생성할 때 만들어짐
    - 인스턴스 변수의 값을 읽어 오거나 저장하기 위해서는 먼저 인스턴스를 생성해야 함

- 클래스 변수
    - 클래스 변수를 선언하는 방법은 인스턴스 변수 앞에 static을 붙이기만 하면 된다.
    - 모든 인스턴스가 공통된 저장공간(변수)를 공유 하게 된다.
    - 클래스변수는 인스턴스 변수와 달리 인스턴스를 생성하지 않고도 언제라도 바로 사용할 수 있다.
    - '클래스이름.클래스변수'와 같은 형식으로 사용 ex)Variables.cv
    - 클래스가 메모리에 로딩 될때 생성되며, 프로그램이 종료될 때 까지 유지되며, public을 앞에 붙이면 같은 프로그램 내에서나 어디서나 접근할 수 있는 '전역변수'의 성격을 갖는다.

- 지역변수
    - 메서드 내에 선언되어 메서드 내에서만 사용 가능
    - 메서드가 종료되면 소멸되어 사용 할 수 없게 된다.
    - for문 또는 while문의 블럭 내에 선언된 지역변수는, 지역변수가 선언된 블럭{} 내에서만 사용 가능하다.
    - 블럭{}을 벗어나면 소멸되어 사용 할 수 없다.

## 3.2 클래스변수와 인스턴스변수
```java
class Test {

	public static void main(String[] args){
		System.out.println("Card.w --> " + Card.width);
		System.out.println("Card.h --> " + Card.height);
		//클래스 변수(static변수)는 객체생성 없이 '클래스 이름.클래스변수'로 직접 사용 가능하다

		Card c1 = new Card();
		c1.kind = "Heart";
		c1.number = 7;

		//인스턴스 변수의 값 변경
		Card c2 = new Card();    
		c2.kind = "Spade";
		c2.number = 4;

		System.out.println("c1 kind ->" + c1.kind + ", c1 number -> " + c1.number + ", w / h -> " + c1.width + "/" + c1.height);
		System.out.println("c2 kind ->" + c2.kind + ", c2 number -> " + c2.number+ ", w / h -> " + c2.width + "/" + c2.height);

		System.out.println("c1 w,h change -> 50, 80");

		//변수 값 변경
		c1.width = 50;
		c2.height = 80;

		System.out.println("c1 kind ->" + c1.kind + ", c1 number -> " + c1.number + ", w / h -> "
				+ c1.width + "/" + c1.height);
		System.out.println("c2 kind ->" + c2.kind + ", c2 number -> " + c2.number+ ", w / h -> "
				+ c2.width + "/" + c2.height);

	}

}
//
//실행결과
//Card.w --> 100
//Card.h --> 2
//c1 kind ->Heart, c1 number -> 7, w / h -> 100/250
//c2 kind ->Spade, c2 number -> 4, w / h -> 100/250
//c1 w,h change -> 50, 80
//c1 kind ->Heart, c1 number -> 7, w / h -> 50/80
//c2 kind ->Spade, c2 number -> 4, w / h -> 50/80
```

<b>인스턴스변수는 인스턴스가 생성될 때 마다 생성되므로 인스턴스마다 각기 다른 값을 유지할 수 있지만,
클래스 변수는 모든 인스턴스가 하나의 저장공간을 공유하므로, 항상 공통된 값을 갖는다.</b>

## 3.3 메서드
- 특정 작업을 수행하는 일련의 문장들을 하나로 묶은 것
- 수학의 함수와 유사
- 어떤 값을 입력 할 경우 이 값으로 작업을 수행해서 결과를 반환
- ex)'Math.sqrt()' 4.0 -> 2.0 반환
- 메서드를 사용하는 이유
    - 1. 높은 재사용성(reusability)
    - 2. 중복된 코드의 제거 - 중복된 작업은 메서드 구현으로 간결하게 처리
        - 3. 프로그램의 구조화 - 예시) 작업단위로 분산
        ```java
        class Test{
        public static void main(String[] args){
            int[] numArr = new int[10];
  
            initArr(numArr); 		//1. 배열을 초기화
            printArr(numArr);		//2. 배열을 출력
            sortArr(numArr);		//3. 배열을 정령
            printArr(numArr);		//4. 배열을 출력
        }
        }  
        ```

## 3.4 메서드의 선언과 구현
### 메서드 선언부(method declaration, method header)
	```java
	int add(int a, int b)	//선언부
	{						//구현부 S
		int result = a+b;	
		return result;
	}						//구현부 E
	```
### 매개변수 선언(parameter declaration)
	```java
	int add(int x, int y)	//OK
	int add(int x, y)	//에러, 매개변수 y의 타입이 없음
	```
<b>매개변수도 메서드 내에 선언된 것으로 간주되므로 '지역변수' 이다</b>

### 메서드의 이름(method name)
- 메서드의 이름은 명명규칙대로 작성하면 된다.
- 'add'처럼 동사인 경우가 많다.
- 이름만으로 함축적이면서 의미있는 이름을 짓도록 노력해야함

### 반환타입(return type)
<b>'void'는 '아무 것도 없음'을 의미</b>
- 반환타입이 없을 경우 반환타입으로 'void'를 적어야한다

### 메서드의 구현부(,ethod bpdy. 메서드 몸통)
- 괄호{}를 메서드의 구현부 하고 함
- 해당 부분에 메서드를 호출했을 떄 수행될 문장들을 넣는다.

### return문
- 메서드의 반환타입이 'void'가 아닌 경우, 구현부{} 안에 'return 반환값;'이 반드시 포함되어 있어야한다.
- return은 반환타입과 일치하거나 적어도 자동 형변환이 가능한 것이어야 한다.
- return문은 단 하나의 값만 반환
- 매서드로의 입력(매개변수)은 여러 개일 수 있어도 출력(반환값)은 최대 하나만 허용
    ```java
        class Test{
            int add(int a, int b)	
            {						
                int result = a+b;	
                return result;		//작업 결과(반환값) 를 반환 한다. * int 반환 타입과 일치해야함
            }
        }
    ```	

### 지역변수(local variable)
- 메서드 내에 선언된 변수들은 그 메서드 내에서만 사용할 수 있으므로 서로 다른 메서드라면 같은 이름의 변수를 선언해도 된다.
- 메서드 내에 선언된 변수를 '지역변수(local variable)'라고 한다.
- 매개변수도 메서드 내에 선언된 것으로 간주되므로 지역변수 이다.
    ```java
        int add(int a, int b)	
        {						
            int result = a+b;	
            return result;		
        }		
    
        int multiply(int a, int b)	
        {						
            int result = a*b;	
            return result;		
        }	
        // 각 메서드에 a, b, result 이름만 같을 뿐 서로 다른 변수
    ```	

## 3.5 메서드의 호출
메서드를 정의했어도 호출되지 않으면 아무 일도 일어나지 않는다.
참고 - main메서드는 프로그램 실행 시 OS에 의해 자동적으로 호출된다.
```java
test():					//void test()을 호출
int result = add(3, 5) 	//int add(int x, int y)를 호출하고, 결과를 result에 저장
```

### 인자(argument)와 매개변수(parameter)
- 메서드를 호출할 때 괄호()안에 지정해준 값들을 '인자(argument)' 또는 '인수'라고 하는데, 인자의 개수와 순서는 호출된 메서드에 선언된 매개변수와 일치해야 한다.
- 인자는 메서드가 호출되면서 매개변수에 대입되므로, 인자의 타입은 매개변수의 타입과 일치하거나 자동 형변환이 가능한 것이어야 한다.
    ```java
    class Test{
        public static void main(String[] main){
            int result = add(3,5); //메서드 호출  3,5는 인자 원본
        }
    
        int add(int x, int y){		//매개변수 x,y는 3,5인자의 복사본
           int result = x+y;
          return result;
        }
    }
    ```

### 메서드의 실행흐름
    ```java
        class MyMathTest {
            public static void main(String args[]) {
                MyMath mm = new MyMath();
                long result1 = mm.add(5L, 3L);
                long result2 = mm.subtract(5L, 3L);
                long result3 = mm.multiply(5L, 3L);
                double result4 = mm.divide(5L, 3L);             // double대신 long값을 입력했다.
                System.out.println("add(5L, 3L) = " + result1);
                System.out.println("subtract(5L, 3L) = " + result2);
                System.out.println("multiply(5L, 3L) = " + result3);
                System.out.println("divide(5L, 3L) = " + result4);
            }
        }
        
        class MyMath {
            long add(long a, long b) {
                long result = a+b;
                return result;
                //       return a + b;       // 위의 두 줄을 이와 같이 한 줄로 간단히 할 수 있다.
            }
        
            long subtract(long a, long b) {
                return a - b;
            }
        
            long multiply(long a, long b) {
                return a * b;
            }
        
            double divide(double a, double b) {
                return a / b;
            }
        }
        
        실행결과
        add(5L, 3L) = 8
        subtract(5L, 3L) = 2
        multiply(5L, 3L) = 15
        divide(5L, 3L) = 1.6666666666666667
    ```

## 3.6 return문
- return문은 현재 실행중인 메서드를 종료하고 호출한 메서드로 되돌아간다.
- 반환 타입이 void인 경우, return문 없이도 아무런 문제가 없다.
- 컴파일러가 메서드 마지막에 'return;'을 자동적으로 추가해 주기 때문에
  ```java
    void printTest(){
        return; // 반환타입이 void이므로 생략 가능. 컴파일러가 자동추가
    }
  ```
    - 반환타입이 void가 아닌 경우, 즉 밚롼값이 있는 경우, 반드시 return문이 있어야 한다.
    - return문이 없을경우 컴파일 err
  ```java
  int printTest(){
      int result;
      return result; // 반환 타입이 void가 아니므로 생략불가
  }
  ```

## 3.7 JVM의 메모리 구조
- 응용프로그램이 실행되면, JVM은 시스템으로부터 프로그램을 수행하는데 필요한 메모리를 할당받고 JVM은 이 메모리를 용도에 따라 여러 영역으로 나누어 관리한다.
- method area, call stack, heap
1. 메서드 영역(method area)
    - 프로그램 실행 중 어떤 클래스가 사용되면, JVM은 해당 클래스의 클래스파일(*.class)을 읽어서 분석하여 클래스에 대한 정보(클래스 데이터)를 이곳에 저장
    - 그 클래스의 클래스변수(class variable)도 이 영역에 함께 생성된다.

2. 힙(heap)
    - 인스턴스가 생성되는 공간
    - 프로그램 실행 중 생성되는 인스턴스는 모두 이곳에 생성
    - 즉, 인스턴스변수(instance variable)들이 생성되는 공간이다.

3. 호출스택(call stack 또는 execution stack)
    - 호출스택은 메서드의 작업에 필요한 메모리 공간을 제공
    - 메서드가 호출되면, 호출스택에 호출된 메서드를 위한 메모리가 할당되며, 이 메모리는 메서드가 작업을 수행하는 동안 지역변수(매개변수 포함)들과 연산의 중간결과 등을 저장하는데 사용
    - 메서드가 작업을 마치면 할당되었던 메모리공간은 반환되어 비워진다.
    - 특징 :
        - 메서드가 호출되면 수행에 필요한 만큼의 메모리를 스택에 할당받는다.
        - 메서드가 수행을 마치고나면 사용했던 메모리를 반환하고 스택에서 제거된다.
        - 호출스택의 제일 위에 있는 메서드가 현재 실행 중인 메서드이다.
        - 아래에 있는 메서드가 바로 위의 메서드를 호출한 메서드이다.
```java
class CallbackTest{
	public static void main(String[] args){
		System.out.println("main S");
		firstMethod();
		System.out.println("main E");
	}

	static void firstMethod() {
		System.out.println("fm S");
		secondMethod();
		System.out.println("fm E");
	}

	static void secondMethod() {
		System.out.println("sm S");
		System.out.println("sm E");
	}
}

실행결과
main S
fm S
sm S
sm E
fm E
main E

```

## 3.8 기본형 매개변수와 참조형 매개변수
- 기본형 매개변수 : 변수의 값을 읽기만 할 수 있다.(read only)
- 참조형 매개변수 : 변수의 값을 읽고 변경할 수 있다.(read & write)
    ```java
    class Data { int x; }
    class ParameterTest {
        public static void main(String[] args) {
    
            Data d = new Data();
            d.x = 10;
            System.out.println("main() : x = " + d.x);
    
            change(d.x);
            System.out.println("After change(d.x)");
            System.out.println("main() : x = " + d.x);
        }
    
        static void change(int x) {
            x = 1000;
            System.out.println("change() : x = " + x);
        }
    }
    
    실행결과
    main() : x = 10
    change() : x = 1000
    After change(d.x)
    main() : x = 10
    ```
    ```java
    class Data { int x; }
    class ParameterTest2 {
        public static void main(String[] args) {
    
            Data d = new Data();
            d.x = 10;
            System.out.println("main() : x = " + d.x);
    
            change(d);
            System.out.println("After change(d)");
            System.out.println("main() : x = " + d.x);
    
        }
        static void change(Data d) {
            d.x = 1000;
            System.out.println("change() : x = " + d.x);
        }
    }
    
    실행결과
    main() : x = 10
    change() : x = 1000
    After change(d)
    main() : x = 1000
    
    ```
    ```java
    class ReferenceParamEx2 {
        public static void main(String[] args)
        {
            int[] x = {10};  // 크기가 1인 배열. x[0] = 10;
            System.out.println("main() : x = " + x[0]);
    
            change(x);
            System.out.println("After change(x)");
            System.out.println("main() : x = " + x[0]);
        }
    
        static void change(int[] x) { // 참조형 매개변수
            x[0] = 1000;
            System.out.println("change() : x = " + x[0]);
        }
    }
    
    실행결과 
    main() : x = 10
    change() : x = 1000
    After change(x)
    main() : x = 1000
    ```
    ```java
    class ReferenceParamEx3 {
        public static void main(String[] args)
        {
            int[] arr = new int[] {3,2,1,6,5,4};
    
            printArr(arr);  // 배열의 모든 요소를 출력
            sortArr(arr);   // 배열을 정렬
            printArr(arr);  // 정렬후 결과를 출력
            System.out.println("sum="+sumArr(arr)); // 배열의 총합을 출력
        }
    
        static void printArr(int[] arr) {  // 배열의 모든 요소를 출력
            System.out.print("[");
    
            for(int i : arr)  // 향상된 for문
                System.out.print(i+",");
            System.out.println("]");
        }
    
        static int sumArr(int[] arr) {  // 배열의 모든 요소의 합을 반환
            int sum = 0;
    
            for(int i=0;i<arr.length;i++)
                sum += arr[i];
            return sum;
        }
    
        static void sortArr(int[] arr) {  // 배열을 오름차순으로 정렬
            for(int i=0;i<arr.length-1;i++)
                for(int j=0;j<arr.length-1-i;j++)
                    if(arr[j] > arr[j+1]) {
                        int tmp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = tmp;
                    }
        } // sortArr(int[] arr)
    }
    
    실행결과
    [3,2,1,6,5,4,]
    [1,2,3,4,5,6,]
    sum=21
    ```
    ```java
    class ReturnTest {
        public static void main(String[] args) {
            ReturnTest r = new ReturnTest();
    
            int result = r.add(3,5);
            System.out.println(result);
    
            int[] result2 = {0}; // 배열을 생성하고 result2[0]의 값을 0으로 초기화
            r.add(3,5,result2);  // 배열을 add메서드의 매개변수로 전달
            System.out.println(result2[0]);
        }
    
        int add(int a, int b) {
            return a + b;
        }
    
        void add(int a, int  b, int[] result) {
            result[0] = a + b;  // 매개변수로 넘겨받은 배열에 연산결과를 저장
        }
    }
    
    실행결과
    8
    8
    ```

## 3.9 참조형 반환타입
- 모든 참조형 타입의 값은 '객체의 주소'이므로 그저 정수값이 반환되는 것일 뿐 특별할 것이 없다.
    ```java
    class Data3 { int x; }
    
    class ReferenceReturnEx {
        public static void main(String[] args)
        {
            Data3 d = new Data3();
            d.x = 10;
    
            Data3 d2 = copy(d);
            System.out.println("d.x ="+d.x);
            System.out.println("d2.x="+d2.x);
        }
    
        static Data3 copy(Data3 d) {
            Data3 tmp = new Data3();	//새로운 객체 tmp를 생성한다.
            tmp.x = d.x;				// d.x의 값을 tmp.x에 복사한다.
    
            return tmp;					//복사한 객체의 주소를 반환한다.
        }
    }
    
    실행결과
    d.x =10
    d2.x=10
    ```
- 반환타입이 '참조형'이라는 것은 메서드가 '객체의 주소'를 반환한다는 것을 의미

## 3.10 재귀호출(recursive call)
- 메서드의 내부에서 메서드 자신을 다시 호출하는 것을 '재귀호출'이라 하고, 재귀호출을 하는 메서드를 '재귀 메서드'라 한다.
    ```java
        void method(){
             method();  //재귀호출. 메서드 자신을 호출한다.
        }
    ```
- 재귀호출을 사용하는이유? 간결성
- 반복문과 비슷하며 속도면에서 재귀호출보다 반복문이 낫다.
    ```java
    class FactorialTest {
        public static void main(String args[]) {
            System.out.println(factorial(4)); // FactorialTest.factorial(4)
        }
    
        static long factorial(int n) {
            long result=0;
    
            if (n == 1) return 1;
    
            return n * factorial(n-1); // 메서드 자신을 호출한다.
        }
    }
    실행결과
    24
    ```
    ```java
        class FactorialTest2 {
        static long factorial(int n) {
            if(n<=0 || n>20) return -1;  // 매개변수의 유효성 검사.
            if(n<=1)
                return 1;
            return n * factorial(n-1);
        }
    
        public static void main(String args[]) {
            int  n = 21;
            long result = 0;
    
            for(int i = 1; i <= n; i++) {
                result = factorial(i);
    
                if(result==-1) {
                    System.out.printf("유효하지 않은 값입니다.(0<n<=20):%d%n", n);
                    break;
                }
    
                System.out.printf("%2d!=%20d%n", i, result);
            }
        } // main의 끝
    }
    실행결과
    1!=                   1
    2!=                   2
    3!=                   6
    4!=                  24
    5!=                 120
    6!=                 720
    7!=                5040
    8!=               40320
    9!=              362880
    10!=             3628800
    11!=            39916800
    12!=           479001600
    13!=          6227020800
    14!=         87178291200
    15!=       1307674368000
    16!=      20922789888000
    17!=     355687428096000
    18!=    6402373705728000
    19!=  121645100408832000
    20!= 2432902008176640000
    유효하지 않은 값입니다.(0<n<=20):21
    ```

## 3.11 클래스 메서드(static메서드)와 인스턴스 메서드
- 메서드 앞에 static이 붙으면 클래스 메서드
- 없으면 인스턴스 메서드
- 인스턴스 메서드는 인스턴스 변수와 관련된 작업을 하는, 즉 메서드의 작업을 수행하는데 인스턴스 변수를 필요로 하는 메서드이다.
- 인스턴스와 관계없는(인스턴스 변수나 인스턴스 메서드를 사용하지 않는) 메서드를 클래스 메서드(static메서드)로 정의한다.

1. 클래스를 설계할 떄, 멤버변수 중 모든 인스턴스에 공통으로 사용하는 것에 static을 붙인다.
    - 생성된 각 인스턴스는 서로 독립적이기 때문에 각 인스턴스의 변수(iv)는 서로 다른 값을 유지한다.
    - 모든 인스턴스에서 같은 값이 유지되어야 하는 변수는 static을 붙여서 클래스변수로 정의해야 한다.
2. 클래스 변수(static변수)는 인스턴스를 생성하지 않아도 사용할 수 있다.
    - sttatic이 붙은 변수(클래스 변수)는 클래스가 메모리에 올라갈 때 이미 자동적으로 생성되기 때문이다.

3. 클래스 메서드(static메서드)는 인스턴스 변수를 사용할 수 없다.
    - 인스턴스변수는 인스턴스가 반드시 존재해야만 사용할 수 있는데, 클래스메서드는 인스턴스 생성 없이 호출가능하므로 클래스 메서드가 호출되었을 때 인스턴스가 존재하지 않을 수도 있다.
    - 클래스 메서드에서 인스턴스변수의 사용은 금지한다.
    - 인스턴스변수나 인스턴스메서드에서는 static이 붙은 멤버들을 사용하는 것이 언제나 가능하다.
    - 안스턴스 변수가 존재한다는 것은 static변수가 이미 메모리에 존재한다는 것을 의미하기 떄문이다.

4. 메서드 내에서 인스턴스 변수를 사용하지 않는다면, static을 붙이는 것을 고려한다.
    - 메서드의 작업내용 중에서 인스턴스변수를 필요로 한다면, static을 붙일 수 없다.
    - 반대로 인스턴스변수를 필요로 하지 않는다면 static을 붙이자.
    - 메서드 호출시간이 짧아지므로 성능이 향상된다.
    - static을 안 붙인 메서드(인스턴스메서드)는 실행 시 호출되어야할 메서드를 찾는 과정이 추가적으로 필요하기 때문에 시간이 더 걸린다.

```
    - 클래스의 멤버변수 중 모든 인스턴스에 공통된 값을 유지해야하는 것이 있는지 살펴 보고 있으면, static을 붙여준다.
    
    - 작성한 메서드 중에서 인스턴스 변수나 인스턴스 메서드를 사용하지 않는 메서드에 static을 붙일 것을 고려한다. 
```
```java
class MyMath2 {
	long a, b;

	// 인스턴스변수 a, b만을 이용해서 작업하므로 매개변수가 필요없다.
	long add() 	    { return a + b; }  // a, b는 인스턴스변수
	long subtract() { return a - b; }
	long multiply() { return a * b; }
	double divide() { return a / b; }

	// 인스턴스변수와 관계없이 매개변수만으로 작업이 가능하다.
	static long   add(long a, long b) 	   	 { return a + b; } // a, b는 지역변수
	static long   subtract(long a, long b)   { return a - b; }
	static long   multiply(long a, long b)	 { return a * b; }
	static double divide(double a, double b) { return a / b; }
}

class MyMathTest2 {
	public static void main(String args[]) {
		// 클래스메서드 호출. 인스턴스 생성없이 호출가능
		System.out.println(MyMath2.add(200L, 100L));
		System.out.println(MyMath2.subtract(200L, 100L));
		System.out.println(MyMath2.multiply(200L, 100L));
		System.out.println(MyMath2.divide(200.0, 100.0));

		MyMath2 mm = new MyMath2(); // 인스턴스를 생성
		mm.a = 300L;
		mm.b = 100L;
		// 인스턴스메서드는 객체생성 후에만 호출이 가능함.
		System.out.println(mm.add());
		System.out.println(mm.subtract());
		System.out.println(mm.multiply());
		System.out.println(mm.divide());
	}
}
```

## 3.12 클래스 멤버와 인스턴스 멤버간의 참조와 호출
- 같은 클래스에 속한 멤버들 간에는 별도의 인스턴스를 생성하지 않고 서로 참조 또는 호출이 가능하다.
- 단, 클래스멤버가 인스턴스 멤버를 참조 또는 호출하고자 하는 경우에는 인스턴스를 생성해야 한다.
- 인스턴스 멤버가 존재하는 시점에 클래스 멤버는 항상 존재하지만, 클래스멤버가 존재하는 시점에 인스턴스 멤버가 존재하지 않을 수도 있기 때문이다.
- 인스턴스 멤버란, 인스턴스 변수와 인스턴스 메서드를 의미한다.
    ```java
    class MemberCall {
        int iv = 10;
        static int cv = 20;
    
        int iv2 = cv;
        //	static int cv2 = iv;		// 에러. 클래스변수는 인스턴스 변수를 사용할 수 없음.
        static int cv2 = new MemberCall().iv;	 // 이처럼 객체를 생성해야 사용가능.
    
        static void staticMethod1() {
            System.out.println(cv);
            //		System.out.println(iv); // 에러. 클래스메서드에서 인스턴스변수를 사용불가.
            MemberCall c = new MemberCall();
            System.out.println(c.iv);   // 객체를 생성한 후에야 인스턴스변수의 참조가능.
        }
    
        void instanceMethod1() {
            System.out.println(cv);
            System.out.println(iv); // 인스턴스메서드에서는 인스턴스변수를 바로 사용가능.
        }
    
        static void staticMethod2() {
            staticMethod1();
            //		instanceMethod1(); // 에러. 클래스메서드에서는 인스턴스메서드를 호출할 수 없음.
            MemberCall c = new MemberCall();
            c.instanceMethod1(); // 인스턴스를 생성한 후에야 호출할 수 있음.
        }
    
        void instanceMethod2() {	// 인스턴스메서드에서는 인스턴스메서드와 클래스메서드
            staticMethod1();		//  모두 인스턴스 생성없이 바로 호출이 가능하다.
            instanceMethod1();
        }
    }
    ```
    - 인스턴스멤버간의 호출에는 아무런 문제가 없다. 하나의 인스턴스멤버가 존재 한다는 것은 인스턴스가 이미 생성되어있다는 것을 의미하며, 즉 다른 인스턴스멤버들도 모두 존재하기 때문이다.

# 4. 오버로딩(pverloading)
## 4.1 오버로딩이란?
- 메서드도 변수와 마찬가지로 같은 클래스 내에서 서로 구별될 수 있어야 하기 떄문에 각기 다른 이름을 가져야 한다.
- 그러나 자바에서는 한 클래스 내에 이미 사용하려는 이름과 같은 이름을 가진 메서드가 있더라도 매개변수의 개수 또는 타입이 다르면, 같은 이름을 사용해서 메서드를 정의 할 수 있다.
- 한 클래스 내에 같은 이름의 메서드를 여러 개 정의하는 것을 '메서드 오버로딩' 또는 간단히 '오버로딩'이라 한다.

## 4.2 오버로딩의 조건
1. 메서드 이름이 같아야 한다.
2. 매개변수의 개수 또는 타입이 달라야 한다.
3. 반환타입은 오버로딩을 구현하는데 아무런 영향을 주지 못한다.

## 4.3 오버로딩의 예
```java
보기1
int add(int a, int b){ return a+b;}
int add(int x, int y){ return x*y;}
- 매개변수 이름만 다르고 타입은 같기 떄문에 오버로딩 X
        
보기2
int add(int a, int b){ return a+b;}
long add(int a, int b){ return long(a+b);}
- 반환타입은 영향을 받지 않으니 오버로딩 X

보기3
long add(int a, long b){ return a+b;}
long add(long a, int b){ return a+b;}
메서드명 같고 매개변수 타입이 다르므로 오버로딩 O
```

## 4.4 오버로딩의 장점
- 메서드 명 절약가능
- 메서드 명으로 기능 유추
```java
class OverloadingTest {
	public static void main(String args[]) {
		MyMath3 mm = new MyMath3();
		System.out.println("mm.add(3, 3) 결과:"    + mm.add(3,3));
		System.out.println("mm.add(3L, 3) 결과: "  + mm.add(3L,3));
		System.out.println("mm.add(3, 3L) 결과: "  + mm.add(3,3L));
		System.out.println("mm.add(3L, 3L) 결과: " + mm.add(3L,3L));

		int[] a = {100, 200, 300};
		System.out.println("mm.add(a) 결과: " + mm.add(a));
	}
}

class MyMath3 {
	int add(int a, int b) {
		System.out.print("int add(int a, int b) - ");
		return a+b;
	}

	long add(int a, long b) {
		System.out.print("long add(int a, long b) - ");
		return a+b;
	}

	long add(long a, int b) {
		System.out.print("long add(long a, int b) - ");
		return a+b;
	}

	long add(long a, long b) {
		System.out.print("long add(long a, long b) - ");
		return a+b;
	}

	int add(int[] a) {		// 배열의 모든 요소의 합을 결과로 돌려준다.
		System.out.print("int add(int[] a) - ");
		int result = 0;
		for(int i=0; i < a.length;i++) {
			result += a[i];
		}
		return result;
	}
}
실행결과
int add(int a, int b) - mm.add(3, 3) 결과:6
long add(long a, int b) - mm.add(3L, 3) 결과: 6
long add(int a, long b) - mm.add(3, 3L) 결과: 6
long add(long a, long b) - mm.add(3L, 3L) 결과: 6
int add(int[] a) - mm.add(a) 결과: 600
```

## 4.5 가변인자(varargs)와 오버로딩
- 기존에는 메서드의 매개변수 개수가 고정적이었으나 JDK1.5부터 동적으로 지정해 줄 수 있게 되었으며, 이 기능을 '가변인자'라고 한다.
- '타입... 변수명' / ex)'String... args'
```java
class VarArgsEx {
	public static void main(String[] args) {
		String[] strArr = { "100", "200", "300" };

		System.out.println(concatenate("", "100", "200", "300"));
		System.out.println(concatenate("-", strArr));
		System.out.println(concatenate(",", new String[]{"1", "2", "3"}));
		System.out.println("["+concatenate(",", new String[0])+"]");
		System.out.println("["+concatenate(",")+"]");
	}

	static String concatenate(String delim, String... args) {
		String result = "";

		for(String str : args) {
			result += str + delim;
		}

		return result;
	}

/*
	static String concatenate(String... args) {
		return concatenate("",args);
	}
*/
} // class
```

# 5. 생성자(Constructor)

## 5.1 생성자란?
- 생성자는 인스턴스가 생성될 때 호출되는 '인스턴스 초기화 메서드'이다.
- 인스턴스 초기화란, 인스턴스변수들을 초기화하는 것을 뜻한다.

1. 생성자의 이름은 클래스의 이름과 같아야 한다.
2. 생성자는 리턴 값이 없다.

```java
클래스이름(타입 변수명, 타입 변수명, ...){
	// 인스턴스 생성 시 수행될 코드,
    // 주로 인스턴스 변수의 초기화 코드를 적는다.    
}

class Card {
	Card(){ // 매개변수가 없는 생성자
		''''
    }
	
	Card(String k, int num){ //매개변수가 있는 생성자
		''''
    }
}
```
- 연산자 new가 인스턴스를 생성하는 것이지 생성자가 인스턴스를 생성하는 것이 아니다.
    ```java
    Card c = new Card();
    
    1. 연산자 new에 의해서 메모리(heap)에 Card클래스의 인스턴스가 생성된다.
    2. 생성자 Card()가 호출되어 수행된다.
    3. 연산자 new의 결과로, 생성된 Card인스턴스의 주소가 반환되어 참조변수 c에 저장된다.
    ```

## 5.2 기본 생성자(default constructor)
- 기본생성자는 생성자가 하나도 정의되지 않은 경우 컴파일러가 자동적으로 추가해서 만들어 준다.
```java
class Data1 {
	int value;
}

class Data2 {
	int value;

	Data2(int x) { 	// 매개변수가 있는 생성자.
		value = x;
	}
}

class ConstructorTest {
	public static void main(String[] args) {
		Data1 d1 = new Data1();
		Data2 d2 = new Data2();		// compile error발생
	}
}
//Date1는 정의 되어있는 생성자가 없으므로 컴파일러가 자동으로 기본생성자를 추가해줘서 에러 안남
//Date2는 이미 생성자 Date2(int x)가 정의되어 있으므로 기존생성자를 추가 하지 않았기 때문에 에러 발생
```
```java
*기본 생성자가 컴파일러에 의해서 추가되는 경우는 클래스에 정의된 생성자가 하나도 없을 때 뿐이다.
```

## 5.3 매개변수가 있는 생성자
```java
class Car {
	String color;		// 색상
	String gearType;	// 변속기 종류 - auto(자동), manual(수동)
	int door;			// 문의 개수

	Car() {}
	Car(String c, String g, int d) {
		color = c;
		gearType = g;
		door = d;
	}
}

class CarTest {
	public static void main(String[] args) {
		Car c1 = new Car();
		c1.color = "white";
		c1.gearType = "auto";
		c1.door = 4;

		Car c2 = new Car("white", "auto", 4);

		System.out.println("c1의 color=" + c1.color + ", gearType=" + c1.gearType+ ", door="+c1.door);
		System.out.println("c2의 color=" + c2.color + ", gearType=" + c2.gearType+ ", door="+c2.door);
	}
}
실행결과
c1의 color=white, gearType=auto, door=4
c2의 color=white, gearType=auto, door=4
```

## 5.4 생성자에서 다른 생성자 호출하기 - this(), this
- 생성자의 이름으로 클래스이름 대신 this를 사용한다.
- 한 생성자에서 다른 생성자를 호출할 때는 반드시 첫 줄에서만 호출이 가능하다.
```java
class Car2 {
	String color;		// 색상
	String gearType;	// 변속기 종류 - auto(자동), manual(수동)
	int door;			// 문의 개수

	Car2() {
		this("white", "auto", 4);
	}

	Car2(String color) {
		this(color, "auto", 4);
	}
	Car2(String color, String gearType, int door) {
		this.color    = color;
		this.gearType = gearType;
		this.door     = door;
	}
}

class CarTest2 {
	public static void main(String[] args) {
		Car2 c1 = new Car2();
		Car2 c2 = new Car2("blue");

		System.out.println("c1의 color=" + c1.color + ", gearType=" + c1.gearType+ ", door="+c1.door);
		System.out.println("c2의 color=" + c2.color + ", gearType=" + c2.gearType+ ", door="+c2.door);
	}
}
실행결과
c1의 color=white, gearType=auto, door=4
c2의 color=blue, gearType=auto, door=4
```
- this : 인스턴스 자신을 가리키는 참조변수, 인스턴스의 주소가 저장되어 있다. 모든 인스턴스메서드에 지역변수로 숨겨진 채로 존재한다.
- this(), this(매개변수) : 생성자, 같은 클래스의 다른 생성자를 호출할 때 사용한다.
- this는 참조변수, this()는 생성자 구분 할 것

## 5.5 생성자를 이용한 인스턴스의 복사
```java
class Car3 {
	String color;		// 색상
	String gearType;    // 변속기 종류 - auto(자동), manual(수동)
	int door;			// 문의 개수

	Car3() {
		this("white", "auto", 4);
	}

	Car3(Car3 c) {	// 인스턴스의 복사를 위한 생성자.
		color    = c.color;
		gearType = c.gearType;
		door     = c.door;
	}

	Car3(String color, String gearType, int door) {
      //		color    = c.color;
      //		gearType = c.gearType;
      //		door     = c.door;

        this(c.color, c.gearType, c.door);
	}
}
class CarTest3 {
	public static void main(String[] args) {
		Car3 c1 = new Car3();
		Car3 c2 = new Car3(c1);	// c1의 복사본 c2를 생성한다.
		System.out.println("c1의 color=" + c1.color + ", gearType=" + c1.gearType+ ", door="+c1.door);
		System.out.println("c2의 color=" + c2.color + ", gearType=" + c2.gearType+ ", door="+c2.door);

		c1.door=100;	// c1의 인스턴스변수 door의 값을 변경한다.
		System.out.println("c1.door=100; 수행 후");
		System.out.println("c1의 color=" + c1.color + ", gearType=" + c1.gearType+ ", door="+c1.door);
		System.out.println("c2의 color=" + c2.color + ", gearType=" + c2.gearType+ ", door="+c2.door);
	}
}
실행결과
c1의 color=white, gearType=auto, door=4
c2의 color=white, gearType=auto, door=4
c1.door=100; 수행 후
c1의 color=white, gearType=auto, door=100
c2의 color=white, gearType=auto, door=4
```
```java
인스턴스를 생성할 때는 다음의 2가지 사항을 결정해야한다.
1. 클래스 - 어떤 클래스의 인스턴스를 생성할 것인가?
2. 생성자 - 선택한 클래스의 어떤 생성자로 인스턴스를 생성할 것인가?

고민해보자!
```

# 6. 변수의 초기화
## 6.1 변수의 초기화

- 변수를 선언하고 처음으로 값을 저장하는 것을 '변수의 초기화'라고 한다.
- 변수의 초기화는 경우에 따라서 필수적이기도 하고 선택적이기도 하다.
- 가능하면 선언과 동시에 적절한 값으로 초기화 하는 것이 바람직하다.
- <b>멤버변수</b>는 초기화를 하지 않아도 자동적으로 변수의 자료형에 맞는 기본 값으로 초기화
- <b>지역변수</b>는 사용하기 전에 반드시 초기화
    ```java
    class InitTest {
        int x;      //인스턴스 변수(멤버변수)
        int y = x;  //인스턴스 변수(멤버변수)
        void method(){
             int i;         //지역변수
             int j = i;     //에러. 지역변수를 초기화하지 않고 사용
        }     
    }
    ```
- 멤버변수(클래스변수와 인스턴스변수)와 배열의 초기화는 석택적이지만, 지역변수의 초기화는 필수적이다.

```
멤버변수의 초기화 방법

1. 명시적 초기화(explicit initalization)
2. 생성자(constructor)
3. 초기화 블럭(initialization block)
  - 인스턴스 초기화 블럭 : 인스턴스 변수를 초기화 하는데 사용.
  - 클래스 초기화 블럭  : 클래스 변수를 초기화 하는데 사용.
```

## 6.2 명시적 초기화(explicit initialization)
- 변수를 선언과 동시에 초기화하는 것을 명시적 초기화라고 한다.
- 가장 기본적이면서도 간단한 초기화 방법이므로 여러 초기화 방법 중에서 가장 우선적으로 고려되어야 한다.
```java
class Car{
	int door = 4;               //기본형(primitive type) 변수의 초기화
	Engine e = new Engine();    //참조형(reference type) 변수의 초기화
}
```
- 명시적 초기화가 간단하고 명료하긴 하지만, 보다 복잡한 초기화 작업이 필요할 때는 '초기화 블럭(initialization block)' 또는 생성자를 사용해야 한다.

## 6.3 초기화 블럭(initialization block)
- 클래스 초기화 블럭    : 클래스변수의 복잡한 초기화에 사용된다.
- 인스턴스 초기화 블럭  : 인스턴스변수의 복잡한 초기화에 사용된다.
  ```java
    class InitBlock{
        static { /* 클래스 초기화블럭 입니다. */ }
        
        { /* 인스턴스 초기화블럭 입니다. */ }
        // ...          
    }
  ```
    - 클래스 초기화 블럭은 클래스가 메모리에 처음 로딩될 떄 한번만 수행
    - 인스턴스 초기화 블럭은 생성자와 같이 인스턴스를 생성할 때 마다 수행된다.
    - 그리고 생성자 보다 인스턴스 초기화 블럭이 먼저 수행된다는 사실도 기억해두자.
    - *클래스가 처음 로딩될 떄 클래스변수들이; 자동적으로 메모리에 만들어지고, 곧바로 클래스 초기화블럭이 클래스변수들을 초기화하게 되는 것이다.
  ```java
  { //인스턴스 초기화 블럭
    count++;
    serialNo = count;
  }
  
  Car() {
    color = "White";
    gearType = "Auto";
  }
  
  Car(String color, String gearType){
    this.color = color;
    this.gearType = gearType;
  }
  ```
    - 코드의 중복을 제거하는 것은 코드의 신뢰성을 높여주고, 오류의 발생가능성을 줄여 준다는 장점이 있다.
    - 재사용성을 높이고 중복ㅇㄹ 제거하는 것
    - 객체지향프로그래밍이 추구하는 궁극적인 목표

  ```java
  class BlockTest {

    static {    //클래스 초기화 블럭
        System.out.println("static { }");
    }

    {           //인스턴스 초기화 블럭
        System.out.println("{ }");
    }

    public BlockTest() {
        System.out.println("생성자");
    }

    public static void main(String args[]) {
        System.out.println("BlockTest bt = new BlockTest(); ");
        BlockTest bt = new BlockTest();

        System.out.println("BlockTest bt2 = new BlockTest(); ");
        BlockTest bt2 = new BlockTest();
    }
  }
  실행결과
  static { }
  BlockTest bt = new BlockTest();
  { }
  생성자
  BlockTest bt2 = new BlockTest();
  { }
  생성자
  ```
    - BlockTest가 메모리에 로딩될 때, 클래스 초기화 블럭이 가장 먼저 수행 'static {}' 화면출력
    - main메서드 수행 BlockTest인스턴스가 생성되면서 인스턴스 초기화 블럭이 먼저 수행
    - 마지막으로 생성자가 수행
    - 위 실행결과처럼 클래스 초기화 블럭은 처음 메모리에 로딩될 때 한번만 수행되었지만, 인스턴스 초기화 블럭은 인스턴스가 생성될 때 마다 수행된다.

  ```java
  class StaticBlockTest
  {
  static int[] arr = new int[10];
  
      static {
          for(int i=0;i<arr.length;i++) {
              // 1과 10사이의 임의의 값을 배열 arr에 저장한다.
              arr[i] = (int)(Math.random()*10) + 1;
          }
      }
  
      public static void main(String args[]) {
          for(int i=0; i<arr.length;i++)
              System.out.println("arr["+i+"] :" + arr[i]);
      }
  }
  실행결과
  arr[0] :3
  arr[1] :10
  arr[2] :4
  arr[3] :10
  arr[4] :4
  arr[5] :10
  arr[6] :2
  arr[7] :6
  arr[8] :4
  arr[9] :3
  ```
    1. 명시적 초기화를 통해 배열 arr을 생성
    2. 클래스 초기화 블럭을 이용해서 배열의 각 요소들을 random()을 사용해서 임의의 값으로 채운다.

## 6.4 멤버변수의 초기화 시기와 순서
- 클래스변수의 초기화시점 : 클래스가 처음 로딩될 때 단 한번 초기화 된다.
- 인스턴스변수의 초기화시점 : 인스턴스가 생성될 때마다 각 인스턴스별로 초기화가 이루어진다.
- 클래스변수의 초기화순서 : 기본값 -> 명시적초기화 -> 클래스 초기화 블럭
- 인스턴스변수의 초기화순서 : 기본값 -> 명시적초기화 -> 인스턴스 초기화 블럭 -> 생성자
```java
class InitTest{
	static int cv = 1; //명시적 초기화(explicit initialization)
	int iv = 1;
	
	static { cv = 2;}       //클래스 초기화 블럭
    
    {   iv = 2}             //인스턴스 초기화 블럭
    
    InitTest(){             //생성자
		iv =3;
    }
}
```
```java
class Product {
  static int count = 0;   // 생성된 인스턴스의 수를 저장하기 위한 변수
  int serialNo;	        // 인스턴스 고유의 번호

  {
    ++count;
    serialNo = count;
  }

  public Product() {}     // 기본생성자, 생략가능
}

class ProductTest {
  public static void main(String args[]) {
    Product p1 = new Product();
    Product p2 = new Product();
    Product p3 = new Product();

    System.out.println("p1의 제품번호(serial no)는 " + p1.serialNo);
    System.out.println("p2의 제품번호(serial no)는 " + p2.serialNo);
    System.out.println("p3의 제품번호(serial no)는 " + p3.serialNo);
    System.out.println("생산된 제품의 수는 모두 "+ Product.count+"개 입니다.");
  }
}
실행결과
p1의 제품번호(serial no)는 1
p2의 제품번호(serial no)는 2
p3의 제품번호(serial no)는 3
생산된 제품의 수는 모두 3개 입니다.
```
```java
class Document {
	static int count = 0;
	String name;     // 문서명(Document name)

	Document() {     // 문서 생성 시 문서명을 지정하지 않았을 때
		this("제목없음" + ++count);
	}

	Document(String name) {
		this.name = name;
		System.out.println("문서 " + this.name + "가 생성되었습니다.");
	}
}

class DocumentTest {
	public static void main(String args[]) {
		Document d1 = new Document();
		Document d2 = new Document("자바.txt");
		Document d3 = new Document();
		Document d4 = new Document();
	}
}
실행결과
문서 제목없음1가 생성되었습니다.
문서 자바.txt가 생성되었습니다.
문서 제목없음2가 생성되었습니다.
문서 제목없음3가 생성되었습니다.
```