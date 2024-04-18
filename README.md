![Иллюстрация к проекту](https://github.com/KirillR12/machines-project/blob/main/src/shared/assets/img/image.png)

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev:front - запуск frontend приложения в dev режиме
npm run start:dev:server - запуск backend приложения в dev режиме
npm run start:dev - запуск frontend и backend приложения
```

----

## Скрипты

- `npm run start:dev:front` - Запуск frontend проектa
- `npm run start:dev:server` - Запуск backend сервера
- `npm run start:dev` - Запуск frontend и backend приложения
- `npm run build` - Сборка проекта для продакшена
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Конфигурация проекта

Библиотеки используемые на проекте:

- Prodaction:
Vite - сборщик проекта. Config - vite.config.ts
React - библиотека для создания SPA-приложений
Redux/toolkit - State Manager, использовался для работы с запросами
React-progress-bar - библиотека для работы с прогресс баром 
concurrently - помогает объединить команды

- Dev:
json-server - фейковый backend
eslint - анализ кода
classnames - библиотека для работы с классами html
typescript - используемый язык на проекте

----

## Шейред (shared)

- настройки api в папке api
- assets - вспом. иконки и изображения
- types - типы 
- ui - ui компоненты: 

- [Button](/src/shared/Button) - обертка для кнопак с темами.
- [Card](/src/shared/Card) - оберка в виде карточки. Принимает children и 3 темы: dark, white, success.
- [Hr](/src/shared/Hr) - разделение. Принимает width - ширину, height - высоту, max - растягивается на всю свободную ширину по горизонтали,hrVertically - принимает вертикальное положение, inverted - меняет цвет, maxInverted - растягивается на всю свободную ширину по вертикали.
- [Icon](/src/shared/Icon) - использовал для отрисовки svg иконок
- [Stack](/src/shared/Stack) - помогает в ручную не прописывать свойства flex, flex-direction, justify-content, align-items.
- [Text](/src/shared/Text) - помогает отображать все виды текста, которые есть на макете, с помощью переданных пропсов.



## Сущности (entities)

- [BtnSidebar](/src/entities/BtnSidebar) - кнопка открытия и закрытия sidebar. Принимает состояние collapsed и 2-е функции для открытия и закрытия sidebar.
- [MyAccount](/src/entities/MyAccount) - блок по работе с аккаунтом в sidebar. Принимает состояние collapsed.
- [NavigationShortcuts](/src/entities/NavigationShortcuts) - блок для отрисовки навигационных карточек в sidebare. Принимает в себя shortcuts объект с параметрами карточки и состояние collapsed.
- [SupportSidebar](/src/entities/SupportSidebar) - блок support в sidebar.

- [EquipmentHeader](/src/entities/EquipmentHeader) - шапка блока equipment. Принимает quantity - кол-во элементов в блоке.
- [StationCard](/src/entities/StationCard) - карточка для отображения данных на странице equipment. Принимает объект station с данными.

- [PoolHeader](/src/entities/PoolHeader) - Шапка для виджета Pool
- [JobCard](/src/entities/JobCard) - Карточка для блока Pook, которая состоит из 3 частей: 
JobMainCard - главная карточка. Принимает объект job, и состояние inverted.
JobNameCard - карточка с названием станков. Принимает объект job.
JobPanelCard - карточка с описание панелей. Принимает объект panel, done состояние - выполнено, progressCard состояние - в процессе.
NameJobContent - общая часть используемая во всех 3 карточках. Принимает название/описание, inverted - состояние.

- [PanelContent](/src/entities/PanelContent) - общий блок для отображения панели и их данных. Принимает content, fraction - вспом. данные, panelWhite - booleant флаг для работы с цветом
- [Progress](/src/entities/Progress) - помогает отрисовать прогресс бар. Принимает completed - число прогресса, status - статус для отображения определенное цветовой гаммы, inverted - состояние для изменения цвета.

## Фичи (features)

- [NavigateListSidebar](/src/features/NavigateListSidebar) - хранит в себе данные для отображения в sidebar и отображает эти данные используя карточку NavigationShortcuts.
- [EquipmentContent](/src/features/EquipmentContent) - принимает из widgets массив станков и отображаете их используя карточку StationCard
- [PoolContent](/src/features/PoolContent) - принимает из widgets объект job и отрисовывает карточку со свернутым и развернутым состоянием

## Виджеты (widgets)

- [Sidebar](/src/widgets/Sidebar)
- [Equipment](/src/widgets/Equipment) - запрос на сервер
- [Pool](/src/widgets/Pool) - запрос на сервер

## Страницы (pages)

- [Sidebar](/src/pages/MainPage) - страница для отображения всех виджетов
