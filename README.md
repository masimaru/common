재사용성이 높은 컴포넌트와 훅을 모아놓은 저장소입니다.

## 목차

### 컴포넌트

#### UI 컴포넌트
- [로그인-회원가입](#로그인-회원가입)
- [슬라이더](#슬라이더)
- [탭메뉴](#탭메뉴)
- [토글](#토글)
- [드롭다운](#드롭다운)
- [아이폰 목업](#아이폰-목업)

#### 일반 컴포넌트
- 비동기처리 컴포넌트
- 모달
- 내비게이션

### 훅
- [외부클릭 감지](#외부클릭-감지)
- [무한스크롤](#무한스크롤)

<br />

## 설명

#### 로그인-회원가입
- 로그인과 회원가입 폼입니다. 링크 버튼으로 전환합니다.
- 이메일은 유효성 체크, 패스워드는 버튼으로 문자를 볼 수 있는 기능이 있습니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/LoginForm/LoginForm.tsx)

![로그인-회원가입](https://user-images.githubusercontent.com/41728258/175844166-c3f985a0-8c36-484b-951f-d4cdf95fdb8b.gif)

<br />

#### 슬라이더
- 마우스를 버튼을 이동하는 거에 따라 값이 변경됩니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/Slider/Slider.tsx)

![슬라이더](https://user-images.githubusercontent.com/41728258/175844172-02b4efe1-c5ca-4744-8d4a-4ad66de47f9a.gif)

<br />

#### 탭메뉴
- 메뉴를 클릭하면 bottom bar가 스르륵 이동합니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/TabMenu/TabMenu.tsx)

![탭메뉴](https://user-images.githubusercontent.com/41728258/175844175-95c95f4c-211c-4730-91c5-5b47aed06b9a.gif)

<br />

#### 토글
- 클릭하면 버튼이 오른쪽, 왼쪽으로 이동합니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/Toggle/Toggle.tsx)

![토글](https://user-images.githubusercontent.com/41728258/175844180-ebcf1ad0-b2aa-4897-afac-b0be6022b07c.gif)

<br />

#### 드롭다운
- 일반적인 드롭다운입니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/Dropdown/Dropdown.tsx)

![드롭다운](https://user-images.githubusercontent.com/41728258/175844181-086049aa-e133-4f77-9b8d-2b0d6c4ebf18.gif)

<br />

#### 아이폰 목업
- 아이폰 모델을 CSS로 만들었습니다.
- [source](https://github.com/JunYeop92/common/blob/main/src/components/IphoneModel/IphoneModel.tsx)

<img width="386" alt="아이폰 목업" src="https://user-images.githubusercontent.com/41728258/175844534-9a9783c7-d1b2-43ff-8f77-94c9dc166488.PNG">

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
