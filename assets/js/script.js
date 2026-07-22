let char = new Sorcerer('Jmz');
let monster = new LittleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),SAD
    document.querySelector('#monster')
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