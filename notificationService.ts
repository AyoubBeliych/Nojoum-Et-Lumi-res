
// A service to handle browser notifications.

class NotificationService {
    public hasPermission(): boolean {
        return 'Notification' in window && Notification.permission === 'granted';
    }

    public async requestPermission(): Promise<NotificationPermission> {
        if (!('Notification' in window)) {
            alert('This browser does not support desktop notification');
            return 'denied';
        }
        return await Notification.requestPermission();
    }

    public showNotification(title: string, options?: NotificationOptions): void {
        if (this.hasPermission()) {
            new Notification(title, options);
        } else {
            console.warn('Notification permission has not been granted.');
        }
    }
    
    public scheduleDailyReminder(title: string, body: string): void {
        if (this.hasPermission()) {
           // This is a simulation. A real app would use a service worker.
           // We'll just show a notification after 5 seconds to demonstrate.
           setTimeout(() => {
               this.showNotification(title, { body });
           }, 5000);
           
           // Show an immediate confirmation
           this.showNotification("Reminder Set!", { body: "You'll be notified with a sample message shortly."});
        }
    }
}

export const notificationService = new NotificationService();