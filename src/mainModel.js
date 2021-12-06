import BlockModel from './block/blockModel';
import CommandModel from './command/commandModel';
import Level from './level';

const numOfRows = 5;
const numOfColumns = 5;
const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;



const sqw = width * 0.42 / numOfColumns; 
const sqh = height / numOfRows;

export default class MainModel {
    constructor(curentLevel = 1) {
        this.levels = [];
        this.curentLevel = curentLevel;
        this.setLevels();
        this.levelTitle = "";
        this.levelIstructions = "";
        this.levelBlocks = [];
        this.levelCommands = [];
        this.checkPoints = [];
        this.stepsStars = [];
        this.stars = 0;
        this.startingPoint = [];
        this.rocketPosition = {};
        this.charactersList = [];
        this.animCharacter = [];
        this.windowVariables = { width: width, height: height, sqw: sqw, sqh: sqh }
        this.observers = [];
        this.setCurentLevel(1);
    }

    setLevels() {
       
        let l1 = new Level(
            1, 
            'Go to the supermarket planet',
            'Our friend Panda works in a supermarket, lets help him by giving him instructions to move to his work.', 
            [   new BlockModel("Move Down", "move", []), 
                new BlockModel("Move Up", "move", []),
                new BlockModel("Move Right", "move", []),
                new BlockModel("Move Left", "move", [])
              ], 
              { 
                row: 5, 
                column: 3, 
                top: this.setTop(5), 
                bottom: this.setBottom(5), 
                left: this.rocketStartPositionLeft(3), 
                right: this.rocketStartPositionRight(3)
              },
              [[3,1,null]],
              [4,5], 
              [{
                name: 'supermarket', 
                row: 1, 
                column: 3 
                }]
              ) 

        this.levels = [...this.levels, l1]; 

       
        let l2 = new Level(
            2,
            'Go faster to the supermarket planet',
            'We have to be quicker for work, lets use a loop to repeat the same movement, but with less blocks.',
            [   new BlockModel("Move Down", "move", []), 
                new BlockModel("Move Up", "move", []),
                new BlockModel("Move Right", "move", []),
                new BlockModel("Move Left", "move", []),
                new BlockModel("Repeat", "loop", ['1', '2', '3', '4']),
                new BlockModel("End Repeat", "loop", [])
              ], 
              { 
                row: 5, 
                column: 3, 
                top: this.setTop(5), 
                bottom: this.setBottom(5), 
                left: this.rocketStartPositionLeft(3), 
                right: this.rocketStartPositionRight(3)
              },
              [[3,1,null]],
              [3,4], 
              [{
                name: 'bananaPlanet', 
                row: 1, 
                column: 3 
                }]
            ) 
        this.levels = [...this.levels, l2]; 

        
        let l3 = new Level(
            3,
            'Delever bananas to the monkeys',
            'Monky friend order some Bananas. The good Panda will deliver them to him, lets go and pick up the bananas at the Banana planet and get back to Monkeys house.',
            [   new BlockModel("Move Down", "move", []), 
                new BlockModel("Move Up", "move", []),
                new BlockModel("Move Right", "move", []),
                new BlockModel("Move Left", "move", []),
                new BlockModel("Repeat", "loop", ['1', '2', '3', '4']),
                new BlockModel("End Repeat", "loop", [])
              ], 
              { 
                row: 5, 
                column: 3, 
                top: this.setTop(5), 
                bottom: this.setBottom(5), 
                left: this.rocketStartPositionLeft(3), 
                right: this.rocketStartPositionRight(3)
              },
              [[1,2,null],[3,1,null]],
              [7,8], 
              [{
                name: 'bananaPlanet', 
                row: 2, 
                column: 1 
                },
                {
                name: 'monkey', 
                row: 1, 
                column: 3 
                },
              ]
            ) 
        this.levels = [...this.levels, l3]; 

  
        let l4 = new Level(
            4,
            'title',
            'instruction to level4',
            [new BlockModel("Move Down", "move", []), 
            new BlockModel("Move Up", "move", []),
            new BlockModel("Move Right", "move", []),
            new BlockModel("Move Left", "move", []),
            new BlockModel("If", "if", ['monkey', 'rabbit', 'turtle']),
            new BlockModel("End If", "if", []),
            new BlockModel("Give Strawberry", "move"),
            new BlockModel("Give Carrot", "move"),
            new BlockModel("Give Banana", "move")
            ],
            { 
                row: 3,
                column: 3,
                top: this.setTop(5),
                bottom: this.setBottom(5),
                left: this.rocketStartPositionLeft(3),
                right: this.rocketStartPositionRight(3)
            },
            [],
            [10, 11], 
            [[3, 3, "banana"], [3, 3, "carrot"], [3, 3, "strawberry"]],
            ['supermarket', 2, 3, 'Supermarket_Planet.png', 'horizontal'],
            [["monkey", 6, 3, 3, 3], ["monkey", 3, 3, 0, 3], ["rabbit", 6, 3, 3, 3], ["rabbit", 3, 3, 0, 3], ["turtle", 6, 3, 3, 3], ["turtle", 3, 3, 0, 3]]
        )
        this.levels = [...this.levels, l4]; 


        
    }

    setCurentLevel(l) {
        this.curentLevel = l;
        const level = this.geLevelById(l);
        this.levelBlocks = this.levelCommands = [];
        this.notifyObservers();
        if (this.curentLevel) {
            const lb = level.getBlocks();
            
            this.levelBlocks = [...lb];
            let emptyArray = [];
            this.levelCommands = [new CommandModel(0, 0, "When play", 'start', 150, emptyArray)]; 
            const cp = level.getCheckPoints();
            this.checkPoints = [...cp];
            const ss = level.getStepsStars();
            this.stepsStars = [...ss];
            const rp = level.getRocketPosition();
            this.rocketPosition = rp;
         
            const cl = level.getCharacterList();
            this.charactersList = [...cl];
            this.levelTitle = level.getTitle();
            this.levelIstructions = level.getIstructions();
            this.notifyObservers();   
        }
    }

    geLevelById(id) {
        return this.levels.find(element => element.id === id);
    }

    setCommands(commands) {
        this.levelCommands = [...commands]
        this.notifyObservers();
    }

    rocketStartPositionRight(row) {
      
        let rw = sqh / 3;
      
        let right = this.setRight(row);
       
        let distToCenter = (sqw - rw) / 2
        right = right + distToCenter;
        
        return right;
    }
    getStars(){ return this.stars;}

    setStars(amount){ 
        console.log("Stars : "+ amount);
        this.stars = amount;
        this.notifyObservers();
    }

    rocketStartPositionLeft(row) {
        return width - this.rocketStartPositionRight(row);
        this.notifyObservers();
    }

    setRight(row) {
        return (numOfRows - row) * sqw;
        this.notifyObservers();
    }

    setLeft(row) {
        return width - this.setRight(row);
        this.notifyObservers();
    }

    setBottom(column) {
        return (numOfColumns - column) * sqh;
        this.notifyObservers();
    }

    setTop(column) {
        return height - this.setBottom(column);
        this.notifyObservers();
    }


    addObserver(callback) {
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(cb => cb !== callback);
    }

    notifyObservers() {
        if (this.observers != undefined) {
            this.observers.forEach(cb => {
                try {
                    cb();
                } catch (error) {
                    console.log(error);
                }
            })
        }
    }
}