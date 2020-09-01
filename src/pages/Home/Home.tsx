import React, { FC } from 'react';
import { addNovelWord, subtractNovelWord } from '@/redux/actions/novel';

import * as styles from './Home.less';

interface HomeProps {
  addWordsNumber: Function;
  substructWordsNumber: Function;
  wordsNumber: number;
}
interface NovelState {
  wordsNumber: number;
}
interface StateProps {
  novel: NovelState;
}
const Home: FC<HomeProps> = (props) => {
  const { addWordsNumber, substructWordsNumber, wordsNumber } = props;

  const handleAdd = () => {
    addWordsNumber(1);
  };

  const handleSubstruct = () => {
    substructWordsNumber(1);
  };
  console.log('styles', styles);

  return (
    <div>
      <h1>hello world</h1>
      <h1>{wordsNumber}</h1>
      <div onClick={handleAdd} className="add">
        增加一
      </div>
      <div onClick={handleSubstruct}>减少一</div>
    </div>
  );
};

const mapStateToProps = (state: StateProps): NovelState => {
  const { novel } = state;
  const { wordsNumber } = novel;
  return { wordsNumber };
};

const mapDispatchToProps = (dispatch: Function): object => ({
  addWordsNumber: (number: number): void => dispatch(addNovelWord(number)),
  substructWordsNumber: (number: number): void => dispatch(subtractNovelWord(number)),
});

export default ReduxConnect(mapStateToProps, mapDispatchToProps)(Home);
