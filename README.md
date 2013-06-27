# jQuery Visibility Change Event

This jQuery plugin allows you to execute a particular callback when the browser's visibility event changes. This event usually occurs when you switch to another tab.

# Examples

    $(window).visibilityChange(function() {
        // This will be executed when you navigate away from the tab
        console.log("Goodbye World")
    });

Pass in some arguments:

    var a = 1, b = 2;
    $(window).visibilityChange(function() {
        // This will be executed when you navigate away from the tab
        console.log("Goodbye World. Here are some arguments", arguments)
    }, a, b);


# Testing

## Browsers

Google Chrome v28

## jQuery

Should work for jQuery > 1.7
