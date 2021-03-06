class result {
    constructor(title, description, taste){
        this.title = title;
        this.description = description;
        this.taste = taste;
    }
}

const results = {
    "111" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "112" : new result(
        "에콰도르 로하",
        "적도 바로 아래에 위치한 에콰도르 로하 지역은 다양한 동식물이 공존할 뿐만 아니라 영양이 풍부한 화산토양, 건기와 우기가 뚜렷한 열대 기후까지 커피 재배를 위한 완벽한 환경을 갖추고 있습니다. 에콰도르 로하의 엽서 디자인은 이러한 환경을 표현할 뿐만 아니라 이 커피가 가진 독특한 매력을 그려내고 있습니다. 들판에 핀 야생화를 닮은 커피의 아로마, 싱그러운 허브에서 느껴지는 은은한 산미와 달콤한 풍미, 야생화와 들풀속에 숨어있는 재규어를 연상시키는 카카오닙스의 쌉쌀한 피니쉬까지. 무더운 여름, 아이스 커피로도 더할 나위 없는 매력을 가진 에콰도르 로하를 만나보세요.",
        "싱그러운 허브의 은은한 달콤함과 카카오닙스의 쌉쌀한 피니쉬 * 원산지 : 라틴아메리카(에콰도르)"
    ),
    "113" : new result(
        "카페 베로나 250g",
        "카페 베로나는 깊이 있고 달콤함이 특징인 이탈리안 로스트의 풍미와 부드러운 라틴 아메리카와 매혹적인 인도네시아산 원두가 블렌딩된 원두입니다. 이 유쾌한 조합은 초콜릿과 매우 잘 어울리기 때문에 발렌타인데이 기간의 인기 원두입니다. 연인의 애절한 로맨스가 연상 지어지는 커피, 카페 베로나. <아름다운 여인이여, 아름다운 베로나여~> *많은 셰익스피어 문학애호가들은 이탈리아의 베로나(시)를 로미오와 줄리엣의 배경이 되는 도시로 알고 있습니다. 이 위대한 희곡은 비극으로 끝나지만 이 커피는 마실 때마다 해피엔딩으로 끝난다는 점, 기억하세요!",
        "따뜻한 로맨스를 상상하게 해 주는 깊고 달콤한 맛의 커피"
    ),
    "121" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "122" : new result(
        "파나마 보케테",
        "파나마의 서쪽에 있는 보케테는 작은 마을이지만 전 세계에 파나마 커피를 알린 유명한 커피 원산지입니다. 3개의 화산으로 둘러싸인 이 지역은 미네랄이 풍부한 토양과 커피 재배에 적합한 고도와 기후를 갖추고 있습니다. 이 커피가 재배된 돈 페페 농장에서는 고품질의 커피뿐만 아니라, 환경을 보호하기 위한 노력도 게을리하지 않습니다. 에코 펄퍼로 벗겨낸 커피 과육은 비료로 재활용하고, 물을 절약하고 재사용하여 환경 오염을 최소화합니다. 파나마 보케테는 잘 익은 오렌지처럼 부드러운 산미로 시작해서 쌉쌀한 카카오닙스의 풍미로 이어지며, 견과류를 넣은 쿠키처럼 버터리한 고소함과 달콤함이 부드럽게 마지막을 장식합니다.",
        "잘 익은 오렌지의 산미와 카카오닙스, 달콤한 피니시 * 원산지 : 라틴 아메리카(파나마)"
    ),    
    "123" : new result(
        "카페 베로나 250g",
        "카페 베로나는 깊이 있고 달콤함이 특징인 이탈리안 로스트의 풍미와 부드러운 라틴 아메리카와 매혹적인 인도네시아산 원두가 블렌딩된 원두입니다. 이 유쾌한 조합은 초콜릿과 매우 잘 어울리기 때문에 발렌타인데이 기간의 인기 원두입니다. 연인의 애절한 로맨스가 연상 지어지는 커피, 카페 베로나. <아름다운 여인이여, 아름다운 베로나여~> *많은 셰익스피어 문학애호가들은 이탈리아의 베로나(시)를 로미오와 줄리엣의 배경이 되는 도시로 알고 있습니다. 이 위대한 희곡은 비극으로 끝나지만 이 커피는 마실 때마다 해피엔딩으로 끝난다는 점, 기억하세요!",
        "따뜻한 로맨스를 상상하게 해 주는 깊고 달콤한 맛의 커피"
    ),
    "131" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "132" : new result(
        "크리스마스",
        "포근한 삼나무향과 다채로운 스파이스, 감칠맛이 매력적인 크리스마스 리저브 블렌드는 행복하고 즐거운 크리스마스의 느낌을 가득 담고 있습니다. 크리스마스 시즌을 앞두고 신선한 커피 샘플이 도착하면, 우리는 크리스마스 블렌드에 어울리는 가장 완벽한 재료들을 찾아냅니다. 블렌딩은 매년 조금씩 달라지지만, 우리가 사랑하는 크리스마스의 강렬하고 생생한 풍미 프로필은 언제나 똑같습니다. 올 해는 산미와 달콤함이 조화로운 코스타리카 하시엔다 알사시아, 강렬하고 묵직한 숙성 수마트라와 수마트라 아체가 블렌딩되어 풍부한 삼나무의 향, 다채로운 스파이스의 감칠맛, 버터스카치의 달콤함이 매력적인 크리스마스 커피가 완성되었습니다.",
        "따뜻하고 포근한 삼나무향, 설탕에 졸인 생강과 버터스카치의 달콤함 * 원산지 : 아시아/태평양(인도네시아) & 라틴 아메리카(코스타리카)"
    ),    
    "133" : new result(
        "카페 베로나 250g",
        "카페 베로나는 깊이 있고 달콤함이 특징인 이탈리안 로스트의 풍미와 부드러운 라틴 아메리카와 매혹적인 인도네시아산 원두가 블렌딩된 원두입니다. 이 유쾌한 조합은 초콜릿과 매우 잘 어울리기 때문에 발렌타인데이 기간의 인기 원두입니다. 연인의 애절한 로맨스가 연상 지어지는 커피, 카페 베로나. <아름다운 여인이여, 아름다운 베로나여~> *많은 셰익스피어 문학애호가들은 이탈리아의 베로나(시)를 로미오와 줄리엣의 배경이 되는 도시로 알고 있습니다. 이 위대한 희곡은 비극으로 끝나지만 이 커피는 마실 때마다 해피엔딩으로 끝난다는 점, 기억하세요!",
        "따뜻한 로맨스를 상상하게 해 주는 깊고 달콤한 맛의 커피"
    ),
    "211" : new result(
        "케냐 250g",
        "케냐 커피는 주로 상큼하고 깔끔한 맛과 함께 자몽과 와인의 풍미를 지니며, 입 안에 꽉 찬 무게감을 가지고 있습니다.",
        "열대성 과일의 향기와 신비로움으로 깔끔한 주스와 같은 느낌을 가진 커피"
    ),
    "212" : new result(
        "케냐 250g",
        "케냐 커피는 주로 상큼하고 깔끔한 맛과 함께 자몽과 와인의 풍미를 지니며, 입 안에 꽉 찬 무게감을 가지고 있습니다.",
        "열대성 과일의 향기와 신비로움으로 깔끔한 주스와 같은 느낌을 가진 커피"
    ),
    "213" : new result(
        "선 드라이드 에티오피아 게라 팜",
        "아라비카 커피의 고향이라고 불리는 에티오피아에서는 전통적인 내추럴 프로세스를 통해 잘 익은 과일의 향과 풍미가 매력적인 커피를 만날 수 있습니다. 선 드라이드 에티오피아 게라가 바로 그중 하나입니다. 내추럴 프로세스는 빨갛게 잘 익은 커피체리만 골라 수확한 뒤 아프리칸 베드라 불리는 건조대에서 자연건조 시키면서 과육의 단 맛이 응축되고, 달콤한 과일의 향과 풍미가 발현됩니다. 선 드라이드 에티오피아 게라는 프래그런스(그라인딩한 커피의 향)에서 새콤달콤한 딸기와 잘 익은 달콤한 블루베리 향이 매력적으로 풍겨옵니다. 추출이 끝난 뒤에는 여기에 은은한 삼나무 향과 다채로운 향신료 풍미까지 더해져 한층 더 깊이 있는 풍미를 즐길 수 있습니다.",
        "잘 익은 블루베리의 달콤함과 은은한 삼나무 향 * 원산지 : 아프리카(에티오피아)"
    ),
    "221" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "222" : new result(
        "파나마 보케테",
        "파나마의 서쪽에 있는 보케테는 작은 마을이지만 전 세계에 파나마 커피를 알린 유명한 커피 원산지입니다. 3개의 화산으로 둘러싸인 이 지역은 미네랄이 풍부한 토양과 커피 재배에 적합한 고도와 기후를 갖추고 있습니다. 이 커피가 재배된 돈 페페 농장에서는 고품질의 커피뿐만 아니라, 환경을 보호하기 위한 노력도 게을리하지 않습니다. 에코 펄퍼로 벗겨낸 커피 과육은 비료로 재활용하고, 물을 절약하고 재사용하여 환경 오염을 최소화합니다. 파나마 보케테는 잘 익은 오렌지처럼 부드러운 산미로 시작해서 쌉쌀한 카카오닙스의 풍미로 이어지며, 견과류를 넣은 쿠키처럼 버터리한 고소함과 달콤함이 부드럽게 마지막을 장식합니다.",
        "잘 익은 오렌지의 산미와 카카오닙스, 달콤한 피니시 * 원산지 : 라틴 아메리카(파나마)"
    ), 
    "223" : new result(
        "선 드라이드 에티오피아 게라 팜",
        "아라비카 커피의 고향이라고 불리는 에티오피아에서는 전통적인 내추럴 프로세스를 통해 잘 익은 과일의 향과 풍미가 매력적인 커피를 만날 수 있습니다. 선 드라이드 에티오피아 게라가 바로 그중 하나입니다. 내추럴 프로세스는 빨갛게 잘 익은 커피체리만 골라 수확한 뒤 아프리칸 베드라 불리는 건조대에서 자연건조 시키면서 과육의 단 맛이 응축되고, 달콤한 과일의 향과 풍미가 발현됩니다. 선 드라이드 에티오피아 게라는 프래그런스(그라인딩한 커피의 향)에서 새콤달콤한 딸기와 잘 익은 달콤한 블루베리 향이 매력적으로 풍겨옵니다. 추출이 끝난 뒤에는 여기에 은은한 삼나무 향과 다채로운 향신료 풍미까지 더해져 한층 더 깊이 있는 풍미를 즐길 수 있습니다.",
        "잘 익은 블루베리의 달콤함과 은은한 삼나무 향 * 원산지 : 아프리카(에티오피아)"
    ),
    "231" : new result(
        "선 드라이드 에티오피아 게라 팜",
        "아라비카 커피의 고향이라고 불리는 에티오피아에서는 전통적인 내추럴 프로세스를 통해 잘 익은 과일의 향과 풍미가 매력적인 커피를 만날 수 있습니다. 선 드라이드 에티오피아 게라가 바로 그중 하나입니다. 내추럴 프로세스는 빨갛게 잘 익은 커피체리만 골라 수확한 뒤 아프리칸 베드라 불리는 건조대에서 자연건조 시키면서 과육의 단 맛이 응축되고, 달콤한 과일의 향과 풍미가 발현됩니다. 선 드라이드 에티오피아 게라는 프래그런스(그라인딩한 커피의 향)에서 새콤달콤한 딸기와 잘 익은 달콤한 블루베리 향이 매력적으로 풍겨옵니다. 추출이 끝난 뒤에는 여기에 은은한 삼나무 향과 다채로운 향신료 풍미까지 더해져 한층 더 깊이 있는 풍미를 즐길 수 있습니다.",
        "잘 익은 블루베리의 달콤함과 은은한 삼나무 향 * 원산지 : 아프리카(에티오피아)"
    ),
    "232" : new result(
        "케냐 250g",
        "케냐 커피는 주로 상큼하고 깔끔한 맛과 함께 자몽과 와인의 풍미를 지니며, 입 안에 꽉 찬 무게감을 가지고 있습니다.",
        "열대성 과일의 향기와 신비로움으로 깔끔한 주스와 같은 느낌을 가진 커피"
    ),
    "233" : new result(
        "선 드라이드 에티오피아 게라 팜",
        "아라비카 커피의 고향이라고 불리는 에티오피아에서는 전통적인 내추럴 프로세스를 통해 잘 익은 과일의 향과 풍미가 매력적인 커피를 만날 수 있습니다. 선 드라이드 에티오피아 게라가 바로 그중 하나입니다. 내추럴 프로세스는 빨갛게 잘 익은 커피체리만 골라 수확한 뒤 아프리칸 베드라 불리는 건조대에서 자연건조 시키면서 과육의 단 맛이 응축되고, 달콤한 과일의 향과 풍미가 발현됩니다. 선 드라이드 에티오피아 게라는 프래그런스(그라인딩한 커피의 향)에서 새콤달콤한 딸기와 잘 익은 달콤한 블루베리 향이 매력적으로 풍겨옵니다. 추출이 끝난 뒤에는 여기에 은은한 삼나무 향과 다채로운 향신료 풍미까지 더해져 한층 더 깊이 있는 풍미를 즐길 수 있습니다.",
        "잘 익은 블루베리의 달콤함과 은은한 삼나무 향 * 원산지 : 아프리카(에티오피아)"
    ),
    "311" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "312" : new result(
        "스타벅스 네스프레소 하우스 블렌드 10개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 블렌딩하여 로스팅 한 것이 특징인 하우스 블렌드 캡슐커피입니다. 로스팅 할 때 생긴 약간의 달콤함에 견과류와 코코아의 풍미를 더한 커피로 1971년 스타벅스가 처음으로 블렌딩한 원두입니다. 네스프레소 캡슐은 에스프레소에 특화된 상품이며, 알루미늄 캡슐의 커피는 900여 종의 휘발되기 쉬운 아로마를 밀봉하여 담을 수 있도록 고안된 디자인으로 깊고 풍부한 원두 자체의 풍미를 즐기기에 좋은 상품입니다. *본 캡슐커피는 네스프레소 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 네스프레소] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 블렌딩하여 로스팅 한 것이 특징인 하우스 블렌드입니다."
    ),
    "313" : new result(
        "에이지드 수마트라",
        "에이지드 커피의 시작은 오랜 커피 역사 속에서 찾아볼 수 있습니다. 오래전, 인도네시아 섬에서 수확한 커피를 싣고 유럽으로 향하던 무역선 안에서 커피 생두는 오랜 항해 기간 동안 풍미가 달라졌습니다. 독특한 삼나무 향과 흙 내음이 매력적인 수마트라 커피는 무역선이 유럽에 다다를 때쯤 더욱 강렬하고 이국적인 풍미로 변해있었습니다. 우리는 이 독특한 풍미를 재현하기 위해서, 최고의 수마트라 커피만을 엄선한 뒤 별도의 숙성 창고에서 최소 3년에서 길게는 5년의 숙성 과정을 통해 이 커피를 만들어냅니다. 올해의 에이지드 수마트라는 깊은 숲속의 촉촉한 나무 향, 솔잎과 흙냄새 그리고 고소함과 쌉쌀함이 어우러지는 피니시가 매력적입니다.",
        "비가 그친 숲속의 나무 향, 다채로운 스파이스의 풍미 * 원산지 : 아시아/태평양(인도네시아)"
    ),
    "321" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "322" : new result(
        "스타벅스 네스프레소 하우스 블렌드 10개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 블렌딩하여 로스팅 한 것이 특징인 하우스 블렌드 캡슐커피입니다. 로스팅 할 때 생긴 약간의 달콤함에 견과류와 코코아의 풍미를 더한 커피로 1971년 스타벅스가 처음으로 블렌딩한 원두입니다. 네스프레소 캡슐은 에스프레소에 특화된 상품이며, 알루미늄 캡슐의 커피는 900여 종의 휘발되기 쉬운 아로마를 밀봉하여 담을 수 있도록 고안된 디자인으로 깊고 풍부한 원두 자체의 풍미를 즐기기에 좋은 상품입니다. *본 캡슐커피는 네스프레소 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 네스프레소] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 블렌딩하여 로스팅 한 것이 특징인 하우스 블렌드입니다."
    ),
    "323" : new result(
        "에이지드 수마트라",
        "에이지드 커피의 시작은 오랜 커피 역사 속에서 찾아볼 수 있습니다. 오래전, 인도네시아 섬에서 수확한 커피를 싣고 유럽으로 향하던 무역선 안에서 커피 생두는 오랜 항해 기간 동안 풍미가 달라졌습니다. 독특한 삼나무 향과 흙 내음이 매력적인 수마트라 커피는 무역선이 유럽에 다다를 때쯤 더욱 강렬하고 이국적인 풍미로 변해있었습니다. 우리는 이 독특한 풍미를 재현하기 위해서, 최고의 수마트라 커피만을 엄선한 뒤 별도의 숙성 창고에서 최소 3년에서 길게는 5년의 숙성 과정을 통해 이 커피를 만들어냅니다. 올해의 에이지드 수마트라는 깊은 숲속의 촉촉한 나무 향, 솔잎과 흙냄새 그리고 고소함과 쌉쌀함이 어우러지는 피니시가 매력적입니다.",
        "비가 그친 숲속의 나무 향, 다채로운 스파이스의 풍미 * 원산지 : 아시아/태평양(인도네시아)"
    ),
    "331" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "332" : new result(
        "별다방 블렌드 250g",
        "'다방'은 옛날 사람들이 차나 음료를 마시면서 이야기를 하거나 휴식을 취하기 위해 방문했던 전통적 공간을 뜻하는 한국어 단어이며, 현대적인 의미에서 커피숍을 의미합니다. 스타벅스를 대표하는 상징인 '별'과 '다방'이라는 단어를 합친 '별다방'은 스타벅스커피 코리아를 부르는 특별한 닉네임으로, 이러한 이름을 담은 '별다방 블렌드™'가 한국에서 특별히 출시되었습니다. 별다방 블렌드™는 엄선한 라틴아메리카 원두와 아시아/태평양 원두를 함께 로스팅하여 만든 스타벅스커피 코리아만의 특별한 원두로 말린허브의 은은한 향과 풍부한 초콜릿의 향, 구운 체스트넛의 고소한 풍미와 더불어 기분 좋은 산미와 부드러운 바디까지 담겨 있습니다. 별다방 블렌드™와 함께 보다 특별하고 행복한 하루를 만들어보세요.",
        "사랑하지 않을 수 없는, 한국만을 위한 특별한 커피! 오직 스타벅스 커피 코리아에서만 만날 수 있는 특별한 원두를 소개합니다."
    ),
    "333" : new result(
        "에이지드 수마트라",
        "에이지드 커피의 시작은 오랜 커피 역사 속에서 찾아볼 수 있습니다. 오래전, 인도네시아 섬에서 수확한 커피를 싣고 유럽으로 향하던 무역선 안에서 커피 생두는 오랜 항해 기간 동안 풍미가 달라졌습니다. 독특한 삼나무 향과 흙 내음이 매력적인 수마트라 커피는 무역선이 유럽에 다다를 때쯤 더욱 강렬하고 이국적인 풍미로 변해있었습니다. 우리는 이 독특한 풍미를 재현하기 위해서, 최고의 수마트라 커피만을 엄선한 뒤 별도의 숙성 창고에서 최소 3년에서 길게는 5년의 숙성 과정을 통해 이 커피를 만들어냅니다. 올해의 에이지드 수마트라는 깊은 숲속의 촉촉한 나무 향, 솔잎과 흙냄새 그리고 고소함과 쌉쌀함이 어우러지는 피니시가 매력적입니다.",
        "비가 그친 숲속의 나무 향, 다채로운 스파이스의 풍미 * 원산지 : 아시아/태평양(인도네시아)"
    ),
    "411" : new result(
        "에콰도르 로하",
        "적도 바로 아래에 위치한 에콰도르 로하 지역은 다양한 동식물이 공존할 뿐만 아니라 영양이 풍부한 화산토양, 건기와 우기가 뚜렷한 열대 기후까지 커피 재배를 위한 완벽한 환경을 갖추고 있습니다. 에콰도르 로하의 엽서 디자인은 이러한 환경을 표현할 뿐만 아니라 이 커피가 가진 독특한 매력을 그려내고 있습니다. 들판에 핀 야생화를 닮은 커피의 아로마, 싱그러운 허브에서 느껴지는 은은한 산미와 달콤한 풍미, 야생화와 들풀속에 숨어있는 재규어를 연상시키는 카카오닙스의 쌉쌀한 피니쉬까지. 무더운 여름, 아이스 커피로도 더할 나위 없는 매력을 가진 에콰도르 로하를 만나보세요.",
        "싱그러운 허브의 은은한 달콤함과 카카오닙스의 쌉쌀한 피니쉬 * 원산지 : 라틴아메리카(에콰도르)"
    ),
    "412" : new result(
        "에콰도르 로하",
        "적도 바로 아래에 위치한 에콰도르 로하 지역은 다양한 동식물이 공존할 뿐만 아니라 영양이 풍부한 화산토양, 건기와 우기가 뚜렷한 열대 기후까지 커피 재배를 위한 완벽한 환경을 갖추고 있습니다. 에콰도르 로하의 엽서 디자인은 이러한 환경을 표현할 뿐만 아니라 이 커피가 가진 독특한 매력을 그려내고 있습니다. 들판에 핀 야생화를 닮은 커피의 아로마, 싱그러운 허브에서 느껴지는 은은한 산미와 달콤한 풍미, 야생화와 들풀속에 숨어있는 재규어를 연상시키는 카카오닙스의 쌉쌀한 피니쉬까지. 무더운 여름, 아이스 커피로도 더할 나위 없는 매력을 가진 에콰도르 로하를 만나보세요.",
        "싱그러운 허브의 은은한 달콤함과 카카오닙스의 쌉쌀한 피니쉬 * 원산지 : 라틴아메리카(에콰도르)"
    ),
    "413" : new result(
        "카페 베로나 250g",
        "카페 베로나는 깊이 있고 달콤함이 특징인 이탈리안 로스트의 풍미와 부드러운 라틴 아메리카와 매혹적인 인도네시아산 원두가 블렌딩된 원두입니다. 이 유쾌한 조합은 초콜릿과 매우 잘 어울리기 때문에 발렌타인데이 기간의 인기 원두입니다. 연인의 애절한 로맨스가 연상 지어지는 커피, 카페 베로나. <아름다운 여인이여, 아름다운 베로나여~> *많은 셰익스피어 문학애호가들은 이탈리아의 베로나(시)를 로미오와 줄리엣의 배경이 되는 도시로 알고 있습니다. 이 위대한 희곡은 비극으로 끝나지만 이 커피는 마실 때마다 해피엔딩으로 끝난다는 점, 기억하세요!",
        "따뜻한 로맨스를 상상하게 해 주는 깊고 달콤한 맛의 커피"
    ),
    "421" : new result(
        "스타벅스 돌체구스토 베란다 블렌드 12개입",
        "스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다. 돌체구스토 캡슐은 로스팅 되고 분쇄된 직후 곧바로 캡슐에 밀봉되어 공기 중의 습기나 산소로부터 보호막이 되어 커피의 산화를 막고, 커피의 맛과 아로마를 신선하게 보존해 줍니다. *본 캡슐커피는 돌체구스토 머신 전용 캡슐입니다. 전용 머신 없이는 캡슐 음용이 불가합니다. 구입 전 반드시 머신의 종류를 확인하시고 구매하시기 바랍니다.",
        "[스타벅스커피 앳 홈 by 돌체구스토] 스타벅스 커피를 집에서도 간편하게 즐기실 수 있는 캡슐 타입의 커피로, 라틴 아메리카 원두를 가볍게 로스팅 하여 근사한 부드러움과 풍부함을 내는 블렌드입니다."
    ),
    "422" : new result(
        "파나마 보케테",
        "파나마의 서쪽에 있는 보케테는 작은 마을이지만 전 세계에 파나마 커피를 알린 유명한 커피 원산지입니다. 3개의 화산으로 둘러싸인 이 지역은 미네랄이 풍부한 토양과 커피 재배에 적합한 고도와 기후를 갖추고 있습니다. 이 커피가 재배된 돈 페페 농장에서는 고품질의 커피뿐만 아니라, 환경을 보호하기 위한 노력도 게을리하지 않습니다. 에코 펄퍼로 벗겨낸 커피 과육은 비료로 재활용하고, 물을 절약하고 재사용하여 환경 오염을 최소화합니다. 파나마 보케테는 잘 익은 오렌지처럼 부드러운 산미로 시작해서 쌉쌀한 카카오닙스의 풍미로 이어지며, 견과류를 넣은 쿠키처럼 버터리한 고소함과 달콤함이 부드럽게 마지막을 장식합니다.",
        "잘 익은 오렌지의 산미와 카카오닙스, 달콤한 피니시 * 원산지 : 라틴 아메리카(파나마)"
    ), 
    "423" : new result(
        "카페 베로나 250g",
        "카페 베로나는 깊이 있고 달콤함이 특징인 이탈리안 로스트의 풍미와 부드러운 라틴 아메리카와 매혹적인 인도네시아산 원두가 블렌딩된 원두입니다. 이 유쾌한 조합은 초콜릿과 매우 잘 어울리기 때문에 발렌타인데이 기간의 인기 원두입니다. 연인의 애절한 로맨스가 연상 지어지는 커피, 카페 베로나. <아름다운 여인이여, 아름다운 베로나여~> *많은 셰익스피어 문학애호가들은 이탈리아의 베로나(시)를 로미오와 줄리엣의 배경이 되는 도시로 알고 있습니다. 이 위대한 희곡은 비극으로 끝나지만 이 커피는 마실 때마다 해피엔딩으로 끝난다는 점, 기억하세요!",
        "따뜻한 로맨스를 상상하게 해 주는 깊고 달콤한 맛의 커피"
    ),
    "431" : new result(
        "카페 베로나 250g",
        "카페 베로나는 깊이 있고 달콤함이 특징인 이탈리안 로스트의 풍미와 부드러운 라틴 아메리카와 매혹적인 인도네시아산 원두가 블렌딩된 원두입니다. 이 유쾌한 조합은 초콜릿과 매우 잘 어울리기 때문에 발렌타인데이 기간의 인기 원두입니다. 연인의 애절한 로맨스가 연상 지어지는 커피, 카페 베로나. <아름다운 여인이여, 아름다운 베로나여~> *많은 셰익스피어 문학애호가들은 이탈리아의 베로나(시)를 로미오와 줄리엣의 배경이 되는 도시로 알고 있습니다. 이 위대한 희곡은 비극으로 끝나지만 이 커피는 마실 때마다 해피엔딩으로 끝난다는 점, 기억하세요!",
        "따뜻한 로맨스를 상상하게 해 주는 깊고 달콤한 맛의 커피"
    ),
    "432" : new result(
        "크리스마스",
        "포근한 삼나무향과 다채로운 스파이스, 감칠맛이 매력적인 크리스마스 리저브 블렌드는 행복하고 즐거운 크리스마스의 느낌을 가득 담고 있습니다. 크리스마스 시즌을 앞두고 신선한 커피 샘플이 도착하면, 우리는 크리스마스 블렌드에 어울리는 가장 완벽한 재료들을 찾아냅니다. 블렌딩은 매년 조금씩 달라지지만, 우리가 사랑하는 크리스마스의 강렬하고 생생한 풍미 프로필은 언제나 똑같습니다. 올 해는 산미와 달콤함이 조화로운 코스타리카 하시엔다 알사시아, 강렬하고 묵직한 숙성 수마트라와 수마트라 아체가 블렌딩되어 풍부한 삼나무의 향, 다채로운 스파이스의 감칠맛, 버터스카치의 달콤함이 매력적인 크리스마스 커피가 완성되었습니다.",
        "따뜻하고 포근한 삼나무향, 설탕에 졸인 생강과 버터스카치의 달콤함 * 원산지 : 아시아/태평양(인도네시아) & 라틴 아메리카(코스타리카)"
    ), 
    "433" : new result(
        "카페 베로나 250g",
        "카페 베로나는 깊이 있고 달콤함이 특징인 이탈리안 로스트의 풍미와 부드러운 라틴 아메리카와 매혹적인 인도네시아산 원두가 블렌딩된 원두입니다. 이 유쾌한 조합은 초콜릿과 매우 잘 어울리기 때문에 발렌타인데이 기간의 인기 원두입니다. 연인의 애절한 로맨스가 연상 지어지는 커피, 카페 베로나. <아름다운 여인이여, 아름다운 베로나여~> *많은 셰익스피어 문학애호가들은 이탈리아의 베로나(시)를 로미오와 줄리엣의 배경이 되는 도시로 알고 있습니다. 이 위대한 희곡은 비극으로 끝나지만 이 커피는 마실 때마다 해피엔딩으로 끝난다는 점, 기억하세요!",
        "따뜻한 로맨스를 상상하게 해 주는 깊고 달콤한 맛의 커피"
    )
}