let balance = 0;
let isLooping = true;

function promptForInput() {

    isLooping = true;
      while (isLooping) {
        const input = prompt(`What would you like to do?
          Q= Quit
          B= View Balance
          W= Withdraw
          D= Deposit`);
    switch (input.toUpperCase()) {
      case "Q":
      case undefined:
        handleQuit();
        break;

        case "B":
        viewBalance();
        break;

        case "W":
        handleWithdraw();
        break;

        case "D":
        handleDeposit();
        break;
      }
    }
  }

function viewBalance() {
      alert(`Your balance is $${balance}.`);
    }

function handleQuit() {
      isLooping = false;
    }

function handleWithdraw() {
      const withdrawAmount = Number(prompt("Withdraw amount: "));

  if (isNaN(withdrawAmount)) {
        alert(`Not a valid withdraw amount. Please try again.`);
          return handleWithdraw();
        }

  const newBalance = (balance - withdrawAmount);

  if (newBalance < 0) {
    alert("You have insufficient funds. Please try another amount.");
      return handleWithdraw();
    }


  balance = newBalance;
      viewBalance();
    }

function handleDeposit() {
  const depositAmount = Number(prompt("Deposit amount: "));


  const newBalance = (balance + depositAmount);


  balance = newBalance;
  viewBalance();
}
