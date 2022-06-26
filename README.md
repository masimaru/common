재사용성을 고려한 컴포넌트와 훅을 모아놓은 저장소입니다.

## 목차

### 컴포넌트
- [로그인폼](#로그인폼)
- [슬라이더](#슬라이더)
- [탭메뉴](#탭메뉴)
- [토글](#토글)
- [드롭다운](#드롭다운)
- [아이폰모양](#아이폰모양)

- 비동기처리 컴포넌트
- 모달
- 내비게이션

### 훅
- [외부클릭 감지](#외부클릭-감지)
- [무한스크롤](#무한스크롤)

<br />

## 설명

#### 로그인폼
- 이메일과 패스워드를 입력할 수 있는 폼입니다.
- 이메일은 유효성 체크, 패스워드는 버튼으로 문자를 볼 수 있는 기능이 있습니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/LoginForm/LoginForm.tsx)

<br />

#### 슬라이더
- 마우스를 버튼을 이동하는 거에 따라 값이 변경됩니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/Slider/Slider.tsx)

<br />

#### 탭메뉴
- 메뉴를 클릭하면 bottom bar가 스르륵 이동합니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/TabMenu/TabMenu.tsx)

<br />

#### 토글
- 클릭하면 버튼이 오른쪽, 왼쪽으로 이동합니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/Toggle/Toggle.tsx)

<br />

#### 드롭다운
- 일반적인 드롭다운입니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/Dropdown/Dropdown.tsx)

<br />

#### 아이폰모양
- 아이폰 모델을 CSS로 만들었습니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/IphoneModel/IphoneModel.tsx)

<br />

#### 외부클릭 감지
- 지정한 부분이외에 클릭을 감지하는 hook입니다. 주로 모달 외부를 클릭했을 때 모달을 닫는 용도로 사용합니다.
- parameter : (ref, handler)
- [source](https://github.com/JunYeop92/common/blob/main/src/hooks/useOnClickOutside.tsx)

<br />

#### 무한스크롤
- 무한 스크롤을 하게 해주는 hook입니다. IntersectionObserver API를 이용했습니다.
- parameter : ({ disable, hasNextPage, fetchCallback })
- [source](https://github.com/JunYeop92/common/blob/main/src/hooks/useInfiniteScroll.tsx)
