import PushNotification from 'react-native-push-notification'

PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function (notification) {
        console.log('LOCAL NOTIFICATION ==>', notification)
    },
    popInitialNotification: true,
    requestPermissions: true
});

const createChannel = () => {

    PushNotification.createChannel(
        {
            channelId: "pill-reminder",
            channelName: "Pill Reminder", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
}

const days = { 
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
};

const getDateString = (date) => {
    const day = days[date.toDateString().split(' ')[0]];
    const time = date.toTimeString().split(' ')[0].split(':');
    return `${day} at ${time[0]}:${time[1]}`;
} 

export const LocalNotification = () => {
    createChannel();
    PushNotification.localNotification({
        channelId: "pill-reminder",
        autoCancel: true,
        bigText:
            'This is local notification demo in React Native app. Only shown, when expanded.',
        subText: 'Local Notification Demo',
        title: 'Local Notification Title',
        message: 'Expand me to see more',
        vibrate: true,
        vibration: 300,
        playSound: true,
        soundName: 'default',
        actions: '["Yes", "No"]'
    });
}

export const ScheduledNotification = (user, pill, date, many=1) => {
    createChannel();
    const day = getDateString(date);
    PushNotification.localNotificationSchedule({
        autoCancel: true,
        channelId: "pill-reminder",
        bigText:
            `Hello ${user}! How are you? Remember your pill: ${pill} on ${day}. You need ${many} pills. Did you take it?`,
        subText: 'Pill time!',
        title: `It's time to take ${pill}!`,
        message: 'Open me',
        vibrate: true,
        vibration: 500,
        playSound: true,
        soundName: 'default',
        actions: '["Yes", "No"]',
        date: date,
    });
}