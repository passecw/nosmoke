const boru = document.querySelector(".x20x10"),
  gap = document.querySelector(".x20"),
  gaepi = document.querySelector(".x1");

const startDate = document.querySelector(".startDate"),
  submit = document.querySelector(".submit"),
  result = document.querySelector(".result"),
  nosmoke = document.querySelector(".nosmoke");

const smoke = [
  "폐에 쌓인 타르와 기관지가 아파하는 소리는 덤인가요?",
  "아, 아까운 수명.. 그렇게 낭비하지 말고 차라리 저한테 나눠주시지 그랬어요.",
  "와, 그간 담배에 쓴 돈만 해도 국밥이 몇 그릇이냐..",
  "혹시 길가면서 담배를 폈다면, 주위 사람들 표정 한번 보는건 어때요? 코를 잡거나, 당신을 노려볼지도 몰라요.",
  "어디서 소리 안 들리나요? 당신 폐가 당신 욕하고 있어요!",
  "금연하면 이런 쓴소리 안 할게요. 진짜라니까요?",
  "축하합니다! 당신은 '금연할 권리'를 얻으셨어요. 누구나 가질 수 있는건 아니라구요.",
  "윽! 누가 소리를 지르나봐요. 아마 지구인가? 당신 지갑인가? 둘 다 좋은건 아니겠죠?",
  "그거 아세요? 혐연권이 흡연권보다 우선이에요.",
  "혹시 담배를 강제로 권유한 적이 있다면, 지금이라도 사과하세요. 그리고 다신 그러지 마세요.",
  "담배를 줄이기보단 그냥 팍 끊어버리자구요. 싫다고요? 그럼 미래는 보장 못해요.",
  "위쪽에 적힌 상담전화는 장식이 아니에요.",
  "솔직히 저도 당신을 까고는 있지만, 당신이 금연을 했으면 좋겠어요. 진심이에요.",
  "그거 아세요? 담배는 피는 양보다 피는 기간이 더 중요해요. 피는 기간이 길어질수록 끊기 힘들어지죠.",
  "혹시 전자담배 생각하셨나요? 빨리 그 생각 버리시고, 끊은 후 담배대신 할 수 있는 행동을 찾아보자구요.",
  "담배가 스트레스 해소가 된다고 느껴지시나요? 그거 가짠데. <a href='https://www.khealth.or.kr/board/view?pageNum=6&rowCnt=10&no1=364&linkId=501859&menuId=MENU00907&schType=0&schText=&boardStyle=&categoryId=&continent=&country=' target='_blank'>안믿기면 눌러봐요!</a>",
  "금연 하시면, 칭찬 해드릴게요. 진짜로요. 진짜.",
  "당신은 옥수수가 필요 없겠네요. 입에 이미 물고 다니잖아요! 아직 아니라구요? 곧 생길거에요!",
  "궁금한게 있는데요, 왜 굳이 돈을 쓰면서까지 몸에 칼을 꽂으세요?",
  "담뱃불을 끌때 자기 손목에 지져야 한다면, 아마 아무도 담배를 안 피지 않을까요? 그냥 해 본 소리에요.",
  "혹시 비만인데 담배도 많이 피시나요? 그렇다면 빠른 시일 내에 사람들을 위에서 내려다볼거에요. 대신 할 수 있는건 별로 없을걸요.",
  "담배를 피면 멋져 보인다고 생각하나요? 그건 멋진 사람들이 펴서 그렇게 보이는거고, 주위사람들이 보기엔 당신은 아마.. 노코멘트 할게요.",
  "담배를 피우시는데 술도 많이 마시나요? 축하합니다! 저승행 티켓을 몸에 쌓아두시는군요!",
  "왜 이렇게 욕심이 많으실까. 타르랑 니코틴좀 그만 드세요. 그게 그렇게 맛있나요?",
  "냠냠, 쩝쩝.. 앗, 죄송해요. 당신 수명좀 갉아먹고 있었는데, 거슬렸나요?",
  "그냥 담배가 전기톱으로 몸을 찢는거라면, 전자담배는 식칼로 몸을 찌르는거에요. 둘 다 좋지 않다는건 잘 아시겠죠?",
  "타르가 적은 담배를 피신다구요? 설사 대신 똥을 드시는거랑 같은 개념이라고 봐도 되겠죠?",
  "혹시 금연의지가 있으시다면, 저 위에 있는 번호를 기억만 하지 마시고, 지금 당장 전화해봐요.",
];

const smokeX = [
  "금연 하신건가요? 정말 축하드려요!",
  "당신은 '금연할 권리'를 잃어버렸습니다! 하지만 권리를 얻었을 때 보다 더 축하드립니다! 다시 이 권리를 얻지 않길 바라요!",
  "담배를 끊었다니, 당신은 정말 뭐든 할 수 있을거에요. 당신을 응원합니다!",
];

submit.addEventListener(
  "click",
  (handleSubmit = (event) => {
    event.preventDefault();
    const startYear = Number(startDate.value.slice(0, 4)),
      startMonth = Number(startDate.value.slice(5, 7)),
      startDay = Number(startDate.value.slice(8));

    const borus = Number(boru.value),
      gaps = Number(gap.value),
      gaepis = Number(gaepi.value);

    const start = new Date(startYear, startMonth - 1, startDay);
    const startMilsec = start.getTime();
    // console.log(start.getTime())

    const today = new Date();
    const todayMilsec = today.getTime();

    const preResult = todayMilsec - startMilsec,
      preDate = Math.round(preResult / 1000 / 60 / 60 / 24);

    let totalAllSmoke = borus * 20 * 10 + gaps * 20 + gaepis,
      totalSmoke = preDate * totalAllSmoke,
      LostMin = totalSmoke * 5,
      totalLostYear = LostMin / 60 / 24 / 30 / 12,
      totalLostMonth = totalLostYear * 12,
      totalLostDate = totalLostMonth * 30,
      totalLostHour = totalLostDate * 24,
      totalLostMin = totalLostHour * 60;

    // console.log(result)

    // if (Math.round(totalLostYear) < 1 && Math.round(totalLostMonth) < 1 && Math.round(totalLostDate/7) < 1 && Math.round(totalLostDate) < 1 && Math.round(totalLostHour) < 1 && Math.round(totalLostMin) < 1) {
    //     result.innerHTML = `축하합니다! 수명 ${Math.round(totalLostMin*60)}초를 담배에게 빼앗기셨군요!`

    // } else if (Math.round(totalLostMonth) < 1 && Math.round(totalLostDate/7) < 1 && Math.round(totalLostDate) < 1 && Math.round(totalLostHour) < 1 && Math.round(totalLostMin) < 1) {
    //     result.innerHTML = `축하합니다! 수명 ${Math.round(totalLostMin*60)}초 \n
    //     = ${Math.round(totalLostMin)}분을 담배에게 빼앗기셨군요!`

    // } else if (Math.round(totalLostDate/7) < 1 && Math.round(totalLostDate) < 1 && Math.round(totalLostHour) < 1 && Math.round(totalLostMin) < 1) {
    //     result.innerHTML = `축하합니다! 수명 ${Math.round(totalLostMin*60)}초 \n
    //     = ${Math.round(totalLostMin)}분 \n
    //     = 약 ${Math.round(totalLostHour)}시간을 담배에게 빼앗기셨군요!`

    // } else if (Math.round(totalLostDate) < 1 && Math.round(totalLostHour) < 1 && Math.round(totalLostMin) < 1) {
    //     result.innerHTML = `축하합니다! 수명 ${Math.round(totalLostMin*60)}초 \n
    //     = ${Math.round(totalLostMin)}분 \n
    //     = 약 ${Math.round(totalLostHour)}시간 \n
    //     = 약 ${Math.round(totalLostDate)}일을 담배에게 빼앗기셨군요!`

    // } else if (Math.round(totalLostHour) < 1 && Math.round(totalLostMin) < 1) {
    //     result.innerHTML = `축하합니다! 수명 ${Math.round(totalLostMin*60)}초 \n
    //     = ${Math.round(totalLostMin)}분 \n
    //     = 약 ${Math.round(totalLostHour)}시간 \n
    //     = 약 ${Math.round(totalLostDate)}일 \n
    //     = 약 ${Math.round(totalLostDate/7)}주를 담배에게 빼앗기셨군요!`

    // } else if (Math.round(totalLostMin) < 1) {
    //     result.innerHTML = `축하합니다! 수명 ${Math.round(totalLostMin*60)}초 \n
    //     = ${Math.round(totalLostMin)}분 \n
    //     = 약 ${Math.round(totalLostHour)}시간 \n
    //     = 약 ${Math.round(totalLostDate)}일 \n
    //     = 약 ${Math.round(totalLostDate/7)}주 \n
    //     = 약 ${Math.round(totalLostMonth)}개월을 담배에게 빼앗기셨군요!`
    //
    // }

    result.innerHTML = `축하합니다! 수명 ${Math.round(
      totalLostMin * 60
    )}초 = ${Math.round(totalLostMin)}분 = 약 ${Math.round(
      totalLostHour
    )}시간 = 약 ${Math.round(totalLostDate)}일 = 약 ${Math.round(
      totalLostDate / 7
    )}주 = 약 ${Math.round(totalLostMonth)}개월 = 약 ${Math.round(
      totalLostYear
    )}년을 담배에게 빼앗기셨군요!`;
    if (totalLostMin !== 0) {
      nosmoke.innerHTML =
        smoke[Math.floor(Math.random() * (smoke.length - 0)) + 0];
    } else {
      nosmoke.innerHTML =
        smokeX[Math.floor(Math.random() * (smokeX.length - 0)) + 0];
    }

    // console.log(`축하합니다! 수명 ${Math.round(totalLostMin*60)}초 = ${Math.round(totalLostMin)}분 = 약 ${Math.round(totalLostHour)}시간 = 약 ${Math.round(totalLostDate)}일 = 약 ${Math.round(totalLostDate/7)}주 = 약 ${Math.round(totalLostMonth)}개월 = 약 ${Math.round(totalLostYear)}년을 담배로 잃으셨군요!`)
    // console.log("폐에 쌓인 타르와 기관지가 아파하는 소리는 덤인가요? 아무튼 축하드립니다!")
  })
);
