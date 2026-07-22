class Character{

    _life = 1;
    maxLife=1;
    attack= 0;
    defense=0;
    constructor(name){
        this.name=name;
    }

    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife <0 ? 0 : newLife;
    }
}

class Knight extends Character{
    constructor(name){
        super (name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 10;
        this.defense = 8;
    }
}

class Sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 14;
        this.defense = 3;
    }
}

class LittleMonster extends Character{
    constructor(){
        super('Little Monster');
        this.life = 40;
        this.maxLife = this.life;
        this.attack = 4;
        this.defense = 4;
    }
}

class BigMonster extends Character{
    constructor(){
        super('Big Monster');
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 16;
        this.defense = 6;
    }
}

class Stage{
    constructor(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start(){
        this.update()

        //TODO: Evento do botão de atacar
        this.fighter1El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }
        update(){
            //fighter 1
            this.fighter1El.querySelector('.name-hero').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
            let F1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
            this.fighter1El.querySelector('.bar').style.width = `${F1Pct}%`;

            //fighter 2
            this.fighter2El.querySelector('.name-monster').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
            let F2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
            this.fighter2El.querySelector('.bar').style.width = `${F2Pct}%`;
        }

        doAttack(attacking, attacked){
                if(attacking.life <= 0 || attacked.life <= 0){
                    console.log('Fim de jogo');
                    return;
                }

                let attackFactor = (Math.random() * 2).toFixed(2);
                let defenseFactor = (Math.random() * 2).toFixed(2);

                let actualAttack = attacking.attack * attackFactor;
                let actualDefense = attacked.defense * defenseFactor;

                if(actualAttack > actualDefense){
                    attacked.life -= actualAttack;
                    console.log(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}.`);
                } else{
                    console.log('Ataque não causou dano');
                }

                this.update()
        }
}
