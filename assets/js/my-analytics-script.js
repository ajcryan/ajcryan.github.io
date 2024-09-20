// my_analytics_script.js

(function() {
    // Function to generate a unique identifier for the user
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Function to send data to the analytics server
    function sendAnalyticsData(data) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://your-analytics-server.com/collect", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
    }

    // Collect basic analytics data
    var analyticsData = {
        userId: localStorage.getItem('userId') || generateUUID(),
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
    };

    // Store the userId in localStorage if it's not already there
    if (!localStorage.getItem('userId')) {
        localStorage.setItem('userId', analyticsData.userId);
    }

    // Send the analytics data
    sendAnalyticsData(analyticsData);
})();