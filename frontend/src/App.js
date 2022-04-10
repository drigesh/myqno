import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
// import firebase from './util/firebase';
function App() {



// const dbRef = firebase.database().ref('Todo');

// get(child(dbRef, `shop`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });




  return (
    <div className="App">
      
    <Header />

    <Body />

    <Footer />
    
    </div>
  );
}

export default App;
