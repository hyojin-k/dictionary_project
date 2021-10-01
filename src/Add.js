import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCard, createCardFB } from "./redux/modules/word";

const Add = (props) => {
  const word = React.useRef();
  const explanation = React.useRef();
  const example = React.useRef();

  const history = useHistory();
  const dispatch = useDispatch();

  const addCard = () => {
    // dispatch(
    //   createCard({
    //     word: word.current.value,
    //     explanation: explanation.current.value,
    //     example: example.current.value,
    //   })
    // );

    dispatch(
      createCardFB({
        word: word.current.value,
        explanation: explanation.current.value,
        example: example.current.value,
      })
    );
    history.push("/");
  };

  return (
    <Dictionary>
      <Words>
        <div>
          <h3>WORD</h3>
          <Input type="text" ref={word} size='35'></Input>
        </div>
        <div>
          <h3>EXPLANATION</h3>
          <Input type="text" ref={explanation} size='35'></Input>
        </div>
        <div>
          <h3>EXAMPLE</h3>
          <Input type="text" ref={example} size='35'></Input>
        </div>
      </Words>

      <BTNS>
        <AddBtn onClick={addCard}>ADD</AddBtn>
        <CancelBtn
          onClick={() => {
            history.push("/");
          }}
        >
          CANCEL
        </CancelBtn>
      </BTNS>
    </Dictionary>
  );
};

const Dictionary = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 30px;
`;

const Words = styled.div`
  border-radius: 10px;
  background-color: #f5d0a9;
  padding: 20px 20px 40px 20px;
  margin: 20px 0;
`;

const Input = styled.input`
  border:0;
  border-bottom: 1px solid #888;
  background-color: #f5d0a9;
  padding: 10px;
  margin-bottom: 10px;
`;

const BTNS = styled.div`
  display: flex;
  margin: 20px auto;
`;
const AddBtn = styled.button`
  width: 100px;
  border: 2px solid #f5d0a9;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0;
  margin: 0 10px;
  cursor: pointer;
`;
const CancelBtn = styled.button`
  width: 100px;
  border: 2px solid #f5d0a9;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0;
  margin: 0 10px;
  cursor: pointer;
`;

export default Add;
