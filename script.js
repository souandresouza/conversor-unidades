function converterUnidades() {
    // Obter valores dos inputs
    const metros = parseFloat(document.getElementById('metros').value) || 0;
    const centimetros = parseFloat(document.getElementById('centimetros').value) || 0;
    const pixels = parseFloat(document.getElementById('pixels').value) || 0;
    const dpiInput = parseFloat(document.getElementById('dpi').value) || 300; // DPI padrão
    const autoDpiCheckbox = document.getElementById('auto-dpi').checked;

    // Define o DPI com base no checkbox
    const dpi = autoDpiCheckbox ? 72 : dpiInput;

    // Fatores de conversão
    const pxPorMetro = (dpi / 2.54) * 100; // 1 metro = (DPI / 2.54) * 100 pixels
    const pxPorCentimetro = pxPorMetro / 100;

    // Determinar qual unidade foi preenchida para evitar conflitos
    if (metros) {
        // Converter metros para outras unidades
        document.getElementById('centimetros').value = metros * 100;
        document.getElementById('pixels').value = metros * pxPorMetro;
    } else if (centimetros) {
        // Converter centímetros para outras unidades
        document.getElementById('metros').value = centimetros / 100;
        document.getElementById('pixels').value = centimetros * pxPorCentimetro;
    } else if (pixels) {
        // Converter pixels para outras unidades
        document.getElementById('metros').value = pixels / pxPorMetro;
        document.getElementById('centimetros').value = (pixels / pxPorMetro) * 100;
    }
}