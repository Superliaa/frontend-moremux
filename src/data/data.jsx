import {BsChevronCompactDown} from 'react-icons/bs';
import {GiElectricalResistance} from "react-icons/gi";
import { TbCircuitDiode, TbCircuitCapacitor } from "react-icons/tb";
import { FaUsers, FaCoins, FaSchoolCircleCheck, FaPersonChalkboard, FaListCheck, FaDiagramProject ,FaDolly,FaP, FaFolderPlus, FaFolderOpen, FaFileCircleCheck, FaHotel, FaFileImport, FaPeopleRoof, FaM, FaClipboardList, FaClipboardUser,FaArrowTrendUp, FaGears} from "react-icons/fa6";

export const Data = {
    administracion: {
      nombre: "Administración",
      elementos: [ { nombre: "Trazas", icon: <FaGears className='text-blue-700 text-4xl'/> },
                   { nombre: "Respaldo Base de Datos", icon: <FaCoins className='text-blue-700 text-4xl'/> },
                   { nombre: "Usuarios", icon: <FaUsers className='text-blue-700 text-4xl' /> },],
      
    },
    nomencladores: {
      nombre: "Nomencladores",
      elementos: [{nombre:"Centros", icon:<FaSchoolCircleCheck className='text-blue-700 text-4xl' />},
                  {nombre:"Equipos", icon:<FaDolly className='text-blue-700 text-4xl' />},
                  {nombre:"Tareas", icon:<FaListCheck className='text-blue-700 text-4xl'/>} ,
                  {nombre:"Técnicos", icon:<FaPersonChalkboard className='text-blue-700 text-4xl'/>},
                  {nombre:"Enlaces", icon:<FaDiagramProject className='text-blue-700 text-4xl'/>},
                 ],
    },
    modelos: {
      nombre: "Modelos",
      elementos: [
        { nombre: "Clasificación Técnica", icon: <FaClipboardUser className='text-blue-700 text-4xl' /> },
        { nombre: "Clasificación Tarea", icon: <FaClipboardList className='text-blue-700 text-4xl'/> },
        { nombre: "Trabajos Realizados", icon: <FaFileCircleCheck className='text-blue-700 text-4xl' /> },
        { nombre: "Causas", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Defectos", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Marcas", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Modelos", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Provincias", icon: <FaP className='text-blue-700 text-4xl' /> },
        { nombre: "Municipios", icon: <FaM className='text-blue-700 text-4xl' /> },
        { nombre: "Representantes", icon: <FaPeopleRoof className='text-blue-700 text-4xl'/> },
        { nombre: "Gerencias", icon: <FaHotel className='text-blue-700 text-4xl'/> },
      ],
    },
    componentes: {
      nombre: "Componentes",
      elementos: [
        { nombre: "Transistores", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Potenciómetros", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Transformadores", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Diodos", icon: <TbCircuitDiode className='text-blue-700 text-4xl' /> },
        { nombre: "Reguladores", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Fusibles", icon: <FaGears className='text-blue-700 text-4xl'/> },
        { nombre: "Condensadores", icon: <TbCircuitCapacitor className='text-blue-700 text-4xl' /> },
        { nombre: "Resistencias", icon: <GiElectricalResistance className='text-blue-700 text-4xl'/> },
      ],
    },
    ordenesTrabajo: {
      nombre: "Órdenes de Trabajo",
      elementos: [
        { nombre: "Ver Orden de Trabajo", icon: <FaFolderOpen className='text-blue-700 text-4xl'/> },
        { nombre: "Crear Orden de Trabajo", icon: <FaFolderPlus className='text-blue-700 text-4xl'/> },
      ],
    },
    indicadores: {
      nombre: "Indicadores",
      elementos: [
        { nombre: "Indicadores Taller", icon: <FaArrowTrendUp className='text-blue-700 text-4xl' /> },
        { nombre: "Indicadores Técnico", icon: <FaArrowTrendUp className='text-blue-700 text-4xl' /> },
      ],
    },
    informes: {
      nombre: "Informes",
      elementos: [
        { nombre: "Actas de Devolución de Equipos", icon: <FaFileImport className='text-blue-700 text-4xl' />},
        { nombre: "Comportamiento Logístico", icon: <FaGears className='text-blue-700 text-4xl'/> },
      ],
    },
  };
  