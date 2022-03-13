setTimeout(() => {

var Arr = ["#ListKRFilterDetectorFirefox", "#ListKRFilterDetectorEdge", "#ListKRFilterDetectorOpera", "#ListKRFilterDetectorCon", "#ListKRFilterDetectorChrome", "#ListKRFilterDetectorSafari", "#ListKRFilterDetectorWin", "#ListKRFilterDetectorMac", "#ListKRFilterDetectorAnd", "#ListKRFilterDetectoriOS"];
for (var i = 0; i < Arr.length; i++)
{
    if (document.querySelector(Arr[i]).width != 1)
    {
        window.location = "https://github.com/List-KR/List-KR/issues/223";
    }
}
window.location = "https://github.com/List-KR/List-KR";
}, 1500);