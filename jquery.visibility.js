(function($, window, undefined) {

    var _visibility_event_name = 'visibilityChange';
    var _callback, _callback_arguments;

    var state, visibilityChange;

    if (typeof document.hidden !== "undefined") {
        visibilityChange = "visibilitychange";
        state = "visibilityState";
    } else if (typeof document.mozHidden !== "undefined") {
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState";
    } else if (typeof document.msHidden !== "undefined") {
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState";
    } else if (typeof document.webkitHidden !== "undefined") {
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState";
    }

    $.fn[_visibility_event_name] = function(fn) {
        _callback = fn;
        _callback_arguments = Array.prototype.slice.call(arguments, 1);
    }

    $(document).on(visibilityChange, function(e) {
        var visibilityEvent = [{'state': state, 'name': visibilityChange}];
        var combined_args = $.merge(visibilityEvent, _callback_arguments);
        _callback.apply(this, combined_args);
    });

})(jQuery, this);