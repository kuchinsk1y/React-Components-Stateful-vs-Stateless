# React Components Example

Этот проект демонстрирует основы разработки компонентов в React. Здесь представлены три типа компонентов: stateful (с управляемым состоянием), stateless (без состояния) и классический компонент на основе классов. 

Цель проекта — показать разницу между функциональными и классовыми компонентами, а также продемонстрировать базовые концепции React, такие как управление состоянием и работа с пропсами.

---

## 🛠️ Технологии

В проекте используются:
- **React** — библиотека для создания пользовательского интерфейса.
- **JavaScript** (ES6+) — язык разработки.
- **npm** — менеджер пакетов.
- **Create React App** — инструмент для быстрого создания React-приложения.

---

## 📂 Структура проекта

```plaintext
src/
├── components/
│   ├── StatefulComponent.jsx      # Состояние компонента (useState)
│   ├── StatelessComponent.jsx     # Простой компонент (только пропсы)
│   ├── ClassComponent.jsx         # Классический компонент с состоянием
├── App.jsx                        # Главный компонент
├── index.js                       # Точка входа в приложение
├── reportWebVitals.js             # Метрики производительности
└── index.css                      # Стили
```

---

## ⚙️ Установка и запуск проекта

Следуйте этим шагам, чтобы запустить проект на вашем компьютере:

### 1. Клонируйте репозиторий
Скопируйте проект из GitHub:
```bash
git clone https://github.com/<ваш-логин>/react-components-example.git
```

Перейдите в папку проекта:
```bash
cd react-components-example
```

### 2. Установите зависимости
Убедитесь, что у вас установлены Node.js и npm. Затем запустите:
```bash
npm install
```

Это установит все необходимые зависимости.

### 3. Запустите проект
Для запуска проекта выполните:
```bash
npm start
```

После этого приложение откроется в браузере по адресу: http://localhost:3000




---

## 🧩 Компоненты проекта

### Stateful Component
Функциональный компонент, использующий хук `useState` для управления состоянием. Демонстрирует, как в функциональном компоненте можно обновлять, изменять и выводить текущее состояние.

### Stateless Component
Простой функциональный компонент, который принимает данные через пропсы и отображает их. У него отсутствует собственное состояние.

### Class Component
Классический компонент, который демонстрирует использование класса (`React.Component`) для управления состоянием и работы со стандартными методами жизненного цикла React.

---

## 🚀 Пример использования

На странице вы увидите три компонента:
1. **Stateful Component** — счетчик с кнопками для увеличения и уменьшения значения.
2. **Stateless Component** — отображающий текстовое сообщение, переданное через пропс.
3. **Class Component** — аналог "Stateful Component", но выполненный на основе класса.

---

## ⚠️ Возможные проблемы

### 1. Проблемы с установкой зависимостей
Если при установке возникает ошибка:
```bash
npm ERR! ERESOLVE unable to resolve dependency tree
```
**Решение:**
```bash
npm install --legacy-peer-deps
```

### 2. Ошибка модуля `web-vitals`
Если при запуске проекта возникает ошибка:
```bash
ERROR in ./src/reportWebVitals.js
Module not found: Error: Can't resolve 'web-vitals'
```
**Решение:**
Установите пакет вручную:
```bash
npm install web-vitals
```

### 3. Проблемы с устаревшей версией Node.js
Если вы используете старую версию Node.js, могут возникнуть проблемы с установкой зависимостей. Убедитесь, что у вас свежая версия (лучше **16.x** или **18.x**):
```bash
node -v
```
**Рекомендуется:** скачать последнюю **LTS-версию**

### 4. Проект не запускается (npm start)
Если сервер разработки не запускается:
- Проверьте, завершилась ли команда `npm install` без ошибок.
- Удалите папку `node_modules` и файл `package-lock.json`, затем установите зависимости заново:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm start
  ```
