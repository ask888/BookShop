export default { 
    sidebar: true,
    search: "",
    category: ["Искусство/Фотография", "Хобби", "Фэнтези", "История", "ЛитРПГ", "Детектив", "Триллер"],
    inbasket: JSON.parse(localStorage.getItem('Basket')) !== null ? JSON.parse(localStorage.getItem('Basket')) : false || [],
    books: [
        { futured: false, name:  "Depeche Mode: Обнаженные до костей", author: "Джонатан Миллер", price: 507, type: "Искусство/Фотография", seria: "Дискография", img: require('../../image/artbook1.jpg'),
        description: "Книга рассказывает о становлении поистине культовой британской группы, повлиявшей на всю мировую поп-музыку последних десятилетий. ", rating: 3, inStock: true},
        { futured: false, name:  "Об искусстве", author: "	Леонардо да Винчи", price: 382, type: "Детектив", seria: "Искусство/Фотография", img: require('../../image/artbook2.jpg'),
        description: "В издании представлена часть обширного рукописного наследия величайшего художника эпохи Возрождения - его записки об искусстве. В них затрагиваются различные \
        теоретические и прикладные проблемы изобразительного искусства. Благодаря труду исследователей его творчества эти разрозненные записки стали доступны современному читателю. ", 
        rating: 5, inStock: true},
        { futured: false, name:  "Скетчбук художника.", author: "	Кэти Джонсон", price: 507, type: "Искусство/Фотография", seria: "МИФ. Творчество", img: require('../../image/artbook3.jpg'),
        description: "Продолжение книги Джонсон 'Артбук' о том, как уловить и запечатлеть самые важные моменты на страницах дневника в словах и картинках. Есть в скетчах - быстрых \
        зарисовках - что-то непосредственное, личное и притягательное. Здесь, в отличие от рисования по фото или по памяти, все, что вокруг, вносит в изображение свою лепту, становится \
        его частью и дарит глубину и свежесть. Эмоции объединяются с разумом и памятью и появляются на странице как по волшебству. Эта книга - об импровизации. О том волшебстве, что \
        превращает предметы и объекты, эмоции, впечатления, запахи и звуки - в воспоминания. Автор подробно описывает, как делать скетчи в стенах дома и за его пределами. В книге много \
        экспертных советов о материалах и техниках, в том числе простым и цветными карандашами, тушью, акварелью и гуашью. На страницах книги - десятки примеров из сектчбуков известных \
        современных художников. Вы вместе с ними отправитесь рисовать в пустыни и чащи, столицы и маленькие города. Попробуете работать в одиночестве, с другом и в группе. Посмотрите, \
        как выбирать сюжеты, упрощать их или работать медленно и вдумчиво. Книга вам поможет в выборе материалов и приемов, с которыми вы сможете избежать разочарования и на всю жизнь \
        запомнить скетч-прогулку как приятное времяпрепровождение! Весь мир в ваших руках, близкий и далекий. Берите карандаш и ловите мгновение! ", rating: 0, inStock: true},
        { futured: false, name:  "Фотография. Для тех, кто хочет все успеть", author: "Мариам Акопян", price: 102, type: "Искусство/Фотография", seria: "Энциклопедия быстрых знаний", img: require('../../image/artbook4.jpg'),
        description: "Веками человек старался запечатлеть то, что происходит вокруг него. Сначала такими примитивными способами, как наскальные рисунки. В дальнейшем, с развитием скульптуры и живописи, \
        возросла не только точность передачи действительности - появился и художественный смысл произведений, превращающий их в предметы искусства. Фотография стала венцом развития статичных изображений. \
        Она позволила передать мгновения, в максимальной степени соответствующие реальности, и вложить в них ту или иную долю творчества. История возникновения фотографии, эволюция техники, особенности \
        пленки и 'цифры', выбор объектива, свет и цвет, экспозиция и композиция: об этом и много другом в нашем содержательном справочнике для тех, кто хочет все успеть. ", rating: 0, inStock: true},
        { futured: false, name:  "MARVEL. Полная энциклопедия вселенной", author: "АСТ", price: 613, type: "Искусство/Фотография", seria: "	Марвел. Энциклопедия", img: require('../../image/artbook5.jpg'),
        description: "Задайте себе вопрос: много ли вы знаете о других мирах? Пожалуй, с тех пор, как супергерои вроде Тора и Стражей Галактики начали своё триумфальное шествие по нашей планете, \
        пришлось немного расширить горизонты, верно? И эта книга - лучший помощник в виртуальном странствии по далёким уголкам вселенной, забытым местечкам Земли и параллельным измерениям! Откройте \
        энциклопедию - и узнаете немало нового об Асгарде, Латверии, родных планетах Читаури и Кри, Атлантиде, Негативной Зоне и многих других удивительных локациях! ", rating: 2, inStock: true},
        { futured: false, name:  "Человек-Паук. Энциклопедия персонажей", author: "Дэниел Уоллес", price: 507, type: "Искусство/Фотография", seria: "	Марвел. Энциклопедия", img: require('../../image/artbook6.jpg'),
        description: "Человек-Паук - определённо один из величайших героев комиксов! На страницах этой уникальной книги вы сможете познакомиться как с ближайшими друзьями Паучка, так и столкнуться \
        лицом к лицу с его злейшими врагами. В энциклопедии представлены биографии, описание сил и просто интересные факты о более чем 200 персонажах, так или иначе связанных с Человеком-Пауком. Добро \
        пожаловать во Вселенную MARVEL!", rating: 4, inStock: true},
        { futured: false, name:  "Гончарное дело. Техника. Приемы. Изделия", author: "Александр Поверин", price: 553, type: "Хобби", seria: "Золотая библиотека увлечений", img: require('../../image/hobbybook1.jpg'),
        description: "Гончарное дело - самое древнее, существующее на стыке ремесла, искусства и науки. Есть в нем и простые приемы работы с глиной, которым может научиться каждый, есть и тайны, \
        открытые лишь великим мастерам. В своей книге Александр Поверин подробно рассказывает обо всех тонкостях профессии: как правильно выбрать инструменты и заготовить материал, как конструировать \
        удивительные по гармоничности формы и выкручивать их на гончарном круге, как обжигать и декорировать готовые изделия. Мы надеемся, что эта замечательная книга поможет возродить национальные \
        художественные традиции и приобщит всех желающих к прекрасной профессии гончара.", rating: 4, inStock: true},
        { futured: false, name:  "Техника Кимекоми. Японский стиль в интерьере", author: "Мария Ильницкая", price: 507, type: "Хобби", seria: "Золотая библиотека увлечений", img: require('../../image/hobbybook2.jpg'),
        description: "Суть техники заключается в декорировании твердой основы изделия лоскутами ткани. Основа может быть любой - подойдет и доступный, недорогой пенопласт или пенокартон, и натуральные \
        материалы, например древесина. Сочетая на основе разные цвета и фактуры ткани, мастера кимекоми получают потрясающие живописные эффекты. Выполненные в этой технике изделия отличаются утонченностью \
        и изяществом неизменно привлекая внимание окружающих. В книге вы найдете сведения обо всех тонкостях кимекоми. Шаг за шагом, вы будете открывать новые грани творчества. Отточить мастерство помогут \
        двадцать практических проектов. Нам будет очень приятно, если авторские идеи вдохновят вас на создание своих произведений, а неспешный и умиротворяющий процесс творчества подарит вам истинное удовольствие.", 
        rating: 4, inStock: true},
        { futured: false, name:  "Русская охота", author: "Леонид Сабанеев", price: 181, type: "Хобби", seria: "", img: require('../../image/hobbybook3.jpg'),description: "'Русская охота' - это уникальное собрание практических \
        советов и рекомендаций, за которыми - сама жизнь, бесценный опыт бывалых людей, исходивших с ружьем и собакой пол-России. Достойное внимание уделено каждому промысловому зверю, от повадок и способов \
        охоты до проверенных рецептов приготовления добычи. Основу издания составили наблюдения и заметки Леонида Павловича Сабанеева признанного знатока охоты и рыбалки, многолетнего редактора наиболее \
        авторитетных журналов, посвященных охоте и природе России.", rating: 4, inStock: true},
        { futured: false, name:  "'Маленькие слабости' сильной половины: Большая книга мужских хобби и увлечений", author: "Дэниел Уоллес", price: 507, type: "Хобби", seria: "", img: require('../../image/hobbybook4.jpg'),
        description: "Найти свое хобби не так просто, как кажется на первый взгляд. Не только женщинам, но и мужчинам. А иметь дело для души - очень полезно для психики. Ведь всем нам нужно расслабление \
        - время, в которое мы можем отдохнуть от основной работы. Мужчине оно нужно вдвойне, ведь отдыхать однообразно - на диване в обнимку с бутылкой пива - давно не в моде. Потому и появилась на свет \
        эта книга: она расскажет, какие мужские хобби бывают; она поможет узнать больше об уже имеющемся у вас увлечении. К тому же, книга 'Маленькие слабости' сильной половины: Большая книга мужских хобби \
        и увлечений' понравится женщинам. Почему? Слабая половина давно уже повадилась читать журналы, позиционирующие себя, как 'мужские'. Так им легче понять своего мужчину, найти к нему правильный подход. \
        Потому эта книга будет интересна обоим полам.", rating: 4, inStock: true},
        { futured: false, name:  "Хобби для мужчин 2009", author: "Дэниел Уоллес", price: 507, type: "Хобби", seria: "", img: require('../../image/hobbybook5.jpg'),description: "Человек-Паук - определённо один из величайших \
        героев комиксов! На страницах этой уникальной книги вы сможете познакомиться как с ближайшими друзьями Паучка, так и столкнуться лицом к лицу с его злейшими врагами. В энциклопедии представлены биографии, \
        описание сил и просто интересные факты о более чем 200 персонажах, так или иначе связанных с Человеком-Пауком.Добро пожаловать во Вселенную MARVEL!", rating: 4, inStock: true},
        { futured: false, name:  'Братство Кольца', author: 'Дж. Р. Р. Толкин', price: 260, type: 'Фэнтези', seria: 'Властели́н коле́ц', img: require('../../image/lotr1.jpg'), rating: 0, inStock: true,
        description:'Хоббит Бильбо Бэггинс, главный герой повести «Хоббит», уходит на покой и оставляет племяннику Фродо волшебное кольцо, делающее всякого своего носителя невидимым. \
        От мага Гэнnpдальфа Фродо узнаёт, что ему досталось не простое кольцо, а само Кольцо Всевластья, творение тёмного властелина Саурона, врага свободных народов Средиземья из страны \
        Мордор, созданное, чтобы подчинить себе все прочие волшебные кольца. Кольцо обладает собственной волей и способно продлевать жизнь владельца, одновременно порабощая его, искажать \
        помыслы и вызывать у него желание обладать Кольцом. С помощью Кольца Саурон, побеждённый много лет назад, может вернуть себе утерянную силу. Уничтожить Кольцо можно только одним \
        способом — сбросив его в жерло Огненной Горы Ородруин в Мордоре, где оно и было выковано.'}
        ,{ futured: false, name:  'Две крепости', author: 'Дж. Р. Р. Толкин', price: 260, type: 'Фэнтези', seria: 'Властели́н коле́ц ', img: require('../../image/lotr2.jpg'), rating: 0, inStock: true,
        description:'На оставшихся членов Братства нападают орки и гоблины, Боромир героически погибает в бою, а Мерри и Пиппин попадают в плен к врагам. Арагорн, Леголас и Гимли решают \
        отправиться в погоню за орками, чтобы спасти хоббитов, тем самым оставляя Фродо и Сэма одних, идти на выполнение задания.Отряд орков, похитивших хоббитов, смешанный: часть гоблинов \
        явились с севера (видимо, из Мории) с целью отомстить Братству, часть орков служат Саурону, а часть — Саруману. Они ссорятся, решая, к которому из повелителей нести пленников, в конце \
        концов побеждают орки Сарумана, отряд идёт на запад к Изенгарду. Через несколько дней их настигают всадники Рохана — рохирримы. В стычке с всадниками орочий отряд истреблён, а Мерри и \
        Пиппину удаётся сбежать в лес Фангорн, где они встречают энтов и их предводителя Древоборода, хранителя леса. Хоббитам удаётся склонить его и других энтов к выступлению против Сарумана, \
        который уничтожает лес вокруг своей крепости Изенгард и готовит наступление на Рохан.'}
        ,{ futured: false, name:  'Возвращение короля', author: 'Дж. Р. Р. Толкин', price: 260, type: 'Фэнтези', seria: 'Властели́н коле́ц ', img: require('../../image/lotr3.jpg'), rating: 0, inStock: true,
        description:'Гэндальф с Пиппином едет в Гондор — предупредить жителей Минас-Тирита о грядущем наступлении войск Мордора. Он застаёт Денетора, наместника Гондора, в трауре по Боромиру. \
        Теоден ведёт роханское войско на помощь Гондору, с войском тайно отправляется Мерри, нарушив запрет короля. Арагорн вместе с Леголасом и Гимли проходит по тайной тропе и призывает на помощь \
        Войско Мёртвых — призраков людей, когда-то нарушивших клятву предку Арагорна Исильдуру и не знающих с тех пор покоя. Орки из Мордора захватили Осгилиат и приступили к штурму Минас-Тирита. \
        После того, как младший сын Денетора, Фарамир, был тяжело ранен при защите Осгилиата, наместник, увидев в палантир огромное мордорское войско, решает, что дальнейшее сопротивление бессмысленно, \
        и в безумии пытается сжечь себя вместе с сыном. Гэндальфу, которого едва успел предупредить Пиппин, удалось вытащить из костра Фарамира, но Денетор совершает самосожжение. Гэндальф берёт на себя \
        руководство обороной города; в это же время к стенам города '}
        ,{ futured: false, name:  'Живые и мёртвые', author: 'Константин Симонов', price: 260, type: 'История', seria: '', img: require('../../image/lad.jpg'), rating: 0, inStock: true,
        description:'О книге: роман-эпопея о войне, сюжет охватывает время с июня 1941 по июль 1944 года.'}
        ,{ futured: false, name:  'Судьба человека', author: 'Дмитрий Русo', price: 260, type: 'История', seria: '', img: require('../../image/sp.jpg'), rating: 0, inStock: true,
        description:'О книге: повесть, герой которой, пережив войну, голод, потерю родных, усыновляет мальчика-сироту.'}
        ,{ futured: false, name:  'Звезда', author: 'Эммануил Казакевич', price: 260, type: 'История', seria: '', img: require('../../image/star.jpg'), rating: 0, inStock: true,
        description:'О книге: повесть о суровых буднях советской разведки во время Великой Отечественной войны принесла автору широкую известность.'}
        ,{ futured: false, name:  'Военный лётчик', author: 'Антуан де Сент-Экзюпери', price: 260, type: 'История', seria: '', img: require('../../image/af.jpg'), rating: 0, inStock: true,
        description:'О книге: в повести, когда-то запрещённой во Франции, но имевшей колоссальный успех, говорится о тяжестях войны и о том, как меняются на ней люди.'}
        ,{ futured: false, name:  "Исход", author: "Дмитрий Рус", price: 273, type: "ЛитРПГ", seria: "Играть чтобы жить. Книга 7", img: require('../../image/ptl7.jpg'), description: "Человечество заигралось с виртуальностью, \
        и виртуальность стала играть людьми… Земля дорого платит по счетам и щедро умывается кровью — опустела Африка, обезлюдела Австралия. Границы обитаемых анклавов стремительно сжимаются. Мир дрожит под \
        поступью демонов, вторгшихся на нашу планету из трех реальностей – «Друмира», «Дьябло» и «Героев Меча и Магии». Как поступить Глебу Назарову? Укрыться в своем игровом кластере, укрепляя собственную \
        власть и наполняя казну? Или бросить все и броситься на помощь землянам, отступающим пред полчищами демонов? Уже распечатаны древние мобилизационные склады, захлебываясь, строчат дедовские ППШ, и кто-то \
        вжимает в плечо приклад исцарапанного ПТРД и хрипло орет: «Патрон!»…", rating: 0, inStock: true}
        ,{ futured: false, name:  "Долг", author: "Дмитрий Рус", price: 245, type: "ЛитРПГ", seria: "Играть чтобы жить. Книга 3", img: require('../../image/ptl3.jpg'), description: "Новая реальность обретает глубину и краски. \
        Мир познает рождение, мир познает смерть. Пуповина, соединяющая Землю и Друмир, истончается, и даже Неназываемый не в силах предотвратить неизбежный катаклизм! Разве мог Глеб пройти мимо простой русской \
        девчонки, чудом сбежавшей из китайского рабства и с тихим отчаяньем умоляющей помочь первого встречного ею человека, говорящего на родном языке? И вот уже скручивается тугая пружина противостояния, \
        невиданные ранее тысячные армии сходятся посреди Фронтира, пережигая килотонны маны, спекая песок в стекло и прорубая неуязвимые мифриловые доспехи. Яростное русское «Ура!» заглушает китайское «Ваньсуй!», \
        и боги содрогаются от человеческой жестокости.", rating: 0, inStock: true}
        ,{ futured: false, name:  "Срыв", author: "Дмитрий Рус", price: 260, type: "ЛитРПГ", seria: "Играть чтобы жить. Книга 1", img: require('../../image/ptl1.jpg'), description: "Невероятный феномен Срыва всколыхнул мир. \
        Играя в любимую онлайн-игру – будь осторожен при полном погружении в виртуал! Есть немалый шанс, что твое сознание сбросит оковы ущербного тела и навсегда останется в иной реальности. Горе тому, кто \
        завис в «Тетрисе»! Не позавидуешь и тем, кто сотни раз в день вынужден гореть в броне танковых симуляторов… Но можно ли назвать счастливчиком того, кто сознательно воспользовался феноменом Срыва и \
        добровольно погрузился в бескрайний мир меча и магии?", rating: 0, inStock: true}
        ,{ futured: false, name:  "Клан", author: "Дмитрий Рус", price: 291, type: "ЛитРПГ", seria: "Играть чтобы жить. Книга 2", img: require('../../image/ptl2.jpg'), description: "Оцифрованные люди в виртуальном мире… \
        Для миллионов это просто игра, для сотен тысяч — новый дом, а для амбициозных правительств — возможность подмять под себя невероятные магические технологии и ресурсы девственных земель.\
        Глеб обманул судьбу, бросив в реале смертельно больное тело и заменив его на бессмертный аватар в мире меча и магии. Казалось бы, живи и радуйся — впереди вечная молодость, рядом любимая \
        женщина, а спину прикрывают верные друзья. Но человеческая сущность многогранна: кто-то жаждет власти, кто-то богатства. И вот уже первые стоны рабов раздались над виртуальным миром, а в \
        реальность потек тоненький ручеек настоящего золота. Как поступить — остаться в стороне и смотреть, как чудесный мир превращается в изнанку Земли, или найти в себе силы и вмешаться в игры \
        могучих противников?", rating: 0, inStock: true}
        ,{ futured: false, name:  "Инферно", author: "Дмитрий Рус", price: 221, type: "ЛитРПГ", seria: "Играть чтобы жить. Книга 4", img: require('../../image/ptl4.jpg'), description: "Ткань Реальности трещит по швам. \
        Уже стучатся в ворота Кремля парламентеры от гноллов, а в игровые аватары Друмира вселяются сущности древних, полузабытых божеств. Еще теплится в наших душах всесильная Искра Творца, подчиняющаяся \
        вере и знаниям миллионов игроков и меняющая мироздание согласно их невольным желаниям. В Друмире есть план Инферно? Значит, будут вам и демоны! И не наивные цифровые порождения гейм-дизайнеров, а \
        истинные архидемоны, князи инкубата и суккубата, каратели злодеяний, призванные нашей верой в зарождающийся мир. Тяжела ноша Глеба — руководство кланом и альянсом, долг перед богами и маячащая на \
        горизонте битва за Первохрам. Однако в силах ли он отказать потенциальному союзнику?! Не прийти на помощь нарвавшимся на проблемы и не попробовать подмять под себя часть уникальных бесхозных земель? \
        И вздрогнет пепел Инферно от поступи стальных легионов, тяжелых штурмовых големов и тысяч лап многочисленных петов, маунтов и фамилиаров!", rating: 0, inStock: true}
        ,{ futured: false, name:  "Война", author: "Дмитрий Рус", price: 242, type: "ЛитРПГ", seria: "Играть чтобы жить. Книга 6", img: require('../../image/ptl6.jpg'), description: "Бушует магическое пламя. Плавится сталь \
        клинков. Души выгорают в ярости битвы! Величественно гремят финальные аккорды сражения за Первохрам. Сброшены все козыри, вычерпаны до дна резервы и даже боги сцепились в плебейской драке. Трещит \
        ткань мироздания, лопаются оковы, связывающие миры. И вот уже ледяные воды Балтики остужают раскалённые пески Фронтира, а твари Друмира проливают первую кровь на улицах сонных Земных городов. Как \
        поступить Глебу? Ожесточиться и устроить резню среди врагов? Прибрать к рукам опустевшие замки и ничейные локации? Броситься спасать ту, что отдала за него жизнь? Или попытаться сорвать джек-пот, \
        отыскав путь домой, на Землю?!", rating: 0, inStock: true}
        ,{ futured: false, name:  "Битва", author: "Дмитрий Рус", price: 242, type: "ЛитРПГ", seria: "Играть чтобы жить. Книга 5", img: require('../../image/ptl5.jpg'), description: "Земля русского кластера дрожит от поступи \
        врагов. Разгневанные боги хмурятся с небес. Спецслужбы сцепились в круговерти собачьей свалки. Сотни тысяч разумных радостно режут друг друга. Это больше не игровой квест и не потешная возня пары кланов \
        вокруг богатой ресурсами локации. Это война! Война цивилизаций, религий и граней света. Рыдает от боли земля, астральные сущности в ужасе отворачивают лица. Рушатся башни горящих замков, плавится от жара \
        обреченный камень. Враг идет! Стекаются в Долину беженцы, собирается в кулак ударная мощь Альянса. Глеб уже не просто лидер клана. Он Вождь и центр кристаллизации сил сопротивления. И нет у тебя выбора, \
        если за спиной — испуганные детские глаза и биение сердец тысяч доверившихся тебе людей.", rating: 0, inStock: true}
        ,{ futured: false, name:  "Кладбище Кроссбоунз", author: "Кейт Родс", price: 260, type: "Детектив", seria: "", img: require('../../image/dbook1.jpg'),description: "Элис Квентин, в прошлом жертва семейного насилия, до сих \
        пор испытывает серьезные психологические проблемы. Она не только борется с ними, но и помогает другим людям - для того и стала психотерапевтом. Единственный человек, которому Элис никак не может помочь, \
        - ее собственный брат, чья психическая болезнь усугубляется приемом наркотиков. В последнее время его поведение стало особенно странным, с ним явно происходит что-то зловещее. Но это еще не самое страшное. \
        Один за другим Элис находит два женских трупа, словно специально подкинутых так, чтобы именно она их обнаружила… ", rating: 0, inStock: true}
        ,{ futured: false, name:  "Седьмая свеча", author: "Сергей Пономаренко", price: 120, type: "Детектив", seria: "", img: require('../../image/dbook2.jpg'),description: "Глеб всегда недолюбливал тещу из-за ее удивительной \
        проницательности. А приехав в далекое село на похороны, узнал, что здесь ее считали колдуньей и не на шутку побаивались. Ему, столичному психологу, посмеяться бы над сказками о местечковых ведьмах, но \
        теперь уж не до смеха… " , rating: 0, inStock: true}
        ,{ futured: false, name:  "Легенда о Безголовом", author: "Андрей Кокотюха", price: 320, type: "Детектив", seria: "", img: require('../../image/dbook3.jpg'),description: "Семейная жизнь киевского адвоката Ларисы Гайдук не \
        сложилась, большой город надоел. Чтобы немного отдохнуть, молодая женщина едет к подруге в маленький уютный городок Подольск. Но в первый же день понимает, что об отдыхе можно только мечтать: в центре \
        города найдено обезглавленное тело киевского журналиста. Ходят слухи, что это дело рук призрака Безголового, который живет в старинном замке за городом...", rating: 0, inStock: true}
        ,{ futured: false, name:  "Кукольник", author: "Лиам Пайпер", price: 200, type: "Триллер", seria: "", img: require('../../image/tbook1.jpg'),description: "Судьба любила Адама Кулакова. До поры. Счастливый муж и отец, \
        собственник компании по производству игрушек, которые знают и обожают дети. Его денег хватало на все, даже на маленькие личные секреты. Но теперь его уютный мир оказался под угрозой из-за неосторожности, \
        глупой тщеславной ошибки. Похоже, этот его секрет окажется слишком дорогостоящим. И не единственным в его семье… ", rating: 0, inStock: true}
        ,{ futured: false, name:  "Апелляция", author: "Джон Гришэм", price: 325, type: "Триллер", seria: "", img: require('../../image/tbook2.jpg'),description: "Крупная химическая корпорация, долгие годы отравлявшая питьевую воду, \
        привела городок на американском Юге к катастрофе - многие его жители стали жертвами тяжелых болезней, а некоторые умерли.Однако маленькая юридическая фирма сумела совершить практически невозможное - выиграть \
        дело против промышленного гиганта. И теперь в пользу пострадавших должны перечислить 41 миллион долларов. Справедливость восторжествовала? Увы, до этого еще далеко. Миллиардер, владеющий корпорацией, готов на \
        любую подлость, лишь бы не платить людям. Игра еще не закончена, считает он, намереваясь привести в действие особый план, способный до основания разрушить дело изнутри...", rating: 0, inStock: true}
        ,{ futured: false, name:  "Употребитель", author: "Алма Катсу", price: 100, type: "Триллер", seria: "", img: require('../../image/tbook3.jpg'),description: "Темной ночью в больницу маленького городка Сент-Эндрю привозят молодую \
        женщину по имени Ланор. Полицейские, доставившие ее сюда, говорят, что она только что убила в лесу мужчину. Оставив арестованную на попечение доктора Люка Финдли – вся ее одежда в крови, возможно, она ранена, – \
        полиция возвращается на место преступления. Ланор тем временем умоляет Люка отпустить ее, ибо она ни в чем не виновна, и то, что она совершила, не было убийством. А затем рассказывает врачу совершенно невероятную \
        историю своей жизни – историю женщины, которая точно знает, что вечная любовь все-таки существует. И вечная ненависть. И вечная боль. Потому что та, кто носит эти чувства в своем сердце – сама Ланор, – тоже вечна…", 
        rating: 0, inStock: true}
    ],
    watchedBooks: [{name: "Depeche Mode: Обнаженные до костей", author: "Джонатан Миллер", price: 507, type: "Искусство/Фотография", seria: "Дискография", img: require('../../image/artbook1.jpg'),
    description: "Книга рассказывает о становлении поистине культовой британской группы, повлиявшей на всю мировую поп-музыку последних десятилетий. ", rating: 3, inStock: true},
    {name: "Об искусстве", author: "	Леонардо да Винчи", price: 382, type: "Детектив", seria: "Искусство/Фотография", img: require('../../image/artbook2.jpg'),
    description: "В издании представлена часть обширного рукописного наследия величайшего художника эпохи Возрождения - его записки об искусстве. В них затрагиваются различные \
    теоретические и прикладные проблемы изобразительного искусства. Благодаря труду исследователей его творчества эти разрозненные записки стали доступны современному читателю. ", 
    rating: 5, inStock: true},
    {name: "Скетчбук художника.", author: "	Кэти Джонсон", price: 507, type: "Искусство/Фотография", seria: "МИФ. Творчество", img: require('../../image/artbook3.jpg'),
    description: "Продолжение книги Джонсон 'Артбук' о том, как уловить и запечатлеть самые важные моменты на страницах дневника в словах и картинках. Есть в скетчах - быстрых \
    зарисовках - что-то непосредственное, личное и притягательное. Здесь, в отличие от рисования по фото или по памяти, все, что вокруг, вносит в изображение свою лепту, становится \
    его частью и дарит глубину и свежесть. Эмоции объединяются с разумом и памятью и появляются на странице как по волшебству. Эта книга - об импровизации. О том волшебстве, что \
    превращает предметы и объекты, эмоции, впечатления, запахи и звуки - в воспоминания. Автор подробно описывает, как делать скетчи в стенах дома и за его пределами. В книге много \
    экспертных советов о материалах и техниках, в том числе простым и цветными карандашами, тушью, акварелью и гуашью. На страницах книги - десятки примеров из сектчбуков известных \
    современных художников. Вы вместе с ними отправитесь рисовать в пустыни и чащи, столицы и маленькие города. Попробуете работать в одиночестве, с другом и в группе. Посмотрите, \
    как выбирать сюжеты, упрощать их или работать медленно и вдумчиво. Книга вам поможет в выборе материалов и приемов, с которыми вы сможете избежать разочарования и на всю жизнь \
    запомнить скетч-прогулку как приятное времяпрепровождение! Весь мир в ваших руках, близкий и далекий. Берите карандаш и ловите мгновение! ", rating: 0, inStock: true},
    {name: "Фотография. Для тех, кто хочет все успеть", author: "Мариам Акопян", price: 102, type: "Искусство/Фотография", seria: "Энциклопедия быстрых знаний", img: require('../../image/artbook4.jpg'),
    description: "Веками человек старался запечатлеть то, что происходит вокруг него. Сначала такими примитивными способами, как наскальные рисунки. В дальнейшем, с развитием скульптуры и живописи, \
    возросла не только точность передачи действительности - появился и художественный смысл произведений, превращающий их в предметы искусства. Фотография стала венцом развития статичных изображений. \
    Она позволила передать мгновения, в максимальной степени соответствующие реальности, и вложить в них ту или иную долю творчества. История возникновения фотографии, эволюция техники, особенности \
    пленки и 'цифры', выбор объектива, свет и цвет, экспозиция и композиция: об этом и много другом в нашем содержательном справочнике для тех, кто хочет все успеть. ", rating: 0, inStock: true},
    {name: "MARVEL. Полная энциклопедия вселенной", author: "АСТ", price: 613, type: "Искусство/Фотография", seria: "	Марвел. Энциклопедия", img: require('../../image/artbook5.jpg'),
    description: "Задайте себе вопрос: много ли вы знаете о других мирах? Пожалуй, с тех пор, как супергерои вроде Тора и Стражей Галактики начали своё триумфальное шествие по нашей планете, \
    пришлось немного расширить горизонты, верно? И эта книга - лучший помощник в виртуальном странствии по далёким уголкам вселенной, забытым местечкам Земли и параллельным измерениям! Откройте \
    энциклопедию - и узнаете немало нового об Асгарде, Латверии, родных планетах Читаури и Кри, Атлантиде, Негативной Зоне и многих других удивительных локациях! ", rating: 2, inStock: true},
        {name: "Апелляция", author: "Джон Гришэм", price: 325, type: "Триллер", seria: "", img: require('../../image/tbook2.jpg'),description: "Крупная химическая корпорация, долгие годы отравлявшая питьевую воду, \
    привела городок на американском Юге к катастрофе - многие его жители стали жертвами тяжелых болезней, а некоторые умерли.Однако маленькая юридическая фирма сумела совершить практически невозможное - выиграть \
    дело против промышленного гиганта. И теперь в пользу пострадавших должны перечислить 41 миллион долларов. Справедливость восторжествовала? Увы, до этого еще далеко. Миллиардер, владеющий корпорацией, готов на \
    любую подлость, лишь бы не платить людям. Игра еще не закончена, считает он, намереваясь привести в действие особый план, способный до основания разрушить дело изнутри...", rating: 0, inStock: true}
    ,{name: "Употребитель", author: "Алма Катсу", price: 100, type: "Триллер", seria: "", img: require('../../image/tbook3.jpg'),description: "Темной ночью в больницу маленького городка Сент-Эндрю привозят молодую \
    женщину по имени Ланор. Полицейские, доставившие ее сюда, говорят, что она только что убила в лесу мужчину. Оставив арестованную на попечение доктора Люка Финдли – вся ее одежда в крови, возможно, она ранена, – \
    полиция возвращается на место преступления. Ланор тем временем умоляет Люка отпустить ее, ибо она ни в чем не виновна, и то, что она совершила, не было убийством. А затем рассказывает врачу совершенно невероятную \
    историю своей жизни – историю женщины, которая точно знает, что вечная любовь все-таки существует. И вечная ненависть. И вечная боль. Потому что та, кто носит эти чувства в своем сердце – сама Ланор, – тоже вечна…", 
    rating: 0, inStock: true}]
};