class xTarjet extends HTMLElement{
    constructor(){
        super();
		this.Titulo = this.getAttribute("titulo");
        this.parrafo = this.getAttribute("parrafo");
        this.repo = this.getAttribute("repo");
        this.pag = this.getAttribute("pag")
        this.boton = this.getAttribute("boton-cerrar")
        this.render();
    }
    
	style (){
        return`
        .cuadrado-padre{
            position: absolute;
            left:32.5%;
            z-index:1;
            border: 2px solid white;
            border-radius: 10px;
            color: #EFEFFB;
            background-color: #6c757d;
            animation: entrada 0.7s;
            width: 100vh;
            max-width: 600px;
            margin-top: 100px;
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
            
            font-size: 3.2rem; 
        }
        .cuadrado-hijo p{
            font-size: 1.2rem;
            margin-bottom: 20px; 
        
        }
        .boton-Iz{
            margin-right: 20px;
        }
        .boton-Iz:hover{
            transition: 0.5s;
            background-color: white;
            color: #495057;
        }
        .boton-Dr:hover{
            transition: 0.5s;
            background-color: white;
            color: #495057;
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
            margin-bottom:10px;
            border-radius: 5px;
        }
        .cerrar:hover{
            transition: 0.5s;
            background-color: white;
            color: #495057;
        }
        
        `
    }
    render() {
       
        this.innerHTML = ` 
        <style>${this.style()}</style>
        <div class='cuadrado-padre ' >
            <div class='cuadrado-hijo'>
                <h2>${this.Titulo}</h2>
			    <p>${this.parrafo}</p>
                <div>
                    <a href="${this.repo}" target="_blank"><button class="boton-Iz">Link del Repositorio</button></a>
                    <a href="${this.pag}" target="_blank"><button class="boton-Dr">Link de la Pagina </button></a>
                </div>
			    <button onclick="${this.boton}" class='cerrar' >Cerrar</button>
		    </div>
            
        </div>
       
        `;
    }
    
}

customElements.define("tarjeta-proy", xTarjet);



// ABRIR CERRAR BMW
function mostrarBm(){
    document.querySelector('.bm-no').style.display = 'block';   
    document.querySelector('.abc').classList.add('oscuro');
}
function ocultarBm(){
    document.querySelector('.bm-no').style.display = 'none';
    document.querySelector('.abc').classList.remove('oscuro');
    
}
// ABRIR CERRAR BMW

// ABRIR CERRAR FUNTPETS
function mostrarPets(){
    document.querySelector('.pets-no').style.display = 'block';
    document.querySelector('.abc').classList.add('oscuro');
}
function ocultarPets(){
    document.querySelector('.pets-no').style.display = 'none';
    document.querySelector('.abc').classList.remove('oscuro');
}
// ABRIR CERRAR FUNTPETS

// ABRIR CERRAR GLOBETROTTER
function mostrarGlobre(){
    document.querySelector('.globre-no').style.display = 'block';
    document.querySelector('.abc').classList.add('oscuro');
}
function ocultarGlobre(){
    document.querySelector('.globre-no').style.display = 'none';
    document.querySelector('.abc').classList.remove('oscuro');
}
// ABRIR CERRAR GLOBETROTTER

// ABRIR CERRAR PRESENTACION
function mostrarPres(){
    document.querySelector('.pres-no').style.display = 'block';
    document.querySelector('.abc').classList.add('oscuro');
}
function ocultarPres(){
    document.querySelector('.pres-no').style.display = 'none';
    document.querySelector('.abc').classList.remove('oscuro');
}
// ABRIR CERRAR PRESENTACION

// ABRIR CERRAR NORWAY
function mostrarNorway(){
    document.querySelector('.norway-no').style.display = 'block';
    document.querySelector('.abc').classList.add('oscuro');
}
function ocultarNorway(){
    document.querySelector('.norway-no').style.display = 'none';
    document.querySelector('.abc').classList.remove('oscuro');
}
// ABRIR CERRAR NORWAY

