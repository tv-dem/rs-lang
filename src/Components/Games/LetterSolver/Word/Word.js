import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {  Button } from "antd";
import Cell from "./Cell/Cell";

import './Word.scss'

const Word = ({
  wordSplit,
  onCheck,
  isCheck,
  onHandleClickBtnNext,
  wordRef,
}) => {
  const [letters, setLetters] = useState(wordSplit);

  useEffect(() => {
    setLetters(wordSplit);
  }, [wordSplit]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(letters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setLetters(items);
  }

  return (
    <>
      <div ref={wordRef} className="word-box">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="word-box__playingField" direction="horizontal ">
            {(provided, snapshot) => (
              <div
                className="word-box__playingField"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? "#fff9bd"
                    : "#d19aed",
                }}
              >
                {letters.map((e, i) => {
                  let id = `el${i}`;
                  return (
                    <Draggable key={id} draggableId={id} index={i}>
                      {(provided) => <Cell valueCell={e} provided={provided} />}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {isCheck ? (
        <Button className="context_btn_next" onClick={onHandleClickBtnNext}>
          NEXT
        </Button>
      ) : (
        <Button className="context_btn_check" onClick={() => onCheck(letters)}>
         CHECK
        </Button>
      )}
    </>
  );
};

export default Word;
