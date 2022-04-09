---
title: Java
tags: 
 - pksoooooo
 - github
description: Java Jungsuck Study
---


# 1. 배열

## 1.1 배열(Array)이란?
- 같은 타입의 여러 변수를 하나의 묶음으로 다루는 것을 "배열"이라고 한다
```java
int score1=0, score2=0, score3=0, score4=0, score5=0 ;

// 위아래 같다

int[] score = new int[5]; // 5개의 int 값을 저장할 수 있는 배열을 생성한다.

```

## 1.2 배열의 선언
```java
int[] score;        //타입[] 변수이름;
String[] name;
```

## 1.3 배열의 생성
- 배열을 선언하는 것은 단지 생성된 배열을 다루기 위한 참조변수를 위한 공간이 만들어지는 것
- 배열을 생성해야만 비로소 데이터를 저장할 수 있는 공간이 만들어지는 것
```java
int[] score;  // 배열을 선언한다.(생성된 배열을 다루는데 사용될 참조변수 선언)
score = new int[5];  // 배열을 생성한다.(5개의 int값을 저장할 수 있는 공간생성)

int[] score = new int[5]; //한 문장으로 줄여 쓸 수 있다.
```

## 1.4 배열의 초기화
```java
int[] score = new int[5];      // 크기가 5인 int형 배열을 생성
score[0] = 100;                   // 각 요소에 직접 값을 저장
score[1] = 90;
score[2] = 80;
score[3] = 70;
score[4] = 60;
```

## 1.5 배열의 활용
- 배열의 각 저장공간에 값을 저장하고 또는 저장된 값을 읽어오기 위해서는 배열 참조변수와 인덱스를 이용한다.
- 배열의 인덱스는 배열의 각 저장공간에 자동적으로 주어지는 일련 번호
- 0부터 시작해서 1씩 증가하는 연속적인 값
```java
score[3] = 100;         // 배열 score의 4번째 요소에 100을 저장한다.
int value = score[3]; // 배열 score의 4번째 요소에 저장된 값을 읽어서 value에 저장한다.

//for문 사용 예제
int[] score = { 100, 90, 80, 70, 60, 50 };

for (int i=0; i < 6; i++) {
          System.out.println(score[i]);
}

//위 아래 동일

for(int i=0; i < score.length; i++) {
     System.out.println(score[i]);
}
```
- length는 배열의 크기가 변경됨에 따라 자동적으로 변경된 배열의 크기를 갖기 때문에, 배열의 처리에 사용되는 for문의 조건식을 일일이 변경해주지 않아도 된다.

## 1.6 다차원 배열
- 1차원 배열 뿐만 아니라 2차원 이상의 다차원 배열도 허용
- 특별한 경우를 제외하고는 2차원 이상의 배열은 잘 사용되지 않는다.
```java
int[][] score = new int[5][3];      // 5행 3열의 2차원 배열을 생성한다.

score[0][0]=100;
score[0][1]=100;
score[0][2]=100;
score[1][0]=20;
score[1][1]=20;
...
score[4][2]=50;

int[][] score = {{100, 100, 100}, {20, 20, 20}, {30, 30, 30}, {40, 40, 40}, {50, 50, 50}};

```
예제 - ArrayEx7_PKS.java

## 1.7 가변 배열
- 2차원 이상의 다차원 배열을 생성할 때 전체 배열 차수 중 마지막 차수의 크기를 지정하지 않고, 추후에 각기 다른 크기의 배열을 생성함으로써 고정된 형태가 아닌 보다 유동적인 가변 배열을 구성할 수 있다.
```java
// 1
int[][] score = new int[5][3];

// 2
int[][] score = new int[5][];       // 두 번째 차원의 크기는 지정하지 않는다.
score[0] = new int[3];
score[1] = new int[3];
score[2] = new int[3];
score[3] = new int[3];
score[4] = new int[3];

//2차원 배열을 생성하면 다음과 같이 각 열마다 다른 크기의 배열이 생성하는 것이 가능
int[][] score = new int[5][];
score[0] = new int[4];
score[1] = new int[3];
score[2] = new int[2];
score[3] = new int[2];
score[4] = new int[3];

//동시 초기화 방법
int[][] score = {{100, 100, 100, 100}, {20, 20, 20}, {30, 30}, {40, 40}, {50, 50, 50}};
```

