import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, deleteCardFB } from './redux/modules/word';
import {Close} from '@material-ui/icons';


const Detail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const card_index = params.index;

  const card_list = useSelector((state) => state.word.list);
  console.log(card_list);

  return (
    <Dictionary>
      <HomeBtn
        onClick={() => {
          history.push("/");
        }}
      >
        HOME
      </HomeBtn>

        <Words>
            <DeleteBtn onClick = {() => {
                dispatch(deleteCardFB(card_list[card_index].id));
                history.push('/');
                }}>
            <Close style={{
              color:'#666',
              fontSize:'28px',
              }}/>
              </DeleteBtn>
            <WordWrap>
              <Word>WORD</Word>
              <WordDetail>{card_list[card_index].word}</WordDetail>
            </WordWrap>

            <div>
              <Explanation>EXPLANATION</Explanation>
              <ExplanationDetail>{card_list[card_index].explanation}</ExplanationDetail>
            </div>

            <div>
              <Example>EXAMPLE</Example>
              <ExampleDetail>{card_list[card_index].example}</ExampleDetail>
            </div>
          </Words>
    </Dictionary>
  );
};

const Dictionary = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 30px;
`;

const HomeBtn = styled.button`
  width: 100px;
  border: 2px solid #f5d0a9;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0;
  margin: 20px auto;
  cursor: pointer;
`;

const Words = styled.div`
  border-radius: 10px;
  background-color: #f5d0a9;
  padding: 30px;
  margin: 20px 0;
  position: relative;
`;

const DeleteBtn = styled.button`
  position:absolute;
  top: 18px; right: 18px;
  border:none;
  background-color: transparent;
  cursor: pointer;
`

const WordWrap = styled.div`
  display: flex;
`;


const Word = styled.h3`
  text-align: left;
  color: #fff;
  margin-right: 20px;
`;
const WordDetail = styled.h3`
  word-break: break-all;
  color: #444;
  `;

const Explanation = styled.h3`
  text-align: left;
  color: #fff;
`;
const ExplanationDetail = styled.p`
  text-align: left;
  word-break: break-all;
  color: #444;
`;

const Example = styled.h3`
  text-align: left;
  color: #fff;
`;
const ExampleDetail = styled.p`
  text-align: left;
  color: #0174DF;
  word-break: break-all;
`;

export default Detail;
