window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        var Arr = ["#ListKRFilterDetectorFirefox", "#ListKRFilterDetectorEdge", "#ListKRFilterDetectorOpera", "#ListKRFilterDetectorCon", "#ListKRFilterDetectorChrome", "#ListKRFilterDetectorSafari", "#ListKRFilterDetectorWin", "#ListKRFilterDetectorMac", "#ListKRFilterDetectorAnd", "#ListKRFilterDetectoriOS"];
        for (var key of Arr) {
            if (document.querySelector(key).width !== 1)
                 window.location = "https://github.com/List-KR/List-KR#support";
        }
        window.location = "https://github.com/List-KR/List-KR";
    }, 3500);
});
