(function () {
    function currentLanguage() {
        return new URLSearchParams(window.location.search).get("lang") === "cn" ? "cn" : "en";
    }

    function addLanguageToInternalLinks(language) {
        document.querySelectorAll("a.language-aware-link").forEach(function (link) {
            var url = new URL(link.href, window.location.origin);
            if (url.origin !== window.location.origin) return;
            url.searchParams.set("lang", language);
            link.href = url.pathname + url.search + url.hash;
        });
    }

    function setPageLanguage(language) {
        document.documentElement.dataset.language = language;
        document.documentElement.lang = language === "cn" ? "zh-CN" : "en";
        addLanguageToInternalLinks(language);

        var isProjects = window.location.pathname.indexOf("projects") !== -1;
        document.title = language === "cn"
            ? (isProjects ? "项目 - Xinyi Zhu" : "主页 - Xinyi Zhu")
            : (isProjects ? "Projects - Xinyi Zhu" : "Homepage - Xinyi Zhu");
    }

    document.addEventListener("DOMContentLoaded", function () {
        var language = currentLanguage();
        setPageLanguage(language);

        document.querySelectorAll("[data-language-switch]").forEach(function (button) {
            button.addEventListener("click", function () {
                var nextLanguage = currentLanguage() === "cn" ? "en" : "cn";
                var url = new URL(window.location.href);
                url.searchParams.set("lang", nextLanguage);
                window.location.assign(url.toString());
            });
        });
    });
})();
