var user = {
    email: "noman@.com", userId: 908, startTrial: function () {
        return "Test return";
    },
    endTrial: function () { return "ended"; },
    getCoupon: function (name, off) { return 300; }
};
console.log('user', user);
