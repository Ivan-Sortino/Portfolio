class xTarjet extends HTMLElement{
    constructor(){
        super();
		this.Titulo = this.getAttribute("titulo");
        this.parrafo = this.getAttribute("parrafo");
        this.repo = this.getAttribute("repo");
        this.pag = this.getAttribute("pag")
        
        this.render();
    }
    
	style (){
        return`
        .cuadrado-padre{
            position: absolute;
            left:32.5%;
            z-index:1;
            width:35%;
            height:35%;
            border: 2px solid white;
            border-radius: 10px;
            color: #EFEFFB;
            background-color: #6c757d;
            
            animation: entrada 1s;
        }
        @keyframes entrada{
            from{
                transform: translateY(-1000px);
                
            }
            to{
                transform: translateY(0px);
            }
        }
        .cuadrado-hijo{
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center; 
            align-items: center;
        }
        .cuadrado-hijo h2{
            margin-top: 25px;
            font-size: 3.2rem; 
        }
        .cuadrado-hijo p{
            font-size: 1.2rem;
            margin-bottom: 20px; 
        
        }
        .boton-Iz{
            margin-right: 20px;
        }
        .boton-Dr,.boton-Iz{
            background-color: #495057;
            font-weight: 800;
            color: white;
            border-style: none;
            border-radius: 5px;
            cursor: pointer;
            padding: 13px 14px 
        }
        .cerrar{
            background-color: #495057;
            font-weight: 800;
            color: white;
            border-style: none;
            cursor: pointer;
            padding: 13px 14px;
            margin-top: 10px;
            border-radius: 5px;
        }
        `
    }
    render() {
       
        this.innerHTML = ` 
        <style>${this.style()}</style>
        <div class='cuadrado-padre'>
            <div class='cuadrado-hijo'>
                <h2>${this.Titulo}</h2>
			    <p>${this.parrafo}</p>
                <div>
                    <a href="${this.repo}"><button class="boton-Iz">Link del Repositorio</button></a>
                    <a href="${this.pag}"><button class="boton-Dr">Link de la Pagina </button></a>
                </div>
			    <button onclick="cerrar();" class='cerrar'>Cerrar</button>
		    </div>
            
        </div>
       
        `;
    }
    
}

customElements.define("tarjeta-proy", xTarjet)
