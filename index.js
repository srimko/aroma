const fs = require('fs-extra')
const _ = require('lodash')


let data = fs.readJsonSync("actifs.json")

_.each(data.actifs, function(actif) {
  console.log("Nom : " +actif.name)
  console.log("Propiétés : " + actif.proprietes)
  console.log("Dosage : " + actif.dosage + "%")
  if(actif.type === "liquide") {
    // 100 × 5 ÷ 100
    console.log("Dosage pour 100ml: " + (100 * actif.dosage / 100)  + "ml, soit environ " + (100 * actif.dosage / 100) / 0.04 + " gouttes")
  }
  console.log("==========");
})
