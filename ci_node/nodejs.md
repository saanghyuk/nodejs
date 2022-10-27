# Node.js

오늘날 하나의 웹사이트나 앱(Application)을 만들 때는, 아무것도 없는 상태에서 바로 코드를 작성하기보다는 **'프레임워크'**를 사용하는 경우가 많습니다. **프레임워크**란 '일정한 틀을 갖고 있어서, 개발자가 특정 부분만 원하는 모습대로 채워 넣으면, 프로그램을 완성할 수 있게 해주는 준비된 코드 체계'를 의미하는데요. '프레임워크'라는 단어가 이밖에 다른 의미를 가질 때도 있지만 일단 이 노트에서는 이런 의미로 사용하겠습니다.

프레임워크 덕분에 우리는 다양한 서비스를 더 빠르고 안정적으로 개발할 수 있는데요. 예를 들어, Java 기반의 **Spring**, Python 기반의 **Django** 같은 프레임워크들이 존재하기 때문에 더 빠르고 편하게 개발할 수 있는 것이죠. 그리고 프레임워크마다 그 특성(기술적인 특성, 그것을 둘러싼 개발자 생태계 등)이 다르기 때문에 회사나 개인은, 제공하려는 서비스에 맞는 프레임워크를 골라서 사용하는 것이고요.

**그렇다면 우리가 배울 Node.js는 프레임워크일까요?**  프레임워크의 의미를 어떻게 보느냐에 따라 다르지만, 위에서 말한 의미를 기준으로 생각한다면 Node.js는 프레임워크가 아닙니다.

Node.js는 프레임워크가 아니고, 자바스크립트라는 언어의 '실행 환경'일 뿐입니다. 컴퓨터에 Node.js를 깔고 나서 개발을 시작하려고 하면, '일정한 틀'이라는 게 없습니다. 주어지는 건 단지 Node.js라는 실행 환경일 뿐이고, 그 위에서 '프로그램의 전반적인 구조'를 설계하고 결정하는 건 전부 개발자의 몫이기 때문입니다.

이와 달리 프레임워크의 경우, 일정한 틀이 있기 때문에 개발자는 이 틀에서 개발하면 됩니다. 예를 들어, Django와 같은 프레임워크를 사용하면, MVT 패턴이 적용된 틀 안에서 개발하면 되는데요. MVT 패턴이란 소프트웨어 아키텍처 패턴(Software Architecture Pattern) 중의 하나이고, 소프트웨어 아키텍처 패턴이란 무수히 많은 프로그램들의 다양한 동작 구조들을, 유사한 것들끼리 모으고 분류하여 정리한 여러 개의 패턴들을 의미합니다. MVT 패턴은 그중 하나로, 프로그램 내부에 크게 3가지 구성요소인 Model, View, Template이라는 단위가 존재하고, 이것들이 상호유기적으로 동작하는 패턴입니다. 혹시 MVT 패턴에 대해 좀 더 자세히 알고 싶은 분은 [이 영상](https://www.youtube.com/watch?v=GGkFg52Ot5o)을 참고하세요.

그래서 Django로 개발을 하게 되면, 개발자는 Model, View, Template에 해당하는 각 부분만 코드로 잘 채워넣어주면 됩니다. 그럼 Django 프레임워크가 그것들을 연동시켜서 프로그램이 실행될 수 있게 해줍니다. 즉, Django를 쓰는 개발자는 MVT 패턴이라는 틀의 특정 부분들만을 채워주면 되는 겁니다. 이렇게 일정한 패턴에 의존해서 개발하도록 하는 점은 Django 뿐만 아니라 다른 프레임워크들도 비슷합니다.

이때까지 설명한 내용을 보기 쉽게 표현한다면 다음 이미지와 같습니다.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3693&directory=Untitled.png&name=Untitled.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3693&directory=Untitled.png&name=Untitled.png)

왼쪽은 Node.js라는 실행환경 위에서, 개발자 본인이 직접 프로그램의 동작 구조를 설계하고 그것을 자바스크립트(.js) 코드로 구현해나가는 모습을 나타낸 이미지입니다. 그리고 오른쪽은 Python 위에서 실행되는, Django 프레임워크의 정해진 틀 내에서 개발하는 모습을 나타낸 건데요. 지금 Django 프레임워크 자체도 파이썬(.py) 코드로 작성되어 있고, 개발자가 직접 채워 넣은 부분들(별표, 세모)도 파이썬 코드로 작성되어 있습니다. 이제 개발자는 물음표 표시가 있는 원 부분만 완성하면 하나의 온전한 프로그램을 완성할 수 있게 되는 겁니다.

왜 Node.js가 프레임워크가 아닌지, 이제 이해가 되나요?

이번 노트에서는 프레임워크가 무엇인지, 왜 Node.js가 프레임워크가 아니라 단순한 실행환경일 뿐인지에 관해서 설명했습니다. 하지만 이 차이를 제대로 실감하려면 Node.js로도 개발을 해보고, Django 같은 프레임워크로도 개발을 해봐야 하는데요. 혹시 관심이 있다면, 코드잇에서 Node.js 토픽들과 Django 토픽들을 수강하셔서 그 차이점을 실감해보시기를 추천합니다.

참고로, 프레임워크의 개념에 관해 더 자세한 설명을 듣고 싶은 분은 ['컴퓨터 개론' 토픽의 영상들](https://www.codeit.kr/learn/courses/intro-to-computer/2570)을 참고하세요.





- 모듈과 비동기

  - 모듈 : 전체를 이루는 부품 하나하나. JS파일 하나가 모듈이다. 

    

이전 영상에서는 **main.js** 모듈에서 **math_tools.js** 모듈의 **add 함수**를 가져와서 사용해봤는데요. 하나의 모듈에서 다른 모듈의 것을 가져다가 쓸 때, 추가로 알아야 할 내용들이 있습니다. 아래의 내용을 꼼꼼하게 읽어보세요.

# 1. 모듈의 확장자인 .js를 꼭 붙이지 않아도 됩니다.

**main.js** 모듈에서 **math_tool.js** 모듈을 로드할 때

```jsx
let m = require('./math-tools.js');
```

이렇게 파일 이름 뒤에 붙은 **.js**라는 확장자까지 전부 적어줬었죠? 하지만 확장자 없이 그냥 파일 이름만 적어줘도 됩니다. 이렇게요.

```jsx
let m = require('./math-tools');
```

main.js 모듈을 이렇게 저장하고 그대로 실행해보세요. 그래도 잘 실행되는 것을 확인할 수 있을 겁니다. 실전에서는 보통 이렇게 확장자를 생략하는 경우도 많으니까 잘 기억해두세요.

# 2. 모듈의 경로를 정확하게 작성해야 합니다.

이전 영상에서는 main.js 모듈과 math_tools.js 모듈이 같은 디렉토리 안에 있었습니다.

```jsx
let m = require('./math-tools.js');
```

그래서 이렇게 **./** 기호로 main.js 모듈을 기준으로, 현재 디렉토리 안의 math_tools.js 모듈이라는 걸 나타냈는데요.

만약 math_tools.js 모듈의 위치가 다른 곳이라면, 경로 표시도 변경해줘야 합니다. 예를 들어 math-tools 모듈이, main.js 파일이 있는 현재 디렉토리의 부모 디렉토리의 modules라는 디렉토리에 있었다고 가정해봅시다. 그럼 이렇게 변경해줘야 합니다.

```jsx
let m = require('../modules/math-tools.js');
```

`..` 은 부모 디렉토리를 나타내는 상대 경로인데요. 이 내용이 궁금하신 분들은 실용적 유닉스 커맨드 토픽에 있는 [절대 경로와 상대 경로](https://www.codeit.kr/learn/4903) 레슨을 참고하시면 됩니다.

require 함수에 인자를 작성할 때는, 로드하고 싶은 모듈의 위치를 잘 확인하고, 정확하게 경로 표시를 해주세요.

# 3. require 함수가 리턴하는 객체는 상수로 대입하는 게 좋습니다.

자바스크립트에서 **변수**(variable)와 **상수**(constant)의 차이는 알고 계신가요?  변수에는 값을 원할 때마다 새롭게 지정해도 되지만, 상수의 경우 값을 한번 설정한 후에는 다른 값을 설정할 수 없는데요.

저는 이전 영상에서 require 함수가 math-tools.js 모듈을 로드해서 리턴한 객체를 m이라는 변수에 대입했습니다.

```jsx
let m = require('./math-tools.js');
```

하지만 require 함수가 리턴한 객체는 변수보다는 상수로 받는 게 좋습니다. 이런 식으로 말이죠.

```jsx
const m = require('./math-tools.js');
```

왜 그런 걸까요? 모듈이 리턴한 객체를 변수로 받으면, 나중에 본인 또는 다른 개발자가 변수 m에 다른 값을 실수로 다시 지정하게 될 수도 있습니다. 이 경우, 그것 자체만으로는 에러가 발생하지 않지만, 의도하지 않은 오류가 발생할 수 있다는 점에서 오히려 더 위험합니다.

하지만 모듈이 리턴한 객체를 상수로 받으면, 상수 m에 새로운 값을 다시 지정하려는 코드 자체에서 에러가 발생하기 때문에, 잘못된 코드를 작성하는 것을 미리 방지할 수 있죠.

**저도 다음 영상부터는 모든 모듈을 상수로 받을 거니까 미리 기억해주세요!**

# 4. 모듈 안의 모든 것들을 공개할 수 있어요.

이전 영상에서는 math-tools.js 모듈에서 add라는 함수만 공개하고, main 모듈에서 가져다 써봤습니다. 하지만 함수만 이렇게 공개하고, 사용할 수 있는 건 아닙니다.

변수에서부터 객체까지, 모듈 안에 있는 것들은 모두 다른 모듈이 사용하도록 공개할 수 있는데요. 예를 들어 **math-tools.js** 모듈을 이렇게 바꿔볼게요.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3706&directory=Untitled%203.png&name=Untitled+3.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3706&directory=Untitled%203.png&name=Untitled+3.png)

영상에서 봤던 add 함수 말고도

변수(author), 상수(PI), 객체(test)를 추가하고 맨 아래에서 exports 키워드로 이것들을 하나씩 다 공개해주었습니다.

그리고 **main.js** 모듈에서

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3706&directory=Untitled%204.png&name=Untitled+4.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3706&directory=Untitled%204.png&name=Untitled+4.png)

이것들을 모두 가져다 사용했는데요.

터미널에서 main.js 모듈을 실행해보면

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3706&directory=Untitled%202.png&name=Untitled+2.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3706&directory=Untitled%202.png&name=Untitled+2.png)

이렇게 모두 잘 사용할 수 있다는 것을 알 수 있습니다. 원하는 모든 것들을 모듈 밖으로 공개할 수 있다는 사실, 잘 기억하세요!

객체를 외부에 공개할때, 

```js

let calculator = {
  PI: 3.14,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
module.exports = calculator;

```





이전 영상에서는 **exports**로 모듈 외부에 공개했던 각각의 것들을, 하나의 객체로 모아서 **module.exports**로 모듈 외부에 공개하는 법을 배웠습니다. 그러니까 원래의 이런 코드를

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3750&directory=Untitled.png&name=Untitled.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3750&directory=Untitled.png&name=Untitled.png)

이렇게 바꿨는데요.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3750&directory=Untitled 1.png&name=Untitled+1.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3750&directory=Untitled+1.png&name=Untitled+1.png)

그런데 함수 부분을 보면 원래

```jsx
function add(a, b) { return a + b; }
```

이런 식으로 써있던 것이

```jsx
(a, b) ⇒ { return a + b; }
```

이렇게 바뀐 것을 볼 수 있습니다. 이게 뭘까요? 이건 **Arrow Function**이라고 하는데요. Arrow Function은 함수를 나타내는 또다른 방식입니다. 바로 다음 영상의 내용을 보기 전에 Arrow Function에 대해 짚고 넘어가겠습니다.  
 여러분, 자바스크립트에서는 보통 함수를 이런 식으로 표현하죠?

```jsx
function add(a, b) {
  return a + b;
}
```

이런 식으로 함수를 선언하는 형태를 **Function Declaration(함수 선언식)**이라고 하고,

```jsx
const add = function(a, b) {
  return a + b;
};
```

이런 식으로 함수를 나타내는 형태를 **Function Expression(함수 표현식)**이라고 합니다.

이 두 가지가 자바스크립트에서 전통적으로 사용하는 함수 표현 방법인데요.

그런데 Function Expression(함수 표현식)의 경우, 이런 식으로 표현하는 것도 가능합니다.

```jsx
const add = (a, b) => { 
  return a + b;
};
```

이런 식으로 작성된 함수를 **Arrow Function**(화살표 함수)이라고 하는데요.

지금 여기서 왼쪽의 const add 부분은 단지 함수의 이름일 뿐이고, 그 오른쪽을 자세히 봐야합니다.

```jsx
(a, b) => {
  return a + b;
}
```

이 부분을 자세히 살펴봅시다. 지금 인자들이 괄호 안에 쓰여 있고 그 옆에 화살표(⇒)가 있죠? 화살표를 영어로는 **Arrow**라고 합니다. 화살표가 함수의 몸체(바디, body) **{ return a + b; }**를 가리키고 있는데요. 이런 식으로 나타낸 함수를 Arrow Function이라고 합니다. 이 Arrow Function은 자바스크립트의 최근 문법 [ES6](http://es6-features.org/#ExpressionBodies)에서 새롭게 도입된 표기법인데요.

기존에 함수를 나타내던 방식들과 **Arrow Function**은 하나의 함수를 나타낸다는 점에서는 동일하지만 기능상의 미세한 차이가 있기는 합니다. 일단 그런 부분은 나중에 자바스크립트 중고급 토픽에서 배우도록 하고, 여기서는 일단 Arrow Function 형식으로도 함수를 나타낼 수 있다는 점만 잘 기억합시다.

특히, 다른 함수의 인자로 들어가는 함수를 이 Arrow Function으로 나타내는 경우가 많은데요. 잠깐 아래 코드를 보세요.

```jsx
const arr = [1, 2, 3, 4, 5];

function getSquare(x) {
  return x * x;
}

const newArr = arr.map(getSquare);
console.log(newArr);
```

지금

- 1부터 5까지의 원소가 든 **arr**라는 배열
- 인자로 받은 수의 제곱을 구해주는 **getSquare**라는 함수

가 있습니다. 그리고 세 번째 줄에 있는 **map**이라는 함수는

(1) 배열의 각 원소를, 인자로 받은 함수에 넣고 실행해서  (2) 리턴되는 값을 각각 새 원소로 교체해주는 함수인데요.

지금 **map 함수**에 **getSquare 함수**를 인자로 주었기 때문에  새로운 배열 newArr의 값을 출력해보면 **[1, 4, 9, 16, 25]**가 출력됩니다. 별로 어렵지 않죠?  map 함수에 대해서 더 자세히 알고 싶은 분은 [이 링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)를 참조하세요.

그런데 방금처럼 getSquare라는 함수를 별도로 선언하지 않고 이렇게 쓸 수도 있습니다.

```jsx
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(x) {
  return x * x;
});

console.log(newArr);
```

map 함수에 인자로 들어간 함수를 보면 아예 이름이 없고, 그 내용은 getSqure 함수의 바디에 있던 내용과 같다는 걸 알 수 있습니다. 이렇게 이름이 없는 함수를 **Anonymous Function**(익명 함수)이라고 하는데요. 보통 함수에 함수를 인자로 넣을 때는 이렇게 Anonymous Function을 넣을 때가 많습니다. 그런데 이때 Anonymous Function을 Arrow Function 형태로 나타낼 수도 있습니다.

이런 식으로 말이죠.

```jsx
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((x) => {
    return x * x;
});

console.log(newArr);
```

Arrow Function을 넣어도 코드는 동일하게 잘 작동합니다.

방금 본 것처럼 함수의 인자로 들어가는 함수는 Anonymous Function을 쓸 때가 많고 이때, 전통적인 형식의 함수를 써도 되고, Arrow Function을 써도 됩니다. 그런데 자바스크립트를 어떤 식으로 쓰면 좋을지에 관한 여러 회사들의 코드 스타일 가이드(code style guide)를 보면 **Anonymous Function의 경우, Arrow Function을 쓰는 것을 권장하는 경우가 많습니다.** 이 점을 잘 기억해두세요. 이렇게 함수의 인자로, Arrow Function을 넣는 것은 [나중 영상](https://www.codeit.kr/learn/3749)에서도 아래 이미지처럼 등장하니까 그때 낯설게 느끼지 않도록 꼭 기억해두세요!

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3750&directory=Untitled2.png&name=Untitled2.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3750&directory=Untitled2.png&name=Untitled2.png)

일단 'Node.js 기본기' 토픽에서는

- 전통적인 형식의 함수
- Arrow Function

이 두 가지를 **혼용**해서 사용하도록 하겠습니다. 아직 초보 단계인 여러분은 어느 코드를 봐도 잘 해석할 수 있어야 하기 때문이죠. 여러분이 회사에서 일을 할 때는 Arrow Function이 아닌 형태로 작성된 오래된 코드(legacy code)를 보게 될 확률도 높습니다. 따라서 여러분이 두 가지 다 익숙하게 느낄 수 있도록, 두 가지를 혼용할게요. 나중에 여러분이 자바스크립트 코드를 읽는 것에 어느 정도 익숙해지기 전까지는 두 가지를 섞어서 사용할 테니까, 앞으로 매 영상의 내용을 보면서 제가 어떤 형태로 함수를 표현하고 있는지 잘 살펴보세요.





# 1. 이전 내용 정리

이전까지

(1) 모듈 안의 것들을 '하나씩' 밖으로 공개할 때는, **exports**를 사용하고,  (2) 모듈 안에서 공개할 것들을 하나의 객체로 만들어서 공개할 때는 **module.exports**를 쓰면 된다

고 배웠습니다.

그런데 사실 그 이유를 완벽하게 이해하려면 **Node.js에서 모듈이 로드되는 과정**에 대해 상세하게 알아야 합니다. 아래 내용을 이해하면, exports와 module.exports에 대해 확실히 이해할 수 있으니까 집중해서 읽어보세요!

# 2. Module wrapper function

이때까지 자바스크립트 파일 하나가, 하나의 모듈이라고 했죠?

그런데 Node.js가 모듈을 로드할 때는, 한 가지 해주는 작업이 있습니다. 바로 **'Module wrapper function'**이라는 것으로 모듈 내의 전체 코드를 감싸주는 작업입니다. 'Module wrapper function'이란, 말 그대로 '모듈을 감싸주는 코드'를 의미하는데, 아래처럼 생겼습니다.

```jsx
(function (exports, require, module, __filename, __dirname) {
  // 모듈 코드
});
```

인자가 5개나 있는 함수가 보이죠? 그러니까 Node.js가 모듈을 로드할 때 이런 함수로 모듈 전체 코드를 감싸준다는 건데요. 예를 들면, 아래와 같은 **math-tools.js** 모듈을 로드할 때

```jsx
function add(a, b) {
  return a + b;
}

exports.add = add;
```

이렇게 감싸준다는 뜻입니다.

```jsx
(function (exports, require, module, __filename, __dirname) {
  function add(a, b) {
    return a + b;
  }
exports.add = add;
});
```

그리고 Module wrapper function의 다섯 가지 인자

**(1) exports**

**(2) require**

**(3) module**

**(4) _ _filename**

**(5) _ _dirname**

에는 **Node.js가 각각 알맞은 것들을 전달**하는데요. 이 때문에 이 다섯 가지 인자는, 우리가 직접 정의해준 적이 없더라도, 모듈 안에서 항상 자유롭게 접근할 수 있습니다. **math-tools.js** 모듈의 코드를 좀 바꿔서 예를 들자면,

```jsx
function add(a, b) {
  return a + b;
}

exports.add = add;

console.dir(exports);
console.dir(require);
console.dir(module);
console.dir(__filename);
console.dir(__dirname);
```

이렇게 5가지 인자에 자유롭게 접근할 수 있는 겁니다. 참고로, console.dir는 특정 객체의 내부 속성들을 모두 출력해주는 함수입니다. 좀더 읽기 쉬운 결과를 볼 수 있도록 코드를 아래처럼 살짝 바꾸고,

```jsx
function add(a, b) {
  return a + b;
}

console.log('exports ------------------------->');
console.dir(exports);
console.log('require ------------------------->');
console.dir(require);
console.log('module ------------------------->');
console.dir(module);
console.log('__filename ------------------------->');
console.dir(__filename);
console.log('__dirname ------------------------->');
console.dir(__dirname);
```

실행해볼게요.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled.png&name=Untitled.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled.png&name=Untitled.png)

뭔가 복잡한 결과가 출력되는데요. 이 중에서 **exports 객체**와 **module 객체** 이 2가지의 출력 결과만 가져와서 볼게요.

**(1) exports 객체**

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%201.png&name=Untitled+1.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%201.png&name=Untitled+1.png) 

**(2) module 객체**

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%202.png&name=Untitled+2.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%202.png&name=Untitled+2.png)

exports 객체는 안에 아무 프로퍼티(속성)도 없는 텅 비어있는 객체이고, module 객체는 다양한 프로퍼티를 갖고 있는 객체입니다.  module 객체 안을 자세히 보면, exports라는 프로퍼티가 있고, 그 프로퍼티가 빈 객체 하나를 가리키고 있는데요.

자, 여기서 바로 핵심을 말씀드리겠습니다.

> **exports 객체**와 **module 객체의 exports 프로퍼티가 가리키는 객체**는 '동일한' 객체입니다. 그리고 우리가 모듈 내부의 것들을 외부로 공개하기 위해 exports나 module.exports를 썼던 것은 바로 이 객체에 접근하기 위해서였습니다.

정말 그런지 한번 실험해볼까요?

**math-tools.js** 모듈에서 add 함수를 plus라는 이름으로 공개해볼게요.

```jsx
function add(a, b) {
  return a + b;
}

exports.plus = add; // add 함수를 plus라는 이름으로 공개

console.log('exports ------------------------->');
console.dir(exports);
console.log('require ------------------------->');
console.dir(require);
console.log('module ------------------------->');
console.dir(module);
console.log('__filename ------------------------->');
console.dir(__filename);
console.log('__dirname ------------------------->');
console.dir(__dirname);
```

**math-tools.js** 모듈을 다시 실행해보면,

**(1) exports 객체**

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%203.png&name=Untitled+3.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%203.png&name=Untitled+3.png) 

**(2) module 객체**

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%204.png&name=Untitled+4.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%204.png&name=Untitled+4.png)

**exports 객체에 plus라는 프로퍼티가 추가되었고, 프로퍼티의 값이 add 함수인 것을 확인할 수 있습니다.** 그리고 module 객체의 exports 프로퍼티가 가리키는 객체도 동일한 객체라고 했으니까 당연히 똑같이 변했습니다.

자, 이번엔 또 새로운 핵심 내용입니다.

> 바로 이 객체가 다른 모듈에서 require 함수로 이 모듈을 로드할 때 리턴되는 객체입니다.

그러니까 다른 모듈에서 이 **math-tools.js** 모듈을

```jsx
const m = require('./math-tools');
```

이런 식으로 로드하면, require 함수는 **'exports 객체(=module 객체의 exports 프로퍼티가 가리키는 객체)'**를 리턴합니다.

# 3. 정리 및 주의할 점

자, 이제 정리해보겠습니다. 우리가 모듈 내부에서 require 함수로 다른 모듈을 로드했을 때 리턴되는 것은 하나의 객체입니다. 그리고 그 객체는 로드되는 모듈의 코드에서 exports 또는 module.exports라고 써서 접근할 수 있죠.

그래서 이전 영상에서 제가

```
exports.속성 = 값`  또는 `module.exports = 객체
```

이런 식으로 공개하고 싶은 것들을 공개하라고 했던 겁니다. 그런데 여기서 **"그럼 그냥 exports로도 `exports = 객체`, 이런 식으로 객체 하나를 통째로 공개하면 되지 않나요?"**라는 질문을 할 수도 있습니다.  아주 좋은 질문입니다. 하지만 아쉽게도 Node.js는 내부적으로 require 함수가 실행될 때 위에서 본 module 객체의 exports 프로퍼티가 가리키는 객체를 리턴하도록 되어 있습니다.

그러니까 모듈을 로드할 때, Node.js가 Module wrapper function의 'exports이라는 인자로 넣어주는 객체'와 'module이라는 인자로 넣어주는 객체의 exports 프로퍼티가 가리키는 객체'는 아래 이미지처럼 분명 동일한 객체이지만,

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%205.png&name=Untitled+5.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=Untitled%205.png&name=Untitled+5.png)

**require 함수는 'module 객체의 exports 프로퍼티가 가리키는 객체'를 리턴하기 때문에**, exports 객체를 아예 새로 설정해버리면 안 되는 겁니다. 새로 설정해버리면 아래 이미지처럼 더이상 exports 키워드로는 원래의 객체에 접근할 수 없게 되는 거죠.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=new.png&name=new.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3708&directory=new.png&name=new.png)

그래서 **어쩔 수 없이 exports 키워드로는 'exports.속성 =  ~' 이런 식으로 해당 객체에 프로퍼티를 추가하는 식으로만 사용할 수 있는 겁니다.** 그 대신, module.exports를 사용하면 'module.exports = 객체' 형식 뿐만 아니라 'module.exports.속성 = ~' 이런 식으로도 사용할 수 있는 거구요.

자, 이때까지의 내용, 잘 이해하셨나요? 간단하게 정리해보면 다음과 같습니다.

(1) Node.js는 모듈을 로드하기 전에 그 전체 코드를 **Module wrapper function**이라는 것으로 감싸줍니다.

(2) Module wrapper function은 그 5개의 인자에 각각 적절한 값이나 객체를 설정해주는데

(3) 우리가 모듈 내의 코드에서 exports 인자로 넘어와서 그 프로퍼티를 하나씩 채워나가는 객체(또는 module 인자의 exports 프로퍼티로 설정되는 객체)가

(4) 다른 모듈에서 이 모듈을 require 함수로 로드했을 때 리턴되는 객체입니다.

방금 설명한 내용들은 Node.js가 내부적으로 처리하는 작업이라서 당장 개발할 때는 몰라도 되는 내용일 수도 있습니다. 하지만 이 내용을 알게되면 exports 또는 module.exports라는 키워드로 모듈 내부의 것들을, 외부에 공개할 수 있는 원리를 확실하게 이해할 수 있게 됩니다. 잘 기억해두세요!





# 코어 모듈

![1](./images/1.png)

코어모듈 : 노드 실행파일 안에 있는 모듈. 노드 설치하면 바로 사용 가능. 

써드파티 모듈 : 여러 개발자 혹은 회사들, 제 3자가 만든 모듈. 

코어모듈 예시 

- `const fs = require("fs");` 파일시스템. 



# 노드js와 브라우져의 차이

1. 제공하는 API가 다르다. 

   ![1](./images/2.png)

   ![1](./images/3.png)
   ![1](./images/4.png)
   ![1](./images/5.png)

2. 엔진이 다르다. 
   - Node와 Chrome은 V8, Firefox는 Spider Monkey



# 써드파티 모듈

- 다른 개발자나 회사들이 만들어서 인터넷 상의 공개 저장소에 제공하는 모듈. 
  - 공개 저장소에서 내 컴퓨터로 가져와야 쓸 수 있음. 
- ex)
  - `npm install cowsay`







이전 영상에서는 **cowsay**라는 서드파티 모듈을 설치해서 사용해봤습니다.  그런데 이 서드파티 모듈은 도대체 어디에 설치되는 걸까요?

**cowsay** 서드파티 모듈을 설치한 직후의, **nodeStudy 디렉토리**의 내부를 살펴보겠습니다.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled.png&name=Untitled.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled.png&name=Untitled.png)

확인해보면,

(1) **node_modules**라는 디렉토리 (2) **package-lock.json**이라는 파일

이 새로 생긴 것을 알 수 있는데요. 이것들이 뭔지 설명해드릴게요. 일단 package-lock.json 파일부터 설명할게요.

# 1. package-lock.json 파일

package-lock.json 파일에는, nodeStudy 디렉토리 안에 설치된 모든 서드파티 모듈들에 관한 정보가 기록되어 있습니다.  파일 내용을 간단히 살펴볼까요?

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%201.png&name=Untitled+1.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%201.png&name=Untitled+1.png)

package-lock.json 파일의 내용 중 **dependencies**(별표 표시)라는 필드에는, **현재 nodeStudy 디렉토리에 설치된 서드파티 모듈들의 정보**가 담겨있습니다. dependencies는 우리말로 '의존하고 있는 것들'이라는 뜻인데요. 제 프로젝트가 이 서드파티 모듈들에 의존하고 있기 때문에 이 필드 안에 그 정보들이 담긴 것입니다. dependencies 필드를 자세히 보면, 이전 영상에서 설치했던 **cowsay** 서드파티 모듈의 이름이 빨간색 박스 안에 보이네요.

그런데 뭔가 이상합니다. 저는 cowsay라는 서드파티 모듈**만** 설치했는데, 왜 지금 파란 박스들에 보이는 것처럼 다른 서드파티 모듈들의 이름이 보이는 걸까요? 그건 바로 cowsay가 이 서드파티 모듈들에 또다시 의존하고 있기 때문입니다.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%202.png&name=Untitled+2.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%202.png&name=Untitled+2.png)

잠깐 cowsay 모듈에 관한 정보 중 **requires**라고 써있는 필드(주황색 표시)를 자세히 보세요. requires 필드에는 cowsay 모듈이 필요로 하는(의존하는) 다른 서드파티 모듈들의 이름이 적혀있는데요. 이 중에서 get-stdin이라는 서드파티 모듈의 이름이 보이죠? 이렇게 cowsay 모듈이 필요로 하는 모듈이기 때문에 get-stdin 모듈도 함께 설치된 겁니다. **즉, 하나의 서드파티 모듈이 설치될 때는 그것이 의존하는 다른 서드파티 모듈들도 함께 설치됩니다.** 중요한 사실이니까 잘 기억해두세요.

그럼 가장 위의 ansi-regex 모듈은 왜 설치됐을까요? 지금 cowsay 모듈 정보의 requires 필드에서 이름이 보이지 않는데 말이죠. ansi-regex 모듈은 cowsay 모듈이 간접적으로 의존하는 모듈입니다. 아래 이미지를 볼까요?

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%203.png&name=Untitled+3.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%203.png&name=Untitled+3.png)

지금 보면,

**cowsay 모듈 → string-width 모듈 → strip-ansi 모듈 → ansi-regex 모듈**, 이렇게 여러 단계에 걸쳐 cowsay 모듈은 결국 ansi-regex라는 모듈에 의존하고 있습니다. 그래서 cowsay 모듈의 requires 필드에서 당장 ansi-regex 모듈이 보이지 않았지만, 함께 설치가 되었던 겁니다. 모듈 간의 이런 '다단계 의존 관계'를 이해하는 것이 Node.js 세계에서는 아주 중요합니다. 하나의 서드파티 모듈을 설치할 때, 그것이 의존하는 다른 서드파티 모듈들도 계단식으로 모두 함께 설치된다는 사실, 어찌 보면 자연스럽죠? package-lock.json 파일은 **챕터 4**에서도 등장하니까 잘 기억해두세요.

# 2. node_modules 디렉토리

이제 node_modules 디렉토리에 대해서 알아보겠습니다. 방금 봤던 package-lock.json 파일이 어떤 서드파티 모듈들이 설치되었는지에 관한 정보를 담고 있다면, **node_modules 디렉토리는 서드파티 모듈들이 실제로 설치되는 공간**입니다. node_modules 디렉토리의 내부를 한번 살펴보겠습니다.

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%204.png&name=Untitled+4.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3712&directory=Untitled%204.png&name=Untitled+4.png)

cowsay 서드파티 모듈의 이름이 잘 보이고, cowsay가 의존하는 다른 서드파티 모듈들의 이름들도 잘 보입니다. 그런데 여기서 신기한 사실이 하나 있습니다. 왼쪽의 노락색 강조 표시를 보면, 지금 **모든 서드파티 모듈들은 각각 하나의 디렉토리입니다.** 이게 어떻게 된 걸까요? 이때까지 우리는 모듈을 그냥 '하나의 자바스크립트 파일'이라고 배웠는데 말이죠. 하지만 **사실 모듈은 하나의 파일일 수도 있고, 하나의 디렉토리일 수도 있습니다.**

이게 무슨 말인지는 **챕터 4**에서 설명할 건데요. 일단은 여기서 멈춥시다. 나중에 챕터 4의 내용을 잘 이해하려면 이 노트의 내용을 꼭 기억해두세요!