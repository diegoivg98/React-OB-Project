//import logo from './logo.svg';
import './App.css';
import AxiosExample from './components/pure/AxiosExample';
// import FetchExample from './components/pure/FetchExample';
// import AsyncExample from './components/pure/AsyncExample';
// import ObservableExample from './components/pure/ObservableExample';
// import RegisterFormik from './components/pure/forms/registerFormik';
// import OptionalRender from './components/pure/optionalRender';
//import Father from './components/containers/father';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
// import TaskListComponent from './components/containers/task_list';
// import LoginFormik from './components/pure/forms/loginFormik';
//import GreetingStyled from './components/pure/greetingStyled';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
      {/* Calling the Greeting component. */}
      {/*<Greeting name={"diego"}></Greeting>*/}
      
      {/* Calling the Greetingf component and passing the name prop. */}
      {/*<Greetingf name="Diego"></Greetingf>*/}

      {/* Calling the TaskListComponent component. */}
      {/* <TaskListComponent></TaskListComponent> */}

      {/* Calling the Ejemplo1 component. */}
      {/*<Ejemplo1></Ejemplo1>*/}

      {/* Calling the Ejemplo2 component. */}
      {/*<Ejemplo2></Ejemplo2>*/}

      {/* Calling the MiComponenteConContexto component. */}
      {/*<MiComponenteConContexto></MiComponenteConContexto>*/}

      {/* Calling the Ejemplo4 component. */}
      {/*<Ejemplo4 nombre="Diego">
        <h3>Contenido del props.children</h3>
      </Ejemplo4>*/}
      {/*<GreetingStyled name="Diego"></GreetingStyled>*/}
      {/*</header>*/}
      {/*<Father></Father>*/}
      {/* <OptionalRender></OptionalRender> */}

      {/* ejemplo de uso de Formik */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplo de procesos asincronos */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      <AxiosExample></AxiosExample>
    </div>
  );
}

export default App;
