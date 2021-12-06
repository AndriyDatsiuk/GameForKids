export default class Level {
    constructor(id, title, istructions, blocksAvailable, rocketPosition, checkPoints, stepsStars, characterList, animCharacter = null) {
        this.id = id;
        this.istructions = istructions;
        this.blocksAvailable = [...blocksAvailable];
        this.rocketPosition = rocketPosition;
        this.checkPoints = [...checkPoints];
        this.stepsStars = [...stepsStars];
        this.characterList = [...characterList];
        this.animCharacter = [animCharacter]; 
        this.title = title;
    }

    getTitle(){ return this.title; }

    getIstructions(){ return this.istructions; }

    getBlocks(){ return this.blocksAvailable; }


    getRocketPosition(){ return this.rocketPosition; }

    getCheckPoints(){ return this.checkPoints; }

    getStepsStars() { return this.stepsStars; }

    getCharacterList(){ return this.characterList; }

    getAnimCharacter() { return this.animCharacter; }
}