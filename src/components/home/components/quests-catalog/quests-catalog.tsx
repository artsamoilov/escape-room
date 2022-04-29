import {ReactComponent as IconAllQuests} from 'assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from 'assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from 'assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from 'assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from 'assets/img/icon-detective.svg';
import {ReactComponent as IconScifi} from 'assets/img/icon-scifi.svg';
import {ReactComponent as IconPerson} from 'assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import {QuestType} from 'types/quest-type';
import {Level, TranslatedLevel, Type, TranslatedType} from 'const';
import {useAppSelector} from 'hooks/hooks';
import {SyntheticEvent, useState} from 'react';

const QuestsCatalog = (): JSX.Element => {
  const quests = useAppSelector((state) => state.quests);

  const [selectedType, setSelectedType] = useState(Type.All);

  const getFilteredQuests = () => {
    if (selectedType === Type.All) {
      return quests.slice();
    }
    return quests.slice().filter(({type}: QuestType) => type === selectedType);
  };

  const handleTabClick = (evt: SyntheticEvent) => {
    const newQuestType = Object.keys(TranslatedType).find((newType) => TranslatedType[newType as Type] === evt.currentTarget.textContent);
    setSelectedType(newQuestType as Type);
  };

  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn onClick={handleTabClick} isActive>
            <IconAllQuests/>
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={handleTabClick}>
            <IconAdventures/>
            <S.TabTitle>Приключения</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={handleTabClick}>
            <IconHorrors/>
            <S.TabTitle>Ужасы</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={handleTabClick}>
            <IconMystic/>
            <S.TabTitle>Мистика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={handleTabClick}>
            <IconDetective/>
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={handleTabClick}>
            <IconScifi/>
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {getFilteredQuests().map(({id, previewImg, title, peopleCount, level}: QuestType) => (
            <S.QuestItem key={id}>
              <S.QuestItemLink to={`/detailed-quest/${id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={`../${previewImg}`}
                    width="344"
                    height="232"
                    alt={`квест ${title}`}
                  />
                  <S.QuestContent>
                    <S.QuestTitle>{title}</S.QuestTitle>
                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson/>
                        {peopleCount[0]}–{peopleCount[1]} чел
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle/>
                        {TranslatedLevel[level as Level]}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          )
        )}
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
