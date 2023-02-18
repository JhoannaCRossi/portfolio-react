import React from 'https://esm.sh/react-dom@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

//recuperamos el elemento html del div que creamos
const appDomElement = document.getElementById('app');

//como creamos una app en react?
//creamos un root, un tronco para el arbol
const root = ReactDOM.createRoot(appDomElement);

//luego el tenemos que decir lo que queremos renderizar
//no se puede renderizar el html puro, 
//tienes q crear el elemento para decirle a react lo que quiere renderizar
root.render('<button>Me gusta</button>');

//creamos el elemento entonces
//primer paramento lo que quieres crear
//segundo parametro propiedades o atributor que queremos para el elemento
//tercer parametro lo que envuelve el elemento
const button = React.createElement('button', {"data-id":123}, 'Me gusta');
root.render(button);

//no se puede renderizar mas de un elemento
//entonces envolvemos en fragment
const button1 = React.createElement('button', {"data-id":123}, 'Me gusta');
const button2 = React.createElement('button', {"data-id":456}, 'Me gusta');
const button3 = React.createElement('button', {"data-id":789}, 'Me gusta');

const div = React.createElement(React.Fragment, null, [button1, button2, button3])
root.render(div);


