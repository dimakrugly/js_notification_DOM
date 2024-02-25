'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const notificationTitle = document.createElement('h2');

  notificationTitle.textContent = title;
  notificationTitle.classList.add('title');

  const notificationText = document.createElement('p');

  notificationText.textContent = description;

  notification.append(notificationTitle, notificationText);
  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(160, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');