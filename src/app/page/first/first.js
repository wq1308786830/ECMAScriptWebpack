/**
 * Created by flyin on 2017/4/14.
 */
async function determineDate() {
    const jquery = await import('jquery');
    return jquery.default;
}

determineDate().then($ => {
    "use strict";

    class First {
        constructor() {

        }

        static alertC() {
            $(document.body).html('<a href="https://www.google.com">aaa</a>');
        }
    }

    First.alertC();
});
