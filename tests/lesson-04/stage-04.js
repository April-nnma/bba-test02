//B1:
function upgradeCrew(){
   const pirates = [
    { name: "luffy", bounty: 500, strength: 500 },
    { name: "zoro", bounty: 320, strength: 450 },
    { name: "sanji", bounty: 330, strength: 300 },
    { name: "nami", bounty: 66, strength: 200 },
    { name: "usopp", bounty: 200, strength: 150 },
  ];

  const awakenedPirates = pirates.map((pirates)=>{
    return{
      name: pirates.name.toUpperCase,
      bounty: pirates.bounty*2,
      strength: pirates.strength*1.5,
    }
  });

  const monsterTrioCandidates = awakenedPirates.filter((pirates)=>{
    return pirates.strength>500;
  })

  console.log(awakenedPirates);
  console.log(monsterTrioCandidates);
  
}
upgradeCrew();

//B2:
function printBountyLeaderboard(crewList){
    crewList.sort((a, b) => b.bounty - a.bounty);

    for(let i = 0; i<crewList.length; i++){
        let medal = "";
        if(i === 0){
            medal = "🥇";
        }else if(i === 1){
            medal = "🥈";
        }else if(i ===2){
            medal = "🥉";
        }
        console.log(`${medal} ${i + 1}. ${crewList[i].name} - ${crewList[i].bounty}`); 
    }
}
const crewList = [
  { name: "Zoro", bounty: 600 },
  { name: "Luffy", bounty: 800 },
  { name: "Sanji", bounty: 450 },
  { name: "Nami", bounty: 300 },
  { name: "Usopp", bounty: 900 },
];
printBountyLeaderboard(crewList);