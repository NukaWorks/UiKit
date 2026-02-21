# NukaWorks UiKit — Thymeleaf

A server-side UI component library for Java/Spring Boot using Thymeleaf fragments.

## Setup

Add to `pom.xml`:
```xml
<dependency>
    <groupId>com.nwrks</groupId>
    <artifactId>uikit</artifactId>
    <version>1.0.12</version>
</dependency>
```

Include in your layout template:
```html
<link rel="stylesheet" th:href="@{/css/uikit.css}" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Components

### Button
```html
<div th:replace="~{components/button :: button('Save', 'primary', 'md', 'submit', null)}"></div>
```
Colors: `default` `primary` `success` `warning` `alert` `disabled`  
Sizes: `sm` `md` `lg`

---

### TextField
```html
<div th:replace="~{components/textfield :: textfield('email', null, 'Enter email', 'email', 'Email')}"></div>
```

---

### Checkbox / Radio / Switch
```html
<label th:replace="~{components/checkbox :: checkbox('agree', 'I agree', false, false)}"></label>
<label th:replace="~{components/checkbox :: radio('plan', 'Free plan', 'free', true, false)}"></label>
<label th:replace="~{components/checkbox :: switch('notify', 'Notifications', true, false)}"></label>
```

---

### Text / Link
```html
<span th:replace="~{components/text :: text('Hello world', 'lg', 'semibold')}"></span>
<a th:replace="~{components/text :: link('Visit site', 'https://example.com', true)}"></a>
```
Sizes: `sm` `md` `lg` `xl` — Weights: `normal` `medium` `semibold` `bold`

---

### Avatar
```html
<div th:replace="~{components/avatar :: avatar(null, null, 'JD', 'md')}"></div>
<div th:replace="~{components/avatar :: avatar('/img/user.png', 'Jane', null, 'lg')}"></div>
```
Sizes: `sm` `md` `lg`

---

### Image
```html
<img th:replace="~{components/image :: image('/img/photo.jpg', 'A photo', null, null)}" />
```

---

### ProgressBar / Spinner
```html
<div th:replace="~{components/progress :: progress(65, 100, 'primary')}"></div>
<div th:replace="~{components/progress :: spinner('md')}"></div>
```
Colors: `primary` `success` `warning` `alert`  
Spinner sizes: `sm` `md` `lg`

---

### ListView
```html
<div th:replace="~{components/listview :: listview(~{::items})}">
    <th:block th:fragment="items">
        <div th:replace="~{components/listview :: listview-item('Home', 'home', '/')}"></div>
        <div th:replace="~{components/listview :: listview-item('Settings', 'settings', '/settings')}"></div>
    </th:block>
</div>
```

---

### Menu
```html
<ul th:replace="~{components/menu :: menu('main-menu', ~{::menuItems})}">
    <th:block th:fragment="menuItems">
        <li th:replace="~{components/menu :: menu-item('Profile', '/profile', 'person', false)}"></li>
        <li th:replace="~{components/menu :: menu-separator}"></li>
        <li th:replace="~{components/menu :: menu-item('Logout', '/logout', 'logout', false)}"></li>
    </th:block>
</ul>
```

---

### Sidebar
```html
<div th:replace="~{components/sidebar :: sidebar('app-nav', ~{::navItems})}">
    <th:block th:fragment="navItems">
        <a th:replace="~{components/sidebar :: sidebar-item('home', 'Home', '/', true)}"></a>
        <a th:replace="~{components/sidebar :: sidebar-item('settings', 'Settings', '/settings', false)}"></a>
    </th:block>
</div>
```

---

### Tooltip
```html
<span th:replace="~{components/tooltip :: tooltip('Helpful hint', 'top')}"></span>
```
Positions: `top` `bottom` `left` `right`

Wrap your trigger element and apply the tooltip class directly on it in your page template:
```html
<button class="uikit-btn uikit-btn-default uikit-btn-sm uikit-tooltip uikit-tooltip-top" data-tip="Helpful hint">
    Hover me
</button>
```

