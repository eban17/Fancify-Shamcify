//alert("Hello, world!");
function fontSize() {
    $("sampletext").style.fontSize = "24pt";
}

function textStyle() {
    if ($("FancyShmancy").checked) {
		alert("clicked!");
        $("sampletext").style.fontWeight = "bold";
        $("sampletext").style.textDecoration = "underline blink";
        $("sampletext").style.color = "blue";
    } else if ($("BoringBetty").checked) {
        $("sampletext").style.fontWeight = "normal";
        $("sampletext").style.textDecoration = "none";
        $("sampletext").style.color = "black";
    }
}

function snoopify() {
    $("sampletext").value = $("sampletext").value.toUpperCase();
    $("sampletext").value = $("sampletext").value.split(".").join("-Moo.");
}