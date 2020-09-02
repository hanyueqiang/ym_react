import React, { FC, Dispatch } from 'react';
import { addNovelWord, subtractNovelWord } from '@/redux/actions/novel';
import './Home.less';

import ymPng from '@/assets/ym.jpg';

interface HomeProps {
  addWordsNumber: (number: number) => void;
  substructWordsNumber: (number: number) => void;
  wordsNumber: number;
}
interface NovelState {
  wordsNumber: number;
}
interface StateProps {
  novel: NovelState;
}
const Home: FC<HomeProps> = props => {
  const { addWordsNumber, substructWordsNumber, wordsNumber } = props;

  const handleAdd = () => {
    addWordsNumber(1);
  };

  const handleSubstruct = () => {
    substructWordsNumber(1);
  };

  return (
    <div>
      <h1>hello world</h1>
      <h1>{wordsNumber}</h1>
      <div onClick={handleAdd} className="add">
        增加一
      </div>
      <div onClick={handleSubstruct} className="ddd">
        减少一
      </div>
      <div>
        <img src={ymPng} alt="" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateProps): NovelState => {
  const { novel } = state;
  const { wordsNumber } = novel;
  return { wordsNumber };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addWordsNumber: (number: number): void => dispatch(addNovelWord(number)),
  substructWordsNumber: (number: number): void => dispatch(subtractNovelWord(number)),
});

export default ReduxConnect(mapStateToProps, mapDispatchToProps)(Home);
