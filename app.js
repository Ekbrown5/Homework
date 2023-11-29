const tools = [
    {name: "teeth", generates: 5, price: 0},
    {name: "scissors", generates: 5, price: 5},
    {name: "push lawnmower", generates: 50, price: 25},
    {name: "battery-powered lawnmower", generates: 100, price: 250},
]

const player = {
    money: 0,
    tool: 0,
    wonGame: false
}

function cutGrass(){
    const tool = tools[player.tool]
    alert(`you mowed the lawn with ${tool.name} and make ${tool.generates} dollars`)
    player.money += tool.generates;
}

function upgrade() {
    if (player.tool + 1 < tools.length) {
        const nextTool = tools[player.tool + 1];
    } else {
        alert("There are no more tools to upgrade");
    }
}


function winConditions(){
    if(player.tool = tools.lenght - 1 && player.money >= 100){
        alert("You have won the game")
        player.wonGame = true
    }
}

alert("Welcome to Landscaper")

while(!player.wonGame){
    const response =prompt(`You currently have ${player.money}
    dollars, do you want to [c]ut grass or [u]pgrade`)

    if (response === 'c'){
        cutGrass()
    }

    if (response === 'u'){
        upgrade()
    }

    if (response !== 'u' && response !== 'c'){
        alert("thats's not a valid option, type 'c' or 'u'")
    }

    winConditions()
}