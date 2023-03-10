(function($) {
    $.fn.portjobPhoneValidate     = function () {
        var phoneRegexp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
            return phoneRegexp.test($(this).val());
    }
    $.fn.portjobEmailValidate     = function () {
        var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegexp.test($(this).val());
    }
})(jQuery);