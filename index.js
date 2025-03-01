    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'; // or 'auto' (depends on behavior)
    }

    window.addEventListener("beforeunload", function() {
        sessionStorage.setItem("scrollPos", window.scrollY);
    });

    window.addEventListener("load", function() {
        let scrollPos = sessionStorage.getItem("scrollPos");
        if (scrollPos !== null) {
            window.scrollTo(0, scrollPos);
        }
    });
