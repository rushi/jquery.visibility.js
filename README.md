# jQuery Visibility Change Event

This cross-browser jQuery plugin allows you to execute a particular callback when the browser's visibility event changes. This event usually occurs when you switch to another tab.

# Examples

    $(window).visibilityChange(function(event) {
        // This will be executed when you switch to another tab
        console.log("Goodbye World. I fired on" + event.name)
    });

Pass in some arguments:

    var a = 1, b = 2;
    $(window).visibilityChange(function(event) {
        // This will be executed when you switch to another tab
        console.log("Goodbye World. Here are some arguments", arguments)
    }, a, b);

# Use Cases

What could you use the Visibility API for? 

* Track the time users actually spend on your website. This number maybe significantly lower than your analytics package reports
* A site has an image carousel that shouldn't advance to the next slide unless the user is viewing the page.
* An application showing a dashboard of information doesn't want to poll the server for updates when the page isn't visible.
* A page wants to detect when it is being prerendered so it can keep accurate count of page views.

Check out [Mozilla's Documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API) or the [Google Developer's API](https://developers.google.com/chrome/whitepapers/pagevisibility) for more detailed information.

# Testing

## Browsers

Google Chrome v28, Firefox 22, Internet Explorer isn't tested.

## jQuery

Tested on jQuery > 1.7
