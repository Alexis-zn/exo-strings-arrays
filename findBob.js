let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '.toLowerCase()

let clean = str.trim()
    console.log(clean)

let name1 = 'bob'

if(clean.includes(name1)) {
  console.log(`This text include ${name1} `)
} else {
  console.log(`This text does not include ${name1} `)
}