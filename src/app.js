var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (let index = 0; index < pronoun.length; index++) {
  for (let index2 = 0; index2 < adj.length; index2++) {
    for (let index3 = 0; index3 < noun.length; index3++) {
      console.log(pronoun[index] + adj[index2] + noun[index3] + ".com");
    }
  }
}
