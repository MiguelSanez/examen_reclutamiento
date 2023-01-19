const Renglon = require('./renglon');
const fs = require('fs');

const init = async () => {
    const response = await fetch("https://www1.ncdc.noaa.gov/pub/data/ccd-data/avgsnf14.txt");
    const body = await response.text();
    const rows = body.split("\n");
    rows.splice(0,1);
    const document = new Renglon();
    const resultset = [];
    for (const row of rows) {
        const cpCiudadEstado = row.substring(0,37).trim().split(',');
        if (cpCiudadEstado.length !== 2) break;
        document.codigo = cpCiudadEstado[0].substring(0,5);
        document.ciudad = cpCiudadEstado[0].substring(6);
        document.estado = cpCiudadEstado[1];
        const fechas = row.substring(37, 50).trim().split("-");
        document.fechaInicio = fechas[0];
        document.fechaFinal = fechas[1];
        document.enero = row.substring(51,57).trimStart().trimEnd();
        document.febrero = row.substring(57,63).trimStart().trimEnd();
        document.marzo = row.substring(63,69).trimStart().trimEnd();
        document.abril = row.substring(69,75).trimStart().trimEnd();
        document.mayo = row.substring(75,81).trimStart().trimEnd();
        document.junio = row.substring(81,87).trimStart().trimEnd();
        document.julio = row.substring(87,93).trimStart().trimEnd();
        document.agosto = row.substring(93,99).trimStart().trimEnd();
        document.septiembre = row.substring(99,105).trimStart().trimEnd();
        document.octubre = row.substring(105,111).trimStart().trimEnd();
        document.noviembre = row.substring(111,117).trimStart().trimEnd();
        document.diciembre = row.substring(117,123).trimStart().trimEnd();
        document.suma = row.substring(123,129).trimStart().trimEnd();

        resultset.push(new Renglon(document));
    }
    saveCsv(resultset);
}

const saveCsv = async (resultset) => {
    const csvData = [];
    csvData.push(["code", "state", "city", "start", "end", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "sum"]);
    for (const row of resultset) {

        const fechaInicio = "01/" + row.fechaInicio.substring(4, 6) + "/" + row.fechaInicio.substring(0, 4);
        const fechaFinal = "31/" + row.fechaFinal.substring(4, 6) + "/" + row.fechaFinal.substring(0, 4);

        csvData.push([
            row.codigoPostal,
            row.estado,
            row.ciudad,
            fechaInicio,
            fechaFinal,
            row.enero,
            row.febrero,
            row.marzo,
            row.abril,
            row.mayo,
            row.junio,
            row.julio,
            row.agosto,
            row.septiembre,
            row.octubre,
            row.noviembre,
            row.diciembre,
            row.suma,
        ]);
    }
    fs.writeFileSync('mercados-pecuarios.csv', csvData.join('\n'));
}

init();