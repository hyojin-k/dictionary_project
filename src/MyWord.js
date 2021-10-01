import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const MyWord = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const card_list = useSelector((state) => state.word.list);
  console.log(card_list);

  return (
    <Dictionary>
      <AddBtn
        onClick={() => {
          history.push("/add");
        }}
      >
        ADD
      </AddBtn>

      <Wrap>
        {card_list.map((list, index) => {
          return (
            <CardBtn key={index}
              onClick={() => {
                history.push("/detail/"+index);
              }}
            >
              {list.word}
            </CardBtn>
          );
        })}
      </Wrap>
    </Dictionary>
  );
};

const Dictionary = styled.div`
  height: 100%;
  padding: 20px 30px;
`;

const AddBtn = styled.button`
  width: 100px;
  border: 2px solid #f5d0a9;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0;
  margin: 20px auto;
  cursor: pointer;
`;

const Wrap = styled.div`
  margin-top: 40px;
`

const CardBtn = styled.button`
  width: 40%;
  height: 100px;
  background-color: #f5d0a9;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color:#444;
  margin: 10px 5%;
  cursor: pointer;
  word-break: break-all;
`;

export default MyWord;