import React, { useEffect } from "react";

function MessageHandler({ message, dispatch }) {
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "RemoveErrpr" });
      dispatch({ type: "RemoveMessage" });
    }, 6000);
  });

  return <p>{message}</p>;
}

export default MessageHandler;
