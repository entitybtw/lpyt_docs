const body = document.body;
const toggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const tabs = document.querySelectorAll('.nav button[data-tab]');
const sections = document.querySelectorAll('main section');
const subnav = document.getElementById('docsSubnav');

const i18n = {
  ru: {
    title: "LuaPlayerYT",
    nav: {
      intro: "Основная информация",
      build: "Сборка",
      docs: "Документация движка",
      additional: "Дополнительная информация",
      buttons: "buttons — Кнопки",
      color: "Color — Цвет",
      image: "Image — Изображения",
      intrafont: "intraFont — Шрифты",
      system: "System — Система",
      screen: "screen — Экран",
      sound: "sound — Звук",
      pmp: "pmp — PMP видео",
      lua: "LUA — Базовые функции",
      timer: "timer — Таймеры"
    },
    intro: {
      title: "Основная информация",
      text: "LuaPlayerYT — современный LuaPlayer для PSP с открытым исходным кодом, ориентированный на расширяемость и широкий функционал.",
      repos: "Репозитории",
      mainRepo: "Основной репозиторий → ",
      forks: "Форки",
      fork1: "1. Форк движка от entitybtw, ориентированный на кастомизацию. Создается для порта Minecraft: Story Mode для PSP [mcsm_portable]. Форк сохраняет все оригинальные ассеты и добавляет гибкую настройку экрана ошибок (звук, шрифт, изображение), для сборки используется скрипт build.sh.",
      forkRepo: "Репозиторий → "
    },
    build: {
      title: "Сборка",
      mainRepo: "Основной репозиторий",
      step1: "1. Установите PSPSDK согласно ",
      step2: "2. Склонируйте репозиторий:",
      step3: "3. Выполните сборку:",
      autoBuild: "В репозитории настроена автосборка EBOOT.PBP при каждом изменении. Готовые сборки из актуального кода доступны в ",
      forkRepo: "Форк от entitybtw",
      fork1: "1. Установите PSPSDK.",
      fork2: "2. Склонируйте репозиторий:",
      fork3: "3. Запустите сборку:",
      forkAutoBuild: "Форк также использует автосборку EBOOT.PBP. Актуальные сборки доступны в "
    },
    docs: {
      title: "Документация движка",
      updated: {
        main: "LuaPlayerYT 0.5 beta 3 — документация основаная на LuaPlayerYT LLS от ильи' antim0118",
        date: "Обновлено: 31 декабря 2025"
      },
      buttons: "buttons — Кнопки",
      color: "Color — Цвет",
      image: "Image — Изображения",
      align: "Выравнивание",
      constant: "Константа",
      value: "Значение",
      functions: "Функции",
      intrafont: "intraFont — Шрифты",
      scroll: "Скроллинг",
      system: "System — Система",
      screen: "screen — Экран",
      sound: "sound — Звук",
      pmp: "pmp — PMP видео",
      lua: "LUA — Базовые функции",
      timer: "timer — Таймеры",
      name: "Имя"
    },
    comments: {
  // buttons
  "buttons.read": "считывает состояния кнопок. (желательно вызывать перед вызовом остальных функций для чтения состояния)",
  "buttons.Lx": "считывает позицию стика по X, возвращает целое значение от -128 до 127",
  "buttons.Ly": "считывает позицию стика по Y, возвращает целое значение от -128 до 127",
  "buttons.pressed": "проверка на то, была ли кнопка нажата только что (не зажата!)",
  "buttons.held": "проверка на то, удерживается ли кнопка в данный момент",
  "buttons.released": "проверка на то, отпущенна ли кнопка в данный момент",

  // Color
  "Color.new": "создание нового цвета (r, g, b, a?)",
  "Color.get": "получение значения канала цвета (color, channel?)",

  // Image
  "Image.load": "загрузка изображения в память (path - путь к изображению)",
  "Image.unload": "выгрузка изображения из памяти (texture - предварительно загруженное изображение)",
  "Image.W": "получение высоты изображения (texture - предварительно загруженное изображение)",
  "Image.H": "получение ширины изображения (texture - предварительно загруженное изображение)",
  "Image.draw": "полная отрисовка изображения с параметрами: texture - предварительно загруженное изображение, x/y - позиция, w/h - размеры, color - цвет, srcx/srcy/srcw/srch - область захвата, rotation - поворот, alpha - прозрачность, alignMode - выравнивание, GU_LINEAR, GU_REPEAT",
  "Image.draweasy": "упрощённая отрисовка изображения с основными параметрами",
  "Image.drawCircleOnTex": "отрисовка окружности на изображении",
  "Image.createPlaceholder": "создает 'шахматную' текстуру как текстура-заполнитель",

  // intraFont
  "intraFont.load": "загрузка шрифта в ОЗУ в форматах TTF и PGF (path - путь до шрифта, size - размер шрифта)",
  "intraFont.setStyle": "задает стиль шрифта (font - шрифт, size - размер, color - цвет, rotation - поворот, align - выравнивание)",
  "intraFont.print": "отрисовка текста (x/y - координаты позиции шрифта, text - выводимый текст, textColor - цвет, font - шрифт, size - размер, rotation, GU_LINEAR, align)",
  "intraFont.printBackground": "отрисовка текста с фоновой заливкой (x/y - позиция, text - текст, textColor - цвет текста, bgColor - цвет фона, font - шрифт, size - размер)",
  "intraFont.printColumn": "отрисовка текста колонной (x/y - позиция, text - текст, width - ширина, textColor - цвет, font - шрифт, size - размер, align - выравнивание, scroll - скроллинг)",
  "intraFont.printContoured": "отрисовка текста с контуром (x/y - позиция, text - текст, textColor - цвет, contourColor - цвет контура, font - шрифт, size - размер, rotation - поворот)",
  "intraFont.printGradient": "отрисовка текста с градиентом (x/y - позиция, text - текст, textColorStart - начальный цвет, textColorEnd - конечный цвет, font - шрифт, size - размер)",
  "intraFont.printStriked": "отрисовка перечёркнутого текста (x/y - позиция, text - текст, textColor - цвет, lineColor - цвет линии, font - шрифт, size - размер)",
  "intraFont.printShadowed": "отрисовка текста с тенью (x/y - позиция, text - текст, textColor - цвет, shadowColor - цвет тени, font - шрифт, shadowRotation - угол падения света, lightDistance - расстояние тени, size - размер, rotation - поворот)",
  "intraFont.printUnderlined": "отрисовка подчеркнутого текста (x/y - позиция, text - текст, textColor - цвет, lineColor - цвет линии, font - шрифт, size - размер)",
  "intraFont.reverseText": "разворачивает строку задом наперёд (text - исходный текст)",
  "intraFont.size": "изменение размера шрифта (font - шрифт, size - новый размер)",
  "intraFont.textW": "вычисление ширины текста в пикселях (font - шрифт, text - текст, size - размер)",
  "intraFont.textH": "вычисление высоты шрифта в пикселях с учётом текущего размера (font - шрифт)",
  "intraFont.unload": "выгрузка шрифта из памяти (font - шрифт)",

  // System
  "System.rename": "переименование файла или папки (path - путь к файлу или папке, newName - новое имя)",
  "System.removeFile": "удаление файла (path - путь к файлу)",
  "System.removeDir": "удаление папки (path - путь к папке)",
  "System.createDir": "создание новой папки (path - путь к создаваемой папке)",
  "System.isFile": "проверка существования файла (path - путь к файлу)",
  "System.isDir": "проверка является ли путь папкой (path - путь к папке)",
  "System.currentDir": "смена текущей рабочей директории (path - путь к новой директории)",
  "System.listDir": "получение списка файлов и папок в директории (path - путь к директории)",
  "System.OSK": "вызов системной клавиатуры PSP (text - начальный текст, desc - описание поля ввода, cleanBG - очистка фона, bgpath - путь к фону)",
  "System.message": "вывод системного сообщения (message - текст, mode - режим окна, cleanBG - очистка фона, bgpath - путь к фону)",
  "System.getBatteryPercent": "получение текущего заряда аккумулятора в процентах",
  "System.getBatteryLifeTime": "получение оставшегося времени работы аккумулятора в минутах",
  "System.getCPU": "получение текущей частоты процессора",
  "System.getModel": "получение модели консоли PSP",
  "System.getTime": "получение текущего времени и даты, выставленных на консоли",
  "System.getOSV": "получение версии установленной официальной прошивки",
  "System.GC": "очистка оперативной памяти от LUA-мусора",
  "System.buttonPressed": "получение кнопки, нажатой в окне System.message()",
  "System.getNickname": "получение никнейма консоли",
  "System.getLang": "получение языка, установленного в системе",
  "System.PowerTick": "предотвращение перехода консоли в спящий режим и отключения экрана",
  "System.getGameID": "получение ID игры (например, UCJS10041)",
  "System.getGameTitle": "получение названия текущей игры",
  "System.SaveData": "сохранение данных с выбором слота (saveData - данные, subTitle - подзаголовок, description - описание, ebootpath - путь к EBOOT.PBP, icon0path - путь к иконке, cleanBG - очистка фона, bgpath - путь к фону)",
  "System.LoadData": "загрузка сохранённых данных с выбором слота (cleanBG - очистка фона, bgpath - путь к фону)",
  "System.DeleteData": "удаление сохранения через системное окно (cleanBG - очистка фона, bgpath - путь к фону)",
  "System.AutoSave": "автоматическое сохранение данных без вызова интерфейса (saveData, subTitle, description, ebootpath, AutoSaveFolder, icon0path)",
  "System.AutoLoad": "автозагрузка сохранённых данных (AutoSaveFolder)",
  "System.fileDumpCreate": "загрузка файла в память и получение указателя (file - путь к файлу)",
  "System.fileDumpGetLine": "получение строки из загруженного файла (filePointer - указатель файла, pos - номер строки)",
  "System.fileDumpRemove": "выгрузка файла из памяти (filePointer - указатель файла, linesCount - количество строк)",
  "System.Net": "подключение консоли к сети",
  "System.USB.activate": "активация USB-режима",
  "System.USB.deactivate": "деактивация USB-режима",
  "System.USB.getState": "получение текущего состояния USB-режима",

  // screen
  "screen.clear": "очистка экрана перед отрисовкой кадра (color - цвет очистки экрана)",
  "screen.flip": "вывод изображения с виртуального экрана на реальный (обновление кадра)",
  "screen.filledRect": "отрисовка заполненного прямоугольника (x/y - позиция, width/height - размеры, color - цвет, rotation - поворот, alpha - прозрачность, alignMode - режим выравнивания)",
  "screen.drawLine": "отрисовка линии (x1/y1 - начало, x2/y2 - конец, color - цвет)",
  "screen.drawCircle": "отрисовка окружности (x/y - центр, radius - радиус, color - цвет)",
  "screen.drawTriangle": "отрисовка треугольника (x1/y1, x2/y2, x3/y3 - координаты вершин, color - цвет)",

  // sound
  "sound.cloud": "предзагрузка аудиофайла в канал (path - путь, channel - канал, loadToRam - загрузка в ОЗУ)",
  "sound.play": "воспроизведение загруженного аудиофайла (channel - канал, loop - зацикливание)",
  "sound.info": "получение ID3-информации из mp3 файла",
  "sound.pause": "приостановка воспроизведения (channel - канал)",
  "sound.volume": "изменение громкости воспроизведения (channel - канал, volumeL - левый, volumeR - правый)",
  "sound.stop": "остановка воспроизведения звука (channel - канал)",
  "sound.state": "получение состояния звукового канала (channel - канал)",
  "sound.unload": "выгрузка аудиофайла из канала (channel - канал)",

  // PMP
  "PMP.getFrame": "проверка воспроизведения видео и обновление указателя (pointer - указатель на PMP, возвращает true, если видео играет)",
  "PMP.getTimeCode": "получение текущего времени воспроизведения видео в секундах",
  "PMP.getSubs": "получение текста субтитров текущего видео",
  "PMP.pause": "приостановка воспроизведения видео",
  "PMP.play": "воспроизведение .pmp файла (path - путь, getPointer - возвращать указатель, loop - зацикливание, subtitlePath - путь к субтитрам, interruptButton - кнопка остановки, FPS - кадры/с, возвращает указатель если getPointer=true)",
  "PMP.setVolume": "установка громкости воспроизведения видео (volume 0-100)",
  "PMP.stop": "остановка воспроизведения видео (pointer - указатель)",
  "PMP.Mp4_Info": "вывод информации о MP4 файле (path - путь, устаревшая функция)",

  // LUA
  "LUA.print": "вывод текста системным шрифтом на экран (x/y - координаты, text - текст)",
  "LUA.getRandom": "генерация случайного числа от min до max включительно",
  "LUA.getRAM": "получение доступного объёма оперативной памяти в байтах (~512KB погрешность)",
  "LUA.screenshot": "создание скриншота экрана (path - путь, width/height - размеры)",
  "LUA.exit": "выход в XMB",
  "LUA.quit": "выход в XMB",
  "LUA.sleep": "пауза выполнения скрипта на указанное количество миллисекунд (ms)",

  // timer
  "timer.create": "создание нового таймера (возвращает объект таймера)",
  "timer.start": "запуск ранее созданного таймера (timerInstance - объект таймера)",
  "timer.time": "получение времени, отсчитанного таймером в миллисекундах (timerInstance)",
  "timer.stop": "остановка таймера (timerInstance)",
  "timer.reset": "остановка и сброс таймера (timerInstance)",
  "timer.remove": "удаление таймера (timerInstance)"
    },
    additional: {
      title: "Дополнительная информация",
      projects: "Проекты которые делают на LuaPlayerYT:",
      lls: "LuaPlayerYT LLS для vscode от antim0118",
      install: "Установка",
      step1: "1. скачать расширение Lua (или Lua Language Server от sumneko)",
      step2: "2. распаковать архив с папкой LLS в удобное место (ССЫЛКА НА СКАЧКУ АРХИВА НАХОДИТСЯ НИЖЕ)",
      step3: "3. указать путь к распакованной папке LLS в настройках: File - Preferences - Settings - вкладка User. В поиске пишем Lua.workspace.library и в этом пункте вписываем путь.",
      link: "Ссылка на архив текущей версии LuaPlayerYT LLS:",
      credits: "Справка",
      credit1: "> движок сделан Иваном Kodilo",
      credit2: "> данный вебсайт сделан entitybtw / ",
      credit3: "> LuaPlayerYT LLS сделан ильей' antim0118",
      credit4: "> Основным репозиторием LuaPlayerYT владеет илья' antim0118",
      credit5: "> спасибо cxplay_1465 за помощь с комментами для документации движка"
    },
    themeToggle: "🌙 / ☀️",
    langToggle: "ru / en"
  },
  en: {
    title: "LuaPlayerYT",
    nav: {
      intro: "General Information",
      build: "Build",
      docs: "Engine Documentation",
      additional: "Additional Information",
      buttons: "buttons",
      color: "Color",
      image: "Image",
      intrafont: "intraFont",
      system: "System",
      screen: "screen",
      sound: "sound",
      pmp: "PMP",
      lua: "LUA",
      timer: "timer"
    },
    intro: {
      title: "General Information",
      text: "LuaPlayerYT is a modern open-source LuaPlayer for PSP focused on extensibility and rich functionality.",
      repos: "Repositories",
      mainRepo: "Main repository → ",
      forks: "Forks",
      fork1: "1. entitybtw's fork focused on customization. Created for Minecraft: Story Mode PSP port [mcsm_portable]. Keeps all original assets and adds flexible error screen customization (sound, font, image), uses build.sh script.",
      forkRepo: "Repository → "
    },
    build: {
      title: "Build",
      mainRepo: "Main Repository",
      step1: "1. Install PSPSDK according to ",
      step2: "2. Clone repository:",
      step3: "3. Build:",
      autoBuild: "Repository has auto-build EBOOT.PBP on every change. Latest builds available at ",
      forkRepo: "entitybtw Fork",
      fork1: "1. Install PSPSDK.",
      fork2: "2. Clone repository:",
      fork3: "3. Run build:",
      forkAutoBuild: "Fork also uses auto-build EBOOT.PBP. Latest builds available at "
    },
    docs: {
      title: "Engine Documentation",
      updated: {
        main: "LuaPlayerYT 0.5 beta 3 — documentation based on LuaPlayerYT LLS by илья' antim0118",
        date: "Updated: December 31, 2025"
      },
      buttons: "buttons",
      color: "Color",
      image: "Image",
      align: "Alignment",
      constant: "Constant",
      value: "Value",
      functions: "Functions",
      intrafont: "intraFont",
      scroll: "Scrolling",
      system: "System",
      screen: "screen",
      sound: "sound",
      pmp: "PMP video",
      lua: "LUA - Basic functions",
      timer: "timer",
      name: "Name"
    },
    comments: {
  // buttons
  "buttons.read": "reads the button states (preferably call before other functions to get button states)",
  "buttons.Lx": "reads the stick position on X, returns an integer from -128 to 127",
  "buttons.Ly": "reads the stick position on Y, returns an integer from -128 to 127",
  "buttons.pressed": "checks if the button was just pressed (not held!)",
  "buttons.held": "checks if the button is being held",
  "buttons.released": "checks if the button is released",

  // Color
  "Color.new": "creates a new color (r, g, b, a?)",
  "Color.get": "gets the value of a color channel (color, channel?)",

  // Image
  "Image.load": "loads an image into memory (path - image path)",
  "Image.unload": "unloads an image from memory (texture - previously loaded image)",
  "Image.W": "gets the image height (texture - previously loaded image)",
  "Image.H": "gets the image width (texture - previously loaded image)",
  "Image.draw": "full image drawing: texture - loaded image, x/y - position, w/h - size, color - color, srcx/srcy/srcw/srch - capture area, rotation - rotation, alpha - transparency, alignMode - alignment, GU_LINEAR, GU_REPEAT",
  "Image.draweasy": "simplified image drawing with main parameters",
  "Image.drawCircleOnTex": "draws a circle on the image",
  "Image.createPlaceholder": "creates a 'checkerboard' texture as a placeholder",

  // intraFont
  "intraFont.load": "loads a font into RAM (TTF/PGF formats, path - font path, size - font size)",
  "intraFont.setStyle": "sets font style (font, size, color, rotation, align)",
  "intraFont.print": "draws text (x/y - position, text - string, textColor - color, font - font, size - size, rotation, GU_LINEAR, align)",
  "intraFont.printBackground": "draws text with background (x/y - position, text, textColor, bgColor, font, size)",
  "intraFont.printColumn": "draws text in a column (x/y - position, text, width - column width, textColor, font, size, align, scroll)",
  "intraFont.printContoured": "draws text with contour (x/y, text, textColor, contourColor, font, size, rotation)",
  "intraFont.printGradient": "draws text with gradient (x/y, text, startColor, endColor, font, size)",
  "intraFont.printStriked": "draws striked-through text (x/y, text, textColor, lineColor, font, size)",
  "intraFont.printShadowed": "draws text with shadow (x/y, text, textColor, shadowColor, font, shadowRotation, lightDistance, size, rotation)",
  "intraFont.printUnderlined": "draws underlined text (x/y, text, textColor, lineColor, font, size)",
  "intraFont.reverseText": "reverses the string (text - original text)",
  "intraFont.size": "changes font size (font, new size)",
  "intraFont.textW": "calculates text width in pixels (font, text, size)",
  "intraFont.textH": "calculates font height in pixels (font, size)",
  "intraFont.unload": "unloads font from memory (font)",

  // System
  "System.rename": "renames a file or folder (path, newName)",
  "System.removeFile": "removes a file (path)",
  "System.removeDir": "removes a folder (path)",
  "System.createDir": "creates a new folder (path)",
  "System.isFile": "checks if path is a file",
  "System.isDir": "checks if path is a folder",
  "System.currentDir": "changes the current working directory (path)",
  "System.listDir": "lists files and folders in a directory (path)",
  "System.OSK": "calls PSP system keyboard (text - initial text, desc - description, cleanBG - clear background, bgpath - background path)",
  "System.message": "displays a system message (message - text, mode - window mode, cleanBG, bgpath)",
  "System.getBatteryPercent": "gets current battery percentage",
  "System.getBatteryLifeTime": "gets remaining battery time in minutes",
  "System.getCPU": "gets current CPU frequency",
  "System.getModel": "gets PSP model",
  "System.getTime": "gets current console time and date",
  "System.getOSV": "gets installed official firmware version",
  "System.GC": "clears Lua memory",
  "System.buttonPressed": "gets button pressed in System.message() window",
  "System.getNickname": "gets console nickname",
  "System.getLang": "gets system language",
  "System.PowerTick": "prevents console from sleeping and screen turning off",
  "System.getGameID": "gets game ID (e.g., UCJS10041)",
  "System.getGameTitle": "gets current game title",
  "System.SaveData": "saves data with slot selection (saveData, subTitle, description, ebootpath, icon0path, cleanBG, bgpath)",
  "System.LoadData": "loads saved data with slot selection (cleanBG, bgpath)",
  "System.DeleteData": "deletes save through system window (cleanBG, bgpath)",
  "System.AutoSave": "auto saves data without interface (saveData, subTitle, description, ebootpath, AutoSaveFolder, icon0path)",
  "System.AutoLoad": "auto loads saved data (AutoSaveFolder)",
  "System.fileDumpCreate": "loads file into memory and returns pointer (file)",
  "System.fileDumpGetLine": "gets line from loaded file (filePointer, line number)",
  "System.fileDumpRemove": "unloads file from memory (filePointer, linesCount)",
  "System.Net": "connects console to network",
  "System.USB.activate": "activates USB mode",
  "System.USB.deactivate": "deactivates USB mode",
  "System.USB.getState": "gets current USB mode state",

  // screen
  "screen.clear": "clears screen before drawing frame (color)",
  "screen.flip": "outputs image from virtual screen to real screen",
  "screen.filledRect": "draws filled rectangle (x/y - position, width/height - size, color, rotation, alpha, alignMode)",
  "screen.drawLine": "draws a line (x1/y1 - start, x2/y2 - end, color)",
  "screen.drawCircle": "draws a circle (x/y - center, radius, color)",
  "screen.drawTriangle": "draws a triangle (x1/y1, x2/y2, x3/y3 - vertices, color)",

  // sound
  "sound.cloud": "preloads audio file to channel (path, channel, loadToRam)",
  "sound.play": "plays loaded audio file (channel, loop)",
  "sound.info": "gets ID3 info from mp3 file",
  "sound.pause": "pauses playback (channel)",
  "sound.volume": "changes playback volume (channel, volumeL, volumeR)",
  "sound.stop": "stops audio playback (channel)",
  "sound.state": "gets audio channel state (channel)",
  "sound.unload": "unloads audio file from channel (channel)",

  // PMP
  "PMP.getFrame": "checks video playback and updates pointer (returns true if playing)",
  "PMP.getTimeCode": "gets current video playback time in seconds",
  "PMP.getSubs": "gets subtitles of current video",
  "PMP.pause": "pauses video playback",
  "PMP.play": "plays .pmp file (path, getPointer, loop, subtitlePath, interruptButton, FPS; returns pointer if getPointer=true)",
  "PMP.setVolume": "sets video volume (0-100)",
  "PMP.stop": "stops video playback (pointer)",
  "PMP.Mp4_Info": "prints MP4 file info (deprecated)",

  // LUA
  "LUA.print": "prints text using system font (x/y, text)",
  "LUA.getRandom": "generates random number between min and max inclusive",
  "LUA.getRAM": "gets available RAM in bytes (~512 KB error)",
  "LUA.screenshot": "creates screenshot (path, width, height)",
  "LUA.exit": "exits to XMB",
  "LUA.quit": "exits to XMB",
  "LUA.sleep": "pauses script for specified milliseconds (ms)",

  // timer
  "timer.create": "creates a new timer (returns timer object)",
  "timer.start": "starts previously created timer (timerInstance)",
  "timer.time": "gets time elapsed by timer in milliseconds (timerInstance)",
  "timer.stop": "stops timer (timerInstance)",
  "timer.reset": "stops and resets timer (timerInstance)",
  "timer.remove": "removes timer (timerInstance)"
    },
    additional: {
      title: "Additional Information",
      projects: "Projects using LuaPlayerYT:",
      lls: "LuaPlayerYT LLS for VSCode by antim0118",
      install: "Installation",
      step1: "1. Install Lua extension (or sumneko Lua Language Server)",
      step2: "2. Extract LLS folder archive to convenient location (DOWNLOAD LINK BELOW)",
      step3: "3. Set path to extracted LLS folder in settings: File → Preferences → Settings → User tab. Search Lua.workspace.library and enter the path.",
      link: "Link to current LuaPlayerYT LLS archive:",
      credits: "Credits",
      credit1: "> Engine made by Ivan Kodilo",
      credit2: "> This website made by entitybtw / ",
      credit3: "> LuaPlayerYT LLS made by илья' antim0118",
      credit4: "> Main LuaPlayerYT repository owned by илья' antim0118",
      credit5: "> Thanks to cxplay_1465 for helping with comments for the engine documentation."
    },
    themeToggle: "🌙 / ☀️",
    langToggle: "en / ru"
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let text = i18n[lang];
    keys.forEach(k => text = text[k]);
    el.textContent = text;
  });
  document.getElementById('langToggle').textContent = lang === 'ru' ? 'ru / en' : 'en / ru';
  document.documentElement.lang = lang;
}

body.dataset.theme = localStorage.getItem('theme') || 'dark';
applyLanguage(currentLang);

document.getElementById('themeToggle').onclick = () => {
  const t = body.dataset.theme === 'dark' ? 'light' : 'dark';
  body.dataset.theme = t;
  localStorage.setItem('theme', t);
};

document.getElementById('langToggle').onclick = () => {
  applyLanguage(currentLang === 'ru' ? 'en' : 'ru');
};

function openTab(id) {
  tabs.forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  subnav.style.display = id === 'docs' ? 'block' : 'none';
  location.hash = id;
}

tabs.forEach(b => b.onclick = () => openTab(b.dataset.tab));

document.querySelectorAll('.subnav button').forEach(b => {
  b.onclick = () => {
    openTab('docs');
    document.querySelectorAll('details').forEach(d => d.open = false);
    const d = document.getElementById(b.dataset.doc);
    d.open = true;
    d.scrollIntoView({behavior: 'smooth', block: 'start'});
  };
});

openTab(location.hash.replace('#', '') || 'intro');
