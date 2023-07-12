function high(x) {
  let score = 0;

  const alphabets = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const words = x.split(" ");
  let highestScoreObj = { word: "", score: 0 };

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      score += alphabets[letter];
    }

    words[i] = { word, score };

    if (words[i].score > highestScoreObj.score) {
      highestScoreObj = words[i];
    }

    score = 0;
  }

  return highestScoreObj.word;
}
