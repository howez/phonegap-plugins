/**
 * This class provides extended access to notifications on the device. (iOS)
 * In PhoneGap.plist/Plugins, add this mapping (key:NotificationEx, value:NotificationEx)
 */
NotificationEx = function() {
};

// iPhone only
NotificationEx.prototype.loadingStart = function(options) {
    Cordova.exec(null, null, "NotificationEx","loadingStart", [options]);
};
// iPhone only
NotificationEx.prototype.loadingStop = function() {
    Cordova.exec(null, null, "NotificationEx","loadingStop", []);
};

/**
 * Start spinning the activity indicator on the statusbar
 */
NotificationEx.prototype.activityStart = function() {
    Cordova.exec(null, null, "NotificationEx", "activityStart", []);
};

/**
 * Stop spinning the activity indicator on the statusbar, if it's currently spinning
 */
NotificationEx.prototype.activityStop = function() {
   Cordova.exec(null, null, "NotificationEx", "activityStop", []);
};


Cordova.addConstructor(function() {
    if (typeof navigator.notificationEx == "undefined") navigator.notificationEx = new NotificationEx();
});
