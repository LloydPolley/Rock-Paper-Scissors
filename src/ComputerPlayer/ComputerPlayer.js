const options = ["Rock", "Paper", "Scissors"];

class ComputerPlayer {
  selectOption = () => {
    let number = Math.random();
    if (number > 0.666) {
      return options[0];
    } else if (number < 0.666 && number > 0.333) {
      return options[1];
    } else {
      return options[2];
    }
  };
}

export default ComputerPlayer;
