import React, { FC, Dispatch } from 'react';
import { Button } from 'antd';
import { addNovelWord, subtractNovelWord } from '@/redux/actions/novel';
import ymPng from '@/assets/ym.jpg';
import './Home.less';

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
  console.log('wordsNumber', wordsNumber);
  return (
    <div>
      <div>redux数据流：{wordsNumber}</div>
      <Button onClick={handleAdd} className="home-add" type="primary">
        增加
      </Button>
      <Button onClick={handleSubstruct} type="primary">
        减少
      </Button>
      <div>
        <div>组件引入图片方式</div>
        <img src={ymPng} alt="" height="40" width="40" />
      </div>
      <div>
        <div>css中引入图片方式</div>
        <div className="home-img" />
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
