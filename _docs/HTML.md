오늘 이후 대답할 수 있는 것.
html이 무엇인가? 마크업 언어는 무엇ㅅ인가
css와 js는 웹개발에서 어떻게 쓰이는가?
html의 구조와 문법 중에서 opening tag, closing tag, self closing tag에 대해서 설명하라.
html요소에 대해서 div, span태그가 무엇인가?
ul, ol, li는 무엇인가?
input type을 어떻게 설정하는가?

동적인 웹 어플리케이션 개발을 위한 html구조는 어떻게 설정하는가?
id와 class를 목적에 맞게 사용할 수 있는가?
읽기 쉬운, 의미있는 html문서를 작성할 수 있는가?
html5 semantic tag란 무엇인가?

건물을 짓는다고 해보자.
웹페이지의 mark up language  : 구조
벽은 어디고 천장은 어디이다
HyperText Markup language

css는 스타일
벽의 색은 무엇 천장의 무늬는 무엇

js는 유저와 상호작용
사용자가 접근하면 전등을 켜라

실제 개발 과정:
와이어 프레임을 html로 만들고
디자니어가 준 자료로 css를 작성
이후 기능 추가.

html:
웹페이지의 틀을 만드는 언어..
>> tag들의 집합이다. 
여기서 tag란 부등호로 묶인 html의 기본 구성요소이다.

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

이를테면,
<!DOCTYPE html> :이 문서가 html문서임을 명시.
<html> : html 시작 태그로, 문서 전체의 ㅌ르을 구성
    <head> : head 태그는 문서의 메타 데이터를 선언
        <title>Page title</title> : 문서의 제목, 브라우저의 탭에 보여진다.
    </head> : </태그이름>은 해당 태그가 끝났음을 의미한다.
    <body> : 문서의 내용을 담는다.
        <h1>Hello world</h1> : heading을 의미하며, 크기에 따라 h1부터 h6까지 있다.
        <div>Contents here> :content division을 의미하며, 줄바꿈이 된다.
            <span>Here too!</span> : 줄바꿈이 없는 content 컨테이너
        </div>
    </body>
</html>

head: 웹페이지의 메타 데이터
header : body 내에서 가장 윗부분에 고정되어있는 것
h1~h5 : 본문의 제목에 관한 것이다.



태그를 열고 닫는 구조이다. 즉, 트리구조이다.
자식과 부모노드로 이루어져있다.
위 문서의 경우,

-HTML문서 시작
-html  
    head      
        title: Page title
    body   
        h1 : Hello world
        dic: Contents here  
            spac: Here too!

항상 태그를 열었으면 태그가 닫혀야한다.
가끔 닫는 태그가 없는데,
self-closing인 경우 그렇다. 

이를테면,
<img src = "codestates-logo.png"></img>
<img src = "codestates-logo.png" />
사실 아래줄에서 /를 생략해도 된다.
그리고 태그에 src과 같은 속성이 담기기도한다.

각각에 태그에 대한 설명은 다음과 같다.
div : division
span : span

예시:
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

img : image
a : link
ul, li : Unordered List, List item
input : input(Text, Radio, Checkbox)
textarea : Multi-line Text input
button : button

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

이미지 삽입
이미지 태그는 닫는 태그가 없다.
<img src="https://i.imgur.com/JVAj4t0.jpg">

링크 삽입
내 생각: 사실 하이퍼 텍스트...이니까 링크가 주력이지 않을까나
<a href="https://codestates.com" target = "_blank">코드스테이츠</a>
새 창에 하고 싶으면 target 옵션을 달아준다.
안달아주면 내 창이 바뀜.

주석
근데 주석을 어떻게 달지?
<!-- 내용 --> 이렇게 하는 듯 하다.
중요한 점은 중첩해서 쓰지 말것.
nested 주석의 닫는 태그를 첫번째 주석의 종료 태그로 인식하게됨..

ul, li : 리스트. 한쌍이다.
unordered list.. ordered list도 있습니다.
ul태그를 쓰면 점이 찍히고 ol(ordered list)로 하면 숫자가 찍힙니다. (1부터 시작))

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

내 생각
리스트의 원소로 <li>태그 대신에 다른 것을 쓰면 어떻게 되나?
>> 리스트로 인식하지 않는다.
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

inpout, textarea : 다양한 입력 폼

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

input 태그의 옵션으로 type에 text를 넣으면 일반 텍스트를 넣고
password라 하면 까만 점으로 글을 가려준다.
닫는 태그가 없어서 헷갈리는데, 해당하는 컴포넌트를 기준으로 좌, 우에 이름을 작성할 수 있다.
라디오버튼은 그룹 중 오직 하나만 체크 가능하고 
>> 즉, 그룹 설정을 해야한다..
>> 그룹 설정은 name 속성을 이용해서 해야한다.
체크 박스는 여러개를 선택할 수 있다.

textarea는 항상 열고 닫는 태그를 따로 해야한다.
줄바꿈이 가능하다.

html은 태그의 옵션을 넣을 떄 , 로 구분하지 않아서 헷갈린다.
p는 paragraph
버튼
<button>Submit</button>

<div class = "name">나원후</div>
태그, 요소, 콘텐츠의 차이:
태그: div
콘텐츠: 태그와 태그 사이에 들어있는 것.
class="name" 속성
태그 + 콘텐츠(+속성) = 요소 (element)

html 그자체는 정적이다. 
한번 웹페이지에 렌더링 되면 사용자가 변경하기 어렵다.

뼈대만 있는 html에 동적인 기능을 넣어주는게 js..

