Observations:
=======

When starting the application with no users, and after registering a new user, the drag event fires most of the time.

After signing out, and then signing in again, the drag event does not fire.  If I hit the reload button, the drag event works again.

Opening a new browser / browser tab, and going to http://127.0.0.1:3000/ does very often fail, with no map displaye at all.  The console shows:

    Exception in template helper: TypeError: Cannot read property 'latitude' of undefined
        at Object.Template.body.helpers.mapOptions (http://127.0.0.1:3000/client/map/map.js?4fa01f2fc4387107023be8321a4788db9f6decba:9:44)
        at http://127.0.0.1:3000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2880:16
        at http://127.0.0.1:3000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:1651:16
        at http://127.0.0.1:3000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2928:66
        at Function.Template._withTemplateInstanceFunc (http://127.0.0.1:3000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:3476:12)
        at http://127.0.0.1:3000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2927:27
        at Object.Spacebars.call (http://127.0.0.1:3000/packages/spacebars.js?7bafbe05ec09b6bbb6a3b276537e4995ab298a2f:172:18)
        at http://127.0.0.1:3000/client/map/template.map.js?2a5fcdf6091ded7412358647b9ca3d67d74344ca:12:28
        at wrappedArgFunc (http://127.0.0.1:3000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2795:14)
        at null.<anonymous> (http://127.0.0.1:3000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2599:26)
    meteor.js:888 Exception from Tracker afterFlush function:
    meteor.js:888 Error: [GoogleMaps - Missing argument: options]
        at null.<anonymous> (dburles_google-maps.js:142)
        at blaze.js:1865
        at Function.Template._withTemplateInstanceFunc (blaze.js:3476)
        at blaze.js:1864
        at Object.Blaze._withCurrentView (blaze.js:2197)
        at viewAutorun (blaze.js:1863)
        at Tracker.Computation._compute (tracker.js:327)
        at new Tracker.Computation (tracker.js:243)
        at Object.Tracker.autorun (tracker.js:566)
        at Blaze.View.autorun (blaze.js:1875)