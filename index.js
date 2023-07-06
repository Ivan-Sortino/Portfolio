// MENU HAMBURGUESA INICIO
const hamburguesa = document.querySelector('.bi');
const nav = document.querySelector('.nav-bar');

hamburguesa.addEventListener('click', () =>{
    nav.classList.add('mobile')
})
// MENU HAMBURGUESA FINAL






















// TARJETA
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
            left: 0;
            right: 0;
            margin: auto;
            z-index:1;
            border: 2px solid white;
            border-radius: 10px;
            color: #EFEFFB;
            background-color: #6c757d;
            animation: entrada 0.7s;
            width: auto;
            padding: 25px 30px;
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
        .links{
            display: flex;
            gap: 1rem;
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
        <div class='cuadrado-padre' >
            <div class='cuadrado-hijo'>
                <h2>${this.Titulo}</h2>
			    <p>${this.parrafo}</p>
                <div class='links'>
                    <div>
                        <a href="${this.repo}" target="_blank"><button class="boton-Iz">Link del Repositorio</button></a>
                    </div>
                    <div>
                        <a href="${this.pag}" target="_blank"><button class="boton-Dr">Link de la Pagina </button></a>
                    </div>
                </div>
			    <button onclick="${this.boton}" class='cerrar' >Cerrar</button>
		    </div>
            
        </div>
       
        `;
    }
    
}

customElements.define("tarjeta-proy", xTarjet);

const bm = document.querySelector('.bm-no');
const pets = document.querySelector('.pets-no');
const globe = document.querySelector('.globre-no');
const pres = document.querySelector('.pres-no');
const norway = document.querySelector('.norway-no');
const body = document.querySelector('.Body');
const cerrar = document.querySelector('.cerrar')
const padre = document.querySelector('.cuadrado-padre');


// ABRIR CERRAR BMW
function mostrarBm(){
    bm.style.display = 'block';   
    body.classList.add('oscuro');
}
function ocultarBm(){
    bm.style.display = 'none';
    body.classList.remove('oscuro');
    
}
// ABRIR CERRAR BMW

// ABRIR CERRAR FUNTPETS
function mostrarPets(){
    pets.style.display = 'block';
    body.classList.add('oscuro');
}
function ocultarPets(){
    pets.style.display = 'none';
    body.classList.remove('oscuro');
}
// ABRIR CERRAR FUNTPETS

// ABRIR CERRAR GLOBETROTTER
function mostrarGlobre(){
    globe.style.display = 'block';
    body.classList.add('oscuro');
}
function ocultarGlobre(){
    globe.style.display = 'none';
    body.classList.remove('oscuro');
}
// ABRIR CERRAR GLOBETROTTER

// ABRIR CERRAR PRESENTACION
function mostrarPres(){
    pres.style.display = 'block';
    body.classList.add('oscuro');
}
function ocultarPres(){
    pres.style.display = 'none';
    body.classList.remove('oscuro');
}
// ABRIR CERRAR PRESENTACION

// ABRIR CERRAR NORWAY
function mostrarNorway(){
    norway.style.display = 'block';
    body.classList.add('oscuro');
}
function ocultarNorway(){
    norway.style.display = 'none';
    body.classList.remove('oscuro');
}
// ABRIR CERRAR NORWAY
// TARJETA