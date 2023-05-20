import UserData from 'shared/components/UserPageComponents/UserData/UserData';
import PetsData from 'shared/components/UserPageComponents/PetsData/PetsData';
import ModalCongrats from 'shared/components/UserPageComponents/ModalCongrats/ModalCongrats';
import { useState, useEffect } from 'react';
import Modal from 'shared/components/Modal/Modal';
import Button from 'shared/components/Button/Button';
import { ReactComponent as AddPet } from 'images/icons/plus-small.svg';
import {
  MainContent,
  TitleWrap,
  Title,
  Card,
  PetsHeader,
} from './UserPage.styled';
const UserPage = () => {
  // const dispatch = useDispatch();
  // const isFirstVisit = useSelector(state => state.firstVisit);
  const [congradModal, setCongradModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch();
  // const handleSignup = data => {
  //   dispatch(logIn(data));
  // };
  const firstVisit = true;
  useEffect(() => {
    if (firstVisit) {
      setIsModalOpen(true);
      setCongradModal(true);
    }
  }, [firstVisit]);
  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
    setCongradModal(prevState => !prevState);
    // dispatch() // Отправляем новое значение в store
  };
  return (
    <>
      {isModalOpen && congradModal && (
        <Modal toggleModal={toggleModal}>
          <ModalCongrats toggleModal={toggleModal} />
        </Modal>
      )}
      <MainContent>
        <div>
          <TitleWrap>
            <Title>My information:</Title>
          </TitleWrap>
          <Card>
            <UserData />
            {/* Треба очистити redux стор після виходу !*/}
          </Card>
        </div>
        <div>
          <PetsHeader>
            <Title>My pets:</Title>
            <Button
              //тут має бути хендлер для перенаправлення на сторінку додавання пету
              //toggle  тільки для демонстрації
              clickHandler={toggleModal}
              filled
              type="button"
              short
              text="Add pet"
              icon={<AddPet stroke="#FEF9F9" style={{ marginLeft: 8 }} />}
            ></Button>
            {/**кастомна кнопка AddPet */}

            {/* <AddPetButton>
              Add pet
              <AddPet stroke="#FEF9F9" style={{ marginLeft: 8 }} />
            </AddPetButton> */}
          </PetsHeader>
          <PetsData />
        </div>
        {/* <Add pet/> кнопка посилання на AddPetPage */}
        {/* <PetsList - де взяти тих звірів?/> */}
        {/* PetsItem + ModalApproveAction (якщо так -*/}
      </MainContent>
    </>
  );
};
export default UserPage;
