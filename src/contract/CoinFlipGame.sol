pragma solidity ^0.8.0;

contract CoinFlipGame {
    mapping(address => uint) public balances;
    uint public numFlips;
    
    event GameResult(string outcome, uint amountWon);
    
    function flipCoin(string memory guess) public payable {
        require(msg.value > 0, "You must bet some ether.");
        require(msg.value <= balances[msg.sender], "Insufficient funds.");
        require(keccak256(abi.encodePacked(guess)) == keccak256(abi.encodePacked("heads")) || keccak256(abi.encodePacked(guess)) == keccak256(abi.encodePacked("tails")), "Invalid guess.");
        
        uint seed = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % 2;
        bool isHeads = (seed == 0);
        bool isWinner = (keccak256(abi.encodePacked(guess)) == keccak256(abi.encodePacked((isHeads ? "heads" : "tails"))));
        uint amountWon = 0;
        
        if (isWinner) {
            amountWon = msg.value * 2;
            balances[msg.sender] += amountWon;
            emit GameResult("Congratulations, you won!", amountWon);
        } else {
            balances[msg.sender] -= msg.value;
            emit GameResult("Sorry, you lost.", 0);
        }
        
        numFlips++;
    }
    
    function withdraw() public {
        require(balances[msg.sender] > 0, "You have no balance to withdraw.");
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
