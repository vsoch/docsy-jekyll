---
title: HTML Basics
tags: 
 - HTML
 - CSS
 - JavaScript
description: Learn the basic HTML!
---
# HTML

## Achievement Goals
- HTML과 마크업 언어는 무엇인가?  
- CSS와 JavaScript는 웹개발에서 어떻게 쓰이는가?  
- HTML의 구조와 문법 중에서 opening tag, closing tag, self closing tag에 대해서 설명하라.  
- HTML 요소 중, div, span, ul, ol, li는 무엇인가?  
- input type을 어떻게 설정하는가?  

- 동적인 웹 어플리케이션 개발을 위한 HTML 구조는 어떻게 설정하는가?  
- id와 class를 목적에 맞게 사용할 수 있는가?  
- 읽기 쉬운, 의미있는 HTML 문서를 작성할 수 있는가?  
- HTML5 semantic tag란 무엇인가?  

## HTML CSS and JavaScript
HTML은 Hyper Text Markup language 으로, 웹 페이지의 구조를 표현한다.  

~~컴퓨터 공학에서 일반적으로 사용하는 **언어**라는 개념은 **마크업 언어**가 아닌 **프로그래밍 언어**이기 때문에 HTML을 언어라고 하면 버튼이 눌리는 사람이 간혹 있다.~~
```bash
A : 언어 뭐 할 줄 아세요?
B : HTML이요.
A : ?
```

CSS는 웹페이지의 스타일을 담당하며, JavaScript는 유저와 상호작용을 명세한다.  
실제 개발 과정을 살펴보면, 먼저 와이어 프레임을 HTML으로 만들고, 디자니어가 준 자료로 CSS를 작성한 후에, 이후 기능 추가하는게 일반적이라 한다.

HTML 그 자체는 정적이다. HTML은 한번 웹페이지에 렌더링 되면 사용자가 변경하기 어렵다.  
이러한 뼈대만 있는 HTML에 동적인 기능을 넣어주는게 JavaScript이다.  

## HTML
HTML은 웹페이지의 틀을 만드는 언어이다. 매우 많은 종류의 tag들의 집합이다.  
여기서 tag란. 부등호로 묶인 html의 기본 구성요소를 말한다.  
아래는 간단한 HTML의 예시이다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "UTF-8" />
        <title>제목</title>
    </head>

    <body>
        <div>div 태그는 한 줄을 차지합니다</div>
        <span>span 태그는 컨텐츠 크기만큼 공간을 차지합니다</span>
        <span>span 2</span>
        <span>span 3</span>
        <div>division 3</div>
        <img src="https://i.imgur.com/JVAj4t0.jpg">
        <a href="https://google.com">google</a>
    </body>
</html>
```

각 태그에 대한 설명은 다음과 같다. 

```html
<!DOCTYPE html>  <!--이 문서가 html문서임을 명시-->
<html> <!--html 시작 태그로, 문서 전체의 틀을 구성-->
    <head> <!--head 태그에서는 문서의 메타 데이터를 선언한다.-->
        <title>Page title</title> <!--문서의 제목, 브라우저의 탭에 보여진다.-->
    </head> <!--</태그이름>은 해당 태그가 끝났음을 의미한다.-->
    <body> <!--문서의 내용을 담는다.-->
        <h1>Hello world</h1> <!--heading을 의미하며, 크기에 따라 h1부터 h6까지 있다.-->
        <div>Contents here</div> <!--content division을 의미하며, 줄바꿈이 된다.-->
            <span>Here too!</span> <!--줄바꿈이 없는 content 컨테이너.-->
        </div>
    </body>
</html>
```

추가로 head, header 가 있는데 헷갈리지 않도록 하자.  

- head: 웹페이지의 메타 데이터  
- header : body 내에서 가장 윗부분에 고정되어있는 것  
- h1~h5 : 본문의 제목에 관한 것이다.  

HTML은 태그를 열고 닫는 구조이다. 즉, 트리구조이다. 때문에 자식과 부모노드로 이루어져있다고 볼수 있다.  

<!-- 위 문서의 경우, 다음과 같은 구조로 이루어져있다. 

>   HTML문서 시작  
>   >   html   
>   >   >   head      
>   >   >   >   title: Page title  

>   >   >   body   
>   >   >   >   h1 : Hello world
>   >   >   >   div: Contents here  
>   >   >   >   span: Here too! -->

항상 태그를 열었으면 태그가 닫혀야한다. 하지만 역시 closing tag를 매번 작성하는 일은 귀찮기 때문에, self-closing인 tag들도 존재한다.

다음 두 줄은 동일한 기능을하는 태그이다.
```html
<img src = "codestates-logo.png"></img>
<img src = "codestates-logo.png" />
```
사실 아래줄에서 /를 생략해도 된다. 그리고 태그에는 src과 같은 속성이 담기기도한다.  
속성을 담을 때에는 띄어쓰기 (white-space)로 구분한다.

다른 태그들을 더 살펴보자.
- div : division  
- span : span  

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "UTF-8" />
        <title>제목</title>
    </head>

    <body>
        <div>div 태그는 한 줄을 차지합니다</div>
        <span>span 태그는 컨텐츠 크기만큼 공간을 차지합니다</span>
        <span>span 2</span>
        <span>span 3</span>
        <div>division 3</div>
    </body>
</html>
```

- img : src 속성에 이미지 주소를 넣어 이미지를 나타낸다.
- a : 외부 링크로 연결하는 태그.
- ul, li : Unordered List, List item  
-  input : input(Text, Radio, Checkbox)  
- textarea : Multi-line Text input  
- button : 우리가 익히 아는 버튼

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "UTF-8" />
        <title>제목</title>
    </head>

    <body>
        <input type = "text" placeholder="type here">
        <div>
            <input type="radio" name = "choice" value = "a"> a
            <input type="radio" name = "choice" value = "b"> b
        </div>
        <textarea></textarea>
        <div>
            <input type="checkbox" checked> checked
            <input type="checkbox" > unchecked
        </div>
        
        <button>Submit</button>
        
    </body>
</html>
```

### img  
특이하게 이미지 태그는 닫는 태그가 없다.  
```javascript
<img src="https://i.imgur.com/JVAj4t0.jpg">
```  
### a
링크 삽입을 할 떄에, 새 창에 링크가 나타나도록 하고 싶으면 target 옵션을 달아준다. target 옵션을 달아주지 않으면 해당 태그가 있는, 현재 내 창에서 이동한다.
```html
<a href="https://codestates.com" target = "_blank">코드스테이츠</a>
```
### !--
주석은 위에서 미리 보았듯 다음과 같이 표현한다.
```html
<!--put annotations here!-->
```
중요한 점은 ```<!--``` 부분을 중첩해서 쓰지 않아야한다는 점이다.  
nested 주석의 닫는 태그를 첫번째 주석의 종료 태그로 인식하기 때문이다.

### ul, li
ul, li 는 리스트를 나타내며, 한쌍이다.
unordered list를 보고 유추할 수 있듯, ordered list도 있다.
ul태그를 쓰면 점이 찍히고 ol(ordered list)로 하면 숫자가 찍힌다. (1부터 시작)  
리스트의 구성 요소임을 알리기 위해서 li 태그를 사용한다.  
만약 li 태그를 사용하지 않고 다른 것을 쓴다면 리스트로 인식하지 않는다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>title</title>
    </head>

    <body>
        <ol>
            <span>Item 1</span>
            <li>Item 2</li>
            <li>Item 3 has nested list
                <ul>
                    <li>Item 3-1</li>
                </ul>
            </li>
        </ol>
    </body>
</html>
```

### input, textarea
HTML은 input, textarea에서 type 속성을 받아 다양한 입력 폼을 지원한다.

```html
<input type = "text" placeholder="type here">
<div>
    <input type="radio" name = "choice" value = "a"> a
    <input type="radio" name = "choice" value = "b"> b
</div>
<textarea></textarea>
<div>
    <input type="checkbox" checked> checked
    <input type="checkbox" > unchecked
</div>
```

input 태그의 옵션인 type에 넣는 값에 따라 표시 되는 것이 달라진다.  
- text: 일반 텍스트
- password라 까만 점으로 글을 가려준다.

input 태그도 img 태그와 같이 닫는 태그가 없어서 헷갈리는데, 해당하는 컴포넌트를 기준으로 좌, 우에 이름을 작성할 수 있다.  

- radio : 라디오버튼은 그룹 중 오직 하나만 체크 가능하다. 그룹 설정을 통해 "오직 하나"임을 결정한다. 그룹 설정은 name 속성을 이용해서 해야한다.  
- checkbox : radio 옵션과 다르게 여러개를 선택할 수 있다.

textarea는 항상 열고 닫는 태그를 따로 해야한다. 줄바꿈이 가능하다.

### p
태그에서 p는 paragraph를 의미한다. div와 기능으로는 같지만, 개발자가 보기 쉽도록 의미를 부여한 셈이다.

### button
button 태그의 예시는 아래와 같다.  
기능 추가는 JavaScript에서 구현하는 것으로 생각하고 (관심사 분리), 우선은 구조에만 집중하자.

```javascript
<button>Submit</button>
<div class = "name">나원후</div>
```
## Dizzy Things
- tag : div 따위의 것들
- contents : 태그와 태그 사이에 들어있는 것.  
- attribute : 태그 안에 넣는 class="name" 따위의 것들
- element : 태그로 감싼 한 덩어리; 태그 + 콘텐츠 (+ 속성) = 요소 (element)  

## Markdown and Markup

Markdown은  Markup아래에 있는 언어의 일종이다. 정의를 살피면 다음과 같다.

- Markup : 마크업 언어는 문서가 화면에 표시되는 형식을 나타내거나, 데이터의 논리적인 구조를 명시하기 위한 규칙들을 정의한 언어의 일종이다.  
데이터를 기술한 언어라는 점에서 프로그래밍 언어와는 차이가 있다.  
즉, 데이터를 가공하는 것이 아닌, 그저 화면에 표시하기 위해서 사용한다.  

- Markdown : 마크다운은 마크업 언어의 일종으로, John Gruber와 Aaron Swartz가 만들었다.  
온갖 태그로 범벅된 HTML 문서 등과 달리, 읽기도 쓰기도 쉬운 문서 양식을 지향한다.  

읽기도 쓰기도 쉬운 문서 양식을 지향하기 때문에, 복잡한 태그 구조가 사라지고 간단한 텍스트들과 몇 가지 문법만 알면 작성할 수 있다.