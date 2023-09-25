// ReadingTracker.ts

import EmailNotification from './EmailNotification';
import ConsoleNotification from './consoleNotifications';
import Notificator from './interface/Notificator';
import progressNotification from './notifications';

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  constructor(readingGoal: number, email: string, public notificator: Notificator = new ConsoleNotification('console')) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
}

const readTracker = new ReadingTracker(20, 'email@teste.com');
readTracker.trackReadings(12);
readTracker.trackReadings(9);