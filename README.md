# Интенсив по React

Этот репозиторий — отправная точка, с которой мы отправимся в увлекательное путешествие по исследованию бескрайних и захватывающих просторов экосистемы React. Так что приготовься, возьми с собой все необходимое, и буть готов к свершениям.

## Чтобы отправиться в путь:

*   `git clone git@github.com:Lectrum/react-intensive-boilerplate.git`
*   `cd react-intensive-boilerplate`
*   `yarn` или `npm i`
*   `yarn start` или `npm start`

---

Документация к API доступна по [ссылке](https://lab.lectrum.io/docs/react/).

---

## Чтобы задеплоить приложение на github pages:

*   Запуши репозиторий с приложением на github
*   В файле `package.json`, в скрипте `build:prod-github` — укажи значение переменной окружения `REPOSITORY_NAME` в виде имени своего репозитория на github
*   Затем — `yarn deploy` или `npm run deploy`

###### Заметка: после деплоя, приложение будет доступно по адресу:
> `https://имя-твоего-пользователя-гитхаб.github.io/имя-твоего-репозитория-с-приложением`


## Чтобы сбилдить приложение без github pages:

*   `yarn build:prod` или `npm run build:prod`
