---
title: Java
tags: 
 - pksoooooo
 - github
description: Java Jungsuck Study
---


# 1. 변수

## 1.1 변수 란?
- 값을 저장할 수 있는 메모리상의 공간을 의미
- 변수의 값은 바뀔 수 있으며, 하나의 변수에는 단 하나의 값만을 저장
- 값을 여러 번 저장하면 마지막에 저장한 값을 갖게 된다

## 1.2 변수의 선언
- 변수를 사용하기 위해서는 먼저 변수를 선언
- 변수가 선언되면 메모리 공간에 변수의 타입에 알맞은 크기의 메모리공간이 확보되어, 값을 저장할 준비가 되는 것
- 변수타입은 변수에 담을 값의 종류와 범위를 충분히 고려하여 결정

```java
//ex)변수타입 변수이름;

int num; //정수형 변수 num를 선언

//정수형 num를 선언, 변수 값 1로 초기화
int num = 1; 
```

## 1.3 변수의 명명규칙
<pre>
1. 대소문자가 구분되며 길이에 제한이 없다.
      - True와 true는 서로 다른 것으로 간주된다.
2. 예약어를 사용해서는 안 된다.
      - true는 예약어라서 사용할 수 없지만, True는 가능하다.
3. 숫자로 시작해서는 안 된다.
      - top10은 허용하지만, 7up는 허용되지 않는다.
4. 특수문자는 '_'와 '$'만을 허용한다.
      - $harp은 허용되지만, S#arp은 허용되지 않는다.

* 예약어는 프로그래밍언어에서 구문에 사용되는 단어를 뜻한다. 그래서, 예약어는 이름으로 사용될 수 없다.
</pre>



<pre>

JAVA 대표 적인 규칙

1. 클래스 이름의 첫 글자는 항상 대문자로 한다.
      - 변수나 메서드의 이름의 첫 글자는 항상 소문자로 한다.
2. 여러 단어로 이루어진 이름은 단어의 첫 글자를 대문자로 한다.
      - lastIndexOf, StringBuffer
3. 상수의 이름은 모두 대문자로 한다. 여러 단어로 이루어진 경우 '_'를 사용하여 구분한다.
      - PI, MAX_NUMBER
</pre>

# 2. 변수의 타입
- 모든 변수에는 타입이 있으며, 변수의 타입 따라 변수에 저장할 수 있는 값의 종류와 범위가 달라진다.
- 변수를 선언할 때 저장하고자 하는 값을 고려하여 가장 알맞은 타입을 선택하면 된다.
- 변수의 타입은 크게 기본형과 참조형, 2가지로 나눌 수 있는데, 기본형 변수는 실제 값(Data)을 저장하는 반면에, 참조형 변수는 어떤 값이 저장되어 있는 주소를 값으로 갖는다.

<pre>
기본형(Primitive Type)
   - boolean, char, byte, short, int, long, float, double 
   - 계산을 위한 실제 값을 저장
   - 기본형의 개수는 모두 8개

참조형(Reference Type)
   - 8개의 기본형을 제외한 나머지 타입, 객체의 주소를 저장
   - 프로그래머가 직접 만들어 추가할 수 있으므로 그 수가 정해져 있지 않음
</pre>

## 참조변수 선언하는 방법
```java
클래스이름 변수명;
Date today;
```
## 참조변수 초기화 방법
```java
Date today = null;
  OR
Date today = new Date();
```

*객체를 생성하는 연산자 new의 연산결과는 생성된 객체의 주소이다. 이 주소가 대입연산자(=)에 의해서 참조변수 today에 저장되는 것

## 2.1 기본형(Primitive Types)
<pre>
논리형 - true와 false 중 하나를 값으로 갖으며, 조건식과 논리적 계산에 사용된다.
문자형 - 문자를 저장하는데 사용되며, 변수 당 하나의 문자만을 저장할 수 있다.
정수형 - 정수 값을 저장하는 데 사용된다. 주로 사용되는 것은 int와 long이며,
       byte는 이진데이터를 다루는데 주로 사용되며,
       short은 C언어와의 호환을 위해서 추가하였다.
실수형 - 실수 값을 저장하는데 사용된다. float와 double밖에 없다.

* 정수형(byte, short, int, long)중에서 <b>int</b>형이 기본(default) 자료형, 실수형(float, double)중에서는 <b>double</b>형이 기본 자료형

	
- boolean은 true와 false 두 가지 값만 표현할 수 있으면 되므로 가장 작은 크기인 1 byte.
- char은 자바에서 유니코드(2 byte 문자체계)를 사용하므로 2 byte.
- byte는 크기가 1 byte라서 byte.
- int(4 byte)를 기준으로 짧아서 short(2 byte), 길어서 long( 8byte). (short <-> long)
- float는 실수값을 부동소수점(floating-point)방식으로 저장하기 때문에 float.
- double은 float보다 두 배의 크기(8 byte)와 두 배의 정밀도(double-precision)를 갖기 때문에 double.

</pre>

## 2.2 논리형 - boolean
- boolean형 변수에는 true와 false 중 하나를 저장할 수 있으며 기본값(default)은 false
- 본형 중에서 가장 크기가 작은 1 byte (1 byte = 8 bit)
```java
//논리형 변수 초기화
boolean power = true;
```
* Java에서는 대소문자를 구별하기 때문에 TRUE와 true는 다른 것으로 간주하므로 주의하도록 한다.

## 2.3 문자형 - char
- Java에서는 유니코드(Unicode)문자 체계를 사용하기 때문에 크기가 2byte
- char형의 크기는 2 byte이므로 16진수로 0000부터 ffff까지, 문자를 표현하는데 65536개(2의 16제곱)의 코드값을 사용
- char형 변수는 이 범위 내의 코드값 하나를 저장
```java
char firstLetter = 'A' ; //유니코드 65
   또는
char firstLetter = '\u0041' ;       // 16진수 41은 10진수로 65
```
### 예제2-1 CharToCode.java
```java
class CharToCode {
      public static void main(String[] args) {
            char ch = 'A';             // char ch = '\u0041';로 바꿔 써도 같다.
            int code = (int)ch;      
            System.out.println(ch);
            System.out.println(code);
      }
}
```
### 예제2-1 실행결과
<pre>
65
A
</pre>
### 예제2-2 CodeToChar.java
```java
class CodeToChar {
      public static void main(String[] args) {
            int code = 65; // 또는 int code = 0x0041;
            char ch = (char)code;

            System.out.println(code);
            System.out.println(ch);
      }
}
```
### 예제2-2 실행결과
<pre>
65
A
</pre>

# 3. 형변환

## 3.1 형변환(Casting)이란?
모든 연산은 기본적으로 같은 타입의 피연산자(Operand)간에만 수행될 수 있으므로<br>서로 다른 타입의 피연산자간의 연산을 수행해야하는 경우<br>
연산을 수행하기 전에 형변환을 통해 같은 타입으로 변환해주어야 한다.
<pre>
형변환이란, 변수 또는 리터럴의 타입을 다른 타입으로 변환하는 것이다.
</pre>

## 3.2 형변환 방법
```java
// (타입이름) 피연산자
(int) str
```
예제2-7 CastingEx1.java
```java
class CastingEx1
{
      public static void main(String[] args)
      {
            double d = 100.0;
            int i = 100;
            int result = i + (int)d;

            System.out.println("d=" + d);
            System.out.println("i=" + i);
            System.out.println("result=" + result);
      }
}
```
실행결과
<pre>
d=100.0
i=100
result=200
</pre>
예제2-8 CastingEx2.java
```java
class CastingEx2
{
      public static void main(String[] args)
      {
            byte b = 10;
            int i = (int)b;
            System.out.println("i=" + i);
            System.out.println("b=" + b);
           
            int i2 = 300;
            byte b2 = (byte)i2;
            System.out.println("i2=" + i2);
            System.out.println("b2=" + b2);
      }
}
```
실행결과
<pre>
i=10
b=10
i2=300
b2=44
</pre> 

- 원칙적으로는 모든 형변환에 캐스트연산자를 이용한 형변환이 이루어져야 하지만, 값의 표현범위가 작은 자료형에서 큰 자료형의 변환은 값의 손실이 없으므로 캐스트 연산자를 생략할 수 있도록 했다.
- 그렇다고 해서 형변환이 이루어지지 않는 것은 아니고, 캐스트 연산자를 생략한 경우에도 JVM의 내부에서 자동적으로 형변환이 수행된다.
- 반면에 값의 표현범위가 큰 자료형에서 작은 자료형으로의 변환은 값이 손실될 가능성이 있으므로, JVM이 자동적으로 형변환하지 않고 프로그래머에게 캐스트 연산자를 이용하여 형변환을 하도록 강요하고 있다.

정리
<pre>
 1. boolean을 제외한 나머지 7개의 기본형들은 서로 형변환이 가능하다.
 2. 기본형과 참조형 간에는 서로 형변환이 되지 않는다.
 3. 서로 다른 타입의 변수간의 연산에는 형변환이 요구되지만, 값의 범위가 작은 타입에서 큰 타입으로의 변환은 생략할 수 있다.
 </pre>
