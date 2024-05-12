const PopUp = ({ openPopUp, closePopUp }) => {

    const handlelosePopUp = (e) => {
      if (e.target.id === 'ModelContainer') {
        closePopUp();
      }
    }
}