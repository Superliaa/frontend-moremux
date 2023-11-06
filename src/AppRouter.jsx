import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { Causas } from './pages/Causas'
import { Centros } from './pages/Centros'
import { ClasificacionTec } from './pages/ClasificacionTec'
import { Condensadores } from './pages/Condensadores'
import { CrearCausa } from './pages/CrearCausa'
import { CrearCentro } from './pages/CrearCentro'
import { CrearClasificaionTec } from './pages/CrearClasificacionTec'
import { CrearCondensadores } from './pages/CrearCondensadores'
import { CrearDefecto } from './pages/CrearDefecto'
import { CrearDiodosRect } from './pages/CrearDiodosRect'
import { CrearDiodoZener } from './pages/CrearDiodoZener'
import { CrearEnlace } from './pages/CrearEnlace'
import { CrearEquiposRep } from './pages/CrearEquiposRep'
import { CrearGerencias } from './pages/CrearGerencias'
import { CrearMarca } from './pages/CrearMarca'
import { CrearModelo } from './pages/CrearModelo'
import { CrearMunicipios } from './pages/CrearMunicipios'
import { CrearPotenciometros } from './pages/CrearPotenciometros'
import { CrearProvincias } from './pages/CrearProvincias'
import { CrearRecurso } from './pages/CrearRecurso'
import { CrearRecursoRecibido } from './pages/CrearRecursoRecibido'
import { CrearRepresentantes } from './pages/CrearRepresentantes'
import { CrearResistencia } from './pages/CrearResistencia'
import { CrearTarea } from './pages/CrearTarea'
import { CrearTrabajoRealizado } from './pages/CrearTrabajoRealizado'
import { CrearTransistoresBipolares } from './pages/CrearTransistoresBipolares'
import { CrearTransistoresIgbt } from './pages/CrearTransistoresIgbt'
import { CrearTransistoresMosfet } from './pages/CrearTransistoresMosfet'
import { CrearUsuario } from './pages/CrearUsuario'
import { Defectos } from './pages/Defectos'
import { DiodosRectificadores } from './pages/DiodosRectificadores'
import { DiodosZener } from './pages/DiodosZener'
import { Enlaces } from './pages/Enlaces'
import { EquiposRep } from './pages/EquiposRep'
import { Gerencias } from './pages/Gerencias'
import { GestionarUsuarios } from './pages/GestionarUsuarios'
import { Marca } from './pages/Marca'
import { Menu } from "./pages/Menu"
import { Modelo } from './pages/Modelo'
import { ModificarMunicipios } from './pages/ModifcarMunicipios'
import { ModificarCausa } from './pages/ModificarCausa'
import { ModificarCentro } from './pages/ModificarCentro'
import { ModificarClasificacionTec } from './pages/ModificarClasificacionTec'
import { ModificarCondensadores } from './pages/ModificarCondensadores'
import { ModificarDefecto } from './pages/ModificarDefecto'
import { ModificarDiodosRect } from './pages/ModificarDiodosRect'
import { ModificarDiodoZener } from './pages/ModificarDiodoZener'
import { ModificarEnlace } from './pages/ModificarEnlace'
import { ModificarEquipoRep } from './pages/ModificarEquipoRep'
import { ModificarGerencias } from './pages/ModificarGerencias'
import { ModificarMarca } from './pages/ModificarMarca'
import { ModificarModelo } from './pages/ModificarModelo'
import { ModificarPotenciometros } from './pages/ModificarPotenciometros'
import { ModificarProvincias } from './pages/ModificarProvincias'
import { ModificarRecurso } from './pages/ModificarRecurso'
import { ModificarRecursoRecibido } from './pages/ModificarRecursoRecibido'
import { ModificarRepresentantes } from './pages/ModificarRepresentante'
import { ModificarResistencias } from './pages/ModificarResistencia'
import { ModificarTarea } from './pages/ModificarTarea'
import { ModificarTrabajoRealizado } from './pages/ModificarTrabajoRealizado'
import { ModificarTransistoresBipolares } from './pages/ModificarTrannsistoresBipolares'
import { ModificarTransistoresIgbt } from './pages/ModificarTransistoresIgbt'
import { ModificarTransistoresMosfet } from './pages/ModificarTransistoresMosfet'
import { ModificarUsuario } from './pages/ModificarUsuario'
import { Municipios } from './pages/Municipios'
import { Potenciometros } from './pages/Potenciometros'
import { Provincias } from './pages/Provincias'
import { Recursos } from './pages/Recursos'
import { RecursosRecibidos } from './pages/RecursosRecibidos'
import { Reprsentante } from './pages/Representantes'
import { Resistencias } from './pages/Resistencias'
import { TablaCondensadores } from './pages/TablaCondensadores'
import { TablaDiodoRect } from './pages/TablaDiodoRect'
import { TablaDiodoZener } from './pages/TablaDiodoZener'
import { TablaPotenciometros } from './pages/TablaPotenciometros'
import { TablaResistencias } from './pages/TablaResistencias'
import { TablaTransistoresBipolares } from './pages/TablaTransistoresBipolares'
import { TablasTransistoresIgbt } from './pages/TablaTransistoresIgbt'
import { TablaTransistoresMosfet } from './pages/TablaTransistoresMosfet'
import { Tareas } from './pages/Tareas'
import { TrabajoRealizado } from './pages/TrabajoRealizado'
import { TransistoresBipolares } from './pages/TransisitoresBipolares'
import { TransistoresIgbt } from './pages/TransistoresIgbt'
import { TransistoresMosfet } from './pages/TransistoresMosfet'
import { Trazas } from "./pages/Trazas"

function AppRouter() {

    return (
        <>

            <BrowserRouter>
                

                <Routes>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/trazas' element={<Trazas/>}/>
                    <Route path='/usuarios' element={<GestionarUsuarios/>}/>
                    <Route path='/crearusuario' element={<CrearUsuario/>}/>
                    <Route path='/modificarusuario' element={<ModificarUsuario/>}/>
                    <Route path='/representantes' element={<Reprsentante/>}/>
                    <Route path='/crearrepresentante' element={<CrearRepresentantes/>}/>
                    <Route path='/modificarrepresentante' element={<ModificarRepresentantes/>}/>
                    <Route path='/provincias' element={<Provincias/>}/>
                    <Route path='/crearprovincia' element={<CrearProvincias/>}/>
                    <Route path='/modificarprovincia' element={<ModificarProvincias/>}/>
                    <Route path='/municipios' element={<Municipios/>}/>
                    <Route path='/crearmunicipios' element={<CrearMunicipios/>}/>
                    <Route path='/modificarmunicipios' element={<ModificarMunicipios/>}/>
                    <Route path='/gerencias' element={<Gerencias/>}/>
                    <Route path='/creargerencias' element={<CrearGerencias/>}/>
                    <Route path='/modificargerencias' element={<ModificarGerencias/>}/>
                    <Route path='/centros' element={<Centros/>}/>
                    <Route path='/modificarcentro' element={<ModificarCentro/>}/>
                    <Route path='crearcentros' element={<CrearCentro/>}/>
                    <Route path='/enlaces' element={<Enlaces/>}/>
                    <Route path='/crearenlaces' element={<CrearEnlace/>}/>
                    <Route path='/modificarenlace' element={<ModificarEnlace/>}/>
                    <Route path='/recursos' element={<Recursos/>}/>
                    <Route path='/crearrecurso' element={<CrearRecurso/>}/>
                    <Route path='/moficarrecurso' element={<ModificarRecurso/>}/>
                    <Route path='recursosrecibidos' element={<RecursosRecibidos/>}/>
                    <Route path='crearrecursosreb' element={<CrearRecursoRecibido/>}/>
                    <Route path='/modificarrecursosreb' element={<ModificarRecursoRecibido/>}/>
                    <Route path='/defectos' element={<Defectos/>}/>
                    <Route path='/creardefectos' element={<CrearDefecto/>}/>
                    <Route path='/modificardefecto' element={<ModificarDefecto/>}/>
                    <Route path='/causas' element={<Causas/>}/>
                    <Route path='/crearcausas' element={<CrearCausa/>}/>
                    <Route path='/modificarcausas' element={<ModificarCausa/>}/>
                    <Route path='/trabajosrealizados' element={<TrabajoRealizado/>}/>
                    <Route path='/creartrabajo' element={<CrearTrabajoRealizado/>}/>
                    <Route path='/modificartrabajo' element={<ModificarTrabajoRealizado/>}/>
                    <Route path='/marca' element={<Marca/>}/>
                    <Route path='/crearmarca' element={<CrearMarca/>}/>
                    <Route path='/modificarmarca' element={<ModificarMarca/>}/>
                    <Route path='/modelo' element={<Modelo/>}/>
                    <Route path='/crearmodelo' element={<CrearModelo/>}/>
                    <Route path='/modificarmodelo' element={<ModificarModelo/>}/>
                    <Route path='/clasificaciontec' element={<ClasificacionTec/>}/>
                    <Route path='/crearclasificaciontec' element={<CrearClasificaionTec/>}/>
                    <Route path='/modificarclasificaciontec' element={<ModificarClasificacionTec/>}/>
                    <Route path='/equiposrep' element={<EquiposRep/>}/>
                    <Route path='/crearequipos' element={<CrearEquiposRep/>}/>
                    <Route path='modificarequipos' element={<ModificarEquipoRep/>}/>
                    <Route path='/tareas' element={<Tareas/>}/>
                    <Route path='/creartareas' element={<CrearTarea/>}/>
                    <Route path='/modificartareas' element={<ModificarTarea/>}/>
                    <Route path='/transistoresbi' element={<TablaTransistoresBipolares/>}/>
                    <Route path='/creartransistoresbi' element={<CrearTransistoresBipolares/>}/>
                    <Route path='/modificartransistoresbi' element={<ModificarTransistoresBipolares/>}/>
                    <Route path='/buscartransistoresbi' element={<TransistoresBipolares/>}/>
                    <Route path='/transistoresmos' element={<TablaTransistoresMosfet/>}/>
                    <Route path='/creartransistoresmos' element={<CrearTransistoresMosfet/>}/>
                    <Route path='/modificartransistoremos' element={<ModificarTransistoresMosfet/>}/>
                    <Route path='/buscartransistoresmos' element={<TransistoresMosfet/>}/>
                    <Route path='/transistoresig' element={<TablasTransistoresIgbt/>}/>
                    <Route path='/creartransistoresig' element={<CrearTransistoresIgbt/>}/>
                    <Route path='/modificartransistoresig' element={<ModificarTransistoresIgbt/>}/>
                    <Route path='/buscartransistoresig' element={<TransistoresIgbt/>}/>
                    <Route path='/diodosrec' element={<TablaDiodoRect/>}/>
                    <Route path='/creardiodorec' element={<CrearDiodosRect/>}/>
                    <Route path='/modificardiodorec' element={<ModificarDiodosRect/>}/>
                    <Route path='/buscardiosorec' element={<DiodosRectificadores/>}/>
                    <Route path='/diodoszener' element={<TablaDiodoZener/>}/>
                    <Route path='/creardiodoze' element={<CrearDiodoZener/>}/>
                    <Route path='/modificardiodoze' element={<ModificarDiodoZener/>}/>
                    <Route path='/buscardiodoze' element={<DiodosZener/>}/>
                    <Route path='/condensadores' element={<TablaCondensadores/>}/>
                    <Route path='/crearcondensadores' element={<CrearCondensadores/>}/>
                    <Route path='/modificarcondensadores' element={<ModificarCondensadores/>}/>
                    <Route path='/buscarcondensadores' element={<Condensadores/>}/>
                    <Route path='/potenciometros' element={<TablaPotenciometros/>}/>
                    <Route path='/crearpotenciometros' element={<CrearPotenciometros/>}/>
                    <Route path='/modificarpotenciometros' element={<ModificarPotenciometros/>}/>
                    <Route path='/buscarpotenciometros' element={<Potenciometros/>}/>
                    <Route path='/resistencias' element={<TablaResistencias/>}/>
                    <Route path='/crearresistencias' element={<CrearResistencia/>}/>
                    <Route path='/modificarresistencias' element={<ModificarResistencias/>}/>
                    <Route path='/buscarresistencias' element={<Resistencias/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter
