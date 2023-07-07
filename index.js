const hamburguesa = document.querySelector('.hamburguesa');
const nav = document.querySelector('.nav-bar');
const navbar  = document.getElementById('navbar');
const exis = document.querySelector('.exis');

hamburguesa.addEventListener('click', ()=>{
    nav.classList.toggle('mostrarLista');
    navbar.style.display = 'block';
    hamburguesa.style.display = 'none';
    exis.style.display = 'block';
    exis.style.color = 'white'
})

exis.addEventListener('click', ()=>{
    nav.classList.remove('mostrarLista');
    navbar.style.display = 'none';
    hamburguesa.style.display = 'block';
    exis.style.display = 'none';
})











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
        .tarjeta {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #6c757d;
            color: #EFEFFB;
            padding: 20px;
            border: 2px solid white;
            border-radius: 10px;
            z-index: 9999;
            width: 80%;
            min-width: 100px;
            max-width: 600px;
            animation: entrada .3s;
        }

        @keyframes entrada{
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
        .tarjeta .contenido {
            text-align: center;
        }
        .contenido h2{
            font-size: 3.2rem; 
        }
        .contenido p{
            font-size: 1.2rem;
            margin-bottom: 20px; 
        }
        .links{
            display: flex;
            justify-content: center;
             gap: 1rem;   
        }
        .boton-Dr, .boton-Iz{
            background-color: #495057;
            font-weight: 800;
            color: white;
            border-style: none;
            border-radius: 5px;
            cursor: pointer;
            padding: 13px 14px 
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
        <div class='tarjeta' >
            <div class='contenido'>
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
}
function ocultarBm(){
    bm.style.display = 'none';
}
// ABRIR CERRAR BMW

// ABRIR CERRAR FUNTPETS
function mostrarPets(){
    pets.style.display = 'block';
}
function ocultarPets(){
    pets.style.display = 'none';
}
// ABRIR CERRAR FUNTPETS

// ABRIR CERRAR GLOBETROTTER
function mostrarGlobre(){
    globe.style.display = 'block';
}
function ocultarGlobre(){
    globe.style.display = 'none';
}
// ABRIR CERRAR GLOBETROTTER

// ABRIR CERRAR PRESENTACION
function mostrarPres(){
    pres.style.display = 'block';
}
function ocultarPres(){
    pres.style.display = 'none';
}
// ABRIR CERRAR PRESENTACION

// ABRIR CERRAR NORWAY
function mostrarNorway(){
    norway.style.display = 'block';
}
function ocultarNorway(){
    norway.style.display = 'none';
}
// ABRIR CERRAR NORWAY
// TARJETA