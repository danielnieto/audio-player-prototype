Class("NeonWidget").inherits(Widget)({
    prototype: {
        element: $("<h1>This is a Neon Widget</h1>"),
        init: function() {
            console.log("initialized");
        }
    }
});
