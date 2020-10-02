document.getElementById('convert').addEventListener("click", function () {
    var feet = parseInt(document.getElementById('feet').value * 12); // converts to inches
    var inches = parseFloat(document.getElementById('inches').value);
    var cm = (feet + inches) * 2.54;
    var totalCm = cm.toFixed(2);

    
    document.getElementById('result').innerHTML = totalCm;
});