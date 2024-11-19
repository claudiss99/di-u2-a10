import { useState } from 'react';
import Background from './Background.js';
import Box from './Box.js';

const initialPositionShape = {
  x: 0,
  y: 0
};

const initialPositionBackground = {
  x:0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPositionShape
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;

    /**
     * Otra forma de hacerlo
     * setShape({
     *  ...shape,
     *  position:{
     *  x: shape.position.x +dx,
     *  y: shape.position.y +dy
     * }})
     * 
     * Con immer
     * Habria que importar en vez de useState
     * import { useImmer} from 'use-immer';
     * 
     * const [shape, updateShape] = useImmer({
      color: 'orange',
      position: initialPositionShape
      });

      function handleMove(dx, dy) {
      updateShape(draft => {
        draft.position.x += dx
        draft.position.y += dy
        })
      function handleColorChange(e) {
      updateShape (draft => {
        draft.color = e.target.value
        })
      setShape({
        ...shape,
        color: e.target.value
      });
  }


     */
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPositionBackground}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        ¡Arrástrame!
      </Box>
    </>
  );
}
