import { ACTION_TYPE } from "./actions";

const initialState = {
  posts: [
    /*{
      title: 'Что же означают эти эмодзи?',
      body: 'Золотое сердце 💛 Означает, что вы лучшие друзья, или как это называет сам Snapchat — лучший друг №1. То есть у вас есть ещё лучшие друзья, но этот самый-самый. С этим человеком вы чаще всего обмениваетесь снапами.\n' +
        '\n' +
        'Красное сердце ❤️ Вы друзья номер один уже две недели.\n' +
        '\n' +
        'Розовые сердца 💕 Вы друзья номер один уже два месяца.\n' +
        '\n' +
        'Солнцезащитные очки 😎 У вас и вашего контакта есть общий близкий друг.\n' +
        '\n' +
        'Улыбка 😊 Один из ваших лучших друзей, но не друг №1. Вы часто перекидываетесь снапами с этим человеком.\n' +
        '\n' +
        'Гримаса 😬 Вы не лучшие друзья, но у вас обоих есть общий лучший друг. И вы оба чаще всего снапаете этому человеку.\n' +
        '\n' +
        'Ухмылка 😏 Вы лучший друг этого контакта, но не ваш лучший друг. Этот человек чаще всего снапает вам, но вы ему отвечаете редко, если отвечаете вообще.\n' +
        '\n' +
        'Огонь 🔥 Вы часто обменивались снапами с этим контактом. Например, вы оба снапали (не переписывались) в течение суток непрерывно последние три дня. Цифра рядом с эмодзи означает количество дней. Если рядом отображаются песочные часы — значит, скоро истекает «страйк» из снапов.\n' +
        '\n' +
        'Огонь и цифра 100 🔥 💯 Вы обмениваетесь снапами друг с другом уже 100 дней подряд.\n' +
        '\n' +
        'Песочные часы ⌛ «Страйк» из снапов скоро прервётся. Отправьте друг другу снапы, чтобы не прерывать его.\n' +
        '\n' +
        'Праздничный торт 🎂 Днюха у вашего друга. Эмодзи появляется, только если в настройках включена опция Birthday Party.\n' +
        '\n' +
        'Знак зодиака. Если вы указали дату рождения в профиле, то вы будете видеть соответствующий знак зодиака рядом с именем.\n' +
        '\n' +
        'Золотая звезда 🌟 Друг, чьи снапы получили ответ от одного или более друзей в течение последних суток.\n' +
        '\n' +
        'Ребенок 👶 Новый друг в Snapchat.\n' +
        '\n' +
        'Искры ✨ Рядом с именем означают, что он или она сейчас в групповом чате.',
      id: 1
    },
    {
      title: '10 неожиданных способов использования микроволновки',
      body: '8 октября 1945 года житель штата Массачусетс Перси Спенсер запатентовал микроволновую печь. А мы решили найти вам десятку неожиданных свойств микроволновки и в то же время полезных советов.\n' +
        '1. Чтобы освежить аромат молотых специй и приправ, разогрейте их на полной мощности тридцать секунд.\n' +
        '2. Если завернуть черствый хлеб в бумажную салфетку и прогреть его на полной мощности одну минуту, хлеб снова станет как свежий.\n' +
        '3. Миндаль легко чистится, если положить его в кипящую воду и прогреть тридцать секунд на полной мощности.\n' +
        '4. Грецкие орехи легко очистить от кожуры, прогрев их в воде четыре-пять минут на полной мощности.\n' +
        '5. Апельсин или грейпфрут легко очистить от белой мякоти, если их прогреть в течение тридцати секунд на полной мощности.\n' +
        '6. В микроволновке легко и быстро можно высушить цедру апельсинов и грейпфрутов. Выложите ее на бумажные салфетки и прогрейте на полной мощности две минуты. Во время прогревания цедру нужно перемешивать. После остывания она становится сухой и ломкой. Храните сушеную цедру в плотно закрытой посуде.\n' +
        '7. Микроволновая печь поможет выдавить сок из лимона или апельсина практически до капельки даже при очень толстой кожуре цитрусовых. Прогрейте фрукты несколько минут в микроволновке, дайте остыть, и вы с легкостью выжмете из них сок.\n' +
        '8. В микроволновке можно сушить на зиму зелень, овощи, а также сухарики и орехи.\n' +
        '9. Можно растопить засахарившийся мед за 1-2 минуты.\n' +
        '10. В СВЧ можно выбить въевшийся запах из разделочных досок — их нужно вымыть, натереть лимоном и «прожарить» в микроволновке.',
      id: 2
    }*/
  ],
  isFetching: true,
};

export const getNextState = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPE.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ACTION_TYPE.LOAD_POSTS + '_SUCCESS':
      return {
        ...state,
        posts: [...action.payload.data],
        isFetching: false
      };
    default:
      return state;
  }
};