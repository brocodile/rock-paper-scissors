function getComputerChoice(){
    const arr = ['Rock','Paper','Scissors'];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}