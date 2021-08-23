import React, {useContext, useState} from 'react'
import { ModalContext } from '../context/ModalContext'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 410,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
  
const Receta = ({receta}) => {
    // Configuracion del material ui
    const [modalStyle] =  useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }
    
    const {setIdReceta, informacion, setInformacion} = useContext(ModalContext)

    const mostrarIngredientes = informacion =>{
        let ingredientes = [];
        for (let  ing = 1;  ing < 16;  ing++) {
            if( informacion[`strIngredient${ing}`]){
                ingredientes.push(
                    <li>{informacion[`strIngredient${ing}`]} - {informacion[`strMeasure${ing}`]}</li>
                )
            }            
        }
        return ingredientes
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>
                <img src={receta.strDrinkThumb} />
                <div className="card-body">
                    <button
                        className="btn btn-primary btn-block"
                        onClick={ ()=> { 
                            setIdReceta(receta.idDrink)
                            handleOpen()
                        }}
                    >
                        Ver Receta
                    </button>
                    {/* Definicion del componete modal  */}
                    <Modal
                        open={open}
                        onClose={()=>{
                            setIdReceta(null)
                            setInformacion({})
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{informacion.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>{informacion.strInstructions}</p>
                            <img src={informacion.strDrinkThumb} className="img-fluid my-4" alt={informacion.strDrink} />
                            <h3>Ingredientes</h3>
                            <ul>
                                {mostrarIngredientes(informacion)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>

        </div>
        
    )
}

export default Receta
