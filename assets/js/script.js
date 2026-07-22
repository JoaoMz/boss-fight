let char = new Sorcerer('Jmz');
let monster = new BigMonster();
let log = new Log(document.querySelector('.log'));

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();

console.log('Status do personagem:');
console.log(char.name);
console.log(char.life);
console.log(char.attack);
console.log('Status do monstro:');
console.log(monster.name);
console.log(monster.life);
console.log(monster.attack);