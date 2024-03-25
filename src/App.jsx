
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header';
import MyCard from './Componentes/MyCard';
import Footer from './Componentes/Footer';


function App() {
 
  return (
    <>
    <Header title='ADOPTA UN PERRITO'/>
    <main className='tarjetas'>
    <MyCard 
    image="https://images.pexels.com/photos/2295236/pexels-photo-2295236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Costilla"
    description="Costilla ofrece una oportunidad para experimentar las alegrías y responsabilidades de cuidar a un cachorro desde sus primeros días. Su ternura y encanto seguramente conquistarán el corazón de aquellos que decidan brindarle un hogar lleno de cariño y atención."
    nameT="Adoptame"
    color="primary"
    />
      <MyCard 
    image="https://images.pexels.com/photos/247937/pexels-photo-247937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Macha"
    description="A sus 8 meses, Macha ha pasado por la etapa inicial de la infancia y probablemente ya haya adquirido algunas habilidades básicas de entrenamiento. Su disposición juguetona y enérgica lo convierte en un compañero perfecto para actividades al aire libre y juegos interactivos."
    nameT="Adoptame"
    color="warning"
    />
      <MyCard 
    image="https://images.pexels.com/photos/1719626/pexels-photo-1719626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Odie"
    description="Aunque su exterior pueda parecer imponente, es probable que Odie sea cariñosa y leal con su familia. Su naturaleza protectora puede manifestarse en su disposición para brindar seguridad y afecto a aquellos a quienes considera parte de su círculo."
    nameT="Adoptame"
    color="danger"
    />
      <MyCard 
    image="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Balto"
    description="Balto es una encantadora cachorra 3 meses que está buscando un hogar amoroso. Es una perrita juguetona y llena de energía, típica de su edad. Su pelaje es suave y tiene una expresión tierna en sus ojos curiosos."
    nameT="Adoptame"
    color="black"
    />
    </main>
    <Footer />
    </>
  )
}

export default App