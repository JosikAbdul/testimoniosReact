import './App.css';
import Testimonio from './components/testimonio';

function App() {
  return (
    <div className="App">
      
      <div className='contenedor-principal'>
         <h1>Esto es lo que dicen nuestros Ingenieros: </h1>
       <Testimonio
     nombre='Shawn Wang'
     pais='Singapur'
     imagen='shawn'
     cargo='Ingeniero de software'
     empresa='Amazon'
     testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en Paginas web. En un año tenía un trabajo de seis cifras como ingeniero de software. Paginas web cambió mi vida.'
      />
      </div>
      <Testimonio
     nombre='Sara Chima'
     pais='Nigeria'
     imagen='sara'
     cargo='Ingeniero de software'
     empresa='ChatDesk'
     testimonio='Paginas web fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
      />
     <Testimonio
     nombre='Emma Bostian'
     pais='Suecia'
     imagen='emma'
     cargo='Ingeniero de software'
     empresa='Spotify'
     testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de Paginas web fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en Paginas web me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify.'
      />
      
    </div>
  );
}

export default App;
