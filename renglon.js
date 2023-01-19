class Renglon {
    constructor(propiedades = {}){
        this.codigo = propiedades.codigo ? propiedades.codigo: null;
        this.ciudad = propiedades.ciudad ? propiedades.ciudad: null;
        this.estado = propiedades.estado ? propiedades.estado: null;
        this.fechaInicio = propiedades.fechaInicio ? propiedades.fechaInicio: null;
        this.fechaFinal = propiedades.fechaFinal ? propiedades.fechaFinal: null;
        this.enero = propiedades.enero ? propiedades.enero: null;
        this.febrero = propiedades.febrero ? propiedades.febrero: null;
        this.marzo = propiedades.marzo ? propiedades.marzo: null;
        this.abril = propiedades.abril ? propiedades.abril: null;
        this.mayo = propiedades.mayo ? propiedades.mayo: null;
        this.junio = propiedades.junio ? propiedades.junio: null;
        this.julio = propiedades.julio ? propiedades.julio: null;
        this.agosto = propiedades.agosto ? propiedades.agosto: null;
        this.septiembre = propiedades.septiembre ? propiedades.septiembre: null;
        this.octubre = propiedades.octubre ? propiedades.octubre: null;
        this.noviembre = propiedades.noviembre ? propiedades.noviembre: null;
        this.diciembre = propiedades.diciembre ? propiedades.diciembre: null;
        this.suma = propiedades.suma ? propiedades.suma: null;
    }
}

module.exports = Renglon;