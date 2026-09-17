const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const KEY="juda_v6_state";
const foods=[
["Куриная грудка",165,31,3.6,0,150],["Рис отварной",130,2.7,.3,28,150],
["Овсянка",367,13,7,62,60],["Яйцо",157,13,11,1.1,100],
["Творог 5%",121,17,5,1.8,150],["Банан",89,1.1,.3,23,120],
["Лосось",208,20,13,0,150],["Авокадо",160,2,15,9,80]
];
const exercises=[["Жим штанги лёжа","Грудь","Базовое","Штанга","Основное упражнение для груди. Держи лопатки сведёнными, стопы устойчиво на полу и опускай штангу под контролем.",["Ляг на скамью и сведи лопатки.","Возьми штангу чуть шире плеч.","Опусти её к нижней части груди, сохраняя контроль.","Выжми вверх без резкого разгибания локтей."]],["Жим гантелей на наклонной скамье","Грудь","Базовое","Гантели","Акцент на верхнюю часть груди. Не своди гантели ударом и не прогибай поясницу чрезмерно.",["Установи наклон 20–35°.","Опусти гантели к верхней части груди.","Выжми их вверх по естественной дуге.","Сохрани плечи опущенными."]],["Разводка гантелей лёжа","Грудь","Изолирующее","Гантели","Изолирующее движение для груди с мягким сгибом локтей и контролируемой амплитудой.",["Ляг на скамью, гантели над грудью.","Слегка согни локти.","Разведи руки в стороны до комфортной амплитуды.","Сведи гантели обратно без удара."]],["Кроссовер на блоках","Грудь","Изолирующее","Блоки","Плавное сведение рук перед корпусом для постоянного напряжения грудных мышц.",["Встань между блоками и сделай небольшой шаг вперёд.","Возьми рукояти и слегка согни локти.","Сведи руки перед корпусом.","Медленно вернись в исходное положение."]],["Отжимания от пола","Грудь","Базовое","Собственный вес","Универсальное упражнение для груди и трицепса. Корпус держи одной линией.",["Поставь ладони чуть шире плеч.","Напряги пресс и ягодицы.","Опусти грудь к полу.","Оттолкнись и вернись вверх."]],["Жим в тренажёре","Грудь","Базовое","Тренажёр","Стабильный вариант жима с заданной траекторией. Не позволяй плечам уходить вперёд.",["Настрой сиденье под уровень середины груди.","Сведи лопатки и возьми рукояти.","Выжми рукояти вперёд.","Плавно верни их назад."]],["Пуловер с гантелью","Грудь","Изолирующее","Гантель","Движение с акцентом на грудь и переднюю зубчатую мышцу. Используй умеренный вес.",["Ляг поперёк скамьи или вдоль неё.","Держи одну гантель над грудью.","Уведи её за голову с мягким сгибом локтей.","Верни гантель над грудь."]],["Жим гантелей лёжа","Грудь","Базовое","Гантели","Более свободный вариант жима, позволяющий подобрать естественную траекторию рук.",["Ляг на скамью и подними гантели.","Опусти их к бокам груди.","Выжми вверх, сохраняя контроль.","Не сталкивай гантели в верхней точке."]],["Тяга верхнего блока","Спина","Базовое","Блок","Базовая вертикальная тяга для широчайших. Не раскачивай корпус.",["Сядь и зафиксируй бёдра.","Потяни рукоять к верхней части груди.","Веди локти вниз и назад.","Плавно выпрями руки."]],["Подтягивания","Спина","Базовое","Собственный вес","Вертикальная тяга с собственным весом. Начинай движение спиной, а не рывком.",["Возьмись за перекладину.","Опусти плечи и напряги корпус.","Подтяни грудь к перекладине.","Контролируемо опустись."]],["Тяга штанги в наклоне","Спина","Базовое","Штанга","Мощное упражнение для всей спины. Сохраняй нейтральную поясницу.",["Наклони корпус с прямой спиной.","Потяни штангу к нижним рёбрам.","Сведи лопатки.","Опусти штангу под контролем."]],["Тяга гантели одной рукой","Спина","Базовое","Гантель","Односторонняя тяга для широчайших и средней части спины.",["Упрись одной рукой в скамью.","Потяни гантель к тазу.","Не разворачивай корпус.","Опусти руку полностью под контролем."]],["Горизонтальная тяга блока","Спина","Базовое","Блок","Позволяет точно контролировать лопатки и среднюю часть спины.",["Сядь устойчиво и выпрями спину.","Потяни рукоять к животу.","Сведи лопатки.","Верни рукоять вперёд без округления спины."]],["Тяга Т-грифа","Спина","Базовое","Т-гриф","Плотная тяга с хорошей нагрузкой на толщину спины.",["Займи устойчивую стойку.","Наклонись с нейтральной спиной.","Потяни рукоять к корпусу.","Медленно опусти."]],["Пулдаун прямыми руками","Спина","Изолирующее","Блок","Изолирующее движение для широчайших без активного сгибания локтей.",["Встань перед верхним блоком.","Возьми прямую рукоять.","Веди её вниз к бёдрам.","Вернись вверх, сохраняя натяжение."]],["Обратные подтягивания","Спина","Базовое","Собственный вес","Подтягивания обратным хватом с большим участием бицепса и широчайших.",["Возьмись обратным хватом.","Напряги корпус.","Подтяни подбородок к перекладине.","Плавно опустись."]],["Приседания со штангой","Ноги","Базовое","Штанга","Базовое упражнение для квадрицепсов и ягодиц. Колени движутся в направлении носков.",["Поставь стопы примерно на ширине плеч.","Сделай вдох и начни присед.","Опустись до комфортной глубины.","Встань, толкая пол стопами."]],["Румынская тяга","Ноги","Базовое","Штанга","Упражнение на заднюю поверхность бедра и ягодицы через движение в тазобедренном суставе.",["Стой ровно со штангой.","Отведи таз назад.","Опускай штангу вдоль ног.","Разогни таз и вернись вверх."]],["Выпады с гантелями","Ноги","Базовое","Гантели","Односторонняя работа на ноги и ягодицы. Шаг должен быть устойчивым.",["Сделай шаг вперёд.","Опусти заднее колено вниз.","Переднее колено держи по линии стопы.","Вернись в исходное положение."]],["Жим ногами","Ноги","Базовое","Тренажёр","Позволяет загрузить ноги при стабильной спине. Не отрывай таз от спинки.",["Поставь стопы на платформу.","Освободи упоры.","Согни ноги под контролем.","Вытолкни платформу без блокировки коленей."]],["Разгибание ног","Ноги","Изолирующее","Тренажёр","Изолирующая работа квадрицепса. Используй плавный темп.",["Настрой валик над голенями.","Прижми спину к спинке.","Разогни ноги.","Медленно опусти валик."]],["Сгибание ног лёжа","Ноги","Изолирующее","Тренажёр","Изолирует заднюю поверхность бедра.",["Ляг на тренажёр животом вниз.","Зафиксируй таз.","Согни ноги к ягодицам.","Плавно опусти валик."]],["Болгарские сплит-приседы","Ноги","Базовое","Гантели","Одностороннее упражнение на квадрицепс и ягодицы с большой амплитудой.",["Поставь заднюю стопу на опору.","Опусти таз вниз.","Держи переднюю стопу устойчиво.","Поднимись через переднюю ногу."]],["Гоблет-присед","Ноги","Базовое","Гантель","Удобный вариант приседа с гантелью перед грудью.",["Держи гантель у груди.","Сядь тазом вниз и назад.","Сохраняй грудь раскрытой.","Встань через стопы."]],["Жим гантелей сидя","Плечи","Базовое","Гантели","Базовый жим над головой для дельтовидных мышц.",["Сядь и зафиксируй спину.","Держи гантели на уровне плеч.","Выжми вверх.","Опусти под контролем."]],["Жим штанги стоя","Плечи","Базовое","Штанга","Вертикальный жим с участием всего корпуса при строгой технике.",["Стой ровно, штанга на уровне ключиц.","Напряги пресс и ягодицы.","Выжми штангу вверх.","Опусти к ключицам."]],["Разведения гантелей в стороны","Плечи","Изолирующее","Гантели","Изолирует среднюю дельту. Не поднимай плечи к ушам.",["Возьми лёгкие гантели.","Слегка согни локти.","Подними руки до уровня плеч.","Медленно опусти."]],["Разведения в наклоне","Плечи","Изолирующее","Гантели","Акцент на заднюю дельту и верх спины.",["Наклони корпус с ровной спиной.","Опусти руки под грудью.","Разведи гантели в стороны.","Вернись вниз."]],["Тяга каната к лицу","Плечи","Изолирующее","Блок","Укрепляет заднюю дельту и мышцы верхней части спины.",["Установи канат на уровне лица.","Потяни его к лицу.","Разведи кисти в стороны.","Плавно отпусти."]],["Подъём гантелей перед собой","Плечи","Изолирующее","Гантели","Передняя дельта работает при подъёме рук перед корпусом.",["Держи гантели перед бёдрами.","Подними одну или обе руки до уровня плеч.","Не раскачивайся.","Опусти под контролем."]],["Жим Арнольда","Плечи","Базовое","Гантели","Жим с поворотом кистей, который сочетает подъём и вращение плеча.",["Начни с гантелей перед лицом.","Разверни ладони наружу.","Выжми вверх.","Вернись по обратной траектории."]],["Тяга гантелей к подбородку","Плечи","Базовое","Гантели","Тяговое движение для дельтовидных. Используй умеренную амплитуду.",["Держи гантели перед бёдрами.","Подними локти вверх и в стороны.","Не тяни плечи к ушам.","Опусти гантели."]],["Сгибание рук с гантелями","Руки","Изолирующее","Гантели","Классическое упражнение на бицепс без раскачки корпуса.",["Прижми локти к корпусу.","Согни руки вверх.","Сократи бицепс вверху.","Медленно опусти."]],["Молотковые сгибания","Руки","Изолирующее","Гантели","Нейтральный хват нагружает бицепс и плечелучевую мышцу.",["Держи ладони друг к другу.","Согни руки без движения плечами.","Подними гантели.","Опусти под контролем."]],["Сгибание рук со штангой","Руки","Базовое","Штанга","Традиционное упражнение на бицепс. Корпус остаётся стабильным.",["Возьми штангу удобным хватом.","Согни локти.","Подними штангу к груди.","Плавно опусти."]],["Разгибание рук на блоке","Руки","Изолирующее","Блок","Изолирует трицепс при разгибании локтя вниз.",["Встань перед верхним блоком.","Прижми локти к корпусу.","Разогни руки вниз.","Верни рукоять вверх под контролем."]],["Французский жим лёжа","Руки","Изолирующее","Штанга","Упражнение на трицепс с контролируемым сгибанием локтей.",["Ляг на скамью.","Держи штангу над грудью.","Согни локти, опуская штангу ко лбу/за голову.","Разогни руки."]],["Разгибание руки с гантелью из-за головы","Руки","Изолирующее","Гантель","Акцент на длинную головку трицепса.",["Подними гантель над головой.","Согни локоть, опуская вес за голову.","Разогни руку вверх.","Не разводи локоть в сторону."]],["Сгибание рук на скамье Скотта","Руки","Изолирующее","Штанга","Скамья фиксирует плечо и снижает читинг.",["Прижми плечи к подушке.","Согни руки вверх.","Не отрывай локти.","Медленно опусти штангу."]],["Отжимания на брусьях","Руки","Базовое","Собственный вес","Сложное упражнение на трицепс и грудь. Для акцента на трицепс корпус держи более вертикально.",["Займи упор на брусьях.","Согни локти и опустись.","Не проваливай плечи.","Вытолкни корпус вверх."]],["Скручивания","Пресс","Изолирующее","Собственный вес","Контролируемое сгибание корпуса с акцентом на прямую мышцу живота.",["Ляг на спину и согни колени.","Подтяни рёбра к тазу.","Не тяни голову руками.","Медленно опустись."]],["Подъёмы ног лёжа","Пресс","Изолирующее","Собственный вес","Упражнение на мышцы живота с контролем таза.",["Ляг на спину.","Прижми поясницу к полу.","Подними прямые ноги.","Медленно опусти их."]],["Подъёмы коленей в упоре","Пресс","Изолирующее","Турник","Работа на пресс через подъём таза и коленей.",["Зафиксируйся в упоре.","Подтяни колени к груди.","Слегка подкрути таз.","Опусти ноги без раскачки."]],["Планка","Пресс","Изолирующее","Собственный вес","Статическое упражнение для всего корпуса.",["Опирайся на предплечья.","Вытяни тело в одну линию.","Напряги пресс и ягодицы.","Дыши спокойно и удерживай позицию."]],["Боковая планка","Пресс","Изолирующее","Собственный вес","Статическая работа косых мышц и стабилизаторов.",["Встань на боковое предплечье.","Подними таз.","Сохраняй прямую линию тела.","Не задерживай дыхание."]],["Скручивания на блоке","Пресс","Изолирующее","Блок","Позволяет дозировать сопротивление для мышц пресса.",["Встань на колени перед блоком.","Возьми канат у головы.","Скрути корпус вниз.","Вернись без рывка."]],["Велосипед","Пресс","Изолирующее","Собственный вес","Динамическая работа прямой и косых мышц живота.",["Ляг на спину и подними ноги.","Подведи локоть к противоположному колену.","Чередуй стороны.","Двигайся плавно, без рывков."]],["Dead bug","Пресс","Изолирующее","Собственный вес","Упражнение на контроль корпуса и положение поясницы.",["Ляг на спину, руки вверх.","Подними ноги под 90°.","Одновременно вытяни противоположные руку и ногу.","Вернись и смени сторону."]],["Ягодичный мост","Ягодицы","Базовое","Собственный вес","Базовое движение для ягодиц с акцентом на разгибание таза.",["Ляг на спину, стопы под коленями.","Подкрути таз и напряги пресс.","Подними таз вверх.","Сожми ягодицы и опусти."]],["Ягодичный мост со штангой","Ягодицы","Базовое","Штанга","Утяжелённый вариант моста для прогрессии ягодиц.",["Положи штангу на таз через мягкую накладку.","Упрись стопами в пол.","Подними таз вверх.","Опусти под контролем."]],["Махи ногой назад в кроссовере","Ягодицы","Изолирующее","Блок","Изолирующее упражнение на ягодицы с контролируемым отведением ноги.",["Закрепи манжету на голени.","Отведи ногу назад.","Не прогибай поясницу.","Верни ногу вперёд."]],["Отведение ноги в тренажёре","Ягодицы","Изолирующее","Тренажёр","Работа на среднюю ягодичную и отводящие мышцы.",["Сядь и прижми спину.","Разведи колени в стороны.","Задержись на секунду.","Вернись медленно."]],["Зашагивания на платформу","Ягодицы","Базовое","Гантели","Одностороннее упражнение на ягодицы и ноги.",["Поставь одну стопу на платформу.","Поднимись через рабочую ногу.","Не отталкивайся сильно задней ногой.","Плавно опустись."]],["Сумо-присед","Ягодицы","Базовое","Гантель","Широкая стойка увеличивает участие ягодиц и приводящих мышц.",["Поставь ноги шире плеч.","Разверни носки наружу.","Опустись вниз с прямой спиной.","Встань, толкая пол стопами."]],["Болгарский сплит-присед с акцентом на ягодицы","Ягодицы","Базовое","Гантели","Вариант сплит-приседа с чуть большим наклоном корпуса.",["Поставь заднюю ногу на опору.","Сделай небольшой наклон корпуса.","Опусти таз вниз.","Поднимись через пятку передней ноги."]],["Гиперэкстензия на ягодицы","Ягодицы","Базовое","Собственный вес","Вариант гиперэкстензии с акцентом на разгибание таза.",["Зафиксируй ноги в тренажёре.","Округлять поясницу не нужно.","Опусти корпус через таз.","Подними корпус за счёт ягодиц."]],["Подъём на носки стоя","Икры","Изолирующее","Тренажёр","Основное упражнение на икроножные мышцы в положении стоя.",["Поставь носки на платформу.","Опусти пятки вниз.","Поднимись на носки как можно выше.","Плавно опусти пятки."]],["Подъём на носки сидя","Икры","Изолирующее","Тренажёр","Сидячий вариант с акцентом на камбаловидную мышцу.",["Сядь и размести валик на бёдрах.","Опусти пятки.","Подними их вверх.","Вернись в нижнюю точку."]],["Подъём на носки в жиме ногами","Икры","Изолирующее","Тренажёр","Позволяет тренировать икры с нагрузкой тренажёра для ног.",["Поставь носки на край платформы.","Слегка согни колени.","Подними пятки.","Опусти их глубоко и контролируемо."]],["Подъём на одной ноге","Икры","Изолирующее","Собственный вес","Односторонняя работа для икроножных с контролем баланса.",["Встань на носок одной ноги.","Опусти пятку.","Поднимись максимально высоко.","Повтори и смени ногу."]],["Подъём на носки в Смите","Икры","Изолирующее","Смит","Устойчивый вариант подъёма на носки со свободной настройкой веса.",["Размести штангу на плечах.","Носки на платформе.","Поднимись на носки.","Плавно опусти пятки."]],["Подъём на носки с гантелями","Икры","Изолирующее","Гантели","Простой вариант для зала и дома.",["Возьми гантели по бокам.","Поставь носки на небольшую опору.","Поднимись на носки.","Опусти пятки под контролем."]],["Пружинящие подъёмы на носки","Икры","Изолирующее","Собственный вес","Высокоповторный вариант для икроножных.",["Встань устойчиво.","Поднимайся на носки короткими контролируемыми движениями.","Не заваливайся наружу.","Сохраняй ритм."]],["Подъём на носки в тренажёре стоя","Икры","Изолирующее","Тренажёр","Стабильный вариант для прогрессивной нагрузки на икры.",["Настрой плечевые упоры.","Поставь носки на платформу.","Подними пятки вверх.","Медленно вернись вниз."]]];

const muscleOrder=["Грудь","Спина","Ноги","Плечи","Руки","Пресс","Ягодицы","Икры"];
const muscleIcons={"Грудь":"◉","Спина":"◈","Ноги":"⌁","Плечи":"◇","Руки":"◌","Пресс":"▦","Ягодицы":"◆","Икры":"◍"};
function exerciseMeta(name){return exercises.find(x=>x[0]===name)||null}
const exerciseAssets=Object.fromEntries(exercises.map((x,i)=>[x[0],`assets/exercises/e${String(i+1).padStart(2,"0")}.svg`]));
function exerciseImg(name){return exerciseAssets[name]||"assets/exercises/default.svg"}
function exerciseImgTag(name,alt="",cls=""){return `<img class="${cls}" src="${exerciseImg(name)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src=\'assets/exercises/default.svg\'">`}
function exerciseCardHtml(x){return `<button class="exercise-card" data-ex="${esc(x[0])}">
  <div class="exercise-thumb">${exerciseImgTag(x[0],`${x[0]} — техника выполнения`)}</div>
  <div class="exercise-card-body">
    <div class="exercise-card-title"><b>${esc(x[0])}</b><span class="exercise-arrow">›</span></div>
    <div class="exercise-card-tags"><span class="exercise-tag muscle">${esc(x[1])}</span><span class="exercise-tag">${esc(x[2])}</span></div>
    <div class="exercise-card-bottom"><span>${esc(x[3])}</span><span>Техника →</span></div>
  </div>
</button>`}
function exerciseDetail(name){
  const x=exerciseMeta(name);if(!x)return;
  const all=JSON.parse(localStorage.getItem("juda_favorites")||"[]");
  const fav=all.includes(name);
  const muscleCount=exercises.filter(e=>e[1]===x[1]).length;
  openModal(`<div class="exercise-detail v14-detail">
    <div class="detail-topline"><span class="detail-back">Упражнение</span><button class="detail-fav ${fav?"active":""}" id="detailFav" aria-label="Избранное">${fav?"★":"☆"}</button></div>
    <div class="exercise-detail-image detail-hero-image">${exerciseImgTag(name,`${name} — техника выполнения`)}</div>
    <div class="detail-badges"><span class="detail-tag">${esc(x[1])}</span><span class="detail-tag muted-tag">${esc(x[2])}</span><span class="detail-tag muted-tag">${esc(x[3])}</span></div>
    <h2>${esc(x[0])}</h2><p class="detail-desc">${esc(x[4])}</p>
    <div class="detail-facts"><div><b>${muscleCount}</b><span>упражнений на группу</span></div><div><b>${x[2]==="Базовое"?"База":"Изоляция"}</b><span>тип нагрузки</span></div><div><b>3×8–12</b><span>стартовый диапазон</span></div></div>
    <div class="detail-section-title"><h3>Техника выполнения</h3><span>${x[5].length} шага</span></div>
    <ol class="technique-list">${x[5].map((step,i)=>`<li><span>${i+1}</span><div>${esc(step)}</div></li>`).join("")}</ol>
    <div class="detail-note warning"><b>Безопасность</b><span>Начни с комфортного веса. Если техника нарушается или появляется острая боль — остановись и снизь нагрузку.</span></div><div class="detail-section-title related-title"><h3>Похожие упражнения</h3><span>на ту же группу</span></div><div class="related-exercises">${exercises.filter(e=>e[1]===x[1]&&e[0]!==x[0]).slice(0,3).map(e=>`<button class="related-card" data-related="${esc(e[0])}"><div>${exerciseImgTag(e[0],e[0],"related-thumb")}</div><span>${esc(e[0])}</span><b>›</b></button>`).join("")}</div>
    <div class="detail-actions"><button class="ghost-btn" id="detailFav2">${fav?"★ В избранном":"☆ В избранное"}</button><button class="primary-btn" id="detailAdd">Добавить в тренировку</button></div>
  </div>`);
  const toggleFav=()=>{let list=JSON.parse(localStorage.getItem("juda_favorites")||"[]");if(list.includes(name))list=list.filter(v=>v!==name);else list.push(name);localStorage.setItem("juda_favorites",JSON.stringify(list));exerciseDetail(name)};
  $("#detailFav").onclick=toggleFav;$("#detailFav2").onclick=toggleFav;
  $("#detailAdd").onclick=()=>{closeModal();chooseProgramForExercise(name)};
  $$(".related-card").forEach(b=>b.onclick=()=>exerciseDetail(b.dataset.related));
}
function getFavorites(){try{return JSON.parse(localStorage.getItem("juda_favorites")||"[]")}catch(e){return[]}}
function isFavorite(name){return getFavorites().includes(name)}
function toggleFavorite(name){let list=getFavorites();list=list.includes(name)?list.filter(v=>v!==name):[...list,name];localStorage.setItem("juda_favorites",JSON.stringify(list));return list.includes(name)}
function exerciseLibrary(){
  const query=(window.libraryQuery||"").trim().toLowerCase();
  const muscle=window.libraryMuscle||"Все";
  const type=window.libraryType||"Все";
  const equip=window.libraryEquip||"Все";
  const onlyFav=!!window.libraryFav;
  const allEquip=[...new Set(exercises.map(x=>x[3]))].sort((a,b)=>a.localeCompare(b,"ru"));
  const favs=new Set(getFavorites());
  const list=exercises.filter(x=>{
    const hay=x.join(" ").toLowerCase();
    return (!query||hay.includes(query)) && (muscle==="Все"||x[1]===muscle) && (type==="Все"||x[2]===type) && (equip==="Все"||x[3]===equip) && (!onlyFav||favs.has(x[0]));
  });
  const groups=muscleOrder.map(m=>[m,list.filter(x=>x[1]===m)]).filter(g=>g[1].length);
  const setFilter=(key,val)=>{window[key]=val;exerciseLibrary()};
  const chips=muscleOrder.map(m=>`<button class="filter-chip ${muscle===m?"active":""}" data-muscle="${esc(m)}">${esc(m)} <span>${exercises.filter(x=>x[1]===m).length}</span></button>`).join("");
  const favLabel=onlyFav?`★ Избранное (${favs.size})`:`☆ Избранное`;
  const resultText=list.length===exercises.length?`${exercises.length} упражнений`:`Найдено ${list.length}`;
  const cards=groups.map(([m,items])=>`<section class="section library-group"><div class="section-head"><h2>${muscleIcons[m]||"•"} ${m}</h2><span>${items.length}</span></div><div class="exercise-grid">${items.map(exerciseCardHtml).join("")}</div></section>`).join("");
  const activeCount=[muscle!=="Все",type!=="Все",equip!=="Все",onlyFav,!!query].filter(Boolean).length;
  const clear=activeCount?`<button class="filter-clear" id="clearFilters">Сбросить ${activeCount} фильтр${activeCount===1?"":"а"}</button>`:"";
  const muscleAll=`<button class="filter-chip ${muscle==="Все"?"active":""}" data-muscle="Все">Все <span>${exercises.length}</span></button>`;
  const typeChips=["Все","Базовое","Изолирующее"].map(v=>`<button class="mini-filter ${type===v?"active":""}" data-type="${esc(v)}">${v}</button>`).join("");
  const equipOptions=["Все",...allEquip].map(v=>`<option value="${esc(v)}" ${equip===v?"selected":""}>${esc(v)}</option>`).join("");
  const favButton=`<button class="favorite-filter ${onlyFav?"active":""}" id="favoriteFilter">${favLabel}</button>`;
  const filteredSummary=onlyFav && !favs.size?`<div class="card empty">Добавь упражнения в избранное — они появятся здесь.</div>`:(list.length?cards:`<div class="card empty">Ничего не найдено. Попробуй изменить фильтры или поиск.</div>`);
  $("#pageTitle").textContent="Библиотека";
  $$(".nav-item").forEach(x=>x.classList.remove("active"));
  $("#app").innerHTML=`
    <section class="library-head">
      <div class="library-head-row"><div><span class="tag">БИБЛИОТЕКА</span><h2>${resultText}</h2><p>Выбирай упражнение, открывай технику или добавляй его в программу.</p></div>${favButton}</div>
      <div class="library-search-wrap"><span>⌕</span><input id="librarySearch" class="search" placeholder="Поиск упражнения, мышцы или оборудования" value="${esc(window.libraryQuery||"")}"></div>
      <div class="filter-label"><span>Мышечная группа</span>${clear}</div>
      <div class="filter-scroll">${muscleAll}${chips}</div>
      <div class="library-filter-row"><div><small>Тип</small><div class="mini-filters">${typeChips}</div></div><label class="select-filter"><small>Оборудование</small><select id="equipFilter">${equipOptions}</select></label></div>
    </section>
    <section class="library-summary"><div><b>${list.length}</b><span>показано</span></div><div><b>${favs.size}</b><span>в избранном</span></div><div><b>${muscleOrder.length}</b><span>групп мышц</span></div></section>
    <div class="library-groups">${filteredSummary}</div>`;
  $("#librarySearch").oninput=e=>{window.libraryQuery=e.target.value;exerciseLibrary()};
  $("#equipFilter").onchange=e=>setFilter("libraryEquip",e.target.value);
  $("#favoriteFilter").onclick=()=>{window.libraryFav=!window.libraryFav;exerciseLibrary()};
  $("#clearFilters")?.addEventListener("click",()=>{window.libraryQuery="";window.libraryMuscle="Все";window.libraryType="Все";window.libraryEquip="Все";window.libraryFav=false;exerciseLibrary()});
  $$("[data-muscle]").forEach(b=>b.onclick=()=>setFilter("libraryMuscle",b.dataset.muscle));
  $$("[data-type]").forEach(b=>b.onclick=()=>setFilter("libraryType",b.dataset.type));
  $$(".exercise-card").forEach(b=>b.onclick=()=>exerciseDetail(b.dataset.ex));
}
function chooseProgramForExercise(name){
  const q=p();
  openModal(`<h2>Добавить в тренировку</h2><div class="muted" style="margin:5px 0 14px">${esc(name)}</div><div class="stack">${q.days.map((d,i)=>`<button class="card choose-day" data-i="${i}" style="text-align:left"><b>День ${i+1} · ${esc(d.name)}</b><div class="muted">${d.exercises.length} упражнений</div></button>`).join("")}</div>`);
  $$(".choose-day").forEach(b=>b.onclick=()=>{q.days[+b.dataset.i].exercises.push({name,sets:3,reps:10,weight:0,rest:90});save();closeModal();tab="workouts";render();toast("Упражнение добавлено");});
}


const starter={id:"p1",name:"Силовая база",daysPerWeek:4,weeks:8,active:true,days:[
{name:"Верх тела",exercises:[{name:"Жим штанги лёжа",sets:3,reps:8,weight:60,rest:90},{name:"Тяга верхнего блока",sets:3,reps:10,weight:45,rest:90}]},
{name:"Низ тела",exercises:[{name:"Приседания со штангой",sets:3,reps:8,weight:70,rest:120}]},
{name:"Спина + плечи",exercises:[{name:"Подтягивания",sets:3,reps:8,weight:0,rest:90}]},
{name:"Лёгкая тренировка",exercises:[]}]};

let state=load(),tab="home",activeWorkout=null,restTimer=null,restRemaining=0;

function load(){
  try{
    const x=JSON.parse(localStorage.getItem(KEY));
    if(x){
      if(!x.food)x.food={goal:2200,p:150,f:70,c:230,entries:[]};
      if(!x.programs?.length)x.programs=[starter];
      x.programs.forEach(pr=>(pr.days||[]).forEach(d=>(d.exercises||[]).forEach(e=>{
        e.sets=+e.sets||3;e.reps=+e.reps||10;e.weight=+e.weight||0;e.rest=+e.rest||90;
      })));
      if(!x.history)x.history=[];
      if(!x.body)x.body={height:null,targetWeight:null,goalType:"Поддержание",weights:[],measurements:[]};
      if(!Array.isArray(x.body.weights))x.body.weights=[];
      if(!Array.isArray(x.body.measurements))x.body.measurements=[];
      return x;
    }
  }catch(e){}
  return{programs:[starter],history:[],food:{goal:2200,p:150,f:70,c:230,entries:[]},
    body:{height:null,targetWeight:null,goalType:"Поддержание",weights:[],measurements:[]}};
}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function p(){return state.programs.find(x=>x.active)||state.programs[0]}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function fmt(n){return new Intl.NumberFormat("ru-RU",{maximumFractionDigits:1}).format(Math.round((n||0)*10)/10)}
function today(){return new Date().toISOString().slice(0,10)}
function dateRu(d){if(!d)return"—";const a=d.split("-");return a.length===3?`${a[2]}.${a[1]}.${a[0]}`:d}
function toast(t){const e=$("#toast");e.textContent=t;e.classList.remove("hidden");clearTimeout(window.tt);window.tt=setTimeout(()=>e.classList.add("hidden"),2200)}
function render(){
  const titles={home:"Главная",workouts:"Тренировки",food:"Питание",progress:"Прогресс"};
  $("#pageTitle").textContent=titles[tab]||"Тренировка";
  $$(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
  ({home,workouts,food,progress}[tab])();
}
function ft(){
  return state.food.entries.filter(x=>x.date===today()).reduce((a,x)=>({
    kcal:a.kcal+x.kcal,p:a.p+x.p,f:a.f+x.f,c:a.c+x.c
  }),{kcal:0,p:0,f:0,c:0});
}
function currentWeight(){
  const a=[...state.body.weights].sort((x,y)=>x.date.localeCompare(y.date));
  return a.length?a[a.length-1]:null;
}
function previousWeight(){
  const a=[...state.body.weights].sort((x,y)=>x.date.localeCompare(y.date));
  return a.length>1?a[a.length-2]:null;
}
function home(){
  const q=p(),d=q.days.find(x=>x.exercises.length),t=ft(),cw=currentWeight(),b=state.body;
  const delta=cw&&b.targetWeight?cw.weight-b.targetWeight:null;
  $("#app").innerHTML=`
    <section class="hero">
      <span class="tag">СЕГОДНЯ</span>
      <h2>${esc(q.name)}</h2>
      <p>${q.daysPerWeek} тренировки в неделю · ${q.weeks} недель</p>
      <button class="primary-btn" id="start">${d?"Начать тренировку":"Настроить программу"}</button>
    </section>

    <section class="section">
      <div class="section-head"><h2>Питание</h2><span>${fmt(t.kcal)} / ${fmt(state.food.goal)} ккал</span></div>
      <div class="card">
        <div class="progress"><i style="width:${Math.min(100,t.kcal/state.food.goal*100)}%"></i></div>
        <div class="macro-row" style="margin-top:12px">
          <div class="macro-box"><span class="muted">Белки</span><b>${fmt(t.p)} г</b></div>
          <div class="macro-box"><span class="muted">Жиры</span><b>${fmt(t.f)} г</b></div>
          <div class="macro-box"><span class="muted">Углеводы</span><b>${fmt(t.c)} г</b></div>
        </div>
        <button class="ghost-btn" id="openFood" style="width:100%;margin-top:12px">Открыть дневник</button>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Моё тело</h2><button class="small-btn" id="addWeightHome">+ Вес</button></div>
      <div class="body-main">
        <div class="card weight-card">
          <span class="muted">Текущий вес</span>
          <div class="weight-number">${cw?fmt(cw.weight):"—"} <small>${cw?"кг":"кг"}</small></div>
          ${b.targetWeight?`<div class="goal-pill">Цель ${fmt(b.targetWeight)} кг</div>`:`<div class="goal-pill">Цель пока не задана</div>`}
        </div>
        <div class="card">
          <span class="muted">Рост</span>
          <div class="weight-number">${b.height?fmt(b.height):"—"} <small>см</small></div>
          <div class="goal-pill">${esc(b.goalType||"Поддержание")}</div>
        </div>
      </div>
      ${delta!==null?`<div class="card" style="margin-top:10px"><div class="row"><span class="muted">До цели</span><b class="${delta>0?"delta-up":"delta-down"}">${delta===0?"Цель достигнута":`${fmt(Math.abs(delta))} кг ${delta>0?"до цели":"ниже цели"}`}</b></div></div>`:""}
    </section>

    <section class="section">
      <div class="section-head"><h2>Тренировка</h2><span>${d?esc(d.name):"Нет"}</span></div>
      <div class="card">${d?d.exercises.slice(0,3).map(e=>`
        <button class="workout-exercise-card" data-ex="${esc(e.name)}">
          <div class="workout-ex-thumb">${exerciseImgTag(e.name,e.name)}</div>
          <div class="workout-ex-content"><div class="workout-ex-title"><b>${esc(e.name)}</b><span>›</span></div><div class="workout-ex-meta"><span>${e.sets} подхода</span><i>•</i><span>${e.reps} повт.</span>${e.weight?`<i>•</i><span>${e.weight} кг</span>`:""}</div></div>
        </button>`).join(""):`<div class="empty">Добавь упражнения в программе.</div>`}</div>
    </section>`;

  $("#start").onclick=()=>d?startWorkout(q.days.indexOf(d)):editProgram();
  $("#openFood").onclick=()=>{tab="food";render()};
  $("#addWeightHome").onclick=addWeight;
}
function workouts(){
  const q=p();
  $("#app").innerHTML=`
    <section class="section" style="margin-top:18px">
      <div class="row">
        <div><h2>${esc(q.name)}</h2><div class="muted" style="margin-top:5px">${q.daysPerWeek} тренировок / неделю</div></div>
        <div class="row-actions"><button class="ghost-btn" id="libraryBtn">Библиотека</button><button class="ghost-btn" id="editP">Настройки</button></div>
      </div>
    </section>
    <section class="section">
      <div class="stack">${q.days.map((d,i)=>`
        <div class="card">
          <div class="row">
            <div><b>День ${i+1} · ${esc(d.name)}</b><div class="muted">${d.exercises.length} упражнений</div></div>
            <button class="primary-btn startDay" data-i="${i}" style="width:auto;margin:0;padding:9px 12px">Старт</button>
          </div>
          ${d.exercises.map((e,idx)=>`
            <button class="exercise-list-card" data-ex="${esc(e.name)}">
              <div class="exercise-list-number">${idx+1}</div>
              <div class="exercise-list-thumb">${exerciseImgTag(e.name,e.name)}</div>
              <div class="exercise-list-content"><div class="exercise-list-title"><b>${esc(e.name)}</b><span>›</span></div><div class="exercise-list-meta"><span>${e.sets} подхода</span><i>•</i><span>${e.reps} повт.</span>${e.weight?`<i>•</i><span>${e.weight} кг</span>`:""}</div></div>
            </button>`).join("")||`<div class="empty">День пустой</div>`}
        </div>`).join("")}</div>
    </section>`;
  $("#editP").onclick=editProgram;$("#libraryBtn").onclick=()=>exerciseLibrary();
  $$(".exercise-list-item").forEach(b=>b.onclick=()=>exerciseDetail(b.dataset.ex));
  $$(".startDay").forEach(b=>b.onclick=()=>startWorkout(+b.dataset.i));
}
function food(){
  const t=ft(),g=state.food,entries=state.food.entries.filter(x=>x.date===today());
  $("#app").innerHTML=`
    <section class="hero compact">
      <span class="tag">ДНЕВНИК ПИТАНИЯ</span>
      <h2>${fmt(t.kcal)} ккал</h2>
      <p>Цель ${fmt(g.goal)} ккал · осталось ${fmt(Math.max(0,g.goal-t.kcal))} ккал</p>
      <div class="progress" style="margin-top:14px"><i style="width:${Math.min(100,t.kcal/g.goal*100)}%"></i></div>
    </section>
    <section class="section">
      <div class="section-head"><h2>БЖУ</h2><button class="small-btn" id="goal">Настроить</button></div>
      <div class="card"><div class="macro-row">
        <div class="macro-box"><span class="muted">Белки</span><b>${fmt(t.p)} / ${fmt(g.p)} г</b></div>
        <div class="macro-box"><span class="muted">Жиры</span><b>${fmt(t.f)} / ${fmt(g.f)} г</b></div>
        <div class="macro-box"><span class="muted">Углеводы</span><b>${fmt(t.c)} / ${fmt(g.c)} г</b></div>
      </div></div>
    </section>
    <section class="section">
      <div class="section-head"><h2>Сегодня</h2><button class="primary-btn" id="addFood" style="width:auto;margin:0;padding:10px 13px">+ Еда</button></div>
      <div class="card">${entries.length?entries.map(x=>`
        <div class="food-item">
          <div class="food-icon">●</div>
          <div class="grow"><b>${esc(x.name)}</b><div class="muted">${x.grams} г · Б ${fmt(x.p)} · Ж ${fmt(x.f)} · У ${fmt(x.c)}</div></div>
          <b>${fmt(x.kcal)}</b><button class="small-btn del" data-id="${x.id}">×</button>
        </div>`).join(""):`<div class="empty">Добавь первый продукт.</div>`}</div>
    </section>`;
  $("#addFood").onclick=addFood;$("#goal").onclick=foodGoal;
  $$(".del").forEach(b=>b.onclick=()=>{state.food.entries=state.food.entries.filter(x=>x.id!=b.dataset.id);save();food()});
}
function historyDateKey(s){
  if(!s)return"";
  const m=String(s).match(/(\d{2})\.(\d{2})\.(\d{4})/);
  return m?`${m[3]}-${m[2]}-${m[1]}`:"";
}
function muscleForExercise(name){
  const x=exercises.find(e=>e[0]===name);
  return x?x[1]:"Другое";
}
function muscleStats(){
  const m={};
  (state.history||[]).forEach(w=>(w.records||[]).forEach(r=>{
    const k=muscleForExercise(r.exercise),v=(+r.weight||0)*(+r.reps||0);
    m[k]=(m[k]||0)+v;
  }));
  return Object.entries(m).sort((a,b)=>b[1]-a[1]);
}
function workoutDays(){
  return new Set((state.history||[]).map(w=>historyDateKey(w.date)).filter(Boolean));
}
function monthCalendar(){
  const now=new Date(),y=now.getFullYear(),mo=now.getMonth(),first=new Date(y,mo,1),days=new Date(y,mo+1,0).getDate();
  let start=(first.getDay()+6)%7,html="";
  for(let i=0;i<start;i++)html+=`<span class="cal-empty"></span>`;
  const done=workoutDays(),todayKey=today();
  for(let d=1;d<=days;d++){
    const key=`${y}-${String(mo+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    html+=`<span class="cal-day ${done.has(key)?"worked":""} ${key===todayKey?"today":""}">${d}</span>`;
  }
  return html;
}
function exerciseStats(name){
  const rows=[];
  (state.history||[]).forEach(w=>(w.records||[]).filter(r=>r.exercise===name).forEach(r=>rows.push({
    date:historyDateKey(w.date)||w.date,weight:+r.weight||0,reps:+r.reps||0,volume:(+r.weight||0)*(+r.reps||0)
  })));
  rows.sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  const byDate={};
  rows.forEach(r=>{byDate[r.date]=Math.max(byDate[r.date]||0,r.weight)});
  const pts=Object.entries(byDate).slice(-10).map(([date,weight])=>({date,weight}));
  return {rows,pts,maxWeight:rows.length?Math.max(...rows.map(x=>x.weight)):0};
}
function strengthChart(pts){
  if(!pts.length)return`<div class="empty">Пока нет данных.</div>`;
  const W=700,H=230,p=34,vals=pts.map(x=>x.weight),min=Math.min(...vals),max=Math.max(...vals),range=Math.max(1,max-min);
  const xy=pts.map((x,i)=>[p+(pts.length===1?0:i*(W-p*2)/(pts.length-1)),H-p-((x.weight-min)/range)*(H-p*2)]);
  const line=xy.map(x=>x.join(",")).join(" ");
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" class="strength-chart">
    <line x1="${p}" y1="${H-p}" x2="${W-p}" y2="${H-p}" stroke="#22334a"/>
    <polyline points="${line}" fill="none" stroke="#60a5fa" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    ${xy.map((x,i)=>`<circle cx="${x[0]}" cy="${x[1]}" r="5" fill="#60a5fa"/><text x="${x[0]}" y="${x[1]-11}" text-anchor="middle" fill="#91a2b8" font-size="11">${fmt(pts[i].weight)}</text>`).join("")}
  </svg>`;
}
function showExerciseStats(name){
  const s=exerciseStats(name),last=s.rows.at(-1),first=s.rows[0];
  openModal(`<h2>${esc(name)}</h2>
    <div class="grid2" style="margin-top:14px">
      <div class="record-card"><span class="muted">Максимум</span><div class="record-value">${fmt(s.maxWeight)} кг</div></div>
      <div class="record-card"><span class="muted">Подходов</span><div class="record-value">${s.rows.length}</div></div>
    </div>
    <div class="card" style="margin-top:12px"><div class="muted" style="margin-bottom:7px">Динамика рабочего веса</div>${strengthChart(s.pts)}</div>
    <div class="stack" style="margin-top:12px">${s.rows.slice(-12).reverse().map(r=>`<div class="row mini-history"><span class="muted">${dateRu(r.date)}</span><b>${fmt(r.weight)} кг × ${r.reps}</b></div>`).join("")}</div>`);
}
function workoutResult(w){
  const records=w.records||[],totalSets=records.length,volume=w.volume||0;
  const best={};
  records.forEach(r=>{if(!best[r.exercise]||r.weight>best[r.exercise].weight)best[r.exercise]=r});
  const prs=Object.values(best).filter(r=>{
    const all=(state.history||[]).filter(h=>h.id!==w.id).flatMap(h=>(h.records||[]).filter(x=>x.exercise===r.exercise).map(x=>+x.weight||0));
    return !all.length||r.weight>Math.max(...all);
  });
  $("#pageTitle").textContent="Тренировка завершена";
  $("#app").innerHTML=`<section class="result-hero">
    <div class="result-mark">✓</div><span class="tag">ТРЕНИРОВКА СОХРАНЕНА</span>
    <h1>${esc(w.name)}</h1><p>${esc(w.date)}</p>
  </section>
  <section class="section">
    <div class="result-stats">
      <div class="card stat"><span class="muted">Подходов</span><strong>${totalSets}</strong></div>
      <div class="card stat"><span class="muted">Объём</span><strong>${fmt(volume)} кг</strong></div>
    </div>
  </section>
  ${prs.length?`<section class="section"><div class="section-head"><h2>Новые рекорды</h2><span>${prs.length}</span></div><div class="stack">${prs.map(r=>`<button class="record-card row result-pr" data-ex="${esc(r.exercise)}"><div class="grow"><b>${esc(r.exercise)}</b><div class="muted">${r.reps} повторений</div></div><b>${fmt(r.weight)} кг</b></button>`).join("")}</div></section>`:""}
  <section class="section"><div class="section-head"><h2>Упражнения</h2></div><div class="stack">${Object.values(best).map(r=>`<button class="card row result-ex" data-ex="${esc(r.exercise)}"><div class="grow"><b>${esc(r.exercise)}</b><div class="muted">${r.reps} повт. · лучший подход</div></div><b>${fmt(r.weight)} кг</b></button>`).join("")}</div></section>
  <div class="row" style="margin:24px 0 100px"><button class="ghost-btn" id="backProgress">Прогресс</button><button class="primary-btn" id="backHome" style="width:auto;margin:0;padding:12px 18px">На главную</button></div>`;
  $$(".result-ex,.result-pr").forEach(b=>b.onclick=()=>showExerciseStats(b.dataset.ex));
  $("#backProgress").onclick=()=>{tab="progress";render()};
  $("#backHome").onclick=()=>{tab="home";render()};
}
function progress(){
  const v=state.history.reduce((a,w)=>a+w.volume,0),t=ft(),b=state.body,cw=currentWeight(),pw=previousWeight(),days=workoutDays();
  const weights=[...b.weights].sort((a,z)=>a.date.localeCompare(z.date)),ms=muscleStats();
  const lastChange=cw&&pw?cw.weight-pw.weight:null;
  const prs=exerciseRecords();
  const monthCount=[...days].filter(x=>x.startsWith(today().slice(0,7))).length;
  $("#app").innerHTML=`
    <section class="section" style="margin-top:18px"><div class="section-head"><h2>Моё тело</h2><button class="small-btn" id="profile">Настроить</button></div>
      <div class="body-main"><div class="card weight-card"><span class="muted">Текущий вес</span><div class="weight-number">${cw?fmt(cw.weight):"—"} <small>кг</small></div>${lastChange!==null?`<div class="goal-pill">${lastChange>0?"+":""}${fmt(lastChange)} кг с прошлого замера</div>`:`<div class="goal-pill">Добавь первое измерение</div>`}</div>
      <div class="card"><span class="muted">Цель</span><div class="weight-number">${b.targetWeight?fmt(b.targetWeight):"—"} <small>кг</small></div><div class="goal-pill">${esc(b.goalType||"Поддержание")}</div></div></div>
    </section>
    <section class="section"><div class="section-head"><h2>Динамика веса</h2><button class="primary-btn" id="addWeight" style="width:auto;margin:0;padding:10px 13px">+ Вес</button></div>
      <div class="card">${weights.length?weightChart(weights):`<div class="empty">Запиши вес хотя бы два раза — здесь появится график.</div>`}</div>
    </section>
    <section class="section"><div class="section-head"><h2>Тренировки</h2><span>${monthCount} в этом месяце</span></div>
      <div class="result-stats"><div class="card stat"><span class="muted">Всего</span><strong>${state.history.length}</strong></div><div class="card stat"><span class="muted">Объём</span><strong>${fmt(v)} кг</strong></div><div class="card stat"><span class="muted">Подходов</span><strong>${state.history.reduce((a,w)=>a+w.completedSets,0)}</strong></div></div>
      <div class="card calendar-card"><div class="calendar-week">${["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(x=>`<span>${x}</span>`).join("")}</div><div class="calendar-grid">${monthCalendar()}</div><div class="muted calendar-note"><i class="cal-dot"></i> тренировочный день</div></div>
    </section>
    ${ms.length?`<section class="section"><div class="section-head"><h2>Объём по мышцам</h2></div><div class="card muscle-list">${ms.slice(0,7).map((x,i)=>`<div class="muscle-row"><div class="row"><b>${esc(x[0])}</b><span>${fmt(x[1])} кг</span></div><div class="macro"><i style="width:${Math.min(100,x[1]/ms[0][1]*100)}%"></i></div></div>`).join("")}</div></section>`:""}
    <section class="section"><div class="section-head"><h2>Личные рекорды</h2><span>нажми для графика</span></div>
      <div class="stack">${prs.length?prs.slice(0,8).map(x=>`<button class="record-card row pr-row" data-ex="${esc(x.name)}"><div class="grow"><b>${esc(x.name)}</b><div class="muted">${x.reps} повторений · ${dateRu(x.date)}</div></div><div style="text-align:right"><div class="record-value">${fmt(x.weight)} кг</div><span class="pr-badge">PR</span></div></button>`).join(""):`<div class="card empty">Личные рекорды появятся после сохранённых подходов.</div>`}</div>
    </section>
    <section class="section"><div class="section-head"><h2>Замеры тела</h2><button class="primary-btn" id="addMeasure" style="width:auto;margin:0;padding:10px 13px">+ Замер</button></div><div class="card">${renderMeasurements()}</div></section>
    <section class="section"><div class="section-head"><h2>Питание сегодня</h2><span>${fmt(t.kcal)} ккал</span></div><div class="card">
      <div class="row"><span class="muted">Белки</span><b>${fmt(t.p)} г</b></div><div class="macro"><i style="width:${Math.min(100,t.p/state.food.p*100)}%"></i></div>
      <div class="row" style="margin-top:13px"><span class="muted">Жиры</span><b>${fmt(t.f)} г</b></div><div class="macro"><i style="width:${Math.min(100,t.f/state.food.f*100)}%"></i></div>
      <div class="row" style="margin-top:13px"><span class="muted">Углеводы</span><b>${fmt(t.c)} г</b></div><div class="macro"><i style="width:${Math.min(100,t.c/state.food.c*100)}%"></i></div>
    </div></section>
    <section class="section"><div class="section-head"><h2>История</h2></div><div class="stack">${state.history.length?state.history.slice(0,12).map(w=>`<button class="card history-item" data-hid="${w.id}"><div class="grow"><b>${esc(w.name)}</b><div class="muted">${esc(w.date)} · ${w.completedSets} подходов</div></div><b class="blue">${fmt(w.volume)} кг</b></button>`).join(""):`<div class="card empty">История появится после тренировки.</div>`}</div></section>`;
  $("#profile").onclick=bodySettings;$("#addWeight").onclick=addWeight;$("#addMeasure").onclick=addMeasurement;
  $$(".pr-row").forEach(b=>b.onclick=()=>showExerciseStats(b.dataset.ex));
  $$(".history-item").forEach(b=>b.onclick=()=>{const w=state.history.find(x=>String(x.id)===b.dataset.hid);if(w)workoutResult(w)});
  $("#historyMeasure")?.addEventListener("click",measurementHistory);
}
function weightChart(weights){
  const arr=weights.slice(-12),W=700,H=250,pad=34;
  const vals=arr.map(x=>+x.weight),min=Math.min(...vals),max=Math.max(...vals),range=Math.max(1,max-min);
  const pts=arr.map((x,i)=>{
    const px=pad+(arr.length===1?0:i*(W-pad*2)/(arr.length-1));
    const py=H-pad-((x.weight-min)/range)*(H-pad*2);
    return [px,py];
  });
  const line=pts.map(p=>p.join(",")).join(" ");
  const area=`${pad},${H-pad} ${line} ${pts.at(-1)[0]},${H-pad}`;
  const circles=pts.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#60a5fa"/><text x="${p[0]}" y="${p[1]-11}" text-anchor="middle" fill="#91a2b8" font-size="11">${esc(fmt(arr[i].weight))}</text>`).join("");
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="График веса">
    <defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6" stop-opacity=".30"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/></linearGradient></defs>
    <line x1="${pad}" y1="${H-pad}" x2="${W-pad}" y2="${H-pad}" stroke="#22334a"/>
    <polygon points="${area}" fill="url(#wg)"/>
    <polyline points="${line}" fill="none" stroke="#3b82f6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    ${circles}
  </svg>`;
}
function renderMeasurements(){
  const m=[...state.body.measurements].sort((a,b)=>b.date.localeCompare(a.date))[0];
  if(!m)return`<div class="empty">Пока нет замеров. Добавь первый — потом JuDa покажет изменения.</div>`;
  const items=[["Талия",m.waist],["Грудь",m.chest],["Бицепс",m.arm],["Бедро",m.thigh],["Ягодицы",m.hips]];
  return `<div class="measure-grid">${items.map(x=>`<div class="measure-card"><span class="muted">${x[0]}</span><b>${x[1]?fmt(x[1]):"—"} ${x[1]?"см":""}</b></div>`).join("")}</div>
  <div class="info-line" style="margin-top:10px"><span class="muted">Последний замер</span><b>${dateRu(m.date)}</b></div>
  <button class="ghost-btn" id="historyMeasure" style="width:100%;margin-top:10px">История замеров</button>`;
}
function addWeight(){
  const cw=currentWeight();
  openModal(`<h2>Записать вес</h2><div class="form">
    <label>Вес, кг<input id="ww" type="number" min="1" max="400" step=".1" value="${cw?cw.weight:""}" placeholder="Например, 82.5"></label>
    <label>Дата<input id="wd" type="date" value="${today()}"></label>
    <button class="primary-btn" id="saveW">Сохранить</button>
  </div>`);
  $("#saveW").onclick=()=>{
    const weight=+$("#ww").value,date=$("#wd").value;
    if(!weight||!date){toast("Заполни вес и дату");return}
    state.body.weights=state.body.weights.filter(x=>x.date!==date);
    state.body.weights.push({id:Date.now(),date,weight});
    state.body.weights.sort((a,b)=>a.date.localeCompare(b.date));save();closeModal();render();toast("Вес сохранён");
  };
}
function bodySettings(){
  const b=state.body;
  openModal(`<h2>Параметры тела</h2><div class="form">
    <label>Рост, см<input id="bh" type="number" min="100" max="250" step=".1" value="${b.height??""}" placeholder="Например, 180"></label>
    <label>Цель<input id="bg" type="number" min="1" max="400" step=".1" value="${b.targetWeight??""}" placeholder="Целевой вес"></label>
    <label>Цель по направлению<select id="bt">
      ${["Похудение","Набор массы","Поддержание"].map(x=>`<option ${b.goalType===x?"selected":""}>${x}</option>`).join("")}
    </select></label>
    <button class="primary-btn" id="saveBody">Сохранить</button>
  </div>`);
  $("#saveBody").onclick=()=>{
    b.height=+$("#bh").value||null;b.targetWeight=+$("#bg").value||null;b.goalType=$("#bt").value;
    save();closeModal();render();toast("Параметры сохранены");
  };
}
function addMeasurement(){
  const last=[...state.body.measurements].sort((a,b)=>b.date.localeCompare(a.date))[0]||{};
  openModal(`<h2>Новый замер</h2><div class="form">
    <label>Дата<input id="md" type="date" value="${today()}"></label>
    <label>Талия, см<input id="mw" type="number" min="1" max="250" step=".1" value="${last.waist??""}></label>
    <label>Грудь, см<input id="mc" type="number" min="1" max="250" step=".1" value="${last.chest??""}></label>
    <label>Бицепс, см<input id="ma" type="number" min="1" max="100" step=".1" value="${last.arm??""}></label>
    <label>Бедро, см<input id="mt" type="number" min="1" max="150" step=".1" value="${last.thigh??""}></label>
    <label>Ягодицы, см<input id="mh" type="number" min="1" max="250" step=".1" value="${last.hips??""}></label>
    <button class="primary-btn" id="saveM">Сохранить</button>
  </div>`);
  $("#saveM").onclick=()=>{
    const date=$("#md").value;
    if(!date){toast("Выбери дату");return}
    const item={id:Date.now(),date,waist:+$("#mw").value||null,chest:+$("#mc").value||null,arm:+$("#ma").value||null,thigh:+$("#mt").value||null,hips:+$("#mh").value||null};
    state.body.measurements=state.body.measurements.filter(x=>x.date!==date);state.body.measurements.push(item);
    save();closeModal();progress();toast("Замер сохранён");
  };
}
function measurementHistory(){
  const a=[...state.body.measurements].sort((x,y)=>y.date.localeCompare(x.date));
  openModal(`<h2>История замеров</h2><div class="stack" style="margin-top:14px">${a.length?a.map(m=>`
    <div class="card">
      <div class="row"><b>${dateRu(m.date)}</b><button class="small-btn mdDel" data-id="${m.id}">Удалить</button></div>
      <div class="grid3" style="margin-top:10px">
        <div><span class="muted">Талия</span><b>${m.waist?fmt(m.waist)+" см":"—"}</b></div>
        <div><span class="muted">Грудь</span><b>${m.chest?fmt(m.chest)+" см":"—"}</b></div>
        <div><span class="muted">Бицепс</span><b>${m.arm?fmt(m.arm)+" см":"—"}</b></div>
      </div>
    </div>`).join(""):`<div class="empty">Истории пока нет.</div>`}</div>`);
  $$(".mdDel").forEach(b=>b.onclick=()=>{state.body.measurements=state.body.measurements.filter(x=>x.id!=b.dataset.id);save();measurementHistory()});
}
function addFood(){
  openModal(`<h2>Добавить продукт</h2><input id="fs" class="search" placeholder="Поиск продукта"><div id="fp">${foods.map((x,i)=>`
    <div class="picker-item" data-n="${x[0].toLowerCase()}"><div><b>${esc(x[0])}</b><div class="muted">${x[1]} ккал / 100 г · Б ${x[2]} · Ж ${x[3]} · У ${x[4]}</div></div>
    <button class="small-btn pick" data-i="${i}">Добавить</button></div>`).join("")}</div>`);
  bindFood();$("#fs").oninput=bindFood;
}
function bindFood(){
  const q=($("#fs")?.value||"").toLowerCase();
  $$(".picker-item").forEach(x=>x.style.display=x.dataset.n.includes(q)?"flex":"none");
  $$(".pick").forEach(b=>b.onclick=()=>foodAmount(+b.dataset.i));
}
function foodAmount(i){
  const x=foods[i];
  openModal(`<h2>${esc(x[0])}</h2><div class="form"><label>Количество, грамм<input id="grams" type="number" min="1" value="${x[5]}"></label><button class="primary-btn" id="saveF">Добавить</button></div>`);
  $("#saveF").onclick=()=>{
    const g=Math.max(1,+$("#grams").value||100),m=g/100;
    state.food.entries.push({id:Date.now(),date:today(),name:x[0],grams:g,kcal:x[1]*m,p:x[2]*m,f:x[3]*m,c:x[4]*m});
    save();closeModal();food();toast("Продукт добавлен");
  };
}
function foodGoal(){
  const g=state.food;
  openModal(`<h2>Цели питания</h2><div class="form">
    <label>Калории<input id="gk" type="number" value="${g.goal}"></label>
    <label>Белки, г<input id="gp" type="number" value="${g.p}"></label>
    <label>Жиры, г<input id="gf" type="number" value="${g.f}"></label>
    <label>Углеводы, г<input id="gc" type="number" value="${g.c}"></label>
    <button class="primary-btn" id="sg">Сохранить</button>
  </div>`);
  $("#sg").onclick=()=>{
    g.goal=+$("#gk").value||2200;g.p=+$("#gp").value||150;g.f=+$("#gf").value||70;g.c=+$("#gc").value||230;
    save();closeModal();food();toast("Цели обновлены");
  };
}
function previousPerformance(name){
  const w=(state.history||[]).find(h=>(h.records||[]).some(r=>r.exercise===name));
  if(!w)return null;
  const rows=(w.records||[]).filter(r=>r.exercise===name);
  if(!rows.length)return null;
  const maxWeight=Math.max(...rows.map(r=>+r.weight||0));
  const maxReps=Math.max(...rows.map(r=>+r.reps||0));
  const allAtTarget=rows.length>=1&&rows.every(r=>(+r.reps||0)>=Math.max(1,+((p().days||[]).flatMap(d=>d.exercises||[]).find(e=>e.name===name)?.reps)||1));
  let suggestion=maxWeight;
  if(maxWeight>0&&allAtTarget)suggestion=+(maxWeight+2.5).toFixed(1);
  return {date:w.date,weight:maxWeight,reps:maxReps,suggestion};
}
function exerciseHistory(name){
  const rows=[];
  (state.history||[]).forEach(w=>(w.records||[]).filter(r=>r.exercise===name).forEach(r=>rows.push({...r,date:w.date,workout:w.name})));
  rows.sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  openModal(`<h2>${esc(name)}</h2>
    <div class="muted" style="margin:6px 0 14px">Последние подходы</div>
    <div class="stack">${rows.length?rows.slice(0,20).map(r=>`
      <div class="record-card row">
        <div class="grow"><b>${r.set}-й подход · ${esc(r.workout)}</b><div class="muted">${esc(r.date)}</div></div>
        <b>${fmt(r.weight)} кг × ${r.reps}</b>
      </div>`).join(""):`<div class="empty">Истории по этому упражнению пока нет.</div>`}</div>`);
}
function startWorkout(i=0){
  const q=p(),d=q.days[i]||q.days.find(x=>x.exercises.length);
  if(!d?.exercises.length){toast("В этом дне нет упражнений");return}
  activeWorkout={dayName:d.name,exercises:d.exercises.map(e=>{
    const prev=previousPerformance(e.name);
    const count=Math.max(1,+e.sets||1);
    const prevRows=(state.history||[]).flatMap(w=>(w.records||[]).filter(r=>r.exercise===e.name)).slice(-count);
    const base={...e,done:Array(count).fill(false),setsData:Array.from({length:count},(_,i)=>({
      weight:+(prevRows[i]?.weight ?? ((+e.weight||0)>0?e.weight:(prev?.suggestion||0)))||0,
      reps:+(prevRows[i]?.reps ?? e.reps)||1
    })),previous:prev};
    if((+e.weight||0)===0&&prev?.suggestion>0) base.weight=prev.suggestion;
    return base;
  }),current:0};
  showWorkout();
}
function showWorkout(){
  const e=activeWorkout?.exercises[activeWorkout.current];
  if(!e){finishWorkout();return}
  const done=e.done.filter(Boolean).length,total=activeWorkout.exercises.reduce((a,x)=>a+x.done.length,0),all=activeWorkout.exercises.reduce((a,x)=>a+x.done.filter(Boolean).length,0);
  $("#pageTitle").textContent="Активная тренировка";$$(".nav-item").forEach(x=>x.classList.remove("active"));
  $("#app").innerHTML=`
    <section class="hero">
      <div class="row"><span class="muted">${esc(activeWorkout.dayName)}</span><span class="blue">${activeWorkout.current+1}/${activeWorkout.exercises.length}</span></div>
      <div class="progress" style="margin-top:13px"><i style="width:${total?Math.round(all/total*100):0}%"></i></div>
      <div class="active-exercise-image">${exerciseImgTag(e.name,`${e.name} — техника выполнения`)}</div><h2 style="margin-top:15px">${esc(e.name)}</h2>
      <button class="tech-link" id="techOpen">Смотреть технику →</button><p style="margin-top:6px">Цель: ${e.reps} повторений · ${e.weight||0} кг</p>
      ${e.previous?`<div class="previous-box"><div><span class="muted">Прошлый раз</span><b>${fmt(e.previous.weight)} кг × ${e.previous.reps}</b></div><div><span class="muted">Предложение</span><b class="blue">${fmt(e.previous.suggestion)} кг</b></div></div>`:`<div class="previous-box"><div><span class="muted">Первый раз</span><b>Запиши результат</b></div><div><span class="muted">Цель</span><b>${e.reps} повторений</b></div></div>`}
    </section>
    <section class="section">
      <div class="section-head"><h2>Подходы</h2><span>${done}/${e.sets}</span></div>
      <div class="set-list">${e.done.map((d,i)=>{
        const s=e.setsData?.[i]||{weight:e.weight||0,reps:e.reps};
        return `<div class="live-set ${d?"done":""}">
          <button class="set-number" data-i="${i}">${d?"✓":i+1}</button>
          <label><span>Вес</span><input class="live-weight" data-i="${i}" type="number" min="0" step=".5" value="${s.weight}"></label>
          <label><span>Повт.</span><input class="live-reps" data-i="${i}" type="number" min="1" value="${s.reps}"></label>
          <button class="set-save" data-i="${i}">${d?"Готово":"✓"}</button>
        </div>`}).join("")}</div>
      <div class="row" style="margin-top:12px">
        <button class="ghost-btn" id="editC">Настройки</button>
        <button class="ghost-btn" id="histC">История</button>
        <button class="primary-btn" id="next" style="width:auto;margin:0;padding:11px 14px">${done===e.sets?"Следующее":"Пропустить"}</button>
      </div>
    </section>
    <section class="section"><div class="card"><div class="row"><div><b>Отдых</b><div class="muted">Таймер отдыха</div></div><b id="timer">${time(restRemaining)}</b></div>
      <div class="row" style="margin-top:12px"><button class="ghost-btn" id="tb">${restTimer?"Пауза":"Старт ${e.rest||90} сек"}</button><button class="ghost-btn" id="tr">Сброс</button></div>
    </div></section>
    <button class="danger-btn" id="finish" style="width:100%;margin-top:22px">Завершить тренировку</button>`;
  $$(".set-number").forEach(b=>b.onclick=()=>toggleSet(+b.dataset.i));
  $$(".set-save").forEach(b=>b.onclick=()=>toggleSet(+b.dataset.i));
  $$(".live-weight,.live-reps").forEach(inp=>inp.oninput=()=>{
    const i=+inp.dataset.i;
    e.setsData[i]={weight:+$(".live-weight[data-i='"+i+"']").value||0,reps:Math.max(1,+$(".live-reps[data-i='"+i+"']").value||1)};
  });
  $("#techOpen").onclick=()=>exerciseDetail(e.name);
  $("#next").onclick=()=>{activeWorkout.current++;stopTimer();restRemaining=0;showWorkout()};
  $("#editC").onclick=editCurrent;$("#histC").onclick=()=>exerciseHistory(e.name);
  $("#finish").onclick=finishWorkout;$("#tb").onclick=toggleTimer;$("#tr").onclick=()=>{stopTimer();restRemaining=0;showWorkout()};
}
function toggleSet(i){
  const e=activeWorkout.exercises[activeWorkout.current];
  const w=document.querySelector(`.live-weight[data-i="${i}"]`),r=document.querySelector(`.live-reps[data-i="${i}"]`);
  if(w&&r)e.setsData[i]={weight:+w.value||0,reps:Math.max(1,+r.value||1)};
  e.done[i]=!e.done[i];
  if(e.done[i]){restRemaining=+e.rest||90;startTimer();}
  showWorkout();
}
function toggleTimer(){if(restTimer){stopTimer();showWorkout()}else{if(!restRemaining)restRemaining=90;startTimer()}}
function finishWorkout(){
  if(!activeWorkout)return;
  stopTimer();
  const records=[];
  activeWorkout.exercises.forEach(e=>e.done.forEach((d,i)=>{
    if(d){
      const s=e.setsData?.[i]||{weight:+e.weight||0,reps:+e.reps||1};
      records.push({exercise:e.name,weight:+s.weight||0,reps:+s.reps||1,set:i+1});
    }
  }));
  const w={id:Date.now(),name:activeWorkout.dayName,date:new Date().toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),completedSets:records.length,volume:records.reduce((a,r)=>a+r.weight*r.reps,0),records};
  state.history.unshift(w);save();activeWorkout=null;restRemaining=0;workoutResult(w);
}
function editCurrent(){
  const e=activeWorkout.exercises[activeWorkout.current],prev=e.previous;
  const suggested=prev?.suggestion??e.weight??0;
  openModal(`<h2>${esc(e.name)}</h2><div class="form">
    ${prev?`<div class="previous-box"><div><span class="muted">Прошлый раз</span><b>${fmt(prev.weight)} кг × ${prev.reps}</b></div><div><span class="muted">Предложение</span><b class="blue">${fmt(suggested)} кг</b></div></div>`:""}
    <label>Вес, кг<input id="w" type="number" min="0" step=".5" value="${e.weight||0}"></label>
    <label>Повторения<input id="r" type="number" min="1" value="${e.reps}"></label>
    <label>Подходов<input id="sets" type="number" min="1" max="20" value="${e.sets||3}"></label>
    <label>Отдых, сек<input id="rs" type="number" min="0" value="${e.rest||90}"></label>
    ${prev?`<button class="ghost-btn" id="usePrev" style="width:100%">Использовать предложение ${fmt(suggested)} кг</button>`:""}
    <button class="primary-btn" id="se">Сохранить</button>
  </div>`);
  if($("#usePrev"))$("#usePrev").onclick=()=>{$("#w").value=suggested};
  $("#se").onclick=()=>{e.weight=Math.max(0,+$("#w").value||0);e.reps=Math.max(1,+$("#r").value||1);e.sets=Math.max(1,+$("#sets").value||e.sets||3);e.rest=Math.max(0,+$("#rs").value||90);
  const old=e.setsData||[];e.setsData=Array.from({length:e.sets},(_,i)=>old[i]||{weight:e.weight,reps:e.reps});e.done=Array(e.sets).fill(false);
  closeModal();showWorkout()};
}
function editProgram(){
  const q=p();
  openModal(programEditorHtml(q));
  bindProgramEditor(q);
}
function programEditorHtml(q){
  return `<h2>Конструктор программы</h2>
    <div class="form">
      <label>Название<input id="pn" value="${esc(q.name)}"></label>
      <div class="inline-grid">
        <label>Тренировок / нед.<input id="pd" type="number" min="1" max="7" value="${q.daysPerWeek}"></label>
        <label>Недель<input id="pw" type="number" min="1" max="52" value="${q.weeks}"></label>
        <label>Дней создано<input value="${q.days.length}" disabled></label>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row"><h3>Дни программы</h3><button class="small-btn" id="addDay">+ День</button></div>
    <div class="stack" id="daysEditor" style="margin-top:12px">
      ${q.days.map((d,i)=>dayEditorHtml(d,i)).join("")}
    </div>
    <button class="primary-btn" id="sp">Сохранить программу</button>`;
}
function dayEditorHtml(d,i){
  return `<div class="day-card" data-day="${i}">
    <div class="row"><div class="grow"><div class="muted">ДЕНЬ ${i+1}</div><input class="day-name" value="${esc(d.name)}" style="margin-top:6px"></div>
      <button class="small-btn remove-day" data-day="${i}">Удалить</button></div>
    <div class="exercise-editor">${d.exercises.map((e,j)=>exerciseEditorHtml(e,j)).join("")||`<div class="empty">В этом дне пока нет упражнений.</div>`}</div>
    <button class="ghost-btn add-exercise" data-day="${i}" style="width:100%;margin-top:10px">+ Добавить упражнение</button>
  </div>`;
}
function exerciseEditorHtml(e,j){
  return `<div class="exercise-row" data-ex="${j}">
    <div class="food-icon">◈</div>
    <div class="grow"><b>${esc(e.name)}</b>
      <div class="exercise-meta"><span class="meta-chip">${e.sets} подхода</span><span class="meta-chip">${e.reps} повт.</span><span class="meta-chip">${e.weight||0} кг</span><span class="meta-chip">${e.rest||90} сек</span></div>
      <div class="inline-grid" style="margin-top:8px">
        <label>Подходы<input class="ex-sets" type="number" min="1" max="20" value="${e.sets}"></label>
        <label>Повторы<input class="ex-reps" type="number" min="1" max="100" value="${e.reps}"></label>
        <label>Вес, кг<input class="ex-weight" type="number" min="0" step=".5" value="${e.weight||0}"></label>
      </div>
      <label style="display:block;margin-top:7px;font-size:11px;color:var(--muted)">Отдых, сек<input class="ex-rest" type="number" min="0" value="${e.rest||90}" style="margin-top:5px"></label>
    </div>
    <button class="small-btn remove-ex" title="Удалить">×</button>
  </div>`;
}
function bindProgramEditor(q){
  $$(".add-exercise").forEach(b=>b.onclick=()=>openExercisePicker(q,+b.dataset.day));
  $$(".remove-ex").forEach(b=>b.onclick=()=>{
    const card=b.closest(".day-card"),i=+card.dataset.day,j=+b.closest(".exercise-row").dataset.ex;
    q.days[i].exercises.splice(j,1);openModal(programEditorHtml(q));bindProgramEditor(q);
  });
  $$(".remove-day").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.day;
    if(q.days.length<=1){toast("Нужен хотя бы один день");return}
    q.days.splice(i,1);openModal(programEditorHtml(q));bindProgramEditor(q);
  });
  $("#addDay").onclick=()=>{
    q.days.push({name:`День ${q.days.length+1}`,exercises:[]});
    openModal(programEditorHtml(q));bindProgramEditor(q);
    setTimeout(()=>$("#daysEditor")?.lastElementChild?.scrollIntoView({behavior:"smooth"}),50);
  };
  $("#sp").onclick=()=>{
    q.name=$("#pn").value.trim()||"Моя программа";
    q.daysPerWeek=Math.max(1,Math.min(7,+$("#pd").value||q.days.length));
    q.weeks=Math.max(1,+$("#pw").value||8);
    q.days.forEach((d,i)=>{
      const card=$(`.day-card[data-day="${i}"]`);
      if(card){
        d.name=card.querySelector(".day-name").value.trim()||`День ${i+1}`;
        [...card.querySelectorAll(".exercise-row")].forEach((row,j)=>{
          const e=d.exercises[j];
          e.sets=Math.max(1,+row.querySelector(".ex-sets").value||1);
          e.reps=Math.max(1,+row.querySelector(".ex-reps").value||1);
          e.weight=Math.max(0,+row.querySelector(".ex-weight").value||0);
          e.rest=Math.max(0,+row.querySelector(".ex-rest").value||90);
        });
      }
    });
    q.daysPerWeek=q.days.length;save();closeModal();render();toast("Программа сохранена");
  };
}
function openExercisePicker(q,dayIndex){
  openModal(`<h2>Добавить упражнение</h2>
    <input id="es" class="search" placeholder="Поиск: грудь, спина, присед...">
    <div class="exercise-picker" id="ep">${exercisePickerHtml("")}</div>`);
  const filter=()=>$("#ep").innerHTML=exercisePickerHtml(($("#es").value||"").toLowerCase());
  $("#es").oninput=filter;
  $("#ep").onclick=e=>{
    const b=e.target.closest(".pick-ex");if(!b)return;
    const x=exercises[+b.dataset.i];
    q.days[dayIndex].exercises.push({name:x[0],sets:3,reps:10,weight:0,rest:90});
    openModal(programEditorHtml(q));bindProgramEditor(q);toast("Упражнение добавлено");
  };
}
function exercisePickerHtml(q){
  const list=exercises.map((x,i)=>({x,i})).filter(o=>o.x.join(" ").toLowerCase().includes(q));
  return list.map(o=>`<div class="picker-item"><div class="picker-ex">${exerciseImgTag(o.x[0],o.x[0],"picker-thumb")}<div><b>${esc(o.x[0])}</b><div class="muted">${o.x[1]} · ${o.x[2]}</div></div></div><button class="small-btn pick-ex" data-i="${o.i}">Добавить</button></div>`).join("")||`<div class="empty">Ничего не найдено.</div>`;
}
function profile(){bodySettings()}
function openModal(c){$("#sheet").innerHTML=c;$("#modal").classList.remove("hidden")}
function closeModal(){$("#modal").classList.add("hidden");$("#sheet").innerHTML=""}
$("#modal").onclick=e=>{if(e.target.dataset.close!==undefined)closeModal()};
$("#quickAdd").onclick=()=>openModal(`<h2>Быстро добавить</h2><div class="sheet-grid">
  <button class="sheet-action" id="qaW"><b>Тренировка</b><span>Начать текущую программу</span></button>
  <button class="sheet-action" id="qaF"><b>Еда</b><span>Добавить продукт</span></button>
  <button class="sheet-action" id="qaWeight"><b>Вес</b><span>Записать сегодняшний вес</span></button>
  <button class="sheet-action" id="qaMeasure"><b>Замер</b><span>Талия, грудь, руки и ноги</span></button>
</div>`);
$("#modal").addEventListener("click",e=>{
  if(e.target.id==="qaW"){closeModal();tab="workouts";render();setTimeout(()=>startWorkout(),30)}
  if(e.target.id==="qaF"){closeModal();tab="food";render();setTimeout(addFood,30)}
  if(e.target.id==="qaWeight"){closeModal();setTimeout(addWeight,30)}
  if(e.target.id==="qaMeasure"){closeModal();tab="progress";render();setTimeout(addMeasurement,30)}
});
$$(".nav-item").forEach(b=>b.onclick=()=>{tab=b.dataset.tab;render()});
$("#headerAction").onclick=bodySettings;
document.addEventListener("click",e=>{if(e.target.id==="historyMeasure")measurementHistory()});
render();