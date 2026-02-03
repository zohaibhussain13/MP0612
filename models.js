class Multimedia {


	constructor(titol, durada) {	    
		this.titol = titol;
		this.durada = durada;
		this._views = 0;
		}

      	play() {
	    	console.log("Reproduint...")
	    	this._views += 1;
      		}
	
      	getViews() {
	      	return this._views;
	      	}

	_calcularCostServer() {
		return this.durada * 0.01;
	}
}



