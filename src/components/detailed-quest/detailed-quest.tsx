import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import {AppRoute, Level, Type, TranslatedLevel, TranslatedType} from '../../const';
import {Navigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks';
import {store} from 'store/store';
import {fetchSelectedQuestAction} from 'store/api-actions';

const DetailedQuest = (): JSX.Element => {
  const currentId = Number(useParams().id);
  const quests = useAppSelector((store) => store.quests);
  const selectedQuest = useAppSelector((store) => store.quest);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  if (!quests.find(({id}) => id === currentId)) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if (selectedQuest.id !== currentId) {
    store.dispatch(fetchSelectedQuestAction(currentId));
    return <p>Loading...</p>;
  }

  const handleBookingBtnClick = (): void => setIsBookingModalOpened(true);

  const onCloseBtnClick = (): void => setIsBookingModalOpened(false);

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${selectedQuest.coverImg}`}
          alt={selectedQuest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{selectedQuest.title}</S.PageTitle>
            <S.PageSubtitle>{TranslatedType[selectedQuest.type as Type].toLowerCase()}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{selectedQuest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{selectedQuest.peopleCount[0]}–{selectedQuest.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{TranslatedLevel[selectedQuest.level as Level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{selectedQuest.description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={handleBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal handleCloseBtnClick={onCloseBtnClick} peopleCount={selectedQuest.peopleCount} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
