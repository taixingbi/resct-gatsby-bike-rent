import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Store = createContext({});

const App = ({ children }) => {
  // Sidebar
  const [isSidebarOpen, setSideBarState] = useState(false);
  // Hours state
  const [hours, setHours] = useState(0);
  // Bike state
  const [adultQnty, setAdultQnty] = useState(0);
  const [childQnty, setChildQnty] = useState(0);
  const [tandemQnty, setTandemQnty] = useState(0);
  const [ebikeQnty, setEbikeQnty] = useState(0);
  const [roadQnty, setRoadQnty] = useState(0);
  const [mountainQnty, setMountainQnty] = useState(0);
  const [elliptigoQnty, setElliptigoQnty] = useState(0);
  const [tricycleQnty, setTricycleQnty] = useState(0);
  const [snowQnty, setSnowQnty] = useState(0);
  const [eHandQnty, setEHandQnty] = useState(0);
  const [handQnty, setHandQnty] = useState(0);
  // Accessories state
  const [childSeatQnty, setChildSeatQnty] = useState(0);
  const [childTrailerQnty, setChildTrailerQnty] = useState(0);
  const [tagalongQnty, setTagalongQnty] = useState(0);
  const [basketQnty, setBasketQnty] = useState(0);
  // Checkout Total state
  const [checkoutSubTotal, setCheckoutSubTotal] = useState(0);
  // Customer Info state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardName, setCreditCardName] = useState('');
  const [creditCardExpDate, setCreditCardExpDate] = useState('');
  const [creditCardCvc, setCreditCardCvc] = useState('');
  // Checkout Loader
  const [isLoading, setIsLoading] = useState(false);
  // Guided Tours
  const [guidedToursAdultBike, setGuidedToursAdultBike] = useState(0);
  const [guidedToursChildBike, setGuidedToursChildBike] = useState(0);
  const [guidedToursDateSelected, setGuidedToursDateSelected] = useState(new Date());
  const [guidedTours, setGuidedTours] = useState('');
  const [timeSelected, setTimeSelected] = useState('');

  return (
    <Store.Provider
      value={{
        state: {
          guidedToursDateSelected,
          guidedToursAdultBike,
          guidedToursChildBike,
          isLoading,
          isSidebarOpen,
          hours,
          adultQnty,
          childQnty,
          tandemQnty,
          ebikeQnty,
          roadQnty,
          mountainQnty,
          elliptigoQnty,
          tricycleQnty,
          snowQnty,
          eHandQnty,
          handQnty,
          childSeatQnty,
          childTrailerQnty,
          tagalongQnty,
          basketQnty,
          guidedTours,
          timeSelected,
          checkoutSubTotal,
          firstName,
          lastName,
          email,
          phoneNumber,
          creditCardNumber,
          creditCardName,
          creditCardExpDate,
          creditCardCvc,
        },
        actions: {
          setGuidedToursDateSelected,
          setGuidedToursAdultBike,
          setGuidedToursChildBike,
          setIsLoading,
          setSideBarState,
          setHours,
          setAdultQnty,
          setChildQnty,
          setTandemQnty,
          setEbikeQnty,
          setRoadQnty,
          setMountainQnty,
          setElliptigoQnty,
          setTricycleQnty,
          setSnowQnty,
          setEHandQnty,
          setHandQnty,
          setChildSeatQnty,
          setChildTrailerQnty,
          setTagalongQnty,
          setBasketQnty,
          setGuidedTours,
          setTimeSelected,
          setCheckoutSubTotal,
          setFirstName,
          setLastName,
          setEmail,
          setPhoneNumber,
          setCreditCardNumber,
          setCreditCardName,
          setCreditCardExpDate,
          setCreditCardCvc,
        },
      }}
    >
      { children }
    </Store.Provider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
