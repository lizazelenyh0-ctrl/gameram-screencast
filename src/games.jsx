const imgBrandOfficialGameramLogo = import.meta.env.BASE_URL + "assets/games-imgBrandOfficialGameramLogo.svg";
const imgIconSearch = import.meta.env.BASE_URL + "assets/games-imgIconSearch.svg";
const imgIconMessages = import.meta.env.BASE_URL + "assets/games-imgIconMessages.svg";
const imgIconNotifications = import.meta.env.BASE_URL + "assets/games-imgIconNotifications.svg";
const imgIconThemeToggle = import.meta.env.BASE_URL + "assets/games-imgIconThemeToggle.svg";
const imgPlaceholderValorant45 = import.meta.env.BASE_URL + "assets/games-imgPlaceholderValorant45.png";
const imgCover = import.meta.env.BASE_URL + "assets/games-imgCover.png";
const imgCover1 = import.meta.env.BASE_URL + "assets/games-imgCover1.png";
const imgCover2 = import.meta.env.BASE_URL + "assets/games-imgCover2.png";
const imgCover3 = import.meta.env.BASE_URL + "assets/games-imgCover3.png";
const imgCover4 = import.meta.env.BASE_URL + "assets/games-imgCover4.png";
const imgCover5 = import.meta.env.BASE_URL + "assets/games-imgCover5.png";
const imgPlaceholder = import.meta.env.BASE_URL + "assets/games-imgPlaceholder.png";
const imgPlaceholder1 = import.meta.env.BASE_URL + "assets/games-imgPlaceholder1.png";
const imgGroup = import.meta.env.BASE_URL + "assets/games-imgGroup.svg";
const imgGroup1 = import.meta.env.BASE_URL + "assets/games-imgGroup1.svg";
const imgIconProfile = import.meta.env.BASE_URL + "assets/games-imgIconProfile.svg";
const imgIconFeed = import.meta.env.BASE_URL + "assets/games-imgIconFeed.svg";
const imgIconMyGames = import.meta.env.BASE_URL + "assets/games-imgIconMyGames.svg";
const imgIconFriends = import.meta.env.BASE_URL + "assets/games-imgIconFriends.svg";
const imgIconMessages1 = import.meta.env.BASE_URL + "assets/games-imgIconMessages1.svg";
const imgIconAchievements = import.meta.env.BASE_URL + "assets/games-imgIconAchievements.svg";
const imgIconSettings = import.meta.env.BASE_URL + "assets/games-imgIconSettings.svg";
const imgOnlineDot = import.meta.env.BASE_URL + "assets/games-imgOnlineDot.svg";

type MoodPillGamesPageProps = {
  className?: string;
  label?: string;
  state?: "Default" | "Selected";
};

function MoodPillGamesPage({ className, label = "ХОЧУ ПОСОРЕВНОВАТЬСЯ", state = "Default" }: MoodPillGamesPageProps) {
  const isSelected = state === "Selected";
  return (
    <div className={className || `content-stretch flex h-[80px] items-center justify-center overflow-clip px-[24px] py-[20px] relative rounded-[16px] w-[412px] ${isSelected ? "bg-gradient-to-r from-[#a855f7] to-[#22d3ee]" : "bg-[var(--background-subtle,#ede9ff)]"}`} id={isSelected ? "node-297_281" : "node-297_279"}>
      {state === "Default" && (
        <div className="ga0" data-node-id="297:280">
          <p className="ga1">{label}</p>
        </div>
      )}
      {isSelected && (
        <div className="ga2" data-node-id="297:282">
          <p className="ga1">{label}</p>
        </div>
      )}
    </div>
  );
}

function Header({ className }) {
  return (
    <div className={className || "ga168"} data-node-id="260:11" data-name="Header">
      <div className="ga3" data-node-id="260:12" data-name="Header / Container">
        <div className="ga4" data-node-id="260:13" data-name="Header / Left">
          <div className="ga5" data-node-id="260:14" data-name="Header / Logo">
            <div className="ga6" data-node-id="260:15" data-name="Brand / Official Gameram Logo">
              <img alt="" className="ga7" src={imgBrandOfficialGameramLogo} />
            </div>
          </div>
          <div className="ga8" data-node-id="260:18" data-name="Header / Navigation">
            <div className="ga9" data-node-id="260:19" data-name="Header Nav / Поиск игроков">
              <p className="ga10" data-node-id="260:20">
                Поиск игроков
              </p>
            </div>
            <div className="ga11" data-node-id="260:22" data-name="Header Nav / Игры">
              <p className="ga12" data-node-id="260:23">
                Игры
              </p>
              <div className="ga13" data-node-id="260:21" data-name="Active Indicator" />
              <div className="ga14" data-node-id="273:231" data-name="Header / Active Line / Games" />
            </div>
            <div className="ga9" data-node-id="260:24" data-name="Header Nav / Сообщества">
              <p className="ga10" data-node-id="260:25">
                Сообщества
              </p>
            </div>
          </div>
          <div className="ga15" data-node-id="260:26" data-name="Header / Search">
            <div className="ga16" data-node-id="260:27" data-name="Icon / Search">
              <img alt="" className="ga7" src={imgIconSearch} />
            </div>
            <p className="ga17" data-node-id="260:30">
              Поиск игроков, игр или сообществ
            </p>
          </div>
        </div>
        <div className="ga18" data-node-id="260:31" data-name="Header / Actions">
          <div className="ga19" data-node-id="260:32" data-name="Header / Messages">
            <div className="ga16" data-node-id="260:33" data-name="Icon / Messages">
              <img alt="" className="ga7" src={imgIconMessages} />
            </div>
          </div>
          <div className="ga19" data-node-id="260:36" data-name="Header / Notifications">
            <div className="ga16" data-node-id="260:37" data-name="Icon / Notifications">
              <img alt="" className="ga7" src={imgIconNotifications} />
            </div>
          </div>
          <div className="ga19" data-node-id="260:40" data-name="Header / Theme Toggle">
            <div className="ga16" data-node-id="260:41" data-name="Icon / Theme Toggle">
              <img alt="" className="ga7" src={imgIconThemeToggle} />
            </div>
          </div>
          <div className="ga20" data-node-id="260:43" data-name="Header / Profile">
            <p className="ga21" data-node-id="260:44">
              KiraByte
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Games1920Light() {
  return (
    <div className="ga22" data-node-id="204:274" data-name="Games — 1920 — Light">
      <div className="ga23" data-node-id="260:10" data-name="Background / Stage">
        <div className="ga24" data-node-id="283:231" data-name="Sidebar / Edge Dissolve System">
          <div className="ga25" data-node-id="265:231" style={{ containerType: "size" }} data-name="Background / Edge Dissolve">
            <div className="ga25" data-node-id="265:232" style={{ containerType: "size" }} data-name="Group">
              <div className="ga26" data-node-id="265:233" style={{ containerType: "size" }}>
                <div className="ga27">
                  <div className="ga22" data-name="Group">
                    <img alt="" className="ga7" src={imgGroup} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ga28" data-node-id="285:474" style={{ containerType: "size" }} data-name="Background / Edge Dissolve">
          <div className="ga28" data-node-id="285:475" style={{ containerType: "size" }} data-name="Group">
            <div className="ga29" data-node-id="285:476" style={{ containerType: "size" }}>
              <div className="ga27">
                <div className="ga22" data-name="Group">
                  <img alt="" className="ga7" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ga30" data-node-id="285:536" style={{ containerType: "size" }} data-name="Background / Edge Dissolve / Continuation">
          <div className="ga30" data-node-id="285:537" style={{ containerType: "size" }} data-name="Group">
            <div className="ga31" data-node-id="285:538" style={{ containerType: "size" }}>
              <div className="ga27">
                <div className="ga22" data-name="Group">
                  <img alt="" className="ga7" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ga32" data-node-id="285:598" style={{ containerType: "size" }} data-name="Background / Edge Dissolve / Continuation">
          <div className="ga32" data-node-id="285:599" style={{ containerType: "size" }} data-name="Group">
            <div className="ga33" data-node-id="285:600" style={{ containerType: "size" }}>
              <div className="ga27">
                <div className="ga22" data-name="Group">
                  <img alt="" className="ga7" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header className="ga34" />
      <div className="ga35" data-node-id="260:45" data-name="Sidebar">
        <div className="ga36" data-node-id="260:46" data-name="Sidebar / Top">
          <p className="ga37" data-node-id="260:47">
            МЕНЮ
          </p>
          <div className="ga38" data-node-id="260:48" data-name="Sidebar / Navigation">
            <div className="ga39" data-node-id="260:49" data-name="Sidebar Item / Профиль">
              <div className="ga16" data-node-id="260:50" data-name="Icon / Profile">
                <img alt="" className="ga7" src={imgIconProfile} />
              </div>
              <p className="ga40" data-node-id="260:53">
                Профиль
              </p>
            </div>
            <div className="ga41" data-node-id="260:54" data-name="Sidebar Item / Лента">
              <div className="ga42" data-node-id="260:55" data-name="Active Indicator" />
              <div className="ga16" data-node-id="260:56" data-name="Icon / Feed">
                <img alt="" className="ga7" src={imgIconFeed} />
              </div>
              <p className="ga43" data-node-id="260:58">
                Лента
              </p>
            </div>
            <div className="ga39" data-node-id="260:59" data-name="Sidebar Item / Мои игры">
              <div className="ga16" data-node-id="260:60" data-name="Icon / My Games">
                <img alt="" className="ga7" src={imgIconMyGames} />
              </div>
              <p className="ga40" data-node-id="260:63">
                Мои игры
              </p>
            </div>
            <div className="ga39" data-node-id="260:64" data-name="Sidebar Item / Друзья">
              <div className="ga16" data-node-id="260:65" data-name="Icon / Friends">
                <img alt="" className="ga7" src={imgIconFriends} />
              </div>
              <p className="ga40" data-node-id="260:69">
                Друзья
              </p>
            </div>
            <div className="ga39" data-node-id="260:70" data-name="Sidebar Item / Сообщения">
              <div className="ga16" data-node-id="260:71" data-name="Icon / Messages">
                <img alt="" className="ga7" src={imgIconMessages1} />
              </div>
              <p className="ga40" data-node-id="260:74">
                Сообщения
              </p>
            </div>
            <div className="ga39" data-node-id="260:75" data-name="Sidebar Item / Достижения">
              <div className="ga16" data-node-id="260:76" data-name="Icon / Achievements">
                <img alt="" className="ga7" src={imgIconAchievements} />
              </div>
              <p className="ga40" data-node-id="260:79">
                Достижения
              </p>
            </div>
            <div className="ga39" data-node-id="260:80" data-name="Sidebar Item / Настройки">
              <div className="ga16" data-node-id="260:81" data-name="Icon / Settings">
                <img alt="" className="ga7" src={imgIconSettings} />
              </div>
              <p className="ga40" data-node-id="260:84">
                Настройки
              </p>
            </div>
          </div>
        </div>
        <div className="ga44" data-node-id="260:85" data-name="Sidebar / Utility">
          <p className="ga45" data-node-id="260:86">
            Помощь
          </p>
          <p className="ga45" data-node-id="260:87">
            Правила сообщества
          </p>
          <p className="ga45" data-node-id="260:88">
            Конфиденциальность
          </p>
          <p className="ga46" data-node-id="260:89">
            © 2026 Gameram
          </p>
        </div>
      </div>
      <div className="ga47" data-node-id="260:90" data-name="Games / Main">
        <div className="ga48" data-node-id="260:91" data-name="Section / Games Hero">
          <div className="ga49" data-node-id="274:231" data-name="Background / Gradient" />
          <div className="ga50" data-node-id="260:92" data-name="Games Hero / Copy">
            <p className="ga51" data-node-id="260:93">
              ИГРЫ GAMERAM
            </p>
            <p className="ga52" data-node-id="260:94" style={{ fontVariationSettings: '"ELGR" 1, "ELSH" 2' }}>
              ВЫБЕРИ ИГРУ — НАЙДИ СВОИХ
            </p>
            <p className="ga53" data-node-id="260:95">
              Открывай игровые сообщества, находи тиммейтов и смотри, кто готов присоединиться прямо сейчас.
            </p>
            <div className="ga54" data-node-id="260:96" data-name="Search / Найти игру">
              <p className="ga55" data-node-id="260:97">
                Найти игру
              </p>
            </div>
            <div className="ga56" data-node-id="260:98" data-name="Games / Categories">
              <div className="ga57" data-node-id="260:99" data-name="Chip / Все">
                <p className="ga58" data-node-id="260:100">
                  Все
                </p>
              </div>
              <div className="ga59" data-node-id="260:101" data-name="Chip / Соревновательные">
                <p className="ga58" data-node-id="260:102">
                  Соревновательные
                </p>
              </div>
              <div className="ga60" data-node-id="260:103" data-name="Chip / Кооперативные">
                <p className="ga58" data-node-id="260:104">
                  Кооперативные
                </p>
              </div>
              <div className="ga61" data-node-id="260:105" data-name="Chip / Песочницы">
                <p className="ga58" data-node-id="260:106">
                  Песочницы
                </p>
              </div>
            </div>
            <div className="ga62" data-node-id="260:107" data-name="Games / Categories 2">
              <div className="ga63" data-node-id="260:108" data-name="Chip / Мобильные">
                <p className="ga58" data-node-id="260:109">
                  Мобильные
                </p>
              </div>
              <div className="ga64" data-node-id="260:110" data-name="Chip / Популярные сейчас">
                <p className="ga58" data-node-id="260:111">
                  Популярные сейчас
                </p>
              </div>
            </div>
          </div>
          <div className="ga65" data-node-id="260:112" data-name="Featured / Valorant">
            <div className="ga66" data-node-id="260:113" data-name="Placeholder / ВСТАВИТЬ ОБЛОЖКУ VALORANT · 4:5">
              <div aria-hidden className="ga67">
                <div className="ga68" />
                <div className="ga69">
                  <img alt="" className="ga70" src={imgPlaceholderValorant45} />
                </div>
              </div>
            </div>
            <div className="ga71" data-node-id="260:115" data-name="Featured / Copy">
              <div className="ga72" data-node-id="260:116" data-name="Chip / Игра недели">
                <p className="ga58" data-node-id="260:117">
                  Игра недели
                </p>
              </div>
              <p className="ga73" data-node-id="260:118">
                Valorant
              </p>
              <p className="ga74" data-node-id="260:119">
                326 игроков онлайн
              </p>
              <p className="ga74" data-node-id="260:120">
                42 команды собираются
              </p>
              <p className="ga74" data-node-id="260:121">
                128 публикаций сегодня
              </p>
              <div className="ga75" data-node-id="260:122" data-name="Button / Найти игроков">
                <p className="ga76" data-node-id="260:123">
                  Найти игроков
                </p>
              </div>
              <div className="ga77" data-node-id="260:124" data-name="Button / Открыть игру">
                <p className="ga76" data-node-id="260:125">
                  Открыть игру
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ga78" data-node-id="260:198" data-name="Section / По настроению">
          <p className="ga79" data-node-id="279:231" style={{ fontVariationSettings: '"ELGR" 1, "ELSH" 2' }}>
            НАЙДИ ИГРУ ПО НАСТРОЕНИЮ
          </p>
          <div className="ga80" data-node-id="298:279" data-name="Mood / Grid">
            <div className="ga81" data-node-id="298:280" data-name="Mood / Row 1">
              <MoodPillGamesPage className="ga82" />
              <MoodPillGamesPage className="ga82" label="ХОЧУ СПОКОЙНО ПОИГРАТЬ" />
              <MoodPillGamesPage className="ga82" label="ХОЧУ СТРОИТЬ" />
            </div>
            <div className="ga81" data-node-id="298:281" data-name="Mood / Row 2">
              <MoodPillGamesPage className="ga82" label="ХОЧУ ПРОЙТИ СЮЖЕТ" />
              <MoodPillGamesPage className="ga83" label="ХОЧУ ПОЗНАКОМИТЬСЯ" state="Selected" />
              <MoodPillGamesPage className="ga82" label="ИЩУ ИГРУ НА ВЕЧЕР" />
            </div>
          </div>
        </div>
        <div className="ga84" data-node-id="260:126" data-name="Section / Игры для вас">
          <p className="ga85" data-node-id="275:231" style={{ fontVariationSettings: '"ELGR" 1, "ELSH" 2' }}>
            ИГРЫ ДЛЯ ВАС
          </p>
          <div className="ga86" data-node-id="295:231" data-name="Games For You / Grid">
            <div className="ga87" data-node-id="295:232" data-name="Games For You / Row 1">
              <div className="ga88" data-node-id="295:234" data-name="Game Card / Valorant">
                <div className="ga89" data-node-id="I295:234;294:232" data-name="Cover">
                  <div aria-hidden className="ga90">
                    <div className="ga91" />
                    <img alt="" className="ga92" src={imgCover} />
                  </div>
                </div>
                <div className="ga93" data-node-id="I295:234;294:234" data-name="Content">
                  <div className="ga94" data-node-id="I295:234;294:235" data-name="Copy">
                    <p className="ga95" data-node-id="I295:234;294:236">
                      Valorant
                    </p>
                    <p className="ga96" data-node-id="I295:234;294:237">
                      326 игроков онлайн
                    </p>
                    <p className="ga97" data-node-id="I295:234;294:238">
                      42 команды собираются · Рейтинг · Командная игра
                    </p>
                  </div>
                  <p className="ga98" data-node-id="I295:234;294:239">
                    Открыть →
                  </p>
                </div>
              </div>
              <div className="ga88" data-node-id="295:243" data-name="Game Card / Roblox">
                <div className="ga89" data-node-id="I295:243;294:232" data-name="Cover">
                  <div aria-hidden className="ga90">
                    <div className="ga91" />
                    <div className="ga99">
                      <img alt="" className="ga100" src={imgCover1} />
                    </div>
                  </div>
                </div>
                <div className="ga93" data-node-id="I295:243;294:234" data-name="Content">
                  <div className="ga94" data-node-id="I295:243;294:235" data-name="Copy">
                    <p className="ga95" data-node-id="I295:243;294:236">
                      Roblox
                    </p>
                    <p className="ga96" data-node-id="I295:243;294:237">
                      241 игрок онлайн
                    </p>
                    <p className="ga97" data-node-id="I295:243;294:238">
                      28 групп собираются · Тысячи режимов
                    </p>
                  </div>
                  <p className="ga98" data-node-id="I295:243;294:239">
                    Открыть →
                  </p>
                </div>
              </div>
              <div className="ga88" data-node-id="295:252" data-name="Game Card / Brawl Stars">
                <div className="ga89" data-node-id="I295:252;294:232" data-name="Cover">
                  <div aria-hidden className="ga90">
                    <div className="ga91" />
                    <img alt="" className="ga92" src={imgCover2} />
                  </div>
                </div>
                <div className="ga93" data-node-id="I295:252;294:234" data-name="Content">
                  <div className="ga94" data-node-id="I295:252;294:235" data-name="Copy">
                    <p className="ga95" data-node-id="I295:252;294:236">
                      Brawl Stars
                    </p>
                    <p className="ga96" data-node-id="I295:252;294:237">
                      198 игроков онлайн
                    </p>
                    <p className="ga97" data-node-id="I295:252;294:238">
                      24 команды собираются · Мобильная · Ранговая
                    </p>
                  </div>
                  <p className="ga98" data-node-id="I295:252;294:239">
                    Открыть →
                  </p>
                </div>
              </div>
            </div>
            <div className="ga87" data-node-id="295:233" data-name="Games For You / Row 2">
              <div className="ga88" data-node-id="295:261" data-name="Game Card / Minecraft">
                <div className="ga89" data-node-id="I295:261;294:232" data-name="Cover">
                  <div aria-hidden className="ga90">
                    <div className="ga91" />
                    <div className="ga99">
                      <img alt="" className="ga101" src={imgCover3} />
                    </div>
                  </div>
                </div>
                <div className="ga93" data-node-id="I295:261;294:234" data-name="Content">
                  <div className="ga94" data-node-id="I295:261;294:235" data-name="Copy">
                    <p className="ga95" data-node-id="I295:261;294:236">
                      Minecraft
                    </p>
                    <p className="ga96" data-node-id="I295:261;294:237">
                      284 игрока онлайн
                    </p>
                    <p className="ga97" data-node-id="I295:261;294:238">
                      31 команда собирается · Выживание · Строительство
                    </p>
                  </div>
                  <p className="ga98" data-node-id="I295:261;294:239">
                    Открыть →
                  </p>
                </div>
              </div>
              <div className="ga88" data-node-id="295:270" data-name="Game Card / Standoff 2">
                <div className="ga89" data-node-id="I295:270;294:232" data-name="Cover">
                  <div aria-hidden className="ga90">
                    <div className="ga91" />
                    <div className="ga99">
                      <img alt="" className="ga102" src={imgCover4} />
                    </div>
                  </div>
                </div>
                <div className="ga93" data-node-id="I295:270;294:234" data-name="Content">
                  <div className="ga94" data-node-id="I295:270;294:235" data-name="Copy">
                    <p className="ga95" data-node-id="I295:270;294:236">
                      Standoff 2
                    </p>
                    <p className="ga96" data-node-id="I295:270;294:237">
                      146 игроков онлайн
                    </p>
                    <p className="ga97" data-node-id="I295:270;294:238">
                      19 команд собираются · Соревновательная
                    </p>
                  </div>
                  <p className="ga98" data-node-id="I295:270;294:239">
                    Открыть →
                  </p>
                </div>
              </div>
              <div className="ga88" data-node-id="295:279" data-name="Game Card / Genshin Impact">
                <div className="ga89" data-node-id="I295:279;294:232" data-name="Cover">
                  <div aria-hidden className="ga90">
                    <div className="ga91" />
                    <img alt="" className="ga92" src={imgCover5} />
                  </div>
                </div>
                <div className="ga93" data-node-id="I295:279;294:234" data-name="Content">
                  <div className="ga94" data-node-id="I295:279;294:235" data-name="Copy">
                    <p className="ga95" data-node-id="I295:279;294:236">
                      Genshin Impact
                    </p>
                    <p className="ga96" data-node-id="I295:279;294:237">
                      132 игрока онлайн
                    </p>
                    <p className="ga97" data-node-id="I295:279;294:238">
                      15 групп собираются · Исследование · Кооператив
                    </p>
                  </div>
                  <p className="ga98" data-node-id="I295:279;294:239">
                    Открыть →
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ga103" data-node-id="295:288" data-name="Button / Показать больше">
            <p className="ga104" data-node-id="295:289">
              Показать больше
            </p>
          </div>
        </div>
        <div className="ga105" data-node-id="260:173" data-name="Section / Играют прямо сейчас">
          <div className="ga106" data-node-id="278:231" data-name="Background / Gradient" />
          <p className="ga107" data-node-id="278:232" style={{ fontVariationSettings: '"ELGR" 1, "ELSH" 2' }}>
            ИГРАЮТ ПРЯМО СЕЙЧАС
          </p>
          <p className="ga108" data-node-id="278:233">
            Выбери открытую группу и присоединяйся без долгого поиска.
          </p>
          <div className="ga109" data-node-id="278:234" data-name="Live Groups">
            <div className="ga110" data-node-id="278:235" data-name="Live Offset / Valorant">
              <div className="ga111" data-node-id="278:236" data-name="Open Group / Valorant">
                <div className="ga112" data-node-id="278:237" data-name="Badge / Подходит вам">
                  <p className="ga113" data-node-id="278:238">
                    Подходит вам
                  </p>
                </div>
                <p className="ga114" data-node-id="278:239">
                  Valorant
                </p>
                <p className="ga115" data-node-id="278:240">
                  Рейтинг · Серебро / Золото
                </p>
                <p className="ga116" data-node-id="278:241">
                  3/5 игроков
                </p>
                <p className="ga117" data-node-id="278:242">
                  Нужны: контроллер и инициатор
                </p>
                <div className="ga118" data-node-id="278:243" data-name="Button / Присоединиться">
                  <p className="ga119" data-node-id="278:244">
                    Присоединиться
                  </p>
                </div>
              </div>
            </div>
            <div className="ga120" data-node-id="278:245" data-name="Live Offset / Minecraft">
              <div className="ga121" data-node-id="278:246" data-name="Open Group / Minecraft">
                <p className="ga114" data-node-id="278:247">
                  Minecraft
                </p>
                <p className="ga122" data-node-id="278:248">
                  BedWars · Hypixel
                </p>
                <p className="ga123" data-node-id="278:249">
                  3/4 игроков
                </p>
                <p className="ga124" data-node-id="278:250">
                  Нужен ещё один игрок
                </p>
                <div className="ga125" data-node-id="278:251" data-name="Button / Присоединиться">
                  <p className="ga119" data-node-id="278:252">
                    Присоединиться
                  </p>
                </div>
              </div>
            </div>
            <div className="ga120" data-node-id="278:253" data-name="Live Offset / Brawl Stars">
              <div className="ga121" data-node-id="278:254" data-name="Open Group / Brawl Stars">
                <p className="ga114" data-node-id="278:255">
                  Brawl Stars
                </p>
                <p className="ga122" data-node-id="278:256">
                  Ранговый бой
                </p>
                <p className="ga116" data-node-id="278:257">
                  2/3 игроков
                </p>
                <p className="ga124" data-node-id="278:258">
                  Мифик II
                </p>
                <div className="ga125" data-node-id="278:259" data-name="Button / Присоединиться">
                  <p className="ga119" data-node-id="278:260">
                    Присоединиться
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ga78" data-node-id="260:214" data-name="Section / Твои игры">
          <div className="ga126" data-node-id="280:231" data-name="Your Games / Heading">
            <div className="ga127" data-node-id="280:232" data-name="Heading">
              <p className="ga128" data-node-id="280:233" style={{ fontVariationSettings: '"ELGR" 1, "ELSH" 2' }}>
                ТВОИ ИГРЫ
              </p>
              <p className="ga129" data-node-id="280:234">
                Игры из профиля KiraByte
              </p>
            </div>
            <div className="ga130" data-node-id="280:235" data-name="Spacer" />
            <div className="ga131" data-node-id="280:236" data-name="Button / Настроить список игр">
              <p className="ga76" data-node-id="280:237">
                Настроить список игр
              </p>
            </div>
          </div>
          <div className="ga132" data-node-id="280:238" data-name="Your Games / Shelf">
            <div className="ga133" data-node-id="280:239" data-name="Shelf Item / Valorant">
              <div className="ga134" data-node-id="280:240" data-name="Placeholder / ОБЛОЖКА">
                <div aria-hidden className="ga135">
                  <div className="ga136" />
                  <img alt="" className="ga137" src={imgCover} />
                </div>
              </div>
              <div className="ga138" data-node-id="280:242" data-name="Shelf Copy">
                <div className="ga139" data-node-id="280:243" data-name="Name Row">
                  <p className="ga140" data-node-id="280:244">
                    Valorant
                  </p>
                  <div className="ga141" data-node-id="280:245" data-name="Online Dot">
                    <img alt="" className="ga7" src={imgOnlineDot} />
                  </div>
                </div>
                <p className="ga142" data-node-id="280:246">
                  Играет сейчас
                </p>
              </div>
            </div>
            <div className="ga143" data-node-id="280:247" data-name="Shelf Item / Minecraft">
              <div className="ga134" data-node-id="280:248" data-name="Placeholder / ОБЛОЖКА">
                <div aria-hidden className="ga135">
                  <div className="ga136" />
                  <div className="ga144">
                    <img alt="" className="ga101" src={imgCover3} />
                  </div>
                </div>
              </div>
              <div className="ga138" data-node-id="280:250" data-name="Shelf Copy">
                <div className="ga145" data-node-id="280:251" data-name="Name Row">
                  <p className="ga146" data-node-id="280:252">
                    Minecraft
                  </p>
                </div>
                <p className="ga147" data-node-id="280:253">
                  84 ч.
                </p>
              </div>
            </div>
            <div className="ga143" data-node-id="280:254" data-name="Shelf Item / Overwatch 2">
              <div className="ga134" data-node-id="280:255" data-name="Placeholder / ОБЛОЖКА">
                <div aria-hidden className="ga135">
                  <div className="ga136" />
                  <img alt="" className="ga137" src={imgPlaceholder} />
                </div>
              </div>
              <div className="ga138" data-node-id="280:257" data-name="Shelf Copy">
                <div className="ga145" data-node-id="280:258" data-name="Name Row">
                  <p className="ga146" data-node-id="280:259">
                    Overwatch 2
                  </p>
                </div>
                <p className="ga147" data-node-id="280:260">
                  Ищет команду
                </p>
              </div>
            </div>
            <div className="ga143" data-node-id="280:261" data-name="Shelf Item / Stardew Valley">
              <div className="ga134" data-node-id="280:262" data-name="Placeholder / ОБЛОЖКА">
                <div aria-hidden className="ga135">
                  <div className="ga136" />
                  <img alt="" className="ga137" src={imgPlaceholder1} />
                </div>
              </div>
              <div className="ga138" data-node-id="280:264" data-name="Shelf Copy">
                <div className="ga145" data-node-id="280:265" data-name="Name Row">
                  <p className="ga146" data-node-id="280:266">
                    Stardew Valley
                  </p>
                </div>
                <p className="ga147" data-node-id="280:267">
                  56 ч.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ga148" data-node-id="260:235" data-name="Section / Games CTA">
          <div className="ga149" data-node-id="281:231" data-name="Background / Gradient" />
          <div className="ga150" data-node-id="260:236" data-name="CTA Copy">
            <p className="ga151" data-node-id="260:237" style={{ fontVariationSettings: '"ELGR" 1, "ELSH" 2' }}>
              НЕ НАШЁЛ НУЖНУЮ ИГРУ?
            </p>
            <p className="ga152" data-node-id="260:238">
              Воспользуйся поиском или предложи добавить новую игру в Gameram.
            </p>
          </div>
          <div className="ga153" data-node-id="260:239" data-name="CTA Actions">
            <div className="ga154" data-node-id="260:240" data-name="Button / Найти игру">
              <p className="ga76" data-node-id="260:241">
                Найти игру
              </p>
            </div>
            <div className="ga155" data-node-id="260:242" data-name="Button / Предложить игру">
              <p className="ga76" data-node-id="260:243">
                Предложить игру
              </p>
            </div>
          </div>
        </div>
        <div className="ga156" data-node-id="260:244" data-name="Footer">
          <div className="ga157" data-node-id="281:232" data-name="Background / Gradient" />
          <div className="ga158" data-node-id="260:245" data-name="Footer / Brand">
            <p className="ga159" data-node-id="260:246" style={{ fontVariationSettings: '"ELGR" 1, "ELSH" 2' }}>
              Gameram
            </p>
            <p className="ga160" data-node-id="260:247">
              Играй больше. Знакомься с реальными людьми.
            </p>
            <p className="ga161" data-node-id="260:248">
              © 2026 Gameram
            </p>
          </div>
          <div className="ga162" data-node-id="260:249" data-name="Footer / Links">
            <p className="ga163" data-node-id="260:250">
              Игроки
            </p>
            <p className="ga164" data-node-id="260:251">
              Игры
            </p>
            <p className="ga165" data-node-id="260:252">
              Сообщества
            </p>
            <p className="ga166" data-node-id="260:253">
              Поддержка
            </p>
            <p className="ga167" data-node-id="260:254">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}