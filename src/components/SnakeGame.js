import React, { useState, useEffect, useMemo } from "react";

export const SnakeGame = ({
  initialSnake,
  gridSize: propGridSize,
  cellSize: propCellSize,
  initialDirection,
  initialGameSpeed,
  foodSpawnInterval,
  lightTheme,
  darkTheme,
  fruitColor,
  blueFruitColor,
  snakeHeadColor,
  snakeBodyColor,
  cellColor,
}) => {
  const gridSize = propGridSize || 20;
  const cellSize = propCellSize || 20;

  const [snake, setSnake] = useState(initialSnake || [{ x: 0, y: 0 }]);
  const [food, setFood] = useState(generateFoodPosition());
  const [blueFood, setBlueFood] = useState(null);
  const [direction, setDirection] = useState(initialDirection || "RIGHT");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [fruitsConsumed, setFruitsConsumed] = useState(0);
  const [score, setScore] = useState(0);

  function generateFoodPosition() {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return { x, y };
  }

  const head = { ...snake[0] };
  function updateGame() {
    if (!isGameStarted || isGameOver) return;

    switch (direction) {
      case "UP":
        head.y = (head.y - 1 + gridSize) % gridSize;
        break;
      case "DOWN":
        head.y = (head.y + 1) % gridSize;
        break;
      case "LEFT":
        head.x = (head.x - 1 + gridSize) % gridSize;
        break;
      case "RIGHT":
        head.x = (head.x + 1) % gridSize;
        break;
      default:
        break;
    }

    const newSnake = [head, ...snake.slice(0, -1)];

    setSnake((prevSnake) => {
      if (hasCollision(newSnake)) {
        setIsGameOver(true);
        return prevSnake;
      }

      return newSnake;
    });

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFoodPosition());
      setSnake([...newSnake, { x: food.x, y: food.y }]);
      setFruitsConsumed((prev) => {
        setGameSpeed((speed) => Math.max(speed - 10, 100));
        setScore(score + 1);
        return prev + 1;
      });

      if (fruitsConsumed > 0 && fruitsConsumed % 5 === 0) {
        setBlueFood(generateFoodPosition());
      }
    }

    if (blueFood && head.x === blueFood.x && head.y === blueFood.y) {
      setBlueFood(null);
      setSnake((prevSnake) => {
        const tail = prevSnake.slice(-1)[0];
        const newBlocks = Array.from({ length: 3 }).map((_, index) => ({
          x: tail.x - index - 1,
          y: tail.y,
        }));
        return [...prevSnake, ...newBlocks];
      });
      setGameSpeed((speed) => Math.max(speed - 20, 100));
      setScore((score) => score + 3);
    }
  }

  function handleBlueFoodSpawn() {
    if (fruitsConsumed > 0 && fruitsConsumed % 5 === 0) {
      setBlueFood(generateFoodPosition());
    }
  }

  function hasCollision(newSnake) {
    const head = newSnake[0];

    if (
      head.x < 0 ||
      head.x >= gridSize ||
      head.y < 0 ||
      head.y >= gridSize ||
      newSnake.slice(1).some((cell) => cell.x === head.x && cell.y === head.y)
    ) {
      return true;
    }

    return false;
  }

  const startGame = () => {
    setSnake(initialSnake || [{ x: 0, y: 0 }]);
    setFood(generateFoodPosition());
    setIsGameOver(false);
    setIsGameStarted(true);
    setFruitsConsumed(0);
    setGameSpeed(initialGameSpeed || 200);
    setBlueFood(null);
    setScore(0);

    const blueFoodIntervalId = setInterval(() => {
      handleBlueFoodSpawn();
    }, foodSpawnInterval || 1000);

    setBlueFoodIntervalId(blueFoodIntervalId);
  };

  const restartGame = () => {
    setSnake(initialSnake || [{ x: 0, y: 0 }]);
    setFood(generateFoodPosition());
    setIsGameOver(false);
    setFruitsConsumed(0);
    setGameSpeed(initialGameSpeed || 200);
    setBlueFood(null);
    setScore(0);

    clearInterval(blueFoodIntervalId);
  };

  const [gameSpeed, setGameSpeed] = useState(initialGameSpeed || 200);
  const [blueFoodIntervalId, setBlueFoodIntervalId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateGame();
    }, gameSpeed);

    return () => clearInterval(intervalId);
  }, [
    snake,
    food,
    direction,
    isGameOver,
    isGameStarted,
    gameSpeed,
    fruitsConsumed,
  ]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const gridCells = useMemo(() => {
    return Array.from({ length: gridSize * gridSize }).map((_, index) => {
      const x = index % gridSize;
      const y = Math.floor(index / gridSize);
      const isSnakeCell = snake.some((cell) => cell.x === x && cell.y === y);
      const isFoodCell = food.x === x && food.y === y;
      const isBlueFoodCell = blueFood && blueFood.x === x && blueFood.y === y;
      const isSnakeHead = isSnakeCell && x === snake[0]?.x && y === snake[0]?.y;

      const headRotation = (() => {
        switch (direction) {
          case "UP":
            return 0;
          case "DOWN":
            return 180;
          case "LEFT":
            return -90;
          case "RIGHT":
            return 90;
          default:
            return 0;
        }
      })();

      return (
        <div
          key={`${x}-${y}`}
          className={`cell ${isSnakeCell ? "snake" : ""} ${
            isFoodCell ? "food" : ""
          } ${isBlueFoodCell ? "blue-food" : ""}`}
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: isSnakeHead
              ? snakeHeadColor || (darkTheme ? "darkgreen" : "green")
              : isSnakeCell
              ? snakeBodyColor || (darkTheme ? "darkolivegreen" : "olive")
              : isFoodCell
              ? fruitColor || (lightTheme ? "lightcoral" : "red")
              : isBlueFoodCell
              ? blueFruitColor || (lightTheme ? "lightblue" : "blue")
              : cellColor || (lightTheme ? "#eeeeee70" : "#121212"),
            borderRadius: isSnakeHead ? "8px 8px 0px 0px" : "3px",
            transition: "all ease 0.2ms",
            color: darkTheme ? "white" : "black",
            transform: `rotate(${headRotation}deg)`,
          }}
        />
      );
    });
  }, [
    snake,
    food,
    blueFood,
    gridSize,
    cellSize,
    darkTheme,
    lightTheme,
    fruitColor,
    blueFruitColor,
    snakeHeadColor,
    snakeBodyColor,
    direction,
    cellColor,
  ]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
          gap: "2px",
          width: "fit-content",
          padding: "1rem",
          margin: "20px auto",
        }}
      >
        {gridCells}
        <div
          style={{
            position: "absolute",
            bottom: "-2px",
            right: "15px",
            color: "#fff",
            fontSize: "16px",
          }}
        >
          Score: {score}
        </div>
      </div>
      {isGameStarted ? (
        isGameOver ? (
          <div>
            <p style={{ color: "red", fontSize: "24px" }}>Game Over!</p>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                backgroundColor: lightTheme ? "#000" : "#cccccc10",
                border: "1px solid #cccccc20",
                color: "#ccc",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              onClick={restartGame}
            >
              Restart Game
            </button>
          </div>
        ) : null
      ) : (
        <button
          onClick={startGame}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: lightTheme ? "#000" : "#cccccc10",
            border: "1px solid #cccccc20",
            color: "#ccc",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

if (typeof window !== "undefined") {
  window.SnakeGame = SnakeGame;
}