# List-KR이란?
List-KR은 한국어 웹 사이트 및 모바일 앱의 광고 차단과 프라이버시 보호를 위한 필터 리스트입니다.

이 필터를 이용하기 위해서 [Adguard][], [uBlock origin][] 등의 광고 차단 소프트웨어가 필요합니다. 애드가드(Adguard) 윈도우, 맥, 안드로이드 버전에 최적화되어 있으며 이와 함께 사용하는 것을 권장합니다. 

## 사용하는 법

사용하고자 하는 프로그램에서 [필터 구독 주소][]를 클릭하거나 다음 URL을 사용하여 필터를 구독 또는 Import 하십시오:
```
https://github.com/List-KR/List-KR/raw/master/filter.txt
```

Adguard의 경우, List-KR이 권장 필터로 설정되어 광고가 있는 한국어 사이트 접속 시 자동으로 활성화되나, 자동 활성화가 되지 않도록 설정한 경우 필터 구독 메뉴에서 List-KR을 찾아 추가하시면 됩니다.

## 목록 향상에 기여하는 법

차단되지 않은 광고나, 차단 후 남은 빈 공간 혹은 그 외에 이 필터에서 차단하는 대상을 발견하셨다면 [Issues][] 페이지 또는 상단의 '제보하기' 버튼을 클릭하여 제보를 남겨 주십시오. 사용하시는 브라우저, 차단되지 않은 광고가 있는 정확한 주소와 차단되지 않은 광고의 위치를 묘사해주시면 도움이 됩니다. 대상을 차단할 수 있는 규칙까지 제안해 주시면 더욱 좋습니다.

기타 List-KR의 운영에 관련한 의견도 남겨주시면 반영하도록 하겠습니다.

## 차단 원칙

* 웹 사이트, 모바일 앱의 광고를 차단합니다. 단, 웹사이트의 이용자의 주 목적이 상품의 구매인 경우, 과도하게 주의를 분산시키는 동적 광고, 침입형 광고 혹은 사이트 외부에서 호스팅되는 광고만이 차단됩니다.
* 사용자 정보를 수집하는 URL을 차단합니다. 이러한 정보의 예로는, 이용자의 OS, User-agent, 클릭 등 행동 패턴, 리퍼러 (referrer), 창의 크기 등이 있습니다.
* 웹 필터링 소프트웨어를 감지하고 웹사이트의 기능에 차이를 부여하는 스크립트를 차단합니다. 사이트 이용을 방해하지 않는 약한 수준의 알림이라도 차단하는 것을 원칙으로 합니다.
* 웹 사용성 (Web usability)를 저해하는 스크립트를 차단합니다. 이러한 예로는, 사용자가 특정 위치로 스크롤 시 광고 영역으로 화면을 자동으로 스크롤하는 스크립트 등이 있습니다.

## 인터넷 익스플로러에 대해서

인터넷 익스플로러는 크롬, 파이어폭스 등과 렌더링 방식에 차이가 있어, 기존 확장 프로그램에서 사용하도록 제작된 필터를 IE에 적용할 경우 차단 결과가 다를 수 있습니다. 이것이 Adguard를 위한 필터가 필요한 한 이유이며, 이 필터 또한 기존에 존재하던 필터를 기반으로 작성되었기 때문에, IE에서만 광고가 차단되지 않는 경우가 있습니다. 이는 지속적으로 개선 중입니다.

## Credits
List-KR은 Yous님의 [YousList][]에 기반하여 제작되었습니다.

본 필터 및 필터의 데이터베이스는 [Creative Commons Attribution-ShareAlike 4.0][]에 따라 배포됩니다.

[Adguard]: https://adguard.com
[Adblock Plus]: https://adblockplus.org/
[uBlock origin]: https://github.com/gorhill/uBlock
[이곳]: https://namu.wiki/w/Adguard
[Issues]: https://github.com/List-KR/List-KR/issues
[Creative Commons Attribution-ShareAlike 4.0]: https://creativecommons.org/licenses/by-sa/4.0/deed.ko
[필터 구독 주소]: https://subscribe.adblockplus.org/?location=https://github.com/List-KR/List-KR/raw/master/filter.txt&title=List-KR
[YousList]: https://github.com/yous/YousList
