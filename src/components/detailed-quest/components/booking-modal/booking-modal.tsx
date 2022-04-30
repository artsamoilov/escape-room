import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { SyntheticEvent, useRef } from 'react';
import { OrderType } from 'types/order-type';
import { useAppDispatch } from 'hooks/hooks';
import { postOrderAction } from 'store/api-actions';
import { NAME_REG_EX, PEOPLE_COUNT_REG_EX, PHONE_REG_EX } from 'const';
import { toast } from 'react-toastify';

type PropsType = {
  handleCloseBtnClick: () => void,
  peopleCount: number[],
}

const BookingModal = ({handleCloseBtnClick, peopleCount}: PropsType): JSX.Element => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const peopleCountRef = useRef<HTMLInputElement | null>(null);
  const isLegalRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onFormSubmit = (orderData: OrderType) => dispatch(postOrderAction(orderData));

  const checkNameRef = (): boolean => Boolean(nameRef.current && NAME_REG_EX.test(nameRef.current.value));

  const checkPhoneRef = (): boolean => Boolean(phoneRef.current && PHONE_REG_EX.test(phoneRef.current.value));

  const checkPeopleCountRef = (): boolean => Boolean(peopleCountRef.current && PEOPLE_COUNT_REG_EX.test(peopleCountRef.current.value));

  const checkIsLegalRef = (): boolean => Boolean(isLegalRef.current && isLegalRef.current.checked);

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (!checkNameRef()) {
      toast.warn('Имя должно состоять из букв');
      nameRef.current?.select();
      return;
    }

    if (!checkPhoneRef()) {
      toast.warn('Номер телефона должен состоять из 10 цифр');
      phoneRef.current?.select();
      return;
    }

    if (!checkPeopleCountRef()) {
      toast.warn(`Этот квест только для ${peopleCount[0]}–${peopleCount[1]} человек`);
      peopleCountRef.current?.select();
      return;
    }

    if (!checkIsLegalRef()) {
      toast.warn('Необходимо принять наши правила и соглашение');
      isLegalRef.current?.select();
      return;
    }

    onFormSubmit({
      name: String(nameRef.current?.value),
      peopleCount: Number(peopleCountRef.current?.value),
      phone: String(phoneRef.current?.value),
      isLegal: Boolean(isLegalRef.current?.checked),
    });

    handleCloseBtnClick();
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          onSubmit={handleFormSubmit}
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={peopleCountRef}
              type="number"
              min={peopleCount[0]}
              max={peopleCount[1]}
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={isLegalRef}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
