---
title: Java
tags: 
 - pksoooooo
 - github
description: Java Jungsuck Study
---


# 1. 연산자(Operator)

![image](https://user-images.githubusercontent.com/45193994/156907540-5bdaa6e6-5930-405f-9389-a59030813cdb.png)
<br>*instanceof연산자는 인스턴스의 타입을 알아내는데 사용되는 연산자
<pre>
1. 산술 > 비교 > 논리 > 대입. 대입은 제일 마지막에 수행된다.
2. 단항(1) > 이항(2) > 삼항(3). 단항 연산자의 우선순위가 이항 연산자보다 높다.
3. 단항연산자와 대입연산자를 제외하고는 연산의 진행방향이 왼쪽에서 오른쪽이다.
</pre>

- 대입연산자는 연산방향이 오른쪽에서 왼쪽으로 진행
```java
y=3;       // 먼저 y에 3이 저장되고
x=y;       // y에 저장되어 있는 값(3)이 x에 저장된다.
```
*연산우선순위가 확실하지 않을 경우에는 괄호를 사용하자!

# 2.단항연산자
## 2.1 증감연산자 - ++ --
- 일반적으로 단항연산자는 피연산자의 오른쪽에 위치하지만, ++와 --연산자는 양쪽 모두 가능하다. 연산자를 어느 위치에 놓는가에 따라서 연산결과가 달라질 수 있다.
- boolean형을 제외한 모든 기본형(Primitive Type) 변수에 사용 가능
- 피연산자의 왼쪽에 사용하는 전위형과 오른쪽에 사용하는 후위형이 있다.
<pre>
++ : 피연산자(operand)의 값을 1 증가
-- : 피연산자(operand)의 값을 1 감소
</pre>
예제3-1 OperatorEx1.java
```java
class OperatorEx1 {
      public static void main(String args[]) {
            int i=5;
            i++;             // i=i+1과 같은 의미이다. ++i; 로 바꿔 써도 결과는 같다.
            System.out.println(i);
            i=5;             //       결과를 비교하기 위해 i값을 다시 5로 설정.
            ++i;
            System.out.println(i);
      }
}
```
실행결과
<pre>
6
6
</pre>

* 이 경우에는 어떤 수식에 포함된 것이 아니라 단독적으로 사용된 것이기 때문에, 증감연산자(++)를 피연산자의 오른쪽에 사용한 경우(i++)와 왼쪽에 사용한 경우(++i)의 차이가 전혀 없다.

예제3-2 OperatorEx2.java
```java
class OperatorEx2 {
      public static void main(String args[]) {
            int i=5;
            int j=0;
            j = i++;
            System.out.println("j=i++; 실행 후, i=" + i +", j="+ j);

            i=5;       // 결과를 비교하기 위해, i와 j의 값을 다시 5와 0으로 변경
            j=0;
            j = ++i;
            System.out.println("j=++i; 실행 후, i=" + i +", j="+ j);
      }
}
```
실행결과
<pre>
j=i++; 실행 후, i=6, j=5
j=++i; 실행 후, i=6, j=6
</pre>
* j=i++;(후위형)에서는 i값인 5가 참조되어 j에 5가 저장된 후에 i가 증가
* j=++i;(전위형)에서는 i가 5에서 6으로 먼저 증가한 다음에 참조되어 6이 j에 저장

예제3-3 OperatorEx3.java
```java
class OperatorEx3 {
      public static void main(String args[]) {
            int i=5, j=5;
            System.out.println(i++);      
            System.out.println(++j);
            System.out.println("i = " + i + ", j = " +j);
      }
}
```
실행결과
<pre>
5
6
i = 6, j = 6
</pre>
* i는 값이 증가되기 전에 참조되므로 println메서드에 i에 저장된 값 5를 넘겨주고 나서 i의 값이 증가하기 때문에 5가 출력되고, j의 경우 j에 저장된 값을 증가 시킨 후에 println메서드에 값을 넘겨주므로 6이 출력된다.

<pre>
++i 와 i= i+1의 비교

++i가 i = i + 1보다 더 적은 명령만으로 작업을 수행하기 때문에 더 빠르다.
</pre>
## 2.2 부호연산자 - +, -
- boolean형과 char형을 제외한 나머지 기본형에 사용
  예제3-4 OperatorEx4.java
```java
class OperatorEx4
{
      public static void main(String[] args)
      {
            int i = -10;
            i = +i;
            System.out.println(i);
            i=-10;
            i = -i;
            System.out.println(i);
      }
}
```
실행결과
<pre>
-10
10
</pre>
## 2.3 비트전환 연산자 - ~
- ~는 정수형과 char형에만 사용될 수 있으며, 피연산자를 2진수로 표현했을 때, 0은 1로 1은 0으로 바꾼다. 그래서, 연산자 ~에 의해 비트전환 되고 나면, 피연산자의 부호가 반대로 변경된다.
* byte, short, char형은 int형으로 변환된 후에 전환된다.
  예제3-5 OperatorEx5.java
```java
class OperatorEx5
{
      public static void main(String[] args)
      {
            byte b = 10;                        
            System.out.println("b = " + b );
            System.out.println("~b = " + ~b);
            System.out.println("~b+1 = " + (~b+1));
      }
}
```
실행결과
<pre>
b = 10
~b = -11
~b+1 = -10
</pre>
예제3-6 OperatorEx6.java
```java
class OperatorEx6
{
      public static void main(String[] args)
      {
            byte b = 10;            
//         byte result =~b; // '~'연산의 결과가 int이기 때문에 byte형 변수에 저장할 수 없다.
            byte result =(byte)~b;       // 또는 int result = ~b;와 같이 해야 한다.

            System.out.println("b = " + b );
            System.out.println("~b = " + result );
      }
}
```
실행결과
<pre>
b = 10
~b = -11
</pre>
* ~의 연산결과를 저장하기 위해서는 int형 변수에 담거나, 캐스트 연산자를 사용

## 2.4 논리부정 연산자 - !
- boolean형에만 사용할 수 있으며, true는 false로 false는 true로 변경
  예제3-7 OperatorEx7.java
```java
class OperatorEx7 {
      public static void main(String[] args) {
            boolean power = false;
            System.out.println(power);
            power = !power;             // power의 값이 false에서 true로 바뀐다.
            System.out.println(power);
            power = !power;             // power의 값이 true에서 false로 바뀐다.
            System.out.println(power);
      }
}
```
실행결과
<pre>
false
true
false
</pre>

# 3.산술연산자
<pre>
이항연산자는 연산을 수행하기 전에
- 크기가 4 byte이하인 자료형을 int형으로 변환한다.
- 피연산자의 타입을 일치시킨다.
</pre>

## 3.1 사칙연산자 - +, -, *, /
<pre>
- int형(4 byte)보다 크기가 작은 자료형(byte, short, char)은 int형으로 변환된 후에 연산을 수행한다.
     byte + short → int + int → int

- 두 개의 피연산자중 자료형의 표현범위가 큰 쪽에 맞춰서 형변환 된 후 연산을 수행한다.
     int + float → float + float → float

- 정수형간의 나눗셈에서 0으로 나누는 것은 금지되어 있다.
</pre>
### 예제3-8 OperatorEx8.java
```java
class OperatorEx8
{
      public static void main(String[] args)
      {
            byte a = 10;
            byte b = 20;
            byte c = a + b;
            System.out.println(c);
      }
}
```
### 실행결과
<pre>
OperatorEx8.java:7: possible loss of precision
found : int
required: byte
            byte c = a + b;
^
1 error
</pre>
* 4 byte의 값을 1 byte의 변수에 형변환 없이 저장하려고 했기 때문에 에러가 발생
### 예제3-9 OperatorEx9.java
```java
class OperatorEx9
{
      public static void main(String[] args)
      {
            byte a = 10;
            byte b = 30;
            byte c = (byte)(a * b);
            System.out.println(c);
      }
}
```
### 실행결과
<pre>
44
</pre>
### 예제3-10 OperatorEx10.java
```java
class OperatorEx10
{
      public static void main(String[] args)
      {
            int a = 1000000;                   // 1,000,000 1백만
            int b = 2000000;                   // 2,000,000 2백만
            long c = a * b;                   // 2,000,000,000,000 2 * 10의 12제곱
            System.out.println(c);
      }
}
```
### 실행결과
<pre>
-1454759936
</pre>
* int형과 int형의 연산결과는 int형 값(-1454759936)이기 때문에 long형으로 자동 변환되어서 long형 변수인 c에 저장되어도 결과는 같다.
### 예제3-11 OperatorEx11.java
```java
class OperatorEx11
{
      public static void main(String[] args)
      {
            char c1 = 'a';             // c1에는 문자 "a"의 문자코드(유니코드)값이 저장된다.
            char c2 = c1;             // c1에 저장되어 있는 값이 c2에 저장된다.
            char c3 ='\u0000';       // c3를 null문자로 초기화 한다.

            int i = c1 + 1;       // char형이 덧셈 연산 전에 int형으로 변환되어 97+1이 수행된다.

// 덧셈연산의 결과가 int형이므로 c3에 담기위해서는 char형으로의 형변환이 필요하다.
            c3 = (char)(c1 + 1);
            c2++;
            c2++;

            System.out.println("i=" + i);
            System.out.println("c2=" + c2);
            System.out.println("c3=" + c3);
      }
}
```
### 실행결과
<pre>
i=98
c2=c
c3=b
</pre>
### 예제3-12 OperatorEx12.java
```java
class OperatorEx12
{
      public static void main(String[] args)
      {
            char c = 'a';
            for(int i=0; i<26; i++) {             // 블럭{} 안의 문장을 26번을 반복한다.
                        System.out.print(c++); // "a"부터 시작해서 26개의 문자를 출력하게 된다.
            }
           
            System.out.println();

            c = 'A';
            for(int i=0; i<26; i++) {             // 블럭{} 안의 문장을 26번을 반복한다.
                        System.out.print(c++); // "A"부터 시작해서 26개의 문자를 출력하게 된다.
            }

            System.out.println();

            c='0';
            for(int i=0; i<10; i++) {             // 블럭{} 안의 문장을 10번을 반복한다.
                        System.out.print(c++); // "0"부터 시작해서 10개의 문자를 출력하게 된다.
            }
            System.out.println();
      }
}
```
### 실행결과
<pre>
abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789
</pre>
### 예제3-13 OperatorEx13.java
```java
class OperatorEx13
{
      public static void main(String[] args)
      {
            char lowerCase = 'a';
            char upperCase = (char)(lowerCase - 32);
            System.out.println(upperCase);
      }
}
```
### 실행결과
<pre>
A
</pre>
* 소문자를 대문자로 변경하려면, 대문자 A가 소문자 a보다 코드값이 32가 적으므로 소문자 a의 코드값에서 32를 빼면 되고, 반대로 대문자를 소문자로 변환하려면, 대문자의 코드값에 32를 더해주면 된다.
* char형과 int형간의 뺄셈연산(-) 결과는 int형이므로, 연산 후 char형으로 다시 형변환 해야 한다는 것을 잊지 말자.
### 예제3-14 OperatorEx14.java
```java
class OperatorEx14
{
      public static void main(String[] args)
      {
                  float pi = 3.141592f;
                  float shortPi = (int)(pi * 1000) / 1000f; //소수점 셋째 자리

                  System.out.println(shortPi);
      }
}
```
### 실행결과
<pre>
3.141
</pre>
### 예제3-15 OperatorEx15.java
```java
class OperatorEx15
{
      public static void main(String[] args)
      {
                  float pi = 3.141592f;
                  float shortPi = Math.round(pi * 1000) / 1000f;

                  System.out.println(shortPi);
      }
}
```
### 실행결과
<pre>
3.142
</pre>
## 3.2 나머지 연산자 - %
- 나머지 연산자는 주로 짝수, 홀수 또는 배수 검사 등에 주로 사용
- 나눗셈에서와 같이 피연산자가 정수형인 연산에서는 나누는 수(오른쪽 피연산자)로 0을 사용할 수 없고, 나머지 연산자 역시 0.0이나 0.0f로 나누는 것은 허용
### 예제3-16 OperatorEx16.java
```java
class OperatorEx16
{
      public static void main(String[] args)
      {
            int share = 10 / 8;
            int remain = 10 % 8;
            System.out.println("10을 8로 나누면, ");
            System.out.println("몫은 " + share + "이고, 나머지는 " + remain + "입니다.");
      }
}
```
### 실행결과
<pre>
10을 8로 나누면,
몫은 1이고, 나머지는 2입니다.
</pre>
### 예제3-17 OperatorEx17.java
```java
class OperatorEx17
{
      public static void main(String[] args)
      {
            for(int i=1; i <=10; i++) { // i가 1부터 10이 될 때까지, {}안의 문장을 반복 수행한다.
                  if(i%3==0) {             // i가 3으로 나누어 떨어지면, 3의 배수이므로 출력한다.
                              System.out.println(i);
                  }
            }
      }
}
```
### 실행결과
<pre>
3
6
9
</pre>
### 예제3-18 OperatorEx18.java
```java
class OperatorEx18
{
      public static void main(String[] args)
      {
            System.out.println(-10%8);
            System.out.println(10%-8);
            System.out.println(-10%-8);
      }
}
```
### 실행결과
<pre>
-2
2
-2
</pre>
## 3.3 쉬프트연산자 - <<, >>, >>>
- 정수형 변수에만 사용할 수 있는데, 피연산자의 각 자리(2진수로 표현했을 때)를 오른쪽 또는 왼쪽으로 이동(shift)한다고 해서 쉬프트연산자(shift operator)라고 한다.
<pre>
x << n는 x * 2n의 결과와 같다.
x >> n는 x / 2n의 결과와 같다.
</pre>
### 예제3-20 OperatorEx20.java
```java
class OperatorEx20 {
      public static void main(String args[]) {
            int temp;                         // 계산 결과를 담기 위한 변수

            System.out.println(-8);
            System.out.println(Integer.toBinaryString(-8)); // -8을 2진수 문자열로 변경한다.
            System.out.println();                   // 줄바꿈을 한다.
           
            temp = -8 << 1;
            System.out.println( "-8 << 1 = " + temp);      
            System.out.println(Integer.toBinaryString(temp));
            System.out.println();
           
            temp = -8 << 2;
            System.out.println( "-8 << 2 = " + temp);
            System.out.println(Integer.toBinaryString(temp));
            System.out.println();
                       
            System.out.println();
            System.out.println(-8);
            System.out.println(Integer.toBinaryString(-8));
            System.out.println();
           
            temp = -8 >> 1;
            System.out.println( "-8 >> 1 = " + temp);
            System.out.println(Integer.toBinaryString(temp));
            System.out.println();
           
            temp = -8 >> 2;
            System.out.println( "-8 >> 2 = " + temp);
            System.out.println(Integer.toBinaryString(temp));
            System.out.println();
                       
            System.out.println();
            System.out.println(-8);
            System.out.println(Integer.toBinaryString(-8));
            System.out.println();
           
            temp = -8 >>> 1;
            System.out.println( "-8 >>> 1 = " + temp);
            System.out.println(Integer.toBinaryString(temp));
            System.out.println();
           
            temp = -8 >>> 2;
            System.out.println( "-8 >>> 2 = " + temp);
            System.out.println(Integer.toBinaryString(temp));
            System.out.println();
      }
}
```
### 실행결과
<pre>
-8
11111111111111111111111111111000

-8 << 1 = -16
11111111111111111111111111110000

-8 << 2 = -32
11111111111111111111111111100000


-8
11111111111111111111111111111000

-8 >> 1 = -4
11111111111111111111111111111100

-8 >> 2 = -2
11111111111111111111111111111110


-8
11111111111111111111111111111000

-8 >>> 1 = 2147483644
1111111111111111111111111111100

-8 >>> 2 = 1073741822
111111111111111111111111111110
</pre>
* 8 >>> 1과 -8 >>> 2의 결과에서 맨 앞의 0은 생략

# 4. 비교연산자
## 4.1 대소비교연산자 - <, >, <=, >=
- 기본형 중에서는 boolean형을 제외한 나머지 자료형에 다 사용할 수 있고, <b>참조형에는 사용할 수 없다.</b>
## 4.2 등가비교연산자 - ==, !=
- 두 피연산자에 저장되어 있는 값이 같은지, 또는 다른지를 비교하는 연산자
- 대소비교연산자(<,>, <=, >=)와는 달리, 기본형은 물론 참조형 모든 자료형에 사용할 수 있다.
- 기본형의 경우 변수에 저장되어 있는 값이 같은지를 알 수 있고, 참조형의 경우 객체의 주소값을 저장하기 때문에 두 개의 피연산자(참조변수)가 같은 객체를 가리키고 있는지를 알 수 있다.
- 기본형과 참조형간에는 서로 형변환이 가능하지 않기 때문에 등가비교 연산자(==,!=)의 피연산자로 기본형과 참조형을 함께 사용할 수는 없다.
### 예제 3-21 OperatorEx21.java
```java
class OperatorEx21
{
      public static void main(String[] args)
      {
            if(10 == 10.0f) {
                  System.out.println("10과 10.0f은 같다.");
            }

            if('0' != 0) {
                  System.out.println("'0'과 0은 같지 않다.");
            }

            if('A' == 65) {
                  System.out.println("\"A\"는 65와 같다.");
            }

            int num = 5;

            if( num > 0 && num < 9) {
                  System.out.println("5는 0보다 크고, 9보다는 작다.");
            }
            
            //문자 'A'의 문자코드는 '10진수' 65
      }
}
```
### 실행결과
<pre>
10과 10.0f은 같다.
'0'과 0은 같지 않다.
'A'는 65와 같다.
5는 0보다 크고, 9보다는 작다.
</pre>
## 4.3 비트 연산자 - &, |, ^
- 비트 연산자는 이진 비트연산을 수행
- 값을 이진수로 표현했을 때의 각 자리수를 아래의 표의 규칙에 따라 연산을 수행
- 실수형인 float와 double을 제외한 모든 기본형에 사용가능
<pre>
<b>
|(OR연산자) - 피연산자 중 한 쪽의 값이 1이면, 1을 결과로 얻는다. 그 외에는 0을 얻는다.
&(AND연산자) - 피연산자 양 쪽이 모두 1이어야 1을 결과로 얻는다. 그 외에는 0을 얻는다.
^(XOR연산자) - 피연산자의 값이 서로 다를 때만 1을 결과로 얻는다. 같을 때는 0을 얻는다.
</b>
</pre>
* boolean형의 경우 1은 true로 0은 false로 생각하면 된다. 예를 들면 true & true의 연산결과는 true이고 true ^false의 결과는 true이다.
* 연산자 "^"는 배타적 OR(Exclusive OR)라고 하며, 피연산자의 값이 서로 다른 경우, 즉 배타적인 경우에만 1 또는 true를 결과로 얻는다.
### 예제 3-22 OperatorEx22.java
```java
class OperatorEx22
{
      public static void main(String[] args)
      {
            int x = 3;
            int y = 5;
            System.out.println("x는 " + x + "이고, y는 " + y +"일 때, ");
            System.out.println("x | y = " + (x|y));
            System.out.println("x & y = " + (x&y));
            System.out.println("x ^ y = " + (x^y));

            System.out.println("true | false = " + (true|false));
            System.out.println("true & false = " + (true&false));
            System.out.println("true ^ false = " + (true^false));
      }
}
```
### 실행결과
<pre>
x는 3이고, y는 5일 때,
x | y = 7
x & y = 1
x ^ y = 6
true | false = true
true & false = false
true ^ false = true
</pre>
- 비트연산자는 덧셈연산자(+)보다 연산우선순위가 낮기 때문에 괄호를 사용

# 5.기타연산자
## 5.1 논리연산자 - &&, ||
- 논리 연산자는 피연산자로 boolean형 또는 boolean형 값을 결과로 하는 조건식만을 허용
- 조건문과 반복문에서 조건식간의 결합에 사용
- "&&"가 "||" 연산보다 우선순위가 높으므로 한 조건식에 "&&"와 "||" 가 함께 사용될 때는 괄호를 사용해서 우선순위를 명확히 해주는 것이 좋음
<pre><b>
|| (OR결합) - 피연산자 중 한 쪽만 true이면 true을 결과로 얻는다.
&&(AND결합) - 피연산자 양쪽 모두 true이어야 true을 결과로 얻는다.
</pre></b>
### 예제3-23 OperatorEx23.java
```java
class OperatorEx23
{
      public static void main(String[] args)
      {
            char x='j';

            if((x>='a' && x <='z') || (x>='A' && x <='Z')) {
                  System.out.println("유효한 문자입니다.");
            } else {
                  System.out.println("유효하지 않은 문자입니다.");
            }
      }
}
```
### 실행결과
<pre>
유효한 문자입니다.
</pre>
## 5.2 삼항 연산자 - ? :
- 삼항연산자는 if문으로 바꿔 쓸 수 있으며, 간단한 if문 대신 삼항연산자를 사용하면 코드를 보다 간단히 할 수 있다.
<pre>
(조건식) ? 식1 : 식2

result = (x > 0) ? x : -x
</pre>
위와 아래는 같다.
<pre>
if (x > 0) {
     result = x;
} else {
     result = -x;
}
</pre>
### 예제3-24 OperatorEx24.java
```java
class OperatorEx24
{
      public static void main(String[] args)
      {
            int x = 10;
            int y = -10;

            int absX = (x >=0) ? x : -x;
            int absY = (y >=0) ? y : -y;

            System.out.println("x=10일 때, x의 절대값은 "+absX);
            System.out.println("y=-10일 때, y의 절대값은 "+absY);
      }
}
```
### 실행결과
<pre>
x=10일 때, x의 절대값은 10
y=-10일 때, y의 절대값은 10
</pre>
## 5.3 대입 연산자 - =, op=
- 대입연산자는 변수에 값 또는 수식의 연산결과를 저장하는데 사용된다. 대입연산자의 왼쪽에는 반드시 변수가 위치해야하며, 오른쪽에는 리터럴이나 변수 또는 수식이 올 수 있다.
<pre>
int i = 0;
i = 3;
i = i + 3;
3 = i + 3;                // 대입연산자의 왼쪽 피연산자가 변수가 아니라 에러
final MAX = 3;
MAX = 10;             // 상수는 값 변경 안된다.
</pre>>









