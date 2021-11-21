import data from "../data/data"
import { useParams } from "react-router-dom";

function HotelPage(props) {
    const params = useParams();
    const result = data.data.find( ({ שם }) => שם ===  params.hotelName);

  return <div className="w-screen h-scree">
      <h1>
          {result.שם}
      </h1>
      <h2>
          {result.רחוב}
      </h2>
      <h2>
          {result.בית}
      </h2><h2>
          {result.טלפון}
      </h2>
      </div>;
}
export default HotelPage;

//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>

//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }

//   render(<App />);
